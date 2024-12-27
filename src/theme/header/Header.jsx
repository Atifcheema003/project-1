
import React, { useState } from 'react';
import './header.css';

const Header = () => {
  // State to control visibility
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false); // Hides the container
  };

  return (
    <>
      {isVisible && ( // Render the container only if it's visible
        <div id='main' className="main-header-container">
         <div className="three-divs">
         <div className="limited-offer">
            Limited Time Offer
          </div>
          <div className="second-para">
            Intro price. Get AiWave for Big Sale -95% off.
          </div>
          <div className="purchase">
            Purchase Now → 
          </div>
         </div>
          <button id='cross' className='cross' onClick={handleClick}>✖</button>
        </div>
      )}
    </>
  );
};

export default Header;
