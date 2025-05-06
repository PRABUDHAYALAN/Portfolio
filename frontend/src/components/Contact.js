import React, { useState } from "react";
import "../index.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import contactImg from '../assets/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://my-portfolio-mern-uixv.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error occurred.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header" data-aos="fade-up">
        <h1 data-aos="fade-up" data-aos-delay="100">Contact Me</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div className="contact-container" data-aos="fade-up" data-aos-delay="300">
        <div className="contact-content">
          <div className="contact-left" data-aos="fade-right" data-aos-delay="400">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-p">Have something to discuss? Send me a message and let's talk.</p>

            <form onSubmit={handleSubmit} className="contact-form-split">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
            {status && <p>{status}</p>}
          </div>

          <div className="contact-right" data-aos="fade-left" data-aos-delay="500">
            <h3>Connect With Me</h3>
            <p>Email: ethicprabu@gmail.com</p>
            <p>Phone: +91 9345746095</p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/prabudhayalan-m-962654280" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/PRABUDHAYALAN" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:ethicprabu@gmail.com">
                <FaEnvelope />
              </a>
            </div>

            <img src={contactImg} alt="Contact" className="contact-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
