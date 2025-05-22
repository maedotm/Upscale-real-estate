import React, { useEffect, useState, useRef } from 'react';
import './App.css'; // Ensure this is correct
import AboutUs from './Component/aboutUs'; // Import the AboutUs component
import data from './data/data.json'; // Import the data.json file

const App = () => {
  const [landingTexts, setLandingTexts] = useState([]);
  const [aboutUsContent, setAboutUsContent] = useState({});
  const [isVisible, setIsVisible] = useState(false); // State to control visibility of the About Us section
  const aboutRef = useRef(null); // Ref for the About Us section

  useEffect(() => {
    setLandingTexts(data.landingTexts);
    setAboutUsContent(data.aboutUsContent);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Set to true when section is in view
        observer.disconnect(); // Stop observing after the section is visible
      }
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current); // Observe the About Us section
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div className="app-container">
      <div className="landing-page">
        <div className="background"></div> {/* Background div */}
        {landingTexts.map((text, index) => (
          <div key={index} className="sliding-text">
            {text}
          </div>
        ))}
      </div>
      <div className="content-container">
        <AboutUs 
          title={aboutUsContent.title} 
          description={aboutUsContent.description} 
          isVisible={isVisible} // Pass visibility state
          ref={aboutRef} // Attach ref
        />
      </div>
    </div>
  );
};

export default App;