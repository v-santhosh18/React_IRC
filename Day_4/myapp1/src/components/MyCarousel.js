import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';
import car1 from '../Assets/car1.jpg';
import car2 from '../Assets/car2.jpg';
import car3 from '../Assets/car3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
  const arrowStyles = {
    fontSize: '80px',
    color: 'grey',
    lineHeight: '1.5',
    borderRadius: '50%', 
    display: 'inline-block', 
    padding: '10px', 
    transition: 'border-radius 0.3s ease'
  };

  return (
    <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>} style={{border : "2px solid lightblue"}}>
      <Carousel.Item>
        <CarouselImage src={car1} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={car2} alt="Second Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={car3} alt="Third Image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;