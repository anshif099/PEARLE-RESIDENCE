import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo-container">
          <div className="text-logo">
            <span className="logo-main">PEARLE RESIDENCE</span>
            <div className="logo-divider"></div>
            <span className="logo-sub">BY PEARLSHIRE</span>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="footer-qr">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pearle-residence.vercel.app/"
            alt="Bond Living QR Code"
          />
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>COPYRIGHT 2026 PEARLE RESIDENCE, BY PEARLSHIRE</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
