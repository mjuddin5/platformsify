import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Platformsify' }) {
  return (
    <>
      <Head>
        <title>{title} | Platformsify</title>
      </Head>
      <header style={{ padding: '1rem', background: '#f5f5f5' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main style={{ padding: '2rem' }}>{children}</main>
      <footer style={{ padding: '1rem', background: '#f5f5f5', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} Platformsify. All rights reserved.</p>
      </footer>
    </>
  );
}
