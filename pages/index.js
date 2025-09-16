export default function Home() {
  return (
    <main className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">🚀 Platformsify</h1>
      <p className="mb-2">Build, scale, and launch your platform with ease.</p>
      <p>
        Visit our live demo:{' '}
        <a href="https://platformsify.vercel.app" className="text-blue-600 underline">
          platformsify.vercel.app
        </a>
      </p>

      {/* Features Section */}
      <section className="mt-12 grid md:grid-cols-3 gap-6 text-left">
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">⚙️ Modular Architecture</h2>
          <p>Scale without complexity. Build with clean, maintainable components.</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">🚀 Performance First</h2>
          <p>Optimized for speed using Next.js and modern deployment tools like Vercel.</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">🛠 Developer Friendly</h2>
          <p>Built with Tailwind CSS, easy to extend, and ready for dynamic integrations.</p>
        </div>
      </section>
    </main>
  );
}
