import React, { useEffect } from "react";
import "../index.css";
import Typewriter from "typewriter-effect";
import profil from "../assets/profil dp8.png";
import ring from "../assets/Stack2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="home-content" id="home">
      {/* Left Side - Text */}
      <div className="home-text" data-aos="fade-right">
        <h1 className="home-title">
          <span className="pitch">Hello, I'm</span> Prabu Dhayalan.
        </h1>

        <h1 className="home-line" data-aos="zoom-in" data-aos-delay="200">
          <Typewriter
            options={{
              strings: ["Full Stack Developer.", "MERN Stack."],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </h1>

        <p className="home-description" data-aos="fade-up" data-aos-delay="400">
          I'm a passionate Full Stack Developer with experience in building modern web applications.
        </p>
        <div className="home-buttons" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://www.linkedin.com/in/prabudhayalan-m-962654280"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn hire-btn">Hire Me</button>
          </a>
          <a href="/resume.pdf" download>
            <button className="btn cv-btn">Resume CV</button>
          </a>
        </div>

        <div className="social-icons" data-aos="fade-up" data-aos-delay="800">
        <a
  href="https://www.linkedin.com/in/prabudhayalan-m-962654280"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon"
>
  <i className="fa-brands fa-linkedin"></i>
</a>

          <a
            href="https://github.com/PRABUDHAYALAN"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="blob-container" data-aos="zoom-in" data-aos-delay="400">
        <img src={ring} alt="Ring" className="animated-ring" />
        <div className="blob" data-aos="fade-up" data-aos-delay="600">
          <img src={profil} alt="Profile" className="animated-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
