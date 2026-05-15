import React from "react";
import "./WhatsAppButton.css";
import whatsappIcon from "../assets/whatsapp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/" // The user can add their number here later
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
