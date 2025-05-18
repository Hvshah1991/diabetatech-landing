"use client";
import { useState } from 'react';
import '../../styles/eligibility.scss';

export default function EligibilityChecker({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    phone: '',
    cgm: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  const handlePhoneSelect = (phone) => {
    setSelections({...selections, phone});
    setStep(2);
  };
  
  const handleCGMSelect = (cgm) => {
    setSelections({...selections, cgm});
    setStep(3);
  };
  
  const isPerfectMatch = selections.phone === 'iphone' && selections.cgm === 'guardian4';
  
  const handleSubmitWaitlist = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Add device selections to the form data
    formData.append("Phone Type", selections.phone);
    formData.append("CGM Type", selections.cgm);
    
    try {
      const response = await fetch("https://formspree.io/f/mkgryleg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! There was a problem submitting your form.");
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="eligibility-modal-overlay">
      <div className="eligibility-modal">
        <button className="eligibility-close-btn" onClick={onClose}>×</button>
        
        {step === 1 && (
          <div className="eligibility-step">
            <h2>What type of phone do you use?</h2>
            <div className="eligibility-options">
              <button 
                className="eligibility-option" 
                onClick={() => handlePhoneSelect('iphone')}
              >
                iPhone (iOS)
              </button>
              <button 
                className="eligibility-option" 
                onClick={() => handlePhoneSelect('android')}
              >
                Android
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="eligibility-step">
            <h2>What CGM do you use?</h2>
            <div className="eligibility-options">
              <button 
                className="eligibility-option" 
                onClick={() => handleCGMSelect('guardian4')}
              >
                Guardian 4 by Medtronic
              </button>
              <button 
                className="eligibility-option" 
                onClick={() => handleCGMSelect('dexcom')}
              >
                Dexcom G6/G7
              </button>
              <button 
                className="eligibility-option" 
                onClick={() => handleCGMSelect('libre')}
              >
                Abbott Freestyle Libre
              </button>
              <button 
                className="eligibility-option" 
                onClick={() => handleCGMSelect('other')}
              >
                Other
              </button>
            </div>
            <button className="eligibility-back" onClick={() => setStep(1)}>
              &larr; Back
            </button>
          </div>
        )}
        
        {step === 3 && (
          <div className="eligibility-step">
            {isPerfectMatch ? (
              <div className="eligibility-result perfect-match">
                <h2>Perfect Match!</h2>
                <p>DiabetaTech Meal Tracker is optimized for your device combination.</p>
                <a 
                  href="https://buy.stripe.com/00w00i9zCabyaFRdu0gMw00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eligibility-button payment-button"
                >
                  Perfect Match – Start Now
                </a>
              </div>
            ) : (
              <div className="eligibility-result waitlist">
                <h2>Join Our Waitlist</h2>
                <p>We&apos;re working on supporting your device combination. Join our waitlist to get notified when it&apos;s available.</p>
                
                {isFormSubmitted ? (
                  <div className="form-success-message">
                    <h3>Thanks for joining our waitlist!</h3>
                    <p>We&apos;ll notify you when support for your device combination is available.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitWaitlist} className="waitlist-form">
                    <div className="form-group">
                      <label htmlFor="waitlist-email">Email</label>
                      <input 
                        type="email" 
                        id="waitlist-email"
                        name="email" 
                        required 
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="waitlist-name">Name</label>
                      <input 
                        type="text" 
                        id="waitlist-name"
                        name="name" 
                        required 
                        placeholder="Your Name"
                      />
                    </div>
                    <button type="submit" className="eligibility-button waitlist-button">
                      Join Waitlist
                    </button>
                  </form>
                )}
              </div>
            )}
            <button className="eligibility-back" onClick={() => setStep(2)}>
              &larr; Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 