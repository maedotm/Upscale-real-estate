import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure this is correct
import AboutUs from './Component/aboutUs'; // Import the AboutUs component
import ContactUs from './Component/contactUs'; // Import the ContactUs component
import data from './data/data.json'; // Import the data.json file

const App = () => {
  const [landingTexts, setLandingTexts] = useState([]);
  const [currentSection, setCurrentSection] = useState(0); // Track current section index
  const sections = ['about', 'contact'];

  useEffect(() => {
    setLandingTexts(data.landingTexts);

    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSwitchSection = (direction) => {
    setCurrentSection((prev) => 
      direction === 'next' 
        ? (prev + 1) % sections.length 
        : (prev - 1 + sections.length) % sections.length
    );
  };

  return (
    <div className="app-container">
      <div className="landing-page">
        <div className="background"></div> {/* Background div added here */}
        {landingTexts.map((text, index) => (
          <div key={index} className="sliding-text">
            {text}
          </div>
        ))}
      </div>
      <div className="content-container">
        <button className="nav-button" onClick={() => handleSwitchSection('prev')}>&lt;</button>
        <div className={`section-wrapper ${sections[currentSection]}`}>
          {currentSection === 0 ? (
            <AboutUs 
              title={data.aboutUsContent.title} 
              description={data.aboutUsContent.description} 
            />
          ) : (
            <ContactUs 
              title={data.contactUsContent.title} 
              description={data.contactUsContent.description} 
            />
          )}
        </div>
        <button className="nav-button" onClick={() => handleSwitchSection('next')}>&gt;</button>
      </div>
      <div className="dots">
        {sections.map((section, index) => (
          <span 
            key={index} 
            className={`dot ${currentSection === index ? 'active' : ''}`} 
            onClick={() => setCurrentSection(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;