import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import catalogImg from '@/assets/service-catalog.png';
import creativeImg from '@/assets/service-creative.png';
import croImg from '@/assets/service-cro.png';
import feedImg from '@/assets/service-feed.png';
import roasImg from '@/assets/service-roas.png';
import ltvImg from '@/assets/service-ltv.png';

const imageMap: Record<string, string> = {
  catalog: catalogImg,
  creative: creativeImg,
  cro: croImg,
  feed: feedImg,
  roas: roasImg,
  ltv: ltvImg
};

const Services = () => {
  return (
    <div className="page-services">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="page-subtitle">
            Specialized e-commerce optimization services designed to increase your ROAS and scale profitably
          </p>
        </div>
      </section>

      <section className="services-detail-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.slug} className="service-card">
                <img src={imageMap[service.image]} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
                <p className="service-description">{service.short}</p>
                <p className="service-price">{service.price}</p>
                <Link to={`/services/${service.slug}`} className="service-link">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Optimize Your Store?</h2>
          <p>Get a free audit and discover your biggest growth opportunities</p>
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
