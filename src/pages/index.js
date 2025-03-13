import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Home, User, Briefcase, Mail, Wrench } from 'lucide-react';
import { Html5, Css3, Vue, Javascript } from "lucide-react"; // Lucide Icons
import "devicon/devicon.min.css"; // Import Devicon CSS

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


export default function About() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
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
      </Head>

      <nav className="bg-black p-6 text-white fixed left-0 top-0 h-full flex flex-col items-center space-y-6">
        <h1 className="text-xl font-bold">meGunay</h1>
        <div className="flex flex-col space-y-4">
          <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'home' ? 'bg-blue-400 text-white' : 'text-gray-300'}`}>
            <Home size={24} />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">Home</span>
          </a>
          <a href="#about" onClick={(e) => smoothScroll(e, '#about')} className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'about' ? 'bg-blue-400 text-white' : 'text-gray-300'}`}>
            <User size={24} />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">About</span>
          </a>
          <a href="#skills" onClick={(e) => smoothScroll(e, '#skills')} className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'skills' ? 'bg-blue-400 text-white' : 'text-gray-300'}`}>
            <Wrench size={24} />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">Skills</span>
          </a>
          <a href="#projects" onClick={(e) => smoothScroll(e, '#projects')} className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'projects' ? 'bg-blue-400 text-white' : 'text-gray-300'}`}>
            <Briefcase size={24} />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">Projects</span>
          </a>
          <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'contact' ? 'bg-blue-400 text-white' : 'text-gray-300'}`}>
            <Mail size={24} />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">Contact</span>
          </a>
        </div>
      </nav>

      <div className="ml-20 w-full">
        <section id="home" className="h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <p className="text-green-500 text-left">Hello! My name is,</p>
            <h1 className="text-7xl font-bold">Musteba Erkan GUNAY</h1>
            <p className="text-xl mt-4">A Full-Stack Developer specializing in Node.js & Next.js</p>
          </div>
        </section>

        <section id="about" className="h-screen flex items-center justify-center bg-black">
          <div className="text-center px-10 md:px-40">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg mt-4">Hi, I'm Erkan, a passionate Full-Stack Developer specializing in modern web technologies like Node.js and Next.js.</p>
          </div>
        </section>

        <section id="skills" className="ml-20 w-full flex flex-col bg-black">
          <h2 className="text-4xl font-bold text-center text-slate-400">Skills</h2>
          <div className="text-left ml-20">
            <h2 className="text-2xl font-bold mb-6 pt-10 text-slate-400 border-b border-gray-600 w-full pb-2">Front-end</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {frontend.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-left ml-20">
            <h2 className="text-2xl font-bold mb-6 pt-10 text-slate-400 border-b border-gray-600 w-full pb-2">Back-end</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {backend.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-left ml-20">
            <h2 className="text-2xl font-bold mb-6 pt-10 text-slate-400 border-b border-gray-600 w-full pb-2">Database</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {database.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-left ml-20">
            <h2 className="text-2xl font-bold mb-6 pt-10 text-slate-400 border-b border-gray-600 w-full pb-2">Ops</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {ops.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center bg-black">
          <div className="text-center px-10">
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-lg mt-4">Here are some of my recent projects...</p>
          </div>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-black">
          <div className="text-center px-10">
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <p className="text-lg mt-4">Feel free to reach out via email or LinkedIn.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
