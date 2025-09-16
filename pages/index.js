import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center p-10 min-h-screen bg-gray-50">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800">🚀 Welcome to Platformsify</h1>
        <p className="text-lg text-gray-600 mb-4">
          Build, scale, and launch your platform with ease.
        </p>
        <a
          href="https://platformsify.vercel.app"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our live demo
        </a>
      </main>
      <Footer />
    </>
  );
}
