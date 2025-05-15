import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['200', '300', '400', '500'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
});

export const metadata = {
  title: "DiabetaTech",
  description: "Smart tools for managing Type 1 Diabetes — from meal tracking to glucose trends, all built with care and data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-diabetatech.png" />
      </head>
      <body className={`${plusJakarta.variable} ${dmMono.variable}`}>
        <Navbar />
        <CookieConsent />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
