"use client";
import Image from 'next/image';
import '../styles/founder.scss';
import '../styles/hero.scss';
import '../styles/tracker.scss';
import '../styles/community.scss';
import '../styles/diet.scss';
import { useState } from 'react';

export default function HomePage() {
  const [communitySubmitted, setCommunitySubmitted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {/* Founder Section */}
      <section className="founder-section" id="about">
        {/* Left: Text */}
        <div className="founder-text">
          <h2>Meet the Founder</h2>
          <p>
            Getting diagnosed with Type 1 Diabetes came out of nowhere—no warning, no family history, just a routine blood test and a sudden hospital stay. I started on injections, then moved to the Medtronic 780G pump and Guardian 4 sensor, slowly finding my footing.<br /><br />
            DiabetaTech was born from that journey. It&apos;s a space to build smart tools, track what matters, and make life with T1D a little easier—for myself and for others navigating the same path.
          </p>
        </div>
        {/* Right: Founder Image */}
        <div className="founder-image">
          <Image
            src="/founder.png"
            alt="Founder"
            width={350}
            height={350}
            className="rounded-xl object-cover w-64 h-64 md:w-80 md:h-80"
            priority
          />
        </div>
      </section>
      {/* Hero Image Section */}
      <section className="hero-image-section">
        <div className="hero-image-wrapper">
          <Image
            src="/hero-image.png"
            alt="Hero"
            width={600}
            height={250}
            className="hero-image"
            priority
          />
        </div>
      </section>
      {/* Meal Tracker Playbook Section */}
      <section className="meal-tracker-section">
        <div className="meal-tracker-content">
          <div className="meal-tracker-image">
            <Image
              src="/app_render.png"
              alt="Meal Tracker App Screenshot"
              width={600}
              height={400}
              className="rounded-xl"
              priority
            />
          </div>
          <div className="meal-tracker-text">
            <h2 className="meal-tracker-heading">Meal Tracker Playbook</h2>
            <p className="meal-tracker-description">
              Track meals, insulin, and blood glucose—all in one place. Log what you ate, how many carbs it had, your insulin dose, and BG before/after the meal.
            </p>
            <ul className="meal-tracker-features">
              <li>See how each meal affects your blood sugar</li>
              <li>Spot patterns and learn what works for you</li>
              <li>Tag meals from restaurants or home</li>
              <li>Add photos for easy recall</li>
              <li>Log quickly using iPhone Shortcuts</li>
            </ul>
            <p className="meal-tracker-summary">
              It&apos;s your personal playbook for smarter, more predictable eating with T1D.
            </p>
            <div className="tracker-app-btn-wrapper">
              <a
                href="https://diabetatech-meal-tracker.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="tracker-app-btn"
              >
                Open Meal Tracker App
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Diet Section */}
      <section className="diet-section">
        <div className="diet-content">
          <div className="diet-image">
            <img src="/diet_mom.png" alt="Mom Cooking" className="diet-mom-img" />
          </div>
          <div className="diet-main">
            <h2 className="diet-heading">Diet: Real food. Real love. T1D-friendly.</h2>
            <p className="diet-text">
              Managing Type 1 Diabetes starts at the table—and no one understands that better than a mom. This section is dedicated to recipes lovingly crafted by my own mom, who stepped up in every way after my diagnosis.<br /><br />
              Every dish she shares is built around what matters for T1D:<br />
              <b>Low-carb</b> to avoid BG spikes, <b>High-protein</b> to keep you full and steady, <b>Healthy fats</b> to support balanced nutrition.<br /><br />
              These aren&apos;t just recipes—they&apos;re comfort, care, and daily support in edible form. Whether you&apos;re newly diagnosed or just looking for better food choices, these meals are created to keep you nourished without the blood sugar rollercoaster.
            </p>
            <div className="diet-recipes">
              <a href="/diet/chia-pudding" className="diet-recipe-card">
                <img src="/chia_pudding.png" alt="Chia Pudding Dessert" className="diet-recipe-img" />
                <div className="diet-recipe-info">
                  <div className="diet-recipe-title">Chia Pudding Dessert</div>
                  <div className="diet-recipe-carbs">Net Carbs: 11g</div>
                </div>
              </a>
              <a href="/diet/eggplant-burrata" className="diet-recipe-card">
                <img src="/eggplant.png" alt="Eggplant Burrata" className="diet-recipe-img" />
                <div className="diet-recipe-info">
                  <div className="diet-recipe-title">Eggplant Burrata</div>
                  <div className="diet-recipe-carbs">Net Carbs: 0g</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Community Section */}
      <section className="community-section">
        <div className="community-content">
          <div className="community-main">
            <h2 className="community-heading">Community</h2>
            <p className="community-text">
              DiabetaTech isn&apos;t just about tools—it&apos;s about people.<br /><br />
              Everyone&apos;s experience with Type 1 Diabetes is different, and we want to hear yours. What are you struggling with? What do you wish existed to make life with T1D easier?<br /><br />
              This space is for listening, learning, and building together. Share your challenges, ideas, or even small daily wins—and we&apos;ll work on creating tools that actually help.<br /><br />
              Let&apos;s turn real-life problems into real-life solutions.
            </p>
          </div>
          <div className="community-image">
            <Image
              src="/community.png"
              alt="Community"
              width={420}
              height={350}
              className="rounded-xl community-img"
              priority
            />
            {!communitySubmitted ? (
              <form className="community-form" onSubmit={e => { e.preventDefault(); setCommunitySubmitted(true); }}>
                <label htmlFor="community-input" className="community-label">Tell us your story / Share your feedback</label>
                <textarea id="community-input" className="community-input" rows={4} placeholder="Your story, challenge, or idea..." required></textarea>
                <button type="submit" className="community-submit">Submit</button>
              </form>
            ) : (
              <div className="community-thankyou">Thank you for your message, we will get back to you.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
