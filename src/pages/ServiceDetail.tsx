import { useParams, Link } from 'react-router-dom';
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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="page-service-detail">
        <section className="page-hero">
          <div className="container">
            <h1>Service Not Found</h1>
            <p><Link to="/services">Back to Services</Link></p>
          </div>
        </section>
      </div>
    );
  }

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '/';
    setTimeout(() => {
      const formEl = document.getElementById('orderFormAnchor');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="page-service-detail">
      <section className="service-detail-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.title}
          </div>
          <h1>{service.title}</h1>
          <p className="service-detail-intro">{service.short}</p>
          <div className="service-detail-meta">
            <p className="service-detail-price">{service.price}</p>
            <a href="#orderFormAnchor" onClick={scrollToForm} className="cta-button">Get Started</a>
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-main">
              <img src={imageMap[service.image]} alt={service.title} className="detail-image" />
              <div className="detail-body" dangerouslySetInnerHTML={{ __html: service.contentHtml }} />
            </div>
            <aside className="detail-sidebar">
              <div className="sidebar-card">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-card">
                <h3>Pricing</h3>
                <p className="sidebar-price">{service.price}</p>
                <a href="#orderFormAnchor" onClick={scrollToForm} className="cta-button">Get Started</a>
              </div>
              <div className="sidebar-card">
                <h3>Have Questions?</h3>
                <p>Contact us to discuss how this service can help your business grow.</p>
                <Link to="/contact" className="text-link">Contact Us →</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="back-to-services">
        <div className="container">
          <Link to="/services" className="back-link">← Back to All Services</Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
