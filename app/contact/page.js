import Link from 'next/link';
import '../../styles/contact.scss';

export default function ContactPage() {
  return (
    <main className="contact-main">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-intro">
          We&apos;d love to hear from you! Whether you have questions about our tools, 
          want to share your experience, or are interested in collaborating, 
          we&apos;re here to help.
        </p>

        <div className="contact-methods">
          <div className="contact-method">
            <h2>Email</h2>
            <a href="mailto:harshvshah.22@gmail.com" className="contact-link">
              harshvshah.22@gmail.com
            </a>
            <p>We aim to respond within 24 hours</p>
          </div>

          <div className="contact-method">
            <h2>Social Media</h2>
            <a 
              href="https://instagram.com/diabetatech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              @diabetatech
            </a>
            <p>Follow us for updates and community stories</p>
          </div>
        </div>

        <div className="contact-back">
          <Link href="/">&larr; Back to Home</Link>
        </div>
      </div>
    </main>
  );
}