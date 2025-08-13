import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';

// Import images directly (like in ContinueWatching)
import fundaImg from '../assets/funda.png';
import devImg from '../assets/dev.png';
import adminImg from '../assets/admin.png';
import awsImg from '../assets/aws.png';
import gcpImg from '../assets/GCP.png';
import azImg from '../assets/az.png';
import cyberImg from '../assets/cyber.png';
import pmpImg from '../assets/pmp.png';
import aiImg from '../assets/AI.png';
import dsImg from '../assets/DS.png';

// Allowed icon names for fallback (if an image is missing)
type IconName = 'udemy' | 'coursera' | 'ieee' | 'university';

interface Certification {
  title: string;
  link: string;
  imgSrc?: string; // primary display
  issuer?: string;
  issuedDate?: string;
  iconName?: IconName; // optional fallback icon
}

const iconData: Record<IconName, JSX.Element> = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />
};

// Converted data from your JSX array -> TS-friendly structure using imported images
const certifications: Certification[] = [
  {
    title: 'Azure Fundamentals',
    imgSrc: fundaImg,
    link: 'https://www.credly.com/badges/169a6863-8036-4220-ba6a-7261e41a662a',
    issuer: 'Microsoft'
  },
  {
    title: 'Azure Developer Associate',
    imgSrc: devImg,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/RishangSharma/A6DF1DD3856208BD?sharingId=22F644A105C0455C',
    issuer: 'Microsoft'
  },
  {
    title: 'Azure Administrator',
    imgSrc: adminImg,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/RishangSharma/6BC2C99E9EF3F1BE?sharingId=22F644A105C0455C',
    issuer: 'Microsoft'
  },
  {
    title: 'AWS DevOps Professional',
    imgSrc: awsImg,
    link: 'https://www.credly.com/badges/67a76ea2-96b4-4f8f-88e7-85e912e1d8d9',
    issuer: 'Amazon Web Services'
  },
  {
    title: 'Google Cloud Engineer',
    imgSrc: gcpImg,
    link: 'https://www.credly.com/badges/b5169b4a-5b79-4e53-abb5-27a23214c3d2',
    issuer: 'Google Cloud'
  },
  {
    title: 'Azure DevOps Expert',
    imgSrc: azImg,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/RishangSharma/9AD464B45B6D5AC6?sharingId=22F644A105C0455C',
    issuer: 'Microsoft'
  },
  {
    title: 'Azure Security Architect',
    imgSrc: cyberImg,
    link: 'https://learn.microsoft.com/en-us/users/rishangsharma/transcript/7xozhx1m6ygqp17?tab=credentials-tab',
    issuer: 'Microsoft'
  },
  {
    title: 'PMP',
    imgSrc: pmpImg,
    link: 'https://www.credly.com/badges/b6074162-38d6-487f-8704-21d085ad39b4',
    issuer: 'PMI'
  },
  {
    title: 'Azure AI Engineer',
    imgSrc: aiImg,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/RishangSharma/D86BA8026C225396?sharingId=22F644A105C0455C',
    issuer: 'Microsoft'
  },
  {
    title: 'Azure Data Scientist',
    imgSrc: dsImg,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/RishangSharma/63BD130752BA79FD?sharingId=22F644A105C0455C',
    issuer: 'Microsoft'
  }
];

interface CertificationsProps {
  /**
   * Global badge size for all certification images/icons.
   * Accepts a number (pixels) or any CSS size string (e.g., '80px', '5rem').
   * Default: 96
   */
  badgeSize?: number | string;
}

const Certifications: React.FC<CertificationsProps> = ({ badgeSize = 96 }) => {
  const sizeAsString =
    typeof badgeSize === 'number' ? `${badgeSize}px` : badgeSize;
  const iconPx =
    typeof badgeSize === 'number'
      ? badgeSize
      : parseInt(String(badgeSize), 10) || 96;
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={cert.title + index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s`, '--badge-size': sizeAsString } as React.CSSProperties}
            aria-label={`Open ${cert.title} certificate`}
          >
            <div className="certification-content">
              {/* Media first: image if provided, else fallback icon */}
              <div className="certification-media">
                {cert.imgSrc ? (
                  <img
                    src={cert.imgSrc}
                    alt={`${cert.title} badge`}
                    loading="lazy"
                    className="certification-badge"
                    style={{ width: sizeAsString, height: sizeAsString, objectFit: 'contain' }}
                  />
                ) : (
                  <div
                    className="certification-icon"
                    style={{ width: sizeAsString, height: sizeAsString, display: 'grid', placeItems: 'center', fontSize: iconPx }}
                  >
                    {iconData[cert.iconName ?? 'university']}
                  </div>
                )}
              </div>

              <h3>{cert.title}</h3>
              {cert.issuer && <p>{cert.issuer}</p>}
              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
            </div>

            <div className="certification-link animated-icon" aria-hidden="true">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
