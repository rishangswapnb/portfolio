import React from 'react';
import './ContactMe.css';
import profilePic from '../assets/rishang.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const userData = {
  name: 'Rishang',
  title: 'Technical Program Manager',
  summary: 'Driving complex programs and delivering value through agile methods.',
  companyUniversity: 'EY',
  linkedinLink: 'https://www.linkedin.com/in/rishang',
  email: 'rishang@example.com',
  phoneNumber: '+1 555 123 4567'
};

const ContactMe: React.FC = () => {


  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Rishang" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData?.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
