
// import { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       await axios.post("https://pixel-verse-6lqr.onrender.com/api/email/send", formData);
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setStatus("Failed to send message.");
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-[#121212] to-[#1f1f1f] text-white">
//       <motion.h2
//         className="text-4xl font-bold text-center mb-4 text-pink-500"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Get in Touch
//       </motion.h2>
//       <p className="text-center sm:w-[80%] lg:w-[57%] mx-auto mb-5 text-gray-300"> Have a question, collaboration idea, or just want to say hi?
//         Fill out the form below — I'd love to hear from you and will get back as soon as I can!</p>
//       <motion.form
//         onSubmit={handleSubmit}
//         className="max-w-2xl mx-auto grid gap-6 bg-[#2a2a2a] p-8 rounded-xl shadow-lg"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="bg-[#1e1e1e] p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="bg-[#1e1e1e] p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="5"
//           className="bg-[#1e1e1e] p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>

//         <button
//           type="submit"
//           className="relative px-6 py-3 font-bold text-white rounded-lg overflow-hidden group shadow-lg transition-transform transform hover:scale-105"
//         >
//           <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-pink-600 transition-colors duration-500 ease-in-out"></span>
//           <span className="relative z-10">Send Message</span>
//         </button>

//         {status && <p className="text-sm text-center mt-2">{status}</p>}
//       </motion.form>

//       <div className="text-center mt-12 space-y-2">
//         <p>📧 <a href="mailto:abcd123@gmail.com" className="underline">abcd123@gmail.com</a></p>
//         <p>🔗
//           <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="underline mx-2">GitHub</a> |
//           <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="underline mx-2">LinkedIn</a>
//         </p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsLoading(true);

    try {
      // Add timeout and better error handling
      const response = await axios.post(
        "https://pixel-verse-6lqr.onrender.com/api/email/send", 
        formData,
        {
          timeout: 30000, // 30 second timeout
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      
      // More specific error messages
      if (error.code === 'ECONNABORTED') {
        setStatus("Request timed out. Please try again.");
      } else if (error.response) {
        // Server responded with error status
        setStatus(`Server error: ${error.response.status}. Please try again.`);
      } else if (error.request) {
        // Request was made but no response received
        setStatus("Unable to reach server. Please check your connection and try again.");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-[#121212] to-[#1f1f1f] text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-4 text-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>
      <p className="text-center sm:w-[80%] lg:w-[57%] mx-auto mb-5 text-gray-300">
        Have a question, collaboration idea, or just want to say hi?
        Fill out the form below — I'd love to hear from you and will get back as soon as I can!
      </p>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid gap-6 bg-[#2a2a2a] p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-[#1e1e1e] p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-[#1e1e1e] p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="bg-[#1e1e1e] p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isLoading}
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className={`relative px-6 py-3 font-bold text-white rounded-lg overflow-hidden group shadow-lg transition-transform transform hover:scale-105 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-pink-600 transition-colors duration-500 ease-in-out"></span>
          <span className="relative z-10">
            {isLoading ? 'Sending...' : 'Send Message'}
          </span>
        </button>

        {status && (
          <p className={`text-sm text-center mt-2 ${
            status.includes('successfully') ? 'text-green-400' : 
            status.includes('Sending') ? 'text-blue-400' : 'text-red-400'
          }`}>
            {status}
          </p>
        )}
      </motion.form>

      <div className="text-center mt-12 space-y-2">
        <p>📧 <a href="mailto:abcd123@gmail.com" className="underline">abcd123@gmail.com</a></p>
        <p>🔗
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="underline mx-2">GitHub</a> |
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="underline mx-2">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}