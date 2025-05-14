import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="container py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">About DiabetaTech</h1>
        
        <div className="bg-gray-100 dark:bg-gray-800/30 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            DiabetaTech was born from a personal journey with Type 1 Diabetes. Our mission is to create intuitive, 
            data-driven tools that make diabetes management less burdensome and more insightful.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We believe that understanding your body&apos;s unique patterns is key to better health outcomes. 
            Our tools are designed to help you collect, visualize, and learn from your own data.
          </p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800/30 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">The Founder&apos;s Story</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            As a recent Type 1 Diabetes diagnosis recipient, I quickly discovered that while there are many diabetes 
            management tools available, few offer the comprehensive, data-driven approach I needed.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            DiabetaTech emerged from my own need to track meals alongside blood glucose reactions in a way that would 
            build knowledge over time and help me avoid surprises.
          </p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We&apos;re building DiabetaTech step by step, starting with focused tools that address specific needs 
            in the diabetes community. We believe in shipping early and often, constantly learning from user feedback.
          </p>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We envision DiabetaTech growing into a comprehensive platform that integrates all aspects of diabetes management:
          </p>
          
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>Nutrition and carb counting</li>
            <li>Glucose monitoring and trend analysis</li>
            <li>Physical activity tracking</li>
            <li>Stress and sleep quality monitoring</li>
            <li>Community support and knowledge sharing</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link href="/tracker" className="btn btn-primary">
          Try Our Tools
        </Link>
      </div>
    </main>
  );
}