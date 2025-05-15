import Link from 'next/link';
import '../../styles/privacy.scss';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-policy-main">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-date">Effective Date: May 15, 2025</p>
      <p className="privacy-intro">
        At DiabetaTech, your privacy matters. This policy explains how we collect, use, and protect your information when you use our website.
      </p>
      <h2>1. Information We Collect</h2>
      <ul>
        <li>Personal information (like name or email) if you choose to contact us or subscribe to updates</li>
        <li>Usage data (such as pages visited, device type, browser, IP address) through analytics tools like Google Analytics</li>
        <li>Cookies to enhance your browsing experience</li>
      </ul>
      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Improve our website and tools</li>
        <li>Respond to inquiries or feedback</li>
        <li>Share updates or news (if you&apos;ve subscribed)</li>
        <li>Understand how visitors use the site (via analytics)</li>
      </ul>
      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell or share your personal information with third parties, except:
      </p>
      <ul>
        <li>When required by law</li>
        <li>With trusted services that help us run the site (e.g., analytics or hosting providers), under strict confidentiality agreements</li>
      </ul>
      <h2>4. Your Rights</h2>
      <ul>
        <li>Access or update your personal data</li>
        <li>Request deletion of your data</li>
        <li>Withdraw consent for future communications</li>
      </ul>
      <p>To make a request, contact us at: <a href="mailto:harshvshah.22@gmail.com">harshvshah.22@gmail.com</a></p>
      <h2>5. Data Security</h2>
      <p>
        We take reasonable steps to protect your data, but no website can guarantee 100% security. We encourage you to use strong passwords and avoid sharing sensitive information unnecessarily.
      </p>
      <h2>6. Children&apos;s Privacy</h2>
      <p>
        This website is not intended for children under 13. We do not knowingly collect personal data from minors.
      </p>
      <h2>7. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version will always be posted on this page with the updated date.
      </p>
      <hr className="privacy-divider" />
      <h2>Contact Us:</h2>
      <p>If you have any questions or concerns, please reach out at <a href="mailto:harshvshah.22@gmail.com">harshvshah.22@gmail.com</a></p>
      <div className="privacy-back">
        <Link href="/">&larr; Back to Home</Link>
      </div>
    </main>
  );
} 