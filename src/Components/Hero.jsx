import React, { useState, useEffect } from 'react';
import first from "../assets/Images/1.jpg";
import second from "../assets/Images/2.webp";
import third from "../assets/Images/3.jpg";
import fourth from "../assets/Images/4.webp";

const Hero = () => {
  const images = [first, second, third, fourth];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide duration as per your preference (5 seconds in this example).

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[60rem] relative overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`w-full h-auto absolute top-0 left-0 transition-transform ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
        />
        
      ))
      }
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white mb-96 z-100 ">
        <p className="text-lg font-bold">
          Scroll down to read Millions of novels
        </p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
          onClick={() => {
            // Implement your scroll down functionality here
          }}
        >
          Scroll Down
        </button>
      </div>
      
    </div>
  );
};

export default Hero;
