import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";
import heroVideo from "../Hero.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start by trying to play unmuted

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented by browser due to audio.
          // Fallback to muted auto-play.
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        src={heroVideo}
        loop
        playsInline
      ></video>
      <div className="hero-overlay"></div>
      
      {/* Sound Toggle Button */}
      <button className="sound-toggle-btn" onClick={toggleMute} aria-label="Toggle sound">
        {isMuted ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>
      
      {/* Content over the video can be added here, like the cards shown in the design */}
      <div className="hero-content-wrapper">
        <div className="info-cards">
          <div className="info-card">
            <h3>1, 2 & 3</h3>
            <p>Bed Residences</p>
          </div>
          <div className="info-card">
            <h3>AED 978K</h3>
            <p>Starting Price</p>
          </div>
          <div className="info-card">
            <h3>64/36 OR 40/60</h3>
            <p>Payment Plan</p>
          </div>
          <div className="info-card">
            <h3>5% Down Payment</h3>
            <p>1% Monthly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
