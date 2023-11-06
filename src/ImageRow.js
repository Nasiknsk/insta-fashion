import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the custom CSS file

const ImageRow = () => {
  const images = [
    {
      src:"image/image1.jpeg",
      alt: 'Image 1',
      description: 'Description for Image 1.',
    },
    {
      src:"image/image2.jpeg",
      alt: 'Image 2',
      description: 'Description for Image 2.',
    },
    {
        src:"image/image3.jpg",
      alt: 'Image 3',
      description: 'Description for Image 3.',
    },
  ];

  return (
    <>
   <div className="top">
        <h1>Top Values For You</h1>
        <div className='one'>
          <p>The fashion Service Offer Innovative and Unique style that goes beyond conventional fashion trends</p>
        </div>
      </div>
    <div className="row">
      {images.map((image, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img src={image.src} alt={image.alt} className="card-img-top image-card" /> {/* Apply the custom class */}
            <div className="card-body">
              <p className="card-text">{image.description}</p>
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ImageRow;
