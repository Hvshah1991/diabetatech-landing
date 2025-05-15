'use client';
import { useState } from 'react';
import '../../styles/cookie.scss';

const COOKIE_BG = '#00141D';
const COOKIE_TEXT = '#F2D8A8';
const ACCENT = '#00B5A2';
const BTN_BG = '#00141D';
const BTN_TEXT = '#F2D8A8';
const BTN_BORDER = '#F2D8A8';

export default function CookieConsent() {
  const [open, setOpen] = useState(true);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState({
    preferences: false,
    performance: false,
    marketing: false,
  });

  if (!open) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-modal">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="cookie-close"
          aria-label="Close cookie consent"
        >
          ×
        </button>
        {/* Main message or preferences */}
        {!showPrefs ? (
          <>
            <div style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.6 }}>
              This website uses cookies to ensure you get the best experience.{' '}
              <a href="/privacy-policy" className="cookie-link">Learn more</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                className="cookie-btn accept"
                onClick={() => setOpen(false)}
              >
                ACCEPT
              </button>
              <button
                className="cookie-btn decline"
                onClick={() => setOpen(false)}
              >
                DECLINE
              </button>
              <button
                className="cookie-btn prefs"
                onClick={() => setShowPrefs(true)}
              >
                PREFERENCES
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.2rem', textAlign: 'center' }}>
              Manage consent preferences
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', justifyContent: 'center' }}>
              <button
                className="cookie-btn decline"
                onClick={() => setOpen(false)}
              >
                DECLINE ALL
              </button>
              <button
                className="cookie-btn accept"
                onClick={() => setOpen(false)}
              >
                ACCEPT ALL
              </button>
            </div>
            <div style={{ fontSize: '0.98rem', marginBottom: '1.2rem', color: COOKIE_TEXT, textAlign: 'center' }}>
              We use cookies to optimize website functionality, analyze the performance, and provide personalized experience to you. Some cookies are essential to make the website operate and function correctly. Those cookies cannot be disabled. In this window you can manage your preference of cookies.
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontWeight: 600 }}>Necessary cookies</span>
                <span style={{ fontSize: '0.95em', opacity: 0.7 }}>Always allowed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Preferences cookies</span>
                <input type="checkbox" className="cookie-toggle" checked={prefs.preferences} onChange={e => setPrefs(p => ({ ...p, preferences: e.target.checked }))} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Performance cookies</span>
                <input type="checkbox" className="cookie-toggle" checked={prefs.performance} onChange={e => setPrefs(p => ({ ...p, performance: e.target.checked }))} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Statistics and Marketing cookies</span>
                <input type="checkbox" className="cookie-toggle" checked={prefs.marketing} onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))} />
              </div>
            </div>
            <button
              className="cookie-btn save"
              onClick={() => setOpen(false)}
            >
              SAVE
            </button>
          </>
        )}
      </div>
    </div>
  );
} 