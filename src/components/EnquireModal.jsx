import React, { useState, useEffect } from "react";
import "./EnquireModal.css";

const EnquireModal = ({ isOpen, onClose }) => {
  const [userType, setUserType] = useState("Customer");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="enquire-modal-overlay" onClick={onClose}>
      <button className="enquire-modal-close" onClick={onClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      
      <div className="enquire-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <h2 className="enquire-modal-title">Enquire Now</h2>
        
        <div className="enquire-modal-content">
          <form className="enquire-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="radio-group">
              <span className="radio-label">I am a</span>
              <label className="radio-option">
                <input
                  type="radio"
                  name="modalUserType"
                  value="Customer"
                  checked={userType === "Customer"}
                  onChange={() => setUserType("Customer")}
                />
                Customer
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="modalUserType"
                  value="Broker"
                  checked={userType === "Broker"}
                  onChange={() => setUserType("Broker")}
                />
                Broker
              </label>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <input type="text" placeholder="First name *" required />
                <svg className="input-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Last name *" required />
                <svg className="input-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              <div className="form-group phone-group">
                <div className="phone-prefix">
                  <span>🇮🇳 +91 ▾</span>
                </div>
                <input type="tel" placeholder="Phone Number *" required />
                <svg className="input-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>

              <div className="form-group">
                <input type="email" placeholder="Email address *" required />
                <svg className="input-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>

              {userType === "Broker" && (
                <div className="form-group">
                  <input type="text" placeholder="Relationship manager name *" required />
                  <svg className="input-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              )}
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-btn">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireModal;
