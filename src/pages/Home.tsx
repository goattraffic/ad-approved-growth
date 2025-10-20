import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import heroImage from '@/assets/hero-illustration.png';
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

const Home = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const hp = formData.get('__hp');
    if (hp && hp !== '') {
      window.location.hash = '/thank-you';
      return;
    }

    const consent = formData.get('consent');
    if (!consent) {
      alert('Please accept the privacy policy to continue.');
      return;
    }

    const sessionData = sessionStorage.getItem('utm_params');
    const utmParams = sessionData ? JSON.parse(sessionData) : {};
    
    formData.append('__ts', Date.now().toString());
    formData.append('utm_source', utmParams.utm_source || '');
    formData.append('utm_medium', utmParams.utm_medium || '');
    formData.append('utm_campaign', utmParams.utm_campaign || '');
    formData.append('utm_term', utmParams.utm_term || '');
    formData.append('utm_content', utmParams.utm_content || '');
    formData.append('gclid', utmParams.gclid || '');
    formData.append('fbclid', utmParams.fbclid || '');
    formData.append('referrer', document.referrer);
    formData.append('path', location.pathname + location.hash);

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: { 'X-Requested-With': 'fetch' },
        body: formData
      });

      const result = await response.json();
      
      if (result.ok) {
        window.location.hash = '/thank-you';
      } else {
        alert(result.error || 'An error occurred. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get Store Audit';
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Get Store Audit';
    }
  };

  return (
    <div className="page-home">
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>More Orders with the Same Budget</h1>
              <p className="hero-subtitle">
                We optimize e-commerce stores for performance: better catalogs, 
                winning creatives, higher conversion rates. No fluff, just measurable ROAS improvement.
              </p>
              <a href="#orderFormAnchor" className="cta-button">Get Store Audit</a>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">2,500+</div>
                  <div className="stat-label">Stores Optimized</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">35%</div>
                  <div className="stat-label">Avg ROAS Increase</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="E-commerce analytics dashboard" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive e-commerce optimization tailored to your growth goals</p>
          </div>
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

      <section className="cases-section">
        <div className="container">
          <div className="section-header">
            <h2>Case Studies</h2>
            <p>Real results from real clients</p>
          </div>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Fashion Retailer</h3>
              <p className="case-result">+58% ROAS in 60 days</p>
              <p>Optimized product feeds and catalog structure, reducing CPA by 42% while maintaining scale.</p>
            </div>
            <div className="case-card">
              <h3>Home Goods Store</h3>
              <p className="case-result">+31% Conversion Rate</p>
              <p>Systematic CRO testing on product pages and checkout flow increased orders without additional ad spend.</p>
            </div>
            <div className="case-card">
              <h3>Electronics Brand</h3>
              <p className="case-result">+89% CTR Improvement</p>
              <p>Performance creative testing framework identified winning ad concepts that dramatically lowered acquisition costs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>E-commerce specialists with proven track records</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">AK</div>
              <h4>Anna Kowalski</h4>
              <p className="team-role">Head of CRO</p>
              <p>8 years optimizing e-commerce funnels. Former Growth Lead at three 8-figure DTC brands.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">MR</div>
              <h4>Michael Rodriguez</h4>
              <p className="team-role">Performance Creative Director</p>
              <p>Ex-agency creative strategist. Built testing frameworks that drove $20M+ in profitable ad spend.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">SJ</div>
              <h4>Sarah Johnson</h4>
              <p className="team-role">Analytics Lead</p>
              <p>Data scientist specializing in attribution modeling and predictive analytics for e-commerce.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "IndiahIch transformed our catalog performance. Within 90 days, our Google Shopping ROAS increased by 47%. Their systematic approach to optimization is exactly what we needed."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">DM</div>
                <div>
                  <div className="author-name">David Martinez</div>
                  <div className="author-title">CEO, StyleHub</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "The CRO work they did on our checkout flow was incredible. We saw immediate improvement in cart-to-purchase rate. Best ROI on any agency we've worked with."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">LC</div>
                <div>
                  <div className="author-name">Lisa Chen</div>
                  <div className="author-title">Marketing Director, TechGear</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Their performance creative testing gave us winners that scaled profitably. We finally have a repeatable system for creative production instead of guessing what will work."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JB</div>
                <div>
                  <div className="author-name">James Brown</div>
                  <div className="author-title">Founder, HomeVibe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="orderFormAnchor">
        <div className="container">
          <div className="cta-content">
            <h2>Get Your Free Store Audit</h2>
            <p>Discover untapped growth opportunities in your e-commerce store. Fill out the form below and we'll send you a detailed audit with actionable recommendations.</p>
          </div>
          <form className="lead-form" id="leadForm" onSubmit={handleSubmit}>
            <input type="text" name="__hp" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">First Name *</label>
                <input type="text" id="first_name" name="first_name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name *</label>
                <input type="text" id="last_name" name="last_name" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" name="consent" value="true" required />
                <span>I agree to the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link> *</span>
              </label>
            </div>
            <button type="submit" className="submit-button">Get Store Audit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
