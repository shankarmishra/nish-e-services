import React from 'react';
import ServiceCard from './ServiceCard';
import './FeaturedSection.css';

const FeaturedSection = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Driving License Application",
      provider: "Drive Easy",
      cost: "2000",
      estimatedTime: "7 days",
      requiredDocs: ["Aadhar Card", "Age Proof", "Address Proof", "Medical Certificate"]
    },
    {
      id: 2,
      title: "Passport Renewal",
      provider: "QuickDocs",
      cost: "2000",
      estimatedTime: "3 days",
      requiredDocs: ["Aadhar Card", "Passport", "Address Proof", "Birth Certificate"]
    },
    {
      id: 3,
      title: "Voter Id",
      provider: "ID Solutions",
      cost: "500",
      estimatedTime: "5 days",
      requiredDocs: ["Aadhar Card", "Proof of Birth", "Address Proof", "Photo"]
    }
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured</h2>
          <button className="btn btn-outline view-all-btn">
            View All
          </button>
        </div>
        
        <div className="services-grid">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
