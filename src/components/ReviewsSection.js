import React, { useEffect, useRef } from 'react';
import { FiUser, FiStar } from 'react-icons/fi';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPosition = useRef(0);

  const reviews = [
    {
      id: 1,
      userName: "User5",
      rating: 4,
      service: "Company Incorporation",
      comment: "Great service!"
    },
    {
      id: 2,
      userName: "User5",
      rating: 1,
      service: "Company Incorporation",
      comment: "Great service!"
    },
    {
      id: 3,
      userName: "User2",
      rating: 3,
      service: "Company Incorporation",
      comment: "Great service!"
    },
    {
      id: 4,
      userName: "User6",
      rating: 2,
      service: "Passport Renewal",
      comment: "Great service!"
    },
    {
      id: 5,
      userName: "User6",
      rating: 1,
      service: "Company Incorporation",
      comment: "Great service!"
    }
  ];

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const animate = () => {
      if (scrollRef.current) {
        scrollPosition.current += 0.3; // Slow scroll speed
        const maxScroll = scrollRef.current.scrollWidth / 2; // Half because we duplicated
        
        if (scrollPosition.current >= maxScroll) {
          scrollPosition.current = 0; // Reset to beginning for seamless loop
        }
        
        scrollRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar
          key={i}
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        
        <div className="reviews-container">
          <div className="reviews-scroll" ref={scrollRef}>
            {duplicatedReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="review-card">
                <div className="review-header">
                  <div className="user-info">
                    <FiUser className="user-icon" />
                    <span className="user-name">{review.userName}</span>
                  </div>
                  <div className="rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <div className="review-content">
                  <div className="service-name">{review.service}</div>
                  <div className="review-comment">"{review.comment}"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
