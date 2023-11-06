import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  const [sliderData, setSliderData] = useState({ images: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data'); // Assuming your Node.js server is running on the same host and port
        const data = await response.json();
        setSliderData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const imageStyle = {
    height: '400px',
    objectFit: 'cover',
  };

  return (
    <Carousel>
      {sliderData.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`image/image${index + 1}.${index < 2 ? 'jpeg' : 'jpg'}`} // Assuming your images are named image1.jpeg, image2.jpeg, etc.
            alt={`Slide ${index + 1}`}
            style={imageStyle}
          />
          <Carousel.Caption>
            <h1>{image.heading}</h1>
            <h2>{image.subheading}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
