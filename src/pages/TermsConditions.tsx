const TermsConditions = () => {
  return (
    <div className="page-legal">
      <section className="page-hero">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using the IndiahIch website and services, you agree to be bound by these 
              Terms and Conditions. If you do not agree with any part of these terms, you may not use 
              our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              IndiahIch provides e-commerce optimization services including but not limited to catalog 
              optimization, performance creative development, conversion rate optimization, product feed 
              management, analytics, and customer lifetime value strategy.
            </p>

            <h2>3. Service Engagement</h2>
            
            <h3>3.1 Service Agreement</h3>
            <p>
              Services are provided based on a separate service agreement or statement of work that 
              outlines the specific scope, deliverables, timeline, and pricing.
            </p>

            <h3>3.2 Client Responsibilities</h3>
            <p>
              Clients are responsible for providing timely access to necessary accounts, data, and 
              information required for service delivery. Delays caused by lack of client cooperation 
              may affect project timelines.
            </p>

            <h2>4. Intellectual Property</h2>
            
            <h3>4.1 Our Property</h3>
            <p>
              All content, methodologies, tools, and processes developed by IndiahIch remain our 
              intellectual property unless explicitly transferred in writing.
            </p>

            <h3>4.2 Client Property</h3>
            <p>
              All client data, brand assets, and proprietary information remain the client's property. 
              We will not use client information beyond the scope necessary to deliver services.
            </p>

            <h3>4.3 Deliverables</h3>
            <p>
              Upon full payment, clients receive ownership rights to specific deliverables as outlined 
              in the service agreement, such as created ad creatives and optimization reports.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. Generally, monthly retainer 
              services are billed in advance, and project work may require deposits or milestone payments.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the 
              engagement. This obligation survives termination of the service agreement.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              IndiahIch provides services on a best-efforts basis. While we strive for optimal results, 
              we cannot guarantee specific outcomes such as ROAS targets or conversion rate improvements. 
              Our liability is limited to the fees paid for the specific services in question.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate services with written notice as specified in the service agreement. 
              Clients remain responsible for payment of services rendered up to the termination date.
            </p>

            <h2>9. Warranties and Disclaimers</h2>
            <p>
              We warrant that services will be performed professionally and in accordance with industry 
              standards. However, we make no warranties regarding specific business outcomes or results. 
              Services are provided "as is" to the extent permitted by law.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              Clients agree to indemnify IndiahIch against claims arising from misuse of our services, 
              violation of third-party rights, or inaccurate information provided by the client.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with applicable laws. 
              Any disputes will be resolved through binding arbitration or in courts of competent jurisdiction.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services after 
              changes constitutes acceptance of the modified terms.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us through the contact form 
              on our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
