// Reading.tsx

import React from 'react';
import './Reading.css';
import atomicHabits from '../assets/atomic_habits.jpg';
import codingForDummies from '../assets/coding_for_dummies.jpg';
import howToWinFriends from '../assets/how_to_win_friends.jpg';
import pmpExamPrep from '../assets/pmp_exam_prep.jpg';
import pmpExamPrep2 from '../assets/pmp_exam_prep2.jpg';
import pmpExamPrep3 from '../assets/pmp_exam_prep3.jpg';
import peopleSkills from '../assets/people_skills.jpg';
import agilePracticeGuide from '../assets/agile_practice_guide.jpg';
import deepWork from '../assets/deep_work.jpg';
import cleanCode from '../assets/clean_code.jpg';
import thePhoenixProject from '../assets/phoenix_project.jpg';
import designPatterns from '../assets/design_patterns.jpg';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "Practical guide to building good habits and breaking bad ones with proven strategies for continuous improvement.",
  },
  {
    title: "Coding For Dummies",
    author: "Nikhil Abraham",
    imgSrc: codingForDummies,
    description: "Foundation of web development languages (HTML, CSS, JavaScript) with hands-on exercises and practice tutorials.",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    imgSrc: howToWinFriends,
    description: "Timeless classic on building relationships, improving communication, and becoming more influential.",
  },
  {
    title: "Get On Track",
    author: "Paula Deili",
    imgSrc: pmpExamPrep,
    description: "Comprehensive guide strategies for establishing, operating, and improving a Program Management Office (PMO) to enhance organizational efficiency and success.",
  },
    {
    title: "Risk UpFront",
    author: "Martin",
    imgSrc: pmpExamPrep2,
    description: "This book focuses on the fundamentals of Managing Projects in a Complex World",
  },
    {
    title: "So Good They Cant Ignore You",
    author: "Cal Newport",
    imgSrc: pmpExamPrep3,
    description: "The book is about becoming so good at whatever you're already doing that you build up career capital: reputation and respect for having rare and valuable skills.",
  },
  {
    title: "People Skills",
    author: "Robert Bolton",
    imgSrc: peopleSkills,
    description: "Handbook on communication barriers, active listening, assertion techniques, and conflict resolution.",
  },
  {
    title: "Agile Practice Guide",
    author: "PMI & Agile Alliance",
    imgSrc: agilePracticeGuide,
    description: "Resource for understanding agile and hybrid approaches with practical tools for practitioners.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    imgSrc: deepWork,
    description: "Rules for focused success in a distracted world, emphasizing productivity and meaningful work.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    imgSrc: cleanCode,
    description: "Handbook of agile software craftsmanship with practical tips for writing readable, maintainable code.",
  },
  {
    title: "The Phoenix Project",
    author: "Gene Kim et al.",
    imgSrc: thePhoenixProject,
    description: "Novel about IT, DevOps, and helping businesses win, illustrating digital transformation principles.",
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma et al.",
    imgSrc: designPatterns,
    description: "Catalog of reusable solutions to common problems in software design, promoting best practices.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
