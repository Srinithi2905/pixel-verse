import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Features />
      <section className="py-20 bg-gradient-to-r from-white-100 via-indigo-800 to-white-100 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-4">
            PixelVerse isn’t just a platform — it's a movement. Connect with creatives, exchange ideas, and get inspired.
          </p>
          <p className="text-lg mb-6">
            We're building a space where imagination meets implementation. If you believe in design with purpose — you're home.
          </p>
          <a
            href="#contact"
            className="relative inline-block mt-4 px-6 py-3 rounded-full font-semibold text-blue-800 bg-white overflow-hidden group shadow-lg"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-400 to-blue-600 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Connect With Us
            </span>
          </a>

        </div>
      </section>
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">How PixelVerse Works</h2>
          <p className="text-lg text-gray-600 mb-12">
            Discover how we turn creative sparks into design brilliance — all in a few simple steps.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition bg-gradient-to-br from-blue-400 via-white to-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">1. Explore</h3>
              <p className="text-gray-700">
                Browse through an ever-growing gallery of design inspirations curated from top creators and trends.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition bg-gradient-to-br from-indigo-500 via-pink-200 to-indigo-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">2. Get Inspired</h3>
              <p className="text-gray-700">
                Use the Inspire Me tool to discover creative ideas tailored to your design mood and style.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition bg-gradient-to-br from-indigo-500 via-white to-indigo-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Create & Share</h3>
              <p className="text-gray-700">
                Bring your vision to life and showcase it with the PixelVerse community — spark the next wave of innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default Home;
