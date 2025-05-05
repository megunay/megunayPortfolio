/* eslint-disable */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import "devicon/devicon.min.css";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Image from "next/image";

const frontend = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
  { name: "Next.js", icon: "devicon-nextjs-line white" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" }
];

const backend = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "Flask", icon: "devicon-flask-original" }
];

const database = [
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-original colored" }
];

const ops = [
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Vercel", icon: "devicon-vercel-line" }
];

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a placeholder description for Project One. Replace it with real details later.",
    image: "/images/placeholder.png",
    github: "https://github.com/yourusername/project-one"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a placeholder description for Project Two. Replace it with real details later.",
    image: "/images/placeholder.png",
    github: "https://github.com/yourusername/project-two"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a placeholder description for Project Three. Replace it with real details later.",
    image: "/images/placeholder.png",
    github: "https://github.com/yourusername/project-three"
  }
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= offsetTop - height / 2) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Full-Stack Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`html, body { overflow-x: hidden; background: black }`}</style>
      </Head>

      <Navbar activeSection={activeSection} onNavClick={smoothScroll} />

      <div className="ml-[80px] w-[calc(100%-80px)]">
        {/* Home Section */}
        <section id="home" className="h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <p className="text-green-500 text-left">Hello! My name is,</p>
            <h1 className="text-7xl font-bold">Musteba Erkan GUNAY</h1>
            <div className="text-3xl font-bold text-green-500">
              <Typewriter
                options={{
                  strings: ['Hello!!', "I'm a Full-Stack Developer.", "I create accessible, user friendly websites."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center bg-black text-white px-10 md:px-40 pt-20">
          <h2 className="text-4xl font-bold text-center text-slate-400 mb-10">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg leading-8">
            <p className="mb-6">
              Hello! I'm <span className="text-green-400 font-semibold">Musteba Erkan GUNAY</span>, a passionate and dedicated <span className="text-green-400">Full-Stack Web Developer</span> with a background in Mechanical Engineering.
            </p>
            <p className="mb-6">
              I enjoy building web applications that are fast, accessible, and user-friendly. My current focus is mastering technologies like <span className="text-green-400">Vue.js, Next.js, Node.js</span>, and modern backend systems such as <span className="text-green-400">MongoDB</span> and <span className="text-green-400">PostgreSQL</span>.
            </p>
            <p className="mb-6">
              I'm a fast learner who loves exploring new tools, frameworks, and best practices. With hands-on experience in both frontend and backend development, I strive to create seamless and responsive digital experiences.
            </p>
            <p>
              Outside of coding, I'm a husband and a proud father. My long-term goal is to build impactful digital products and eventually establish my own game development studio.
            </p>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col justify-center bg-black text-white px-10 md:px-40 pt-20">
          <h2 className="text-4xl font-bold text-center text-slate-400 mb-10">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Frontend</h3>
              <div className="flex flex-wrap gap-4">
                {frontend.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-gray-800 p-2 rounded shadow">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Backend</h3>
              <div className="flex flex-wrap gap-4">
                {backend.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-gray-800 p-2 rounded shadow">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Database</h3>
              <div className="flex flex-wrap gap-4">
                {database.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-gray-800 p-2 rounded shadow">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-4">
                {ops.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-gray-800 p-2 rounded shadow">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="min-h-screen text-white py-20 px-10 md:px-40">
          <h2 className="text-4xl font-bold text-center text-slate-400 mb-10">My Projects</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3 p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-2 inline-block">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-black text-white px-10 md:px-40 pt-20">
          <h2 className="text-4xl font-bold text-center text-slate-400 mb-10">Contact Me</h2>
          <Contact />
        </section>
      </div>
    </div>
  );
}
