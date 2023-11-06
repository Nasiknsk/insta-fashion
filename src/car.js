import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // Make sure to import your custom styles
import NextArrow from './NextArrow'; // Import the NextArrow component

const Carousel = () => {
  const carouselData = [
    {
      image: 'url_to_your_image_1',
      title: 'Slide 1',
      subtitle: 'Subtitle 1',
    },
    {
      image: 'url_to_your_image_2',
      title: 'Slide 2',
      subtitle: 'Subtitle 2',
    },
    // Add more slides as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Use the NextArrow component here
  };

  return (
    <div className="carousel-container container mt-5"> {/* Added Bootstrap container and margin-top */}
      <Slider {...settings}>
        {carouselData.map((slide, index) => (
          <div key={index} className="carousel-item"> {/* Added Bootstrap carousel-item class */}
            <img src={slide.image} alt={slide.title} className="img-fluid" /> {/* Added Bootstrap img-fluid class */}
            <div className="carousel-caption d-none d-md-block"> {/* Added Bootstrap carousel-caption class */}
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
