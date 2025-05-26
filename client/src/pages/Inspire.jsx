import React, { useState } from "react";
import { motion } from "framer-motion";

const Inspire = () => {
  const [inspiration, setInspiration] = useState(null);

  const sampleInspirations = [
    {
      type: "Quote",
      content: "Design is not just what it looks like and feels like. Design is how it works. – Steve Jobs",
    },
    {
      type: "Design Prompt",
      content: "Design a mobile app for tracking mental wellness and journaling moods.",
    },
    {
      type: "Color Palette",
      content: ["#F0F4FF", "#A3BFFA", "#617BFF", "#1E3A8A", "#111827"],
    },
    {
      type: "UI Idea",
      content: "Create a neumorphic login form with subtle shadows and highlights.",
    },
    {
      type: "Typography Pairing",
      content: "Use 'Playfair Display' for headings and 'Inter' for body text.",
    },
    {
      type: "Micro-Interaction Tip",
      content: "Add hover feedback to buttons with scale and color transitions.",
    },
    {
      type: "Accessibility Tip",
      content: "Ensure color contrast meets WCAG standards for better readability.",
    },
    {
      type: "Layout Challenge",
      content: "Build a responsive pricing section with toggle between monthly/yearly plans.",
    },
    {
      type: "Dark Mode Idea",
      content: "Create a toggle for light/dark themes using Tailwind CSS + localStorage.",
    },
    {
      type: "Quote",
      content: "Styles come and go. Good design is a language, not a style. – Massimo Vignelli",
    },
  ];


  const handleInspire = () => {
    const random = sampleInspirations[Math.floor(Math.random() * sampleInspirations.length)];
    setInspiration(random);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#fce4ec] dark:from-[#1e1e1e] dark:to-[#2c2c2c] px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Intro Section */}
        <div className="mb-14">
          <h1 className="text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-4 leading-snug">
            Spark Your Imagination
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you're stuck in a creative block or just need a nudge to start your next project, PixelVerse is here to fuel your ideas. Explore quotes, prompts, and palettes designed to ignite inspiration.
          </p>
        </div>

        {/* Inspire Me Button Section */}
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 to-indigo-200 bg-clip-text text-transparent">
          Need a Creative Push?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Click below to discover your next spark of inspiration.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleInspire}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Inspire Me
        </motion.button>


        {/* Result Display */}
        {inspiration && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 p-6 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{inspiration.type}</h3>
            {inspiration.type === "Color Palette" ? (
              <div className="flex justify-center gap-4">
                {inspiration.content.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2"
                    style={{ backgroundColor: color }}
                    title={color}
                  ></div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 dark:text-gray-300">{inspiration.content}</p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Inspire;
