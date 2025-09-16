import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Platformsify - Build Smarter</title>
        <meta name="description" content="Launch your ideas with a modular, scalable platform." />
      </Head>

      <main className="text-center px-6 py-12 bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-extrabold mb-4">🚀 Welcome to Platformsify</h1>
          <p className="text-lg mb-6 text-gray-600">
            Build, scale, and launch your platform with ease using Next.js & Vercel.
          </p>
          <a
            href="https://platformsify.vercel.app"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            target="_blank"
          >
            Visit Live Demo
          </a>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">⚙️ Modular Architecture</h2>
            <p className="text-gray-600">Scale without complexity. Build with clean, reusable components.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🚀 Performance First</h2>
            <p className="text-gray-600">Optimized for speed with Next.js and modern deployment tools.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🛠 Developer Friendly</h2>
            <p className="text-gray-600">Powered by Tailwind CSS. Easy to extend and integrate.</p>
          </div>
        </section>
      </main>
    </>
  );
}
