// components/About.js
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        
        {/* Left: Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
          <Image 
            src="/profile.jpg" 
            alt="Musteba Erkan GUNAY" 
            width={256} 
            height={256} 
            className="object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300">
            Hi! I&apos;m a passionate **Full-Stack Developer** specializing in **Vue.js & Node.js**. 
            I love building fast, user-friendly applications and exploring new technologies.
          </p>
          <p className="mt-4 text-gray-300">
            I enjoy solving problems, working on open-source projects, and continuously learning to improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;