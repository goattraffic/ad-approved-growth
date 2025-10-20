import { useState, useEffect } from 'react';

export const CMPBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const consentData = {
      purposes: { 1: true, 2: true, 3: true, 4: true, 5: true },
      vendors: {},
      tcString: 'CP0X0X0P0X0X0',
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleReject = () => {
    const consentData = {
      purposes: { 1: false, 2: false, 3: false, 4: false, 5: false },
      vendors: {},
      tcString: '',
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    handleAccept();
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cmp-banner-overlay">
      <div className="cmp-banner">
        {!showSettings ? (
          <>
            <h3>Cookie Consent</h3>
            <p>
              We use cookies to enhance your browsing experience and analyze site traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            <p className="cmp-banner-links">
              <a href="/#/privacy-policy">Privacy Policy</a> | <a href="/#/cookie-policy">Cookie Policy</a>
            </p>
            <div className="cmp-banner-buttons">
              <button onClick={handleReject} className="cmp-button cmp-button-secondary">
                Reject All
              </button>
              <button onClick={() => setShowSettings(true)} className="cmp-button cmp-button-secondary">
                Settings
              </button>
              <button onClick={handleAccept} className="cmp-button cmp-button-primary">
                Accept All
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>Cookie Preferences</h3>
            <div className="cmp-settings">
              <label className="cmp-checkbox">
                <input type="checkbox" defaultChecked disabled />
                <span>Strictly Necessary (Required)</span>
              </label>
              <label className="cmp-checkbox">
                <input type="checkbox" defaultChecked />
                <span>Performance & Analytics</span>
              </label>
              <label className="cmp-checkbox">
                <input type="checkbox" defaultChecked />
                <span>Functional</span>
              </label>
              <label className="cmp-checkbox">
                <input type="checkbox" defaultChecked />
                <span>Targeting & Advertising</span>
              </label>
            </div>
            <div className="cmp-banner-buttons">
              <button onClick={() => setShowSettings(false)} className="cmp-button cmp-button-secondary">
                Back
              </button>
              <button onClick={handleSaveSettings} className="cmp-button cmp-button-primary">
                Save Preferences
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
