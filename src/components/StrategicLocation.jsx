import React, { useEffect, useRef, useState } from "react";
import "./StrategicLocation.css";
// Replace this with your actual map image
import mapImg from "../assets/map.png"; 

const StrategicLocation = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section ref={sectionRef} className={`strategic-section ${isVisible ? "visible" : ""}`}>
        <div className="strategic-container">
          <h2 className="strategic-title">Strategic Location</h2>
          
          <div className="strategic-box">
            <div className="strategic-map" onClick={openModal}>
              <img src={mapImg} alt="Strategic Location Map" />
              <div className="map-overlay-hint">
                <span>Click to view map</span>
              </div>
            </div>

            <div className="strategic-content">
              <p className="strategic-desc">
                Bond Living sits in Dubailand Residence Complex (DLRC), close to daily needs and key city hotspots.
              </p>

              <ul className="strategic-list">
                <li>
                  <strong>Retail Malls:</strong> Dubai Outlet Mall - 05 mins, Silicon Central Mall (DSO) - 08 mins, Mall of the Emirates - 20 mins, Dubai Mall - 20 mins
                </li>
                <li>
                  <strong>Education & Recreation:</strong> The Aquila School - 03 mins, Academic City - 05 mins, Smash Sports Academy - 05 mins, Global Village - 10 mins, IMG World - 10 mins, Desert Palm Polo Club - 10 mins, Meydan Racecourse - 15 mins
                </li>
                <li>
                  <strong>Connectivity:</strong> Metro Blue Line - 05 mins, Emirates Road - 05 mins, Dubai International Airport - 20 mins
                </li>
                <li>
                  <strong>Landmarks & Residential Hubs:</strong> Burj Khalifa - 20 mins, Dubai Frame - 20 mins, Jumeirah Beach Residences (JBR) - 25 mins, Palm Jumeirah - 25 mins, Dubai Marina - 25 mins, Dubai Creek - 20 mins
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      {isModalOpen && (
        <div className="map-modal-overlay" onClick={closeModal}>
          <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="map-modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img src={mapImg} alt="Map Fullscreen" className="map-modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default StrategicLocation;
