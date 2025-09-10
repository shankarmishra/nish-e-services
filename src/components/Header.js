import React, { useState } from 'react';
import { FiArrowRight, FiUserPlus, FiGlobe, FiChevronDown } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Nish e-service</h1>
          </div>
          
          <div className="header-actions">
            <button className="btn btn-outline login-btn">
              Login
              <FiArrowRight />
            </button>
            
            <button className="btn btn-outline register-btn">
              Register
              <FiUserPlus />
            </button>
            
            <div className="language-selector">
              <button 
                className="btn btn-outline language-btn"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <FiGlobe />
                English
                <FiChevronDown />
              </button>
              
              {isLanguageOpen && (
                <div className="language-dropdown">
                  <div className="language-option">English</div>
                  <div className="language-option">हिन्दी</div>
                  <div className="language-option">मराठी</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
