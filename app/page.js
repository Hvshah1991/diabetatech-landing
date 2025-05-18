"use client";
import Image from 'next/image';
import '../styles/founder.scss';
import '../styles/hero.scss';
import '../styles/tracker.scss';
import '../styles/community.scss';
import '../styles/diet.scss';
import '../styles/journey.scss';
import { useState, useEffect } from 'react';
import EligibilityChecker from './components/EligibilityChecker';

export default function HomePage() {
  const [communitySubmitted, setCommunitySubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  
  const journeyImages = [
    { src: "/morning_walk.png", caption: "Morning Walk" },
    { src: "/eat_healthy.png", caption: "Eat Healthy" },
    { src: "/sugar_bag.jpg", caption: "Sugar Bag" },
    { src: "/small_treats.png", caption: "Small Treats" },
    { src: "/back_to_bolus.jpg", caption: "Back to Bolus" },
    { src: "/more_treats.jpg", caption: "More Treats" },
    { src: "/fresh_air.png", caption: "Fresh Air" },
    { src: "/spread_love.png", caption: "Spread Love" },
    { src: "/sun_and_vitamin_d.png", caption: "Sun and Vitamin D" },
    { src: "/celebration.png", caption: "Celebration" },
    { src: "/more_fresh_air.png", caption: "More Fresh Air" },
    { src: "/embrace_nature.png", caption: "Embrace Nature" },
    { src: "/spread_love_with_family.jpg", caption: "Spread Love with Family" }
  ];
  
  // Auto scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === journeyImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [journeyImages.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === journeyImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? journeyImages.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openEligibilityChecker = () => {
    setIsEligibilityOpen(true);
  };

  const closeEligibilityChecker = () => {
    setIsEligibilityOpen(false);
  };

  const handleCommunitySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/mvgaljyz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setCommunitySubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your feedback.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! There was a problem submitting your feedback.");
    }
  };

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
          <h1 className="hero-heading">Built by a T1D. One Place. Everything T1D.</h1>
          <p className="hero-description">From meals to mindset—made for life with Type 1.</p>
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
                Open Founder&apos;s Tracker
              </a>
              <button
                onClick={openEligibilityChecker}
                className="qualifier-btn"
              >
                Yes, This Is for Me
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="journey-section">
        <div className="journey-content">
          <div className="journey-text-container">
            <h2 className="journey-heading">Journey</h2>
            <p className="journey-text">
              T1D Life is all about ups and downs, with every day bringing new challenges and victories. The journey with Type 1 Diabetes teaches us to embrace balance—to find joy in morning walks and fresh air, to be mindful about nutrition without missing out on life&apos;s treats. It reminds us to appreciate the support of family and friends, the healing power of nature, and the importance of celebrating every moment. This journey isn&apos;t just about managing blood sugar—it&apos;s about living fully while navigating the daily rhythm of boluses, sensors, and the occasional sugar bag. Through it all, we learn resilience, patience, and the beauty of spreading love in a life that&apos;s sweetened by so much more than glucose.
            </p>
          </div>
          
          <div className="journey-carousel-container">
            <div className="journey-carousel">
              <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {journeyImages.map((image, index) => (
                  <div key={index} className="carousel-item">
                    <Image 
                      src={image.src} 
                      alt={image.caption} 
                      className="carousel-image" 
                      width={600}
                      height={350}
                      style={{objectFit: "cover"}}
                    />
                    <div className="carousel-caption">{image.caption}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="carousel-controls">
              <button className="carousel-control" onClick={prevSlide}>&#8249;</button>
              <button className="carousel-control" onClick={nextSlide}>&#8250;</button>
            </div>
            
            <div className="carousel-indicators">
              {journeyImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Diet Section */}
      <section className="diet-section">
        <div className="diet-content">
          <h2 className="diet-heading">Diet: Real food. Real love. T1D-friendly.</h2>
          
          <div className="diet-content-row">
            <div className="diet-image">
              <Image
                src="/diet_mom.png"
                alt="Mom Cooking"
                width={500}
                height={400}
                className="diet-mom-img"
                priority
              />
            </div>
            
            <div className="diet-main">
              <p className="diet-text">
                Managing Type 1 Diabetes starts at the table—and no one understands that better than a mom. This section is dedicated to recipes lovingly crafted by my own mom, who stepped up in every way after my diagnosis.<br /><br />
                Every dish she shares is built around what matters for T1D:<br />
                <b>Low-carb</b> to avoid BG spikes, <b>High-protein</b> to keep you full and steady, <b>Healthy fats</b> to support balanced nutrition.<br /><br />
                These aren&apos;t just recipes—they&apos;re comfort, care, and daily support in edible form. Whether you&apos;re newly diagnosed or just looking for better food choices, these meals are created to keep you nourished without the blood sugar rollercoaster.
              </p>
            </div>
          </div>
          
          <div className="diet-recipes">
            <a href="/diet" className="diet-recipe-card">
              <Image 
                src="/recipe_collection.png" 
                alt="All Recipes" 
                width={200}
                height={100}
                className="diet-recipe-img" 
              />
              <div className="diet-recipe-info">
                <div className="diet-recipe-title">View All Recipes</div>
                <div className="diet-recipe-carbs">Browse Our Collection</div>
              </div>
            </a>
            <a href="/diet/chia-pudding" className="diet-recipe-card">
              <Image 
                src="/chia_pudding.png" 
                alt="Chia Pudding Dessert" 
                width={300}
                height={200}
                className="diet-recipe-img" 
              />
              <div className="diet-recipe-info">
                <div className="diet-recipe-title">Chia Pudding Dessert</div>
                <div className="diet-recipe-carbs">Net Carbs: 11g</div>
              </div>
            </a>
            <a href="/diet/eggplant-burrata" className="diet-recipe-card">
              <Image 
                src="/eggplant.png" 
                alt="Eggplant Burrata" 
                width={300}
                height={200}
                className="diet-recipe-img" 
              />
              <div className="diet-recipe-info">
                <div className="diet-recipe-title">Eggplant Burrata</div>
                <div className="diet-recipe-carbs">Net Carbs: 0g</div>
              </div>
            </a>
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
              <form className="community-form" onSubmit={handleCommunitySubmit}>
                <input type="hidden" name="form-name" value="community-feedback" />
                <label htmlFor="community-input" className="community-label">Tell us your story / Share your feedback</label>
                <textarea id="community-input" name="message" className="community-input" rows={4} placeholder="Your story, challenge, or idea..." required></textarea>
                <div className="form-group">
                  <label htmlFor="community-email" className="community-label">Your Email</label>
                  <input 
                    type="email" 
                    id="community-email"
                    name="email" 
                    className="community-input" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <button type="submit" className="community-submit">Submit</button>
              </form>
            ) : (
              <div className="community-thankyou">Thank you for your message, we will get back to you.</div>
            )}
          </div>
        </div>
      </section>
      
      {/* Eligibility Checker Modal */}
      <EligibilityChecker isOpen={isEligibilityOpen} onClose={closeEligibilityChecker} />
    </div>
  );
}
