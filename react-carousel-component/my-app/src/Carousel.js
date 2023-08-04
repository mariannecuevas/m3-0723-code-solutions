// import { useState , useEffect} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel({ images }) {
  return (
    <>
      <div className="carousel">
        <button className="btn left">
          <FaChevronLeft className="arrow-icon" />
        </button>
        <div className="carousel-container">
          <ul className="carousel-track">
            {images.map((img) => (
              <li className="slide" key={img.id}>
                <img className="current-image" src={img.src} alt={img.alt} />
              </li>
            ))}
          </ul>
        </div>
        <button className="btn right">
          <FaChevronRight className="arrow-icon" />
        </button>
      </div>
    </>
  );
}
