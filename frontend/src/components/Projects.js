import React from 'react';
import '../index.css';

import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/project3.png';
import proj4 from '../assets/project4.png';
import proj5 from '../assets/project7.png';
import proj6 from '../assets/project6.png';

const projects = [
  {
    title: "Actodo",
    description: "A task management app built with React and Express.JS Full Responsive.",
    demo: "https://actodo-react-project.vercel.app/",
    code: "https://github.com/PRABUDHAYALAN/Actodo-React-Project.git",
    image: proj1
  },
  {
    title: "Bulk Mailer",
    description: "Email marketing tool using Node.js Database MongoDB Full Responsive.",
    demo: "https://bulkmail-frontend-six.vercel.app/",
    code: "https://github.com/PRABUDHAYALAN/Bulkmail-Frontend-.git",
    image: proj2
  },
  {
    title: "Greenden",
    description: "Flower plants selling website using Full Tailwind CSS and Full Responsive.",
    demo: "https://prabudhayalan.github.io/greenden-tailwind/",
    code: "https://github.com/yourusername/actodo",
    image: proj3
  },
  {
    title: "Nostra E-Commerce",
    description: "E-commerce website using JavaScript HTML CSS and Checkout page.",
    demo: "https://prabudhayalan.github.io/Nostra-E-commerce/",
    code: "https://github.com/PRABUDHAYALAN/Nostra-E-commerce.git",
    image: proj4
  },
  {
    title: "E-Commerce",
    description: "MERN Stack E-commerce website using React.js and Node.js and MongoDB.",
    demo: "https://e-commerce-frontend4-green.vercel.app/",
    code: "https://github.com/PRABUDHAYALAN/E-Commerce-MERN-Stack1.git",
    image: proj5
  },
  {
    title: "Student Fav List",
    description: "Student List using React.js and Node.js and Favorite Name add and remove Fuctionality.", 
    demo: "https://github.com/PRABUDHAYALAN/Student-Fav-List-React-.git",
    code: "https://github.com/PRABUDHAYALAN/Student-Fav-List-React-.git",
    image: proj6
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title" data-aos="fade-up">Projects</h2>
      <p className="projects-description" data-aos="fade-up" data-aos-delay="100">
        Check out some of my recent work.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={project.image} alt={project.title} className="card-image" />
            <div className="heading">{project.title}</div>
            <div className="author">{project.description}</div>
            <div className="project-links">
            
      <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
       <a href={project.code} target="_blank" rel="noopener noreferrer">Code View</a>
      </div>



          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
