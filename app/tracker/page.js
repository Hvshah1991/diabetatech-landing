'use client';
import { useEffect, useState } from 'react';

export default function TrackerRedirect() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  useEffect(() => {
    setIsRedirecting(true);
    // Short delay for better UX
    const redirectTimer = setTimeout(() => {
      window.location.href = "https://diabetatech-meal-tracker.replit.app";
    }, 1500);
    
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center p-8 max-w-md">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Taking you to DiabetaTech Meal Tracker</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You're being redirected to our interactive meal tracking tool.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          If you're not redirected automatically, 
          <a 
            href="https://diabetatech-meal-tracker.replit.app" 
            className="text-primary font-medium hover:underline ml-1"
          >
            click here
          </a>.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2 font-medium">Features of the Meal Tracker:</p>
          <ul className="list-disc list-inside space-y-1 text-left">
            <li>Log meals with before and after glucose readings</li>
            <li>Track insulin dosage and carb counts</li>
            <li>Visualize meal impact on blood glucose</li>
            <li>Build your personal food response database</li>
          </ul>
        </div>
      </div>
    </main>
  );
}