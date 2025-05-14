import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-100/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Management for 
                <span className="gradient-text block"> Type 1 Diabetes</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl text-gray-700 dark:text-gray-300">
                DiabetaTech provides comprehensive tools for effective diabetes management,
                integrating nutrition tracking, glucose monitoring, and personalized insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/tracker" className="btn btn-primary">
                  Try the Meal Tracker
                </a>
                <a href="/about" className="btn border border-gray-300 dark:border-gray-700">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {/* Using an existing SVG as a temporary placeholder */}
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <img 
                    src="/globe.svg" 
                    alt="DiabetaTech Analytics"
                    className="w-40 h-40 mb-4 opacity-70"
                  />
                  <div className="text-xl font-semibold gradient-text">DiabetaTech Dashboard</div>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                    Track meals, monitor glucose levels, and gain valuable insights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Meal Tracking</h3>
              <p className="text-gray-700 dark:text-gray-300">Log meals with carb counts, insulin doses, and blood glucose reactions to better understand your body's response.</p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Glucose Trend Analysis</h3>
              <p className="text-gray-700 dark:text-gray-300">Visualize before-and-after glucose readings to identify patterns and optimize your insulin dosing strategy.</p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-700 dark:text-gray-300">Quick logging through iPhone Shortcuts and photo uploads makes tracking easy and efficient in your daily routine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-100 dark:bg-gray-100/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            Our advanced meal tracker will be released soon, helping you build a personal database of foods, 
            restaurants, and your body's unique responses to help fine-tune your diabetes management.
          </p>
          <a href="/tracker" className="btn btn-primary">
            Get Early Access
          </a>
        </div>
      </section>
    </main>
  );
}
