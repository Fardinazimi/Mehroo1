import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function HeroSlider() {
  const slides = [
    "https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg",
    "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg",
    "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
    "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg",
  ];

  return (
    <>
    <div className='pt-0.5'>
    <Carousel fade interval={2000}> {/* 5000ms = 5 seconds */}
      {slides.map((url, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={url}
            alt={`Slide ${index + 1}`}
            style={{ height: '600px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Slide {index + 1} Title</h3>
            <p>Slide {index + 1} description goes here.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    </>
    
  );
}
