import React from "react";
import "../index.css";

const About = () => {
  return (
    <section className="resume-section" id="about">

      {/* About Section Header */}
      <div className="about-header" data-aos="fade-up">
        <h2 className="about-title">About</h2>
        <p className="resume-subtitle">
          Here are my biography and qualifications.
        </p>
      </div>

      {/* Resume Content */}
      <div className="resume-container">
        {/* Biography Column */}
        <div className="resume-column" data-aos="fade-right">
          <div className="column-title-wrapper">
            <h3 className="column-title">Biography</h3>
          </div>
          <div className="resume-item">
            <h4 className="item-title">👤 Fullstack Developer </h4>
            <span className="item-subtitle">Error Make Clever </span>
            <span className="item-date">Jan 2025 - Apr 2025</span>
            <p className="item-description">
            Full Stack Developer with strong frontend skills and creative problem-solving. Built a smart academic platform using React, Node.js, Express, and MongoDB during a 3-month course.
            </p>
          </div>
        </div>

        {/* Education Column */}
        <div className="resume-column" data-aos="fade-left">
          <div className="column-title-wrapper">
            <h3 className="column-title">Education</h3>
          </div>
          <div className="resume-item">
            <h4 className="item-title">🎓 B.SC Physics</h4>
            <span className="item-subtitle">Muthurangam Govt. Arts College, Vellore - </span>
            <span className="item-date">2022 - 2025</span>
            <p className="item-description">
              Built a solid understanding of both fundamental physics and programming concepts. Gained hands-on experience in frontend and backend development, including React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
