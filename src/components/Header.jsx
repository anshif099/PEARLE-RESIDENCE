import React, { useState, useEffect } from "react";
import "./Header.css";
import "./Header.css";

const Header = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Hamburger Icon for Mobile */}
        <button 
          className={`hamburger-btn ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Buttons */}
        <div className={`header-buttons ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <button className="white-btn" onClick={() => {
            onEnquireClick();
            setIsMobileMenuOpen(false);
          }}>
            Enquire Now
          </button>

          <button className="white-btn">
            Call: 800 PEARLDXB
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;