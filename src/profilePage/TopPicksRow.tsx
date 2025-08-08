import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';
import placeholder from '../assets/logo.png';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: placeholder, icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: placeholder, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: placeholder, icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: placeholder, icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: placeholder, icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: placeholder, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: placeholder, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: placeholder, route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: placeholder, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: placeholder, route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: placeholder, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: placeholder, route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: placeholder, route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: placeholder, route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: placeholder, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: placeholder, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: placeholder, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: placeholder, route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    { title: "Music", imgSrc: placeholder, route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: placeholder, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: placeholder, route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: placeholder, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: placeholder, route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
