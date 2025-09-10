import React from 'react';
import ServiceCard from './ServiceCard';
import './RTOSection.css';

const RTOSection = () => {
  const rtoServices = [
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
      title: "Vehicle Registration",
      provider: "Vehicle Hub",
      cost: "3500",
      estimatedTime: "10 days",
      requiredDocs: ["Invoice of Vehicle", "Aadhar Card", "Insurance Certificate", "Pollution Certificate"]
    },
    {
      id: 3,
      title: "Pollution Certificate Renewal",
      provider: "Green Emission",
      cost: "300",
      estimatedTime: "1 day",
      requiredDocs: ["Vehicle RC", "Previous PUC Certificate"]
    }
  ];

  return (
    <section className="rto-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">RTO Related</h2>
          <button className="btn btn-outline view-more-btn">
            View More
          </button>
        </div>
        
        <div className="services-grid">
          {rtoServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RTOSection;
