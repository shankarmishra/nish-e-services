import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="logo-container">
          <h1 className="loading-logo">Nish e-service</h1>
        </div>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
        <p className="loading-text">Loading your services...</p>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
