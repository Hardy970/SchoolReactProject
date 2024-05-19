import React from 'react';
import '../css/Jobs.css';
import Hero from './Hero';
import Filters from './Filters';

const jobs = [
  {
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    type: ['Full-Time', 'Marketing', 'Design'],
    applied: 5,
    capacity: 10,
  },
  {
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, USA',
    type: ['Full-Time', 'Marketing', 'Design'],
    applied: 5,
    capacity: 10,
  },
  {
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    type: ['Full-Time', 'Marketing', 'Design'],
    applied: 8,
    capacity: 12,
  },
  // Add more job entries here...
];

const Jobs = () => {
  return (
    <div>
        <Hero/>
        <Filters/>
    <div className="jobs">
      <div className="jobs-header">
        <h2>All Jobs</h2>
        <span>Showing 73 results</span>
        <div className="sort-options">
          <label>Sort by:</label>
          <select>
            <option>Most relevant</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="view-options">
          <button className="view-grid"><i className="fas fa-th"></i></button>
          <button className="view-list"><i className="fas fa-list"></i></button>
        </div>
      </div>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.company} - {job.location}</p>
              <div className="job-tags">
                {job.type.map((tag, idx) => (
                  <span className="job-tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="job-apply">
              <button className="btn btn-primary">Apply</button>
              <div className="job-progress">
                <span>{job.applied} applied of {job.capacity} capacity</span>
                <progress value={job.applied} max={job.capacity}></progress>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="prev">Prev</button>
        <div className="pages">
          <button className="page">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          {/* Add more page buttons as needed */}
        </div>
        <button className="next">Next</button>
      </div>
    </div>
    </div>
  );
}

export default Jobs;
