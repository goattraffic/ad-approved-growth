import { Link } from 'react-router-dom';

const Contact = () => {
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
        submitBtn.textContent = 'Send Message';
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  };

  return (
    <div className="page-contact">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">
            Get in touch to discuss how we can help optimize your e-commerce store
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Talk Growth</h2>
              <p>
                Whether you're looking for a specific service or want to discuss your overall 
                e-commerce strategy, we're here to help. Fill out the form and we'll get back 
                to you within 24 hours.
              </p>
              <div className="info-item">
                <h3>Business Hours</h3>
                <p>Monday - Friday<br />9:00 AM - 6:00 PM</p>
              </div>
              <div className="info-item">
                <h3>What to Expect</h3>
                <p>
                  After you submit this form, we'll review your information and reach out to 
                  schedule a discovery call. We'll discuss your current challenges, goals, and 
                  how we can help.
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="lead-form" id="leadForm" onSubmit={handleSubmit}>
                <input type="text" name="__hp" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                <div className="form-group">
                  <label htmlFor="first_name">First Name *</label>
                  <input type="text" id="first_name" name="first_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name *</label>
                  <input type="text" id="last_name" name="last_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="consent" value="true" required />
                    <span>I agree to the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link> *</span>
                  </label>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
