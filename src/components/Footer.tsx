import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>IndiahIch</h4>
            <p>E-commerce Growth Partner focused on catalog optimization, performance creatives, and conversion rate optimization.</p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/services/catalog-optimization">Catalog Optimization</Link></li>
              <li><Link to="/services/performance-creatives">Performance Creatives</Link></li>
              <li><Link to="/services/conversion-rate-optimization">CRO</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refunds-policy">Refunds Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-hours">Business Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} IndiahIch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
