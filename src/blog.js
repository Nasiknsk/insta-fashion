import React from "react";
import './Blog.css';
function Blog() {
    return (
      <>
        <h1>Explore Our Blogs</h1>
        <p>The fashion Service Offer Innovative and Unique style that goes beyond conventional fashion trends</p>
        <div className="container d-flex flex-column justify-content-center" style={{ gap: "10px" }}>
          <div className="d-flex flex-row p-2">
            <div className="d-flex flex-column p-2 img-container">
              <img src="image/image2.jpeg" className="img-fluid mb-2" alt="" style={{ height: "200px", width: "350px" }} />
              <div className="overlay">Overlay text1</div>
              <img src="image/image2.jpeg" className="img-fluid mb-2" alt="" style={{ height: "200px", width: "400px" }} />
              <div className="overlay">Overlay text4</div>
            </div>
      
            <div className="d-flex flex-column p-2 img-container">
              <img src="image/image2.jpeg" className="img-fluid mb-2" alt="" style={{ height: "200px", width: "400px" }} />
              <div className="overlay">Overlay text2</div>
              <img src="image/image2.jpeg" className="img-fluid mb-2" alt="" style={{ height: "200px", width: "350px" }} />
              <div className="overlay">Overlay text3</div>
            </div>
            
            <div className="img-container">
              <img src="image/image1.jpeg" className="img-fluid" alt="" style={{ height: "400px", width: "350px" }} />
              <div className="overlay">Overlay text5</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Blog;