import Image from 'next/image';
import '../styles/founder.scss';
import '../styles/hero.scss';
import '../styles/tracker.scss';
export default function HomePage() {
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
    </div>
  );
}
