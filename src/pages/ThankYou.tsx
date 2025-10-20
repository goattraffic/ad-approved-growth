import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="page-thank-you">
      <section className="thank-you-section">
        <div className="container">
          <div className="thank-you-content">
            <div className="success-icon">✓</div>
            <h1>Thank You!</h1>
            <p className="success-message">
              Your information has been successfully submitted. We'll review your details 
              and get back to you within 24 hours.
            </p>
            <p>
              In the meantime, feel free to explore our services or learn more about our approach.
            </p>
            <div className="thank-you-actions">
              <Link to="/" className="cta-button">Back to Home</Link>
              <Link to="/services" className="text-link">View Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
