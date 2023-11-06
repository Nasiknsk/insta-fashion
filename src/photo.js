import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function PhotoCollection() {
  return (
    <>
    <h1>Fashion Collection that you will love</h1>
    <p>The fashion Service Offer Innovative and Unique style that goes beyond conventional fashion trends</p>
    <div className="container d-flex flex-row justify-content-center">
      <div className="d-flex flex-column p-2">
        <img src="image/image1.jpeg" className="img-fluid" alt="" style={{height:"280px" ,width:"400px" ,marginTop:"20px",marginBottom:"20px"}} />
      </div>

      <div className="d-flex flex-column p-2">
        <img src="image/image2.jpeg" className="img-fluid mb-2" alt="" style={{height:"200px" ,width:"400px"}}  />
        <img src="image/image2.jpeg" className="img-fluid" alt="" style={{height:"100px" ,width:"400px"}}  />
      </div>

      <div className="d-flex flex-column p-2">
        <img src="image/image1.jpeg" className="img-fluid" alt="" style={{height:"300px" ,width:"500px"}}  />
      </div>

      <div className="d-flex flex-column p-2">
        <img src="image/image2.jpeg" className="img-fluid mb-2" alt="" style={{height:"100px" ,width:"400px"}}  />
        <img src="image/image2.jpeg" className="img-fluid" alt="" style={{height:"200px" ,width:"400px"}}  />
      </div>

      <div className="d-flex flex-column p-2">
        <img src="image/image1.jpeg" className="img-fluid" alt="" style={{height:"280px" ,width:"400px",marginTop:"20px",marginBottom:"20px"}}  />
      </div>
    </div>
    </>
  );
}

export default PhotoCollection;
