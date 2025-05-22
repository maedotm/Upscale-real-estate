import React, { forwardRef } from 'react';
import '../Component/css/aboutUs.css'; // Ensure this file exists

const AboutUs = forwardRef(({ title, description, isVisible }, ref) => {
  return (
    <div 
      ref={ref} 
      className={`about-section ${isVisible ? 'fade-in' : ''}`} // Add class based on visibility
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
});

export default AboutUs;