import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Row = () => {
  return (
    <>
    <h1>Shop Now</h1>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div
            className="d-flex flex-column justify-content-center align-items-center bg-gradient p-3"
            style={{ width: '300px', height: '300px', backgroundColor: 'black',transform: 'rotate(10deg)' }}
          >
            <img
              src="image/image1.jpeg"
              alt="Image 1"
              className="img-fluid rotate m-2"
              height="300px"
              width="300px"
              style={{ transform: 'rotate(10deg)' }}
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div
            className="d-flex flex-column justify-content-center align-items-center bg-gradient p-3"
            style={{ width: '300px', height: '300px', backgroundColor: 'black',transform: 'rotate(10deg)' }}
          >
            <img
              src="image/image2.jpeg"
              alt="Image 2"
              className="img-fluid rotate m-2"
              height="300px"
              width="300px"
              style={{ transform: 'rotate(10deg)' }}
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div
            className="d-flex flex-column justify-content-center align-items-center bg-gradient p-3"
            style={{ width: '300px', height: '300px', backgroundColor: 'black',transform: 'rotate(10deg)' }}
          >
            <img
              src="image/image3.jpg"
              alt="Image 3"
              className="img-fluid rotate m-2"
              height="300px"
              width="300px"
              style={{ transform: 'rotate(10deg)' }}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Row;
