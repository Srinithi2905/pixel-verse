const CTA = () => {
  return (
    <section className="px-6 py-20 bg-indigo-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Let Your Creativity Flow</h2>
      <p className="text-lg mb-6">
        Start exploring now or get inspired by something new. PixelVerse is your visual playground.
      </p>
      <a
        href="/inspire"
        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-400 hover:from-blue-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Inspire Me
      </a>


    </section>
  );
};

export default CTA;
