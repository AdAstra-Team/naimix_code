import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth + 32;
    }
  };

  const handleNext = () => {
    if (currentIndex < React.Children.count(children) - 1) {
      setCurrentIndex(currentIndex + 1);
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth + 32;
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const currentIndex = Math.round(scrollLeft / (cardWidth + 32));
      setCurrentIndex(currentIndex);
    };
    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        ref={carouselRef}
        className="h-full flex items-center justify-center overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{
          scrollPaddingLeft: "32px",
          scrollPaddingRight: "32px",
          scrollSnapType: "x mandatory"
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-shrink px-4"
            style={{
              scrollSnapAlign: "start"
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-50">
        <button
          className="bg-white rounded-full shadow-md p-2 focus:outline-none"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <svg className="h-6 w-6 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-50">
        <button
          className="bg-white rounded-full shadow-md p-2 focus:outline-none"
          onClick={handleNext}
          disabled={currentIndex === React.Children.count(children) - 1}
        >
          <svg className="h-6 w-6 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
