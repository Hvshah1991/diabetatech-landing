export default function AboutPage() {
  return (
    <main>
      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">About DiabetaTech</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                DiabetaTech was born from a personal journey with Type 1 Diabetes. Our mission is to create intuitive, 
                data-driven tools that make diabetes management less burdensome and more insightful.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We believe that understanding your body's unique patterns is key to better health outcomes. 
                Our tools are designed to help you collect, visualize, and learn from your own data.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Our Approach</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We're building DiabetaTech step by step, starting with focused tools that address specific needs 
                in the diabetes community. We believe in shipping early and often, constantly learning from user feedback.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our technology combines user-friendly interfaces with sophisticated data analysis to provide personalized insights 
                that help you make better decisions about food, insulin, and overall health.
              </p>
            </div>
            
            <div>
              <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">The Founder's Story</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  As a recent Type 1 Diabetes diagnosis recipient, I quickly discovered that while there are many diabetes management tools available, 
                  few offer the comprehensive, data-driven approach I was looking for.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  DiabetaTech emerged from my own need to track meals alongside blood glucose reactions in a way that would 
                  build knowledge over time and help me avoid surprises.
                </p>
              </div>
              
              <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  We envision DiabetaTech growing into a comprehensive platform that integrates all aspects of diabetes management:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Nutrition and carb counting</li>
                  <li>Glucose monitoring and trend analysis</li>
                  <li>Physical activity tracking</li>
                  <li>Stress and sleep quality monitoring</li>
                  <li>Community support and knowledge sharing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/tracker" className="btn btn-primary">
              Try Our Tools
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}