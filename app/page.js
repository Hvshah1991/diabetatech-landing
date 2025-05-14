import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Image 
          src="/logo-diabetatech.png" 
          alt="DiabetaTech Logo" 
          width={300}
          height={150}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-4xl font-bold mb-6">
          Smart Type 1 Diabetes Management
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          DiabetaTech provides simple, effective tools for diabetes management, 
          helping you track meals, monitor glucose levels, and gain valuable insights.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/tracker" className="btn btn-primary">
            Try the Meal Tracker
          </Link>
          <Link href="/about" className="btn border border-gray-300 dark:border-gray-700">
            Learn More
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-gray-100 dark:bg-gray-800/30 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Coming Soon: Advanced Meal Tracker</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">Our upcoming meal tracker helps you build a personal database of:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Blood glucose reactions to specific meals</li>
              <li>Insulin doses and their effectiveness</li>
              <li>Restaurant meals and how your body responds</li>
              <li>Visual meal logging with photos</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The tool helps you understand what works for your body, making diabetes 
              management more predictable and less stressful.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Track before-and-after glucose readings to visualize exactly how different foods 
              affect you, and use this knowledge to fine-tune your management approach.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
