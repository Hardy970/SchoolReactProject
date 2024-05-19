// Footer.js
import React from 'react';
import '../css/Footer.css';
import logo from '../images/logo.png'

const Footer = () => {
    return (
      <footer className="footer mcontainer">
        <div className="footer-content">
          <div className="footer-section about">
            <img src={logo} alt="JobHuntly Logo" className="footer-logo" /> <span className=' h-100 ' > Job Huntly</span>
            <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
          </div>
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><a href="#">Companies</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Advice</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Docs</a></li>
              <li><a href="#">Guide</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Get job notifications</h4>
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2021 JobHuntly. All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="/linkedin-icon.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;