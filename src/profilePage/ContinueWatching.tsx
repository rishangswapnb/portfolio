import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import placeholder from '../assets/logo.png';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: placeholder, link: "/music" },
    { title: "Reading", imgSrc: placeholder, link: "/reading" },
    { title: "Blogs", imgSrc: placeholder, link: "/blogs" },
    { title: "Contact Me", imgSrc: placeholder, link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: placeholder, link: "/music" },
    { title: "Reading", imgSrc: placeholder, link: "/reading" },
    { title: "Blogs", imgSrc: placeholder, link: "/blogs" },
    { title: "Certifications", imgSrc: placeholder, link: "/certifications" },
    { title: "Contact Me", imgSrc: placeholder, link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: placeholder, link: "/reading" },
    { title: "Blogs", imgSrc: placeholder, link: "/blogs" },
    { title: "Contact Me", imgSrc: placeholder, link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: placeholder, link: "/music" },
    { title: "Reading", imgSrc: placeholder, link: "/reading" },
    { title: "Certifications", imgSrc: placeholder, link: "/certifications" },
    { title: "Contact Me", imgSrc: placeholder, link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
