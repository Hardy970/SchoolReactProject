// Hero.js
import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Find your <span>dream job</span></h1>
      <p>Find your next career at companies like HubSpot, Nike, and Dropbox</p>
      <div className="search-bar">
        <input type="text" placeholder="Job title or keyword" />
        <select>
          <option>Florence, Italy</option>
        </select>
        <button className="btn btn-primary">Search</button>
      </div>
      <p className="popular-searches">Popular: UI Designer, UX Researcher, Android, Admin</p>
    </section>
  );
}

export default Hero;
