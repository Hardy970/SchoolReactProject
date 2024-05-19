// Filters.js
import React from 'react';
import '../css/Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <h4>Type of Employment</h4>
      <ul>
        <li><input type="checkbox" /> Full-time (3)</li>
        <li><input type="checkbox" /> Part-time (5)</li>
        <li><input type="checkbox" /> Remote (2)</li>
        <li><input type="checkbox" /> Internship (24)</li>
        <li><input type="checkbox" /> Contract (3)</li>
      </ul>
      <h4>Categories</h4>
      <ul>
        <li><input type="checkbox" /> Design (24)</li>
        <li><input type="checkbox" /> Sales (3)</li>
        <li><input type="checkbox" /> Marketing (3)</li>
        <li><input type="checkbox" /> Business (3)</li>
        <li><input type="checkbox" /> Human Resource (6)</li>
        <li><input type="checkbox" /> Finance (4)</li>
        <li><input type="checkbox" /> Engineering (4)</li>
        <li><input type="checkbox" /> Technology (5)</li>
      </ul>
      <h4>Job Level</h4>
      <ul>
        <li><input type="checkbox" /> Entry Level (57)</li>
        <li><input type="checkbox" /> Mid Level (12)</li>
        <li><input type="checkbox" /> Senior Level (5)</li>
        <li><input type="checkbox" /> Director (12)</li>
        <li><input type="checkbox" /> VP or Above (8)</li>
      </ul>
      <h4>Salary Range</h4>
      <ul>
        <li><input type="checkbox" /> $700 - $1000 (4)</li>
        <li><input type="checkbox" /> $1000 - $1500 (6)</li>
        <li><input type="checkbox" /> $1500 - $2000 (10)</li>
        <li><input type="checkbox" /> $3000 or above (4)</li>
      </ul>
    </div>
  );
}

export default Filters;
