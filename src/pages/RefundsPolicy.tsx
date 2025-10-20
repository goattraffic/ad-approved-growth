const RefundsPolicy = () => {
  return (
    <div className="page-legal">
      <section className="page-hero">
        <div className="container">
          <h1>Refunds Policy</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>1. General Policy</h2>
            <p>
              At IndiahIch, we strive to provide high-quality e-commerce optimization services. This 
              Refunds Policy outlines the circumstances under which refunds may be issued and the 
              process for requesting them.
            </p>

            <h2>2. Service-Based Refund Terms</h2>
            
            <h3>2.1 Monthly Retainer Services</h3>
            <p>
              Monthly retainer services are billed in advance. If you wish to cancel, you must provide 
              written notice at least 15 days before the next billing cycle. Services will continue 
              through the end of the current paid period, but no refund will be issued for the current 
              month.
            </p>

            <h3>2.2 Project-Based Services</h3>
            <p>
              For project-based engagements, refund eligibility depends on the stage of project completion:
            </p>
            <ul>
              <li>If requested before work begins: Full refund minus administrative fees (10%)</li>
              <li>If requested after work has commenced: Refund of unearned portion based on completed milestones</li>
              <li>If requested after 50% completion: No refund available</li>
            </ul>

            <h2>3. Satisfaction Guarantee</h2>
            <p>
              For new clients engaging with us for the first time, we offer a 30-day satisfaction 
              guarantee on monthly retainer services. If you are not satisfied with our services within 
              the first 30 days, you may request a refund of up to 50% of the first month's fee, 
              provided:
            </p>
            <ul>
              <li>You have provided requested access and information in a timely manner</li>
              <li>You have participated in scheduled meetings and communications</li>
              <li>You have reviewed deliverables and provided feedback as requested</li>
            </ul>

            <h2>4. Non-Refundable Items</h2>
            <p>The following are generally non-refundable:</p>
            <ul>
              <li>Initial audit or consultation fees</li>
              <li>Third-party costs incurred on your behalf (advertising spend, tool subscriptions, etc.)</li>
              <li>Completed deliverables that have been provided and approved</li>
              <li>Services consumed beyond agreed cancellation notice periods</li>
            </ul>

            <h2>5. Refund Request Process</h2>
            <p>
              To request a refund, please contact us through our website contact form with the following 
              information:
            </p>
            <ul>
              <li>Your name and contact information</li>
              <li>Service agreement or invoice number</li>
              <li>Detailed reason for refund request</li>
              <li>Documentation supporting your request (if applicable)</li>
            </ul>
            <p>
              We will review your request and respond within 5-7 business days. If approved, refunds 
              will be processed within 10-14 business days to the original payment method.
            </p>

            <h2>6. Dispute Resolution</h2>
            <p>
              If you are dissatisfied with our services, we encourage you to contact us first to resolve 
              the issue before requesting a refund. We are committed to client satisfaction and will work 
              to address concerns.
            </p>

            <h2>7. Chargebacks</h2>
            <p>
              Initiating a chargeback without first attempting to resolve the issue with us directly may 
              result in termination of services and may affect your ability to use our services in the 
              future. We reserve the right to dispute unwarranted chargebacks.
            </p>

            <h2>8. Service Quality Issues</h2>
            <p>
              If there are quality issues with our work, we will first attempt to remedy the situation 
              by revising deliverables or providing additional support. Refunds due to quality concerns 
              will only be considered if we are unable to adequately address the issues.
            </p>

            <h2>9. Force Majeure</h2>
            <p>
              We are not liable for refunds due to delays or failures in service delivery caused by 
              circumstances beyond our reasonable control, including but not limited to natural disasters, 
              technical failures, or platform changes by third parties.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refunds Policy at any time. Changes will be effective 
              immediately upon posting to our website. Your continued use of our services constitutes 
              acceptance of any changes.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about our Refunds Policy or wish to request a refund, please contact 
              us using the contact form on our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundsPolicy;
