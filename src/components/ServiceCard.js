import React, { useState, useCallback } from 'react';
import { FiUser, FiCheckCircle, FiDownload, FiCalendar, FiShoppingCart, FiStar } from 'react-icons/fi';
import './ServiceCard.css';

const ServiceCard = ({ service, onBookNow, onAddToCart, onDownloadGuide }) => {
  const [showMoreDocs, setShowMoreDocs] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleGuidePDF = useCallback(async () => {
    try {
      if (onDownloadGuide) {
        await onDownloadGuide(service);
      } else {
        // Fallback behavior
        console.log('Downloading guide PDF for:', service.title);
        // Simulate download
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error('Error downloading guide:', error);
    }
  }, [service, onDownloadGuide]);

  const handleBookNow = useCallback(async () => {
    try {
      setIsBooking(true);
      if (onBookNow) {
        await onBookNow(service);
      } else {
        // Fallback behavior
        console.log('Booking service:', service.title);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error('Error booking service:', error);
    } finally {
      setIsBooking(false);
    }
  }, [service, onBookNow]);

  const handleAddToCart = useCallback(async () => {
    try {
      setIsAddingToCart(true);
      if (onAddToCart) {
        await onAddToCart(service);
      } else {
        // Fallback behavior
        console.log('Adding to cart:', service.title);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  }, [service, onAddToCart]);

  const visibleDocs = showMoreDocs ? service.requiredDocs : service.requiredDocs.slice(0, 2);
  const hasMoreDocs = service.requiredDocs.length > 2;

  return (
    <div className="service-card">
      <button 
        className={`cart-icon ${isAddingToCart ? 'loading' : ''}`} 
        onClick={handleAddToCart}
        disabled={isAddingToCart}
        aria-label="Add to cart"
      >
        <FiShoppingCart />
      </button>
      
      <div className="service-header">
        <h3 className="service-title">{service.title}</h3>
        <div className="service-provider">
          <FiUser className="provider-icon" />
          <span className="provider-name">{service.provider}</span>
          <FiCheckCircle className="verified-icon" />
        </div>
        {service.rating && (
          <div className="service-rating">
            <FiStar className="star-icon" />
            <span className="rating-value">{service.rating}</span>
            <span className="rating-count">({service.reviews})</span>
          </div>
        )}
      </div>
      
      <div className="service-details">
        <div className="service-cost">₹{service.cost}</div>
        <div className="service-time">{service.estimatedTime}</div>
      </div>
      
      <div className="required-docs">
        <h4 className="docs-title">Required Docs:</h4>
        <div className="docs-list">
          {visibleDocs.map((doc, index) => (
            <span key={index} className="doc-tag">
              {doc}
            </span>
          ))}
          {hasMoreDocs && !showMoreDocs && (
            <button 
              className="view-more-btn"
              onClick={() => setShowMoreDocs(true)}
            >
              + View More
            </button>
          )}
        </div>
      </div>
      
      <div className="service-actions">
        <button 
          className="btn btn-secondary guide-btn" 
          onClick={handleGuidePDF}
          aria-label="Download guide PDF"
        >
          <FiDownload />
          Guide PDF
        </button>
        <button 
          className={`btn btn-primary book-btn ${isBooking ? 'loading' : ''}`} 
          onClick={handleBookNow}
          disabled={isBooking}
          aria-label="Book this service"
        >
          <FiCalendar />
          {isBooking ? 'Booking...' : 'Book Now'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
