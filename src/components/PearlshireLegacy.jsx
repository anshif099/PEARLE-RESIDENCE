import React, { useEffect, useRef, useState } from "react";
import "./PearlshireLegacy.css";
import buildingImage from "../assets/building6.png";

const PearlshireLegacy = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`legacy-section ${isVisible ? "visible" : ""}`}>
      <div className="legacy-container">
        {/* Left Side: Content */}
        <div className="legacy-content">
          <h2>Pearlshire Legacy</h2>
          <p>
            Pearlshire, founded in 2013, is a global real estate group with a legacy
            spanning hospitality and development. With over 5,000+ hotel keys
            across the US and a growing footprint in Dubai, Pearlshire is synonymous
            with integrity, quality, and value creation. Our expertise extends from
            landmark hospitality assets with IHG, Marriott, and Hilton, to luxury
            residences like Bond Enclave that redefine prestige in Dubai's skyline.
          </p>
          <p>
            We stand for timeless aesthetics, forward-thinking design, and
            transformative real estate experiences crafted for today and generations
            to come.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="legacy-image-container">
          <img src={buildingImage} alt="Pearlshire Legacy" className="legacy-image" />
        </div>
      </div>
    </section>
  );
};

export default PearlshireLegacy;
