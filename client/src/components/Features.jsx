// const features = [
//   {
//     title: "Curated Designs",
//     description: "Browse handpicked design inspirations from various niches and styles.",
//   },
//   {
//     title: "Save What You Love",
//     description: "Bookmark and organize your favorite ideas for quick access.",
//   },
//   {
//     title: "Instant Inspiration",
//     description: "Use the 'Inspire Me' feature to get randomly served visual ideas.",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="px-6 py-12 bg-white text-gray-800">
//       <h2 className="text-3xl font-bold text-center mb-12">Why PixelVerse?</h2>
//       <div className="grid md:grid-cols-3 gap-10">
//         {features.map((feat, i) => (
//           <div key={i} className="p-6 shadow-xl rounded-2xl border hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
//             <p>{feat.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;
import { Sparkles, Bookmark, Lightbulb } from 'lucide-react'; // You can change icons if needed

const features = [
  {
    title: "Curated Designs",
    description: "Browse handpicked design inspirations from various niches and styles.",
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Save What You Love",
    description: "Bookmark and organize your favorite ideas for quick access.",
    icon: <Bookmark className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Instant Inspiration",
    description: "Use the 'Inspire Me' feature to get randomly served visual ideas.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
  },
];

const Features = () => {
  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Why PixelVerse?</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feat, i) => (
          <div
            key={i}
            className="p-8 bg-black hover:bg-white text-white hover:text-black dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl border dark:border-zinc-700 transition-all duration-300 ease-in-out transform hover:scale-102 hover:ring-2 hover:ring-blue-800 text-center cursor-pointer group"
          >
            <div className="mb-4 flex justify-center">{feat.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-gray-400 dark:text-gray-300 group-hover:text-gray-800">
              {feat.description}
            </p>
          </div>
          //           <div 
          //   key={i}
          //   className="group p-8 bg-black text-white rounded-2xl shadow-md border-2 border-pink-500 
          //              transition-all duration-300 ease-in-out transform hover:scale-105 
          //              hover:bg-white hover:text-black hover:border-blue-500 cursor-pointer"
          // >
          //   <div className="mb-4 flex justify-center">{feat.icon}</div>
          //   <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">{feat.title}</h3>
          //   <p className="text-gray-400 group-hover:text-gray-800 transition-colors duration-300">
          //     {feat.description}
          //   </p>
          // </div>
        ))}
      </div>

    </section>
  );
};

export default Features;
