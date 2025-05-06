import React from "react";
import "../index.css"; // Assuming your styles are in this file

const ResumeButton = () => {
  return (
    <button
    onClick={() => window.open("https://www.linkedin.com/in/prabudhayalan-m-962654280/", "_blank")}
    className="resume-btn"
  >
    <span className="dot">Resume CV</span>
  </button>
  
  );
};

export default ResumeButton;
