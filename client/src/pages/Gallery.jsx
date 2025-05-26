import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.webp";
const projects = [
  {
    id: 1,
    title: "Modern UI Concept",
    description: "Minimalist layout with bold typography.",
    image: project1,
  },
  {
    id: 2,
    title: "Dark Mode Dashboard",
    description: "Sleek admin panel with chart integration.",
    image: project2,
  },
  {
    id: 3,
    title: "Animated Landing Page",
    description: "Scroll-based motion and SVG graphics.",
    image: project3,
  },
  {
    id: 4,
    title: "Creative Portfolio Layout",
    description: "Grid-based portfolio with glassmorphism.",
    image: project4,
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#f9f9f9] dark:bg-[#121212] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-800 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Our Work
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our creative designs and digital experiments.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#1f1f1f] transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
