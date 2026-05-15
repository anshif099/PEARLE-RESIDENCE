import React, { useRef, useEffect, useState } from "react";
import "./Amenities.css";

const amenitiesList = [
  {
    name: "Barbeque Area",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 10h16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
        <path d="M6 16l-2 6m14-6l2 6" />
        <path d="M8 5v2m4-2v2m4-2v2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    name: "Infinity Pool",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 14c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
        <path d="M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
        <path d="M8 14V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8" />
        <path d="M12 14V4" />
        <path d="M7 14h10" />
      </svg>
    ),
  },
  {
    name: "Jogging Track",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16c0-4 16-4 16-8s-16-4-16-4" />
        <path d="M4 20c4 0 16 0 16-4" />
        <circle cx="6" cy="18" r="1.5" />
        <path d="M8 18l2-2" />
        <path d="M18 4v4l2-2-2-2z" />
      </svg>
    ),
  },
  {
    name: "Outdoor Cinema",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="16" height="10" rx="1" />
        <path d="M12 16v4m-4 0h8" />
        <path d="M10 9l4 2-4 2V9z" fill="currentColor" />
        <path d="M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
  },
  {
    name: "Outdoor Yoga",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="2" />
        <path d="M12 9c-3 0-5 2-5 5v2c0 2 2 4 5 4s5-2 5-4v-2c0-3-2-5-5-5z" />
        <path d="M7 14h10" />
        <path d="M4 18h16" />
      </svg>
    ),
  },
];

const Amenities = () => {
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

  const scrollLeft = () => handleScroll(-300);
  const scrollRight = () => handleScroll(300);

  // Duplicate items twice so it loops cleanly
  const displayItems = [...amenitiesList, ...amenitiesList, ...amenitiesList];

  return (
    <section className="amenities-section">
      <div className="amenities-header">
        <h2>Signature Lifestyle Amenities</h2>
        <div className="amenities-nav">
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
        className="amenities-carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="amenities-track" ref={trackRef}>
          {displayItems.map((amenity, index) => (
            <div className="amenity-item" key={index}>
              <div className="amenity-icon">{amenity.icon}</div>
              <h3>{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
