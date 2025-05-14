import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata = {
  title: "DiabetaTech - Smart Type 1 Diabetes Management Tools",
  description: "DiabetaTech provides innovative tools for Type 1 Diabetes management, integrating meal tracking, glucose monitoring, and data-driven insights for better health outcomes.",
  keywords: [
    "diabetes", 
    "type 1 diabetes", 
    "glucose tracking", 
    "meal tracking", 
    "diabetes management", 
    "health tech",
    "carb counting",
    "insulin dosing",
    "blood glucose monitoring",
    "diabetes data analysis"
  ],
  authors: [{ name: "DiabetaTech" }],
  creator: "DiabetaTech",
  openGraph: {
    title: "DiabetaTech - Smart Type 1 Diabetes Management Tools",
    description: "Innovative tools for effective Type 1 Diabetes management",
    url: "https://diabetatech.com",
    siteName: "DiabetaTech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="container py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">
              <span className="gradient-text">DiabetaTech</span>
            </a>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/about">About</a></li>
                <li><a href="/tracker">Tracker</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-12 py-8">
          <div className="container text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} DiabetaTech. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
