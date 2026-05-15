import React, { useState, useEffect } from "react";
import "./Header.css";
import "./Header.css";

const Header = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        {/* Logo */}
        <div className="logo-section">
          <div className="text-logo">
            <span className="logo-main">PEARLE RESIDENCE</span>
            <div className="logo-divider"></div>
            <span className="logo-sub">BY PEARLSHIRE</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="header-buttons">
          <button className="white-btn" onClick={onEnquireClick}>Enquire Now</button>

          <button className="white-btn">
            Call: 800 PEARLDXB
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;