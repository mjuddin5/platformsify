import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Platformsify</div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/services" className="hover:text-blue-500">Services</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}
