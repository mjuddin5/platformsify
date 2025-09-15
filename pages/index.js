import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Platformsify - Empowering Modern Business</title>
      </Head>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <Image
          src="/logo.png"
          alt="Platformsify Logo"
          width={200}
          height={200}
        />
        <h1>🚀 Welcome to Platformsify</h1>
        <p>Empowering modern businesses with intelligent digital solutions.</p>

        <section style={{ marginTop: '2rem' }}>
          <h2>Our Services</h2>
          <ul>
            <li>✅ Strategic Digital Solutions</li>
            <li>📦 Scalable Cloud Platforms</li>
            <li>📊 Business Intelligence & Automation</li>
            <li>🌐 Global Web Infrastructure</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <a href="/contact">📬 Get in touch with us →</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
