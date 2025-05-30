'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/navbar.scss'; // Adjust path if needed

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo" onClick={handleLinkClick}>
          <Image src="/logo-diabetatech-small.jpg" alt="DiabetaTech Logo" width={40} height={40} priority />
          <span>diabetatech</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-links desktop">
          <Link href="/#about" className="about-link">About</Link>
          <a href="https://diabetatech-meal-tracker.replit.app" target="_blank" rel="noopener noreferrer" className="tracker-link">Tracker</a>
          <Link href="/#diet" className="diet-link">Diet</Link>
          <Link href="/#community" className="community-link">Community</Link>
          <Link href="/contact" className="contact-link">Contact</Link>
        </div>

        {/* Desktop CTA */}
        <div className="desktop">
          <a href="https://www.instagram.com/diabetatech" target="_blank" rel="noopener noreferrer" className="cta">Insulin + Instagram</a>
        </div>

        {/* Animated Hamburger */}
        <button
          className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link href="/#about" className="mobile-link about-link" onClick={handleLinkClick}>About</Link>
          <a href="https://diabetatech-meal-tracker.replit.app" target="_blank" rel="noopener noreferrer" className="mobile-link tracker-link" onClick={handleLinkClick}>Tracker</a>
          <Link href="/#diet" className="mobile-link diet-link" onClick={handleLinkClick}>Diet</Link>
          <Link href="/#community" className="mobile-link community-link" onClick={handleLinkClick}>Community</Link>
          <Link href="/contact" className="mobile-link contact-link" onClick={handleLinkClick}>Contact</Link>
          <a href="https://www.instagram.com/diabetatech" target="_blank" rel="noopener noreferrer" className="mobile-link cta" onClick={handleLinkClick}>Insulin + Instagram</a>
        </div>
      )}
    </nav>
  );
}
