import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

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

      <nav className="bg-gray-900 p-6 text-white fixed left-0 top-0 h-full flex flex-col items-center space-y-6">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex flex-col space-y-4">
          <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'home' ? 'bg-blue-400 text-white' : 'text-gray-300'}`}>
            <Home size={24} />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">Home</span>
          </a>
          <a href="#about" onClick={(e) => smoothScroll(e, '#about')} className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'about' ? 'bg-blue-400 text-white' : 'text-gray-300'}`}>
            <User size={24} />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">About</span>
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
        <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Hello, I'm [Your Name]</h1>
            <p className="text-xl mt-4">A Full-Stack Developer specializing in Node.js & Next.js</p>
          </div>
        </section>

        <section id="about" className="h-screen flex items-center justify-center bg-white">
          <div className="text-center px-10 md:px-40">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg mt-4">Hi, I'm [Your Name], a passionate Full-Stack Developer specializing in modern web technologies like Node.js and Next.js.</p>
          </div>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center px-10">
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-lg mt-4">Here are some of my recent projects...</p>
          </div>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-white">
          <div className="text-center px-10">
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <p className="text-lg mt-4">Feel free to reach out via email or LinkedIn.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
