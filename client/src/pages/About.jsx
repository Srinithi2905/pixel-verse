import { motion } from "framer-motion";
import creator from "../assets/creator.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500"
        >
          About PixelVerse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300"
        >
          Dive into the story and vision behind PixelVerse – where creativity meets technology.
        </motion.p>
      </section>

      {/* Our Story & Creator Section in Same Container */}
      <section className="max-w-4xl mx-auto mb-16 space-y-16">
        {/* Our Story */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-pink-400">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            PixelVerse was born from a passion for exceptional design and intuitive digital experiences.
            We believe that every interface should inspire creativity while being functional and user-friendly.
            With this project, we aim to help designers, developers, and creatives find the spark they need for their next big idea.
          </p>
        </div>

        {/* Creator Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={creator}
            alt="Creator"
            className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-pink-300 dark:border-blue-500"
          />
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-pink-400">Hi, I'm Srinithi 👋</h3>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              I'm a passionate UI designer and visual storyteller. I specialize in crafting intuitive, elegant interfaces that blend creativity with usability.
              PixelVerse is my canvas to inspire others through beautiful and functional digital design.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        {[
          { title: "Creativity", icon: "🎨", desc: "We believe in pushing the boundaries of design." },
          { title: "Innovation", icon: "🚀", desc: "Merging design with modern web technology." },
          { title: "Accessibility", icon: "🌍", desc: "Everyone deserves beautiful, usable design." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 transition"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h4 className="text-lg font-semibold mb-1 text-blue-700 dark:text-pink-300">{item.title}</h4>
            <p className="text-gray-800 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Let’s collaborate and create something amazing</h3>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-6 py-3 rounded-full transition shadow-md"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}
