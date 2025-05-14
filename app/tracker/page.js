'use client';
import { useEffect } from 'react';

export default function TrackerRedirect() {
  useEffect(() => {
    window.location.href = "https://diabetatech-meal-tracker.replit.app";
  }, []);

  return <p className="p-8 text-lg">Redirecting to Tracker...</p>;
}