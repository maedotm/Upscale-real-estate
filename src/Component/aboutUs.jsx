import React from 'react';
import './css/aboutUs.css'; // Ensure this file exists

const AboutUs = ({ title, description }) => {
  return (
    <div className="about-section fade-in">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AboutUs;