// components/sections/Features.js
export default function Features() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Platformsify?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">⚡ Fast Deployment</h3>
          <p>Set up and scale your front-end with zero config using Vercel & Next.js.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">🔐 Secure & Scalable</h3>
          <p>Production security and performance — from code to cloud.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">🧠 Dev-Friendly</h3>
          <p>Clean architecture, Tailwind CSS, and ready-to-extend components.</p>
        </div>
      </div>
    </section>
  );
}
