import { useState, useEffect } from 'react';

// Mock data - in a real app, this would come from an API
const mockServices = {
  featured: [
    {
      id: 1,
      title: "Driving License Application",
      provider: "Drive Easy",
      cost: "2000",
      estimatedTime: "7 days",
      requiredDocs: ["Aadhar Card", "Age Proof", "Address Proof", "Medical Certificate"],
      category: "rto",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      title: "Passport Renewal",
      provider: "QuickDocs",
      cost: "2000",
      estimatedTime: "3 days",
      requiredDocs: ["Aadhar Card", "Passport", "Address Proof", "Birth Certificate"],
      category: "identity",
      rating: 4.8,
      reviews: 95
    },
    {
      id: 3,
      title: "Voter Id",
      provider: "ID Solutions",
      cost: "500",
      estimatedTime: "5 days",
      requiredDocs: ["Aadhar Card", "Proof of Birth", "Address Proof", "Photo"],
      category: "identity",
      rating: 4.2,
      reviews: 67
    }
  ],
  business: [
    {
      id: 4,
      title: "GST Registration",
      provider: "Alpha Legal",
      cost: "1500",
      estimatedTime: "3 days",
      requiredDocs: ["Aadhar Card", "PAN Card", "Business Address Proof", "Bank Account Details"],
      category: "business",
      rating: 4.7,
      reviews: 203
    },
    {
      id: 5,
      title: "MSME",
      provider: "FoodSafe India",
      cost: "4500",
      estimatedTime: "12 days",
      requiredDocs: ["Aadhar Card", "Business Address Proof", "PAN Card", "Bank Statement"],
      category: "business",
      rating: 4.4,
      reviews: 156
    },
    {
      id: 6,
      title: "Shop Act",
      provider: "BizTax",
      cost: "2500",
      estimatedTime: "4 days",
      requiredDocs: ["GST Number", "Business PAN Card", "Address Proof", "Identity Proof"],
      category: "business",
      rating: 4.6,
      reviews: 89
    }
  ],
  rto: [
    {
      id: 7,
      title: "Driving License Application",
      provider: "Drive Easy",
      cost: "2000",
      estimatedTime: "7 days",
      requiredDocs: ["Aadhar Card", "Age Proof", "Address Proof", "Medical Certificate"],
      category: "rto",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 8,
      title: "Vehicle Registration",
      provider: "Vehicle Hub",
      cost: "3500",
      estimatedTime: "10 days",
      requiredDocs: ["Invoice of Vehicle", "Aadhar Card", "Insurance Certificate", "Pollution Certificate"],
      category: "rto",
      rating: 4.3,
      reviews: 112
    },
    {
      id: 9,
      title: "Pollution Certificate Renewal",
      provider: "Green Emission",
      cost: "300",
      estimatedTime: "1 day",
      requiredDocs: ["Vehicle RC", "Previous PUC Certificate"],
      category: "rto",
      rating: 4.1,
      reviews: 78
    }
  ]
};

export const useServices = (category = 'all') => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let data = [];
        if (category === 'all') {
          data = [...mockServices.featured, ...mockServices.business, ...mockServices.rto];
        } else if (category === 'featured') {
          data = mockServices.featured;
        } else if (category === 'business') {
          data = mockServices.business;
        } else if (category === 'rto') {
          data = mockServices.rto;
        } else {
          data = Object.values(mockServices).flat().filter(service => 
            service.category === category
          );
        }
        
        setServices(data);
      } catch (err) {
        setError('Failed to load services. Please try again.');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [category]);

  const searchServices = (query) => {
    if (!query.trim()) return services;
    
    return services.filter(service =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.provider.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    services,
    loading,
    error,
    searchServices
  };
};
