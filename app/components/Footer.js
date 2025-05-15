import Link from 'next/link';
import '../../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} DiabetaTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 