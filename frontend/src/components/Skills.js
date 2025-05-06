import React, { useEffect } from 'react';
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';

const skills = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <section className="skills-section" id="skill">
      <h2 className="skills-title" data-aos="fade-up">Skills</h2>
      <p className="skill-p" data-aos="fade-up" data-aos-delay="200">
        Her skill in dealing with people makes her ideal for this job
      </p>

      <div className="scroll-container" data-aos="fade-right" data-aos-delay="300">
        <div className="scroll-wrapper-left">
          {[...skills, ...skills].map((img, index) => (
            <div
              key={`left-${index}`}
              className="scroll-item"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <img src={img} alt={`Skill ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-container" data-aos="fade-left" data-aos-delay="400">
        <div className="scroll-wrapper-right">
          {[...skills, ...skills].map((img, index) => (
            <div
              key={`right-${index}`}
              className="scroll-item"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <img src={img} alt={`Skill ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
