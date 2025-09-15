import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Platformsify - Build Smarter</title>
        <meta name="description" content="Your platform for scalable tools and growth" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 Welcome to Platformsify</h1>
          <p className="text-lg md:text-xl mb-6">
            A modern web toolkit powered by Next.js — made to help you launch, scale, and grow your platform.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </section>

        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">🔧 Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">⚡ Next.js 15</h3>
              <p>Fast, flexible, and optimized for modern apps.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">🎨 Tailwind CSS</h3>
              <p>Style quickly with utility-first classes.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">📡 API Routes</h3>
              <p>Serverless backend capabilities with Node.js.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">🚀 Deployed on Vercel</h3>
              <p>Blazing fast global deployments with 1 command.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <p className="text-gray-600">
            Learn more: <a href="/about" className="text-blue-600 hover:underline">About</a> | <a href="/services" className="text-blue-600 hover:underline">Services</a> | <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
          </p>
        </section>
      </main>
    </>
  );
}
