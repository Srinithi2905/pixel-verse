import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-indigo-900 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        Welcome to <span className="text-pink-500">PixelVerse</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-8">
        Discover, get inspired, and craft your next big design masterpiece. A creative space for visual thinkers.
      </p>
      <a
        href="/gallery"
        className="relative inline-block px-6 py-3 font-semibold text-lg text-white rounded-full group overflow-hidden border-2 border-pink-500 transform transition duration-500 ease-out hover:scale-105"
      >
        <span
          className="absolute inset-0 w-0 h-full bg-pink-500 transition-all duration-500 ease-out group-hover:w-full"
        ></span>
        <span className="relative z-10">Explore Gallery</span>
      </a>

    </section>
  );
};

export default Hero;
