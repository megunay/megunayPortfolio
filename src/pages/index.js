/* eslint-disable */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Home, User, Briefcase, Mail, Wrench } from 'lucide-react';
//import { Html5, Css3, Vue, Javascript } from "lucide-react"; // Lucide Icons   Bunlar kullanilmiyor kaldiracagim sorun cikarmazsa
import "devicon/devicon.min.css"; // Import Devicon CSS
import Contact from "@/components/Contact";
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
    image: "/images/placeholder.png", // Replace with real images later
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
        <style>{`html, body { overflow-x: hidden; background: black }`}</style>
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

      <div className="ml-[80px] w-[calc(100%-80px)]">
        <section id="home" className="h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <p className="text-green-500 text-left">Hello! My name is,</p>
            <h1 className="text-7xl font-bold">Musteba Erkan GUNAY</h1>
            <div className="text-3xl font-bold text-green-500">
            <Typewriter
              options={{
              strings: ['Hello!!', "I'm a Full-Stack Developer.","I create accessible, user friendly websites."],
              autoStart: true,
              loop: true,
              }}
            />
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex flex-col justify-center bg-black text-white px-10 md:px-40">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-slate-400 text-center">About Me</h2>
            <p className="text-lg mt-4 text-gray-300 w-1/2 ">
              Hi, I&rsquo;m <span className="text-blue-400 font-bold">Erkan</span>! I&rsquo;m a passionate Full-Stack Developer with a background in 
              Mechanical Engineering. I thrive on solving complex problems and continuously learning new technologies to build 
              efficient, scalable applications.
            </p>

            <p className="text-lg mt-4 text-gray-300">
              I specialize in modern web technologies, including:
            </p>

            <ul className="text-gray-300 mt-4 space-y-2">
              <li><span className="text-blue-400 font-semibold">Frontend:</span> HTML, CSS, Tailwind, Vue.js, Next.js, JavaScript</li>
              <li><span className="text-green-400 font-semibold">Backend:</span> Python, Node.js, Express.js, Flask</li>
              <li><span className="text-yellow-400 font-semibold">Database:</span> MongoDB, PostgreSQL, MySQL</li>
              <li><span className="text-red-400 font-semibold">Ops:</span> Git, Docker, AWS, Vercel</li>
            </ul>

            <p className="text-lg mt-4 text-gray-300 w-1/2">
              I&rsquo;m a hardworking and enthusiastic developer who enjoys tackling challenges and staying ahead in the 
              ever-evolving tech world. When I&rsquo;m not coding, I spend quality time with my lovely wife and baby boy, 
              who motivate me every day. Let&rsquo;s connect and build something amazing together! 🚀
            </p>

            <h3 className="text-2xl font-bold mt-8 text-slate-400">Education</h3>
            <div className="mt-4 text-gray-300">
              <p><span className="text-green-300 font-semibold">2010-2015:</span> Karabuk University (Turkey) - B.Sc. in Mechanical Engineering</p>
              <p><span className="text-green-300 font-semibold">2016-2018:</span> TAFE NSW (Sydney, Australia) - Advanced Diploma in Mechanical Engineering</p>
              <p><span className="text-green-300 font-semibold">2020-2022:</span> Hacettepe University (Turkey) - Master&rsquo;s in Software Engineering (Incomplete)</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 text-slate-400">Experience</h3>
            <div className="mt-4 text-gray-300">
              <p><span className="text-green-300 font-semibold">2020-2021:</span> GUN-KA Machinery (Turkey) - Production Engineer</p>
              <p><span className="text-green-300 font-semibold">2021-2023:</span> GUN-KA Machinery (Turkey) - Production Manager</p>
              <p><span className="text-green-300 font-semibold">2023-:</span> Archimedes Schools (Vietnam) - STEM Teacher</p>
            </div>
          </div>
        </section>


        <section id="skills" className="min-h-screen flex flex-col justify-center bg-black text-white px-10 md:px-40">
          <h2 className="text-4xl font-bold text-center text-slate-400">Skills</h2>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold mb-6 ml-10 pt-10 text-slate-400 border-b border-gray-600 pb-2">Front-end</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {frontend.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold mb-6 ml-10 pt-10 text-slate-400 border-b border-gray-600 pb-2">Back-end</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {backend.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold mb-6 ml-10 pt-10 text-slate-400 border-b border-gray-600 pb-2">Database</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {database.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold mb-6 ml-10 pt-10 text-slate-400 border-b border-gray-600 pb-2">Ops</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {ops.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <i className={`${skill.icon} text-3xl`}></i>
                  <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen text-white py-20 px-10 md:px-40">
          <h2 className="text-4xl font-bold text-center text-slate-400 mb-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-black">
          <div className="text-center px-10 bg-black">
            <Contact />
            <p className="text-lg mt-1">Made by M. E. Gunay</p>
          </div>
        </section>
      </div>
    </div>
  );
}
