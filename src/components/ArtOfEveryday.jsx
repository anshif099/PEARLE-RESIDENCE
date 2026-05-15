import React, { useRef, useEffect, useState } from "react";
import "./ArtOfEveryday.css";

import img1 from "../assets/building2.png";
import img2 from "../assets/building3.png";
import img3 from "../assets/building4.png";
import img4 from "../assets/building5.png";

const galleryImages = [img1, img2, img3, img4];

const ArtOfEveryday = () => {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // Auto-scroll loop
  useEffect(() => {
    let animationId;
    const scrollStep = () => {
      if (trackRef.current && !isHovered && !isManualScrolling) {
        trackRef.current.scrollLeft += 1;
        
        // Reset to start for infinite loop feeling when reached midway
        if (
          trackRef.current.scrollLeft >=
          trackRef.current.scrollWidth / 2
        ) {
          trackRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isManualScrolling]);

  const handleScroll = (offset) => {
    if (trackRef.current) {
      setIsManualScrolling(true);
      trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
      
      // Resume auto scroll after smooth scroll completes (approx 600ms)
      setTimeout(() => {
        setIsManualScrolling(false);
      }, 600);
    }
  };

  const scrollLeft = () => handleScroll(-400);
  const scrollRight = () => handleScroll(400);

  // Duplicate items twice so it loops cleanly
  const displayImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section className="art-of-everyday-section">
      <div className="art-header">
        <h2>The Art of Everyday</h2>
        <div className="art-nav">
          <button className="nav-arrow" onClick={scrollLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="nav-arrow" onClick={scrollRight}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        className="art-carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="art-track" ref={trackRef}>
          {displayImages.map((src, index) => (
            <div className="art-item" key={index}>
              <img src={src} alt={`Gallery Image ${index}`} className="art-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtOfEveryday;
