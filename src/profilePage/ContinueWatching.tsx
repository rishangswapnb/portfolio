import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
// import placeholder from '../assets/logo.png';
 import certificationsImg from '../assets/certifications_thumb.png';
 import blogsImg from '../assets/blogs_thumb.png';
 import contactImg from '../assets/contact_thumb.png';
 import musicImg from '../assets/music_thumb.png';
 import readingImg from '../assets/reading_thumb.png';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: musicImg, link: "/music" },
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Blogs", imgSrc: blogsImg, link: "/blogs" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: musicImg, link: "/music" },
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Blogs", imgSrc: blogsImg, link: "/blogs" },
    { title: "Certifications", imgSrc: certificationsImg, link: "/certifications" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Blogs", imgSrc: blogsImg, link: "/blogs" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: musicImg, link: "/music" },
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Certifications", imgSrc: certificationsImg, link: "/certifications" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
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
