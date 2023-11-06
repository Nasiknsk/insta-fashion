import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint if needed
    };

    handleResize(); // Call the function on initial load

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <div className="navbar">
        <div className="logo"><b>Fashion-Insta</b></div>
      <div className="nav-container">
        
        {isMobile ? (
          <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>
        ) : (
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
