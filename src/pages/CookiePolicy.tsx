const CookiePolicy = () => {
  return (
    <div className="page-legal">
      <section className="page-hero">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>1. Introduction</h2>
            <p>
              This Cookie Policy explains how IndiahIch ("we", "us", or "our") uses cookies and similar 
              technologies on our website. By using our website, you consent to the use of cookies in 
              accordance with this policy.
            </p>

            <h2>2. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They 
              are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2>3. Types of Cookies We Use</h2>
            
            <h3>3.1 Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the website to function properly. They enable basic functions 
              like page navigation and access to secure areas. The website cannot function properly without 
              these cookies.
            </p>

            <h3>3.2 Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which pages are 
              visited most often. This data helps us improve how our website works.
            </p>

            <h3>3.3 Functional Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your language preference) 
              and provide enhanced, more personal features.
            </p>

            <h3>3.4 Targeting/Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements more relevant to you and your interests. They 
              are also used to limit the number of times you see an advertisement and help measure the 
              effectiveness of advertising campaigns.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              We may use third-party service providers who may set cookies on your device on our behalf when 
              you visit our website to allow them to deliver the services they are providing.
            </p>

            <h2>5. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Please note that removing or blocking cookies 
              may impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <p>
              Most browsers automatically accept cookies, but you can modify your browser settings to decline 
              cookies if you prefer. Instructions for blocking or deleting cookies can be found in your 
              browser's help section.
            </p>

            <h2>6. Cookie Consent</h2>
            <p>
              When you first visit our website, you will see a cookie consent banner. You can choose to accept 
              all cookies, reject non-essential cookies, or customize your preferences.
            </p>

            <h2>7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
              or our data practices. The "Last updated" date at the top of this policy indicates when it was 
              last revised.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please use the contact form on our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
