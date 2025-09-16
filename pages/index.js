import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          🚀 Welcome to Platformsify
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          A modern web platform kit built for visionaries. Scale faster, launch smarter, and grow your brand with confidence.
        </p>

        <a
          href="https://platformsify.vercel.app"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-md font-semibold shadow-md hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Demo
        </a>

        <div className="mt-16 text-sm text-gray-500">
          Built with ❤️ by <strong>Meheraj Uddin</strong> — Founder & CEO
        </div>
      </main>
      <Footer />
    </>
  );
}
