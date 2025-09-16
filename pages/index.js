// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Platformsify - Build Smarter</title>
        <meta name="description" content="Your platform for scalable tools and growth" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">🚀 Platformsify</h1>
        <p className="text-lg text-gray-700 mb-6">
          Build, scale, and launch your platform with ease.
        </p>
        <a
          href="https://platformsify.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
        >
          🌐 Visit Live Demo
        </a>
      </main>
    </>
  );
}
