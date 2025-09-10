import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-title">ABOUT</h3>
            <ul className="footer-links">
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#corporate-information">Corporate Information</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">GROUP COMPANIES</h3>
            <ul className="footer-links">
              <li><a href="#example1">Example 1</a></li>
              <li><a href="#example2">Example 2</a></li>
              <li><a href="#example3">Example 3</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">HELP</h3>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#raise-complaint">Raise Complaint</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">CONSUMER POLICY</h3>
            <ul className="footer-links">
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#service-policy">Service Policy</a></li>
              <li><a href="#terms-of-use">Terms of Use</a></li>
              <li><a href="#cancellation-refund">Cancellation & Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">GET OUR APP</h3>
            <div className="app-downloads">
              <a href="#google-play" className="store-btn google-play">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
              <a href="#app-store" className="store-btn app-store">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
              </a>
            </div>

            <div className="social-section">
              <h3 className="footer-title">SOCIAL</h3>
              <div className="social-icons">
                <a href="#facebook" className="social-icon facebook">f</a>
                <a href="#twitter" className="social-icon twitter">X</a>
                <a href="#youtube" className="social-icon youtube">▶</a>
                <a href="#instagram" className="social-icon instagram">📷</a>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">REGISTERED OFFICE ADDRESS</h3>
            <div className="address">
              <p>Nish E-Service OPC Private Limited</p>
              <p>Flat No. 11, Fourth Floor,</p>
              <p>CTS No. 222/53, Plot No. 4,</p>
              <p>Aurangabad Cantonment,</p>
              <p>Aurangabad, 431002,</p>
              <p>Maharashtra, India</p>
              <p>CIN: U70200MH2024OPC420413</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2023 Nish E-Service All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
