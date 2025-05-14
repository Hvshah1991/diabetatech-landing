export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to DiabetaTech</h1>
      <p className="text-lg max-w-xl">Smart tools for managing Type 1 Diabetes — from meal tracking to glucose trends, all built with care and data.</p>
      <a href="/tracker" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">Try the Meal Tracker</a>
    </main>
  );
}
