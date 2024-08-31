import React, { useEffect, useRef } from "react";
import "./InfiniteSlider.css"; // Import CSS file for custom styles
import PhotoStripeHorizontal from "../PhotoStripeHorizontal"; // Import your PhotoStripe component

const InfiniteSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start = null;
    const speed = 0.05; // Adjust this value to control the speed

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const scrollAmount = progress * speed;

      slider.style.transform = `translateX(-${scrollAmount}px)`;

      if (scrollAmount < slider.scrollWidth / 2) {
        requestAnimationFrame(animate);
      } else {
        slider.style.transform = `translateX(0)`;
        start = null; // Reset start time
        requestAnimationFrame(animate); // Restart animation
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const stripes = [
    { content: <div className="text-center p-6">Content 1</div> },
    { content: <div className="text-center p-6">Content 2</div> },
    { content: <div className="text-center p-6">Content 3</div> },
    { content: <div className="text-center p-6">Content 4</div> },
    { content: <div className="text-center p-6">Content 5</div> },
    // Add more content as needed
  ];

  return (
    <div className="slider-container">
      <div className="slider-content" ref={sliderRef}>
        {stripes.concat(stripes).map((stripe, index) => (
          <div key={index} className="slider-item">
            <PhotoStripeHorizontal content={stripe.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
