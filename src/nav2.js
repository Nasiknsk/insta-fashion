import React from 'react';
import './Navbar.css'; // Import your custom CSS file for additional styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS file

const Navbars = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <p>Fashion is a form of self-expression. It's a way for showing the world who you are and what you stand for.</p>
        </div>
        <div className="col-lg-4 col-md-12 mb-4">
          <h1><b>CHOOSE YOUR FASHION STYLE</b></h1>
        </div>
         <div className="col-lg-4 col-md-12 mb-4">
          <p>Instagram<br />
            Facebook<br />
            Twitter
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Navbars;
