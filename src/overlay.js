import React from "react";
import "./modules.css"; // Import your CSS file with the provided styles
import 'bootstrap/dist/css/bootstrap.min.css'

const Over = () => {
  return (
    <>
    <center>
    <div className="image-container">
      <div className="overlay"></div>
     <div class="bg">
      <img src="image/image1.jpeg" alt="Image 1" className="image" />
      </div>
      <div class="bg">
      <img src="image/image2.jpeg" alt="Image 2" className="image" />
      </div>
      <div class="bg">
      <img src="image/image3.jpg" alt="Image 3" className="image" />
      </div>
      
    </div>
    </center>
    </>
  );
};

export default Over;
