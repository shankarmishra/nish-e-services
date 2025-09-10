import React from 'react';
import ServiceCard from './ServiceCard';
import './BusinessSection.css';

const BusinessSection = () => {
  const businessServices = [
    {
      id: 1,
      title: "GST Registration",
      provider: "Alpha Legal",
      cost: "1500",
      estimatedTime: "3 days",
      requiredDocs: ["Aadhar Card", "PAN Card", "Business Address Proof", "Bank Account Details"]
    },
    {
      id: 2,
      title: "MSME",
      provider: "FoodSafe India",
      cost: "4500",
      estimatedTime: "12 days",
      requiredDocs: ["Aadhar Card", "Business Address Proof", "PAN Card", "Bank Statement"]
    },
    {
      id: 3,
      title: "Shop Act",
      provider: "BizTax",
      cost: "2500",
      estimatedTime: "4 days",
      requiredDocs: ["GST Number", "Business PAN Card", "Address Proof", "Identity Proof"]
    }
  ];

  return (
    <section className="business-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Business</h2>
          <button className="btn btn-outline view-more-btn">
            View More
          </button>
        </div>
        
        <div className="services-grid">
          {businessServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
