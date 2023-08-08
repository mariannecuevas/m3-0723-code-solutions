import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  let timer;

  const goToPrevSlide = () => {
    clearInterval(timer);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    clearInterval(timer);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <button className="btn left" onClick={goToPrevSlide}>
        <FaChevronLeft className="icon" />
      </button>
      <div className="carousel-container">
        <ul
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img) => (
            <li className="slide" key={img.id}>
              <img className="current-image" src={img.src} alt={img.alt} />
            </li>
          ))}
        </ul>
      </div>
      <button className="btn right" onClick={goToNextSlide}>
        <FaChevronRight className="icon" />
      </button>
    </div>
  );
}
