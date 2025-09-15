import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Platformsify - Build Smarter</title>
        <meta name="description" content="Your platform for scalable tools and growth" />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>🚀 Welcome to Platformsify!</h1>
        <p>Build, scale, and launch your platform with ease.</p>
        <p>
          Visit our live demo: <a href="https://platformsify.vercel.app" target="_blank">platformsify.vercel.app</a>
        </p>
      </main>
    </>
  );
}
