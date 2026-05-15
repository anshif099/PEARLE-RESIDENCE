import React, { useEffect, useRef, useState } from "react";
import "./ResortLiving.css";
import buildingImage from "../assets/building1.png";

const ResortLiving = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when scrolled out of view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
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
    <section ref={sectionRef} className={`resort-living-section ${isVisible ? "visible" : ""}`}>
      <div className="resort-living-container">
        {/* Left Side: Content */}
        <div className="resort-content">
          <h2>Resort-Inspired Living,<br/>Designed for Real Life</h2>
          <p className="resort-subtitle">
            Boutique G+11 residences in Dubailand Residence Complex (DLRC), thoughtfully crafted by Pearlshire for calm, everyday living.
          </p>

          <div className="resort-features">
            {/* Feature 1 */}
            <div className="feature-item">
              <div className="feature-icon">
                {/* Lounge chair / Lamp SVG placeholder */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 18v-4a2 2 0 0 1 2-2h3M14 12h5a2 2 0 0 1 2 2v4M2 22h20M7 5v7M5 5h4" />
                  <circle cx="10" cy="18" r="2" />
                  <circle cx="17" cy="18" r="2" />
                </svg>
              </div>
              <p><strong>Experience-driven design</strong> with hospitality-led layouts and finishes.</p>
            </div>

            {/* Feature 2 */}
            <div className="feature-item">
              <div className="feature-icon">
                {/* Pool / Wellness SVG placeholder */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 12h20M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M9 12v-2a3 3 0 0 1 6 0v2" />
                </svg>
              </div>
              <p><strong>Wellness rooftop</strong> with infinity pool, yoga deck, and outdoor cinema.</p>
            </div>

            {/* Feature 3 */}
            <div className="feature-item">
              <div className="feature-icon">
                {/* Smart home SVG placeholder */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                  <circle cx="15" cy="15" r="1.5" />
                </svg>
              </div>
              <p><strong>Smart-home ready living</strong> in a prime, well-connected DLRC location.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="resort-image-container">
          <img src={buildingImage} alt="Bond Living Building" className="resort-image" />
        </div>
      </div>
    </section>
  );
};

export default ResortLiving;
