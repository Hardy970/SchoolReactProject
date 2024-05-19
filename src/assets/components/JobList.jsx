// JobList.js
import React from 'react';
import JobCard from './JobCard';
import '../css/JobList.css';

const jobs = [
  { title: 'Social Media Assistant', company: 'Nomad', location: 'Paris, France', tags: ['Full-Time', 'Marketing', 'Design'], applied: 5, capacity: 10 },
  { title: 'Brand Designer', company: 'Dropbox', location: 'San Fransisco, USA', tags: ['Full-Time', 'Marketing', 'Design'], applied: 8, capacity: 12 },
  { title: 'Interactive Developer', company: 'Terraform', location: 'Hamburg, Germany', tags: ['Full-Time', 'Marketing', 'Design'], applied: 5, capacity: 10 },
  // Ajoutez d'autres offres d'emploi ici
];

const JobList = () => {
  return (
    <div className="job-list">
      <h3>All Jobs</h3>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobList;
