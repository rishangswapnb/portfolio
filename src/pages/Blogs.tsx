import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "Azure MLOps: Architecture and A Practical Workflow",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@rishangsharma/azure-mlops-a-practical-architecture-and-workflow-b76c0e461de7",
    description: "Practical MLOps on Azure: Multi-Workspace (MOD/TAC/OPS) with a Central Model Registry.",
  },
  {
    title: "Batch Scoring with R: Scalable Predictions on Azure",
    platform: "Medium",
    icon: <FaDev />,
    link: "https://dev.to/rishangsharma/batch-scoring-with-r-scalable-predictions-on-azure-533n",
    description: "An introductory guide to R batch scoring on Azure.",
  },
  {
    title: "Terraform State Locking: Preventing Conflicts in Infrastructure-as-Code",
    platform: "Dev.to",
    icon: <FaMedium />,
    link: "https://medium.com/@rishangsharma/terraform-state-locking-preventing-conflicts-in-infrastructure-as-code-31b9acb2ea83",
    description: "A guide to Terraform state locking and its importance in preventing conflicts.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
