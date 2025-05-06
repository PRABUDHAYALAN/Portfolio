import React, { useEffect } from 'react';
import '../index.css'; // optional styling
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation should trigger only once
    });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <h3 data-aos="fade-up">MyPortfolio</h3> {/* Fade-in animation for heading */}
        <p data-aos="fade-up" data-aos-delay="200">Thank you for visiting my portfolio. Let's connect!</p> {/* Fade-in for description with delay */}
        <div className="social-links">
          <a href="https://github.com/PRABUDHAYALAN" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/prabudhayalan-m-962654280" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ethicprabu@gmail.com">Email</a>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
