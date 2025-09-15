import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Platformsify - Empower Your Digital Presence</title>
        <meta name="description" content="Your platform for scalable tools and growth" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>🚀 Welcome to Platformsify!</h1>
        <p>
          Platformsify is your launchpad for fast, scalable, modern web platforms.
          Whether you're building a startup MVP, a business landing page, or internal tools —
          Platformsify gives you the tools to succeed.
        </p>

        <h2>🔧 Features</h2>
        <ul>
          <li>⚡ Next.js 15 for blazing performance</li>
          <li>🎨 Responsive UI with optional Tailwind CSS</li>
          <li>📡 Built-in API routes (Node.js)</li>
          <li>🚀 Deployed with Vercel</li>
          <li>🔄 Ready for CI/CD (GitHub actions - coming soon)</li>
        </ul>

        <p>
          👉 Explore the <a href="/about">About</a>, <a href="/services">Services</a>, and <a href="/contact">Contact</a> pages.
        </p>
      </main>
    </>
  );
}
