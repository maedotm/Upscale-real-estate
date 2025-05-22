import React from 'react';
import './css/aboutUs.css'; // Use the same styles

const ContactUs = ({ title, description }) => {
  return (
    <div className="about-section fade-in">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ContactUs;