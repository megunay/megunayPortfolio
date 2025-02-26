    // components/Projects.js
//import Image from "next/image";
//import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A brief description of the first project.",
    image: "/project1.jpg",
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "Project Two",
    description: "A brief description of the second project.",
    image: "/project2.jpg",
    link: "https://github.com/yourusername/project2"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">My Projects</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.3 }} 
              className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a href={project.link} target="_blank" className="mt-3 inline-block text-blue-400 hover:underline">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;