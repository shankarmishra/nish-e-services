import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import FeaturedSection from './components/FeaturedSection';
import BusinessSection from './components/BusinessSection';
import RTOSection from './components/RTOSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    // Simulate loading time for professional feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong</h2>
        <p>Please refresh the page or try again later.</p>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          <SearchSection />
          <FeaturedSection />
          <BusinessSection />
          <RTOSection />
          <ReviewsSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
