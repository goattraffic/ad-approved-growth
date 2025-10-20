const About = () => {
  return (
    <div className="page-about">
      <section className="page-hero">
        <div className="container">
          <h1>About IndiahIch</h1>
          <p className="page-subtitle">Your partner in e-commerce growth and optimization</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Who We Are</h2>
              <p>
                IndiahIch is a specialized e-commerce optimization agency focused on driving measurable growth 
                for online retailers. We combine deep platform expertise with systematic testing methodologies 
                to improve every aspect of your store's performance.
              </p>
              <p>
                Our team consists of former e-commerce operators, growth marketers, and data analysts who 
                have collectively managed over $100M in profitable ad spend and optimized thousands of 
                product catalogs.
              </p>
            </div>
            <div className="content-text">
              <h2>Our Approach</h2>
              <p>
                We believe in data-driven optimization, not gut feelings. Every recommendation is backed by 
                analysis of your store data, competitive research, and proven frameworks that have worked 
                across hundreds of e-commerce businesses.
              </p>
              <p>
                We're not a full-service agency trying to do everything. We specialize in what moves the 
                needle most for e-commerce: catalog quality, ad creative performance, conversion rate, and 
                customer lifetime value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Results-Focused</h3>
              <p>
                We're measured by one thing: your business growth. Every project includes clear KPIs 
                and regular reporting on what's working.
              </p>
            </div>
            <div className="value-card">
              <h3>Transparent Process</h3>
              <p>
                No black boxes. You'll understand exactly what we're testing, why, and what the 
                results mean for your bottom line.
              </p>
            </div>
            <div className="value-card">
              <h3>Continuous Improvement</h3>
              <p>
                Optimization is never "done." We implement systematic testing frameworks that 
                keep finding wins month after month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What types of e-commerce stores do you work with?</h3>
              <p>
                We work primarily with established e-commerce stores doing $50K+ in monthly revenue. 
                Our services are platform-agnostic—we've optimized stores on Shopify, WooCommerce, 
                Magento, BigCommerce, and custom platforms. As long as you sell products online and 
                run paid traffic, we can help.
              </p>
            </div>
            <div className="faq-item">
              <h3>How quickly can I expect to see results?</h3>
              <p>
                Most clients see initial improvements within 30-45 days. Quick wins like feed 
                optimization and catalog fixes can show results immediately. Deeper work like CRO 
                testing and creative development typically shows compounding results over 60-90 days. 
                We provide weekly or monthly reporting depending on your service level.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you require long-term contracts?</h3>
              <p>
                We offer both project-based engagements and ongoing monthly retainers. Most clients 
                start with a 3-month commitment to allow time for meaningful optimization and testing 
                cycles. After that, we move to month-to-month terms—you stay because the work delivers 
                ROI, not because you're locked in.
              </p>
            </div>
            <div className="faq-item">
              <h3>What's included in the free store audit?</h3>
              <p>
                We review your product catalog structure, feed quality, current ad creative performance, 
                conversion funnel, and analytics setup. You'll receive a detailed report highlighting 
                the biggest opportunities for improvement with estimated impact. There's no obligation 
                to work with us after receiving the audit.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can you work with my existing agency or team?</h3>
              <p>
                Absolutely. Many of our clients have in-house teams or existing agency relationships. 
                We're specialists who complement broader marketing efforts. We work collaboratively 
                with your media buyers, developers, and other partners to implement optimizations.
              </p>
            </div>
            <div className="faq-item">
              <h3>What access do you need to my store and advertising accounts?</h3>
              <p>
                Depending on the services you choose, we typically need read access to your e-commerce 
                platform, Google Analytics, and advertising accounts (Google Ads, Meta, etc.). For 
                implementation work, we may need limited admin access. We always use secure credential 
                sharing practices and can work within your compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
