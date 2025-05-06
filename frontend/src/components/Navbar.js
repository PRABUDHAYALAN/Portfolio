import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ResumeButton from "./ResumeButton";
import "../index.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skill" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="logo">MyPortfolio</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              data-aos="fade-down"
              data-aos-delay={`${200 + index * 100}`}
            >
              <a href={`#${item.id}`} onClick={toggleMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li data-aos="fade-down" data-aos-delay="800">
            <ResumeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
