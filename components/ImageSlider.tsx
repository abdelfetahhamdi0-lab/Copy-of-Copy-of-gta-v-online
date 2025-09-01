import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);

  return (
    <div className="relative h-full w-full group" aria-roledescription="carousel" aria-label="GTA Online Screenshots">
      <div className="relative h-[450px] w-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'}`}
            aria-hidden={index !== currentIndex}
          >
            <img src={image} alt={`GTA Online Screenshot ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      {/* Left Arrow */}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-pink"
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-pink"
        aria-label="Next Slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-brand-pink scale-125' : 'bg-gray-500/50 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={currentIndex === slideIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;