// components/Hero.js
//import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-white bg-gray-900">
      <div className="text-center">
        {/* Animated Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Hi, I&apos;m [Your Name]
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg text-gray-300"
        >
          Full-Stack Developer | Vue.js & Node.js
        </motion.p>

        {/* Animated Button */}
        <motion.a 
          href="#projects"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
