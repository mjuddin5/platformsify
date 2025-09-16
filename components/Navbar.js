// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">Platformsify</Link>
      </div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/services" className="hover:text-blue-400">Services</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}
