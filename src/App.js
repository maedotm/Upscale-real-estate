import React from 'react';
import './App.css'; // Ensure this is correct

const App = () => {
  const texts = [
    "Welcome to Our Website!",
    "Explore Our Features!",
    "Join Us Today!",
    "Contact Us for More Info!"
  ];

  return (
    <div className="landing-page">
      <div className="background"></div> {/* Background div */}
      {texts.map((text, index) => (
        <div key={index} className="sliding-text">
          {text}
        </div>
      ))}
    </div>
  );
};

export default App;