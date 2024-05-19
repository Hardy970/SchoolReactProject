// JobCard.js
import React from 'react';
import '../css/JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h4>{job.title}</h4>
      <p>{job.company} - {job.location}</p>
      <div className="tags">
        {job.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <button className="btn btn-primary">Apply</button>
      <p>{job.applied} applied of {job.capacity} capacity</p>
    </div>
  );
}

export default JobCard;
