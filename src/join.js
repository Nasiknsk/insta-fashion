import React from 'react';
import './Navbar.css'; // Import your custom CSS file for additional styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS file

const images = [
  {
    id: 1,
    src: 'image/pro1.jpeg',
    description: 'sales Consultant.',
    msg: 'In this example, each image is associated with a short description ',
  },
  {
    id: 2,
    src: 'image/pro2.jpg',
    description: 'Business Analysis',
    msg: 'In this example, each image is associated with a short description ',
  },
  {
    id: 3,
    src: 'image/pro3.jpg',
    description: 'Sales Executive',
    msg: 'In this example, each image is associated with a shortdescription ',
  },
];

const Join = () => {
  return (
    <>
    <h1>Join us</h1>
    <p>In this example, each image is associated with a short description that gives viewers an idea of what the image portrays.<br></br> You can adjust these descriptions according to the content of your images.</p>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          {images.map((image) => (
            <div key={image.id} className="mb-4">
              <div className="image-box d-flex align-items-center">
                <img style={{ width:'200px'}} src={image.src} alt={`Image ${image.id}`} className="img-fluid" />
                <div className="description-box ml-3 col-lg-10 col-md-9 col-sm-12 custom-description-box mt-3 mt-lg-0">
                  <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '5px' }}>{image.description}</h3>
                  <p>{image.msg}</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Join;
