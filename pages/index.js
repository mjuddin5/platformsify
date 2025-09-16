import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Platformsify – Build Smarter, Launch Faster</title>
        <meta name="description" content="Launch your platform with confidence using Platformsify's modern toolkit. Scalable, fast, and beautifully designed." />
        <meta property="og:title" content="Platformsify – Build Smarter" />
        <meta property="og:description" content="Modern web platform kit for startups and builders." />
        <meta property="og:image" content="https://platformsify.vercel.app/og-image.png" />
        <meta property="og:url" content="https://platformsify.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">🚀 Platformsify</h1>
        <p className="mb-2 text-lg">Build, scale, and launch your platform with ease.</p>
        <p className="mb-4">
          Visit our live demo:{' '}
          <a
            href="https://platformsify.vercel.app"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            platformsify.vercel.app
          </a>
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Platformsify?</h2>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>⚡ Lightning-fast performance</li>
            <li>📱 Fully responsive and mobile-ready</li>
            <li>🛠 Built with modern Next.js architecture</li>
            <li>💼 Perfect for startups, agencies, and indie hackers</li>
          </ul>
        </div>
      </main>
    </>
  );
}
