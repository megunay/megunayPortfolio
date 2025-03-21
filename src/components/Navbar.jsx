import { useState } from "react";
import { Home, User, Briefcase, Mail, Wrench, Menu, X } from "lucide-react";

export default function Navbar({ activeSection, smoothScroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  return (
    <>
      {/* Mobile Menu Button - Always Visible on Small Screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-black p-2 rounded-lg"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Sidebar Navigation (Hidden on Small Screens) */}
      <nav className="bg-black p-6 text-white fixed left-0 top-0 h-full md:flex flex-col items-center space-y-6 hidden md:block">
        <h1 className="text-xl font-bold">meGunay</h1>
        <div className="flex flex-col space-y-4">
          {[
            { id: "home", icon: <Home size={24} />, label: "Home" },
            { id: "about", icon: <User size={24} />, label: "About" },
            { id: "skills", icon: <Wrench size={24} />, label: "Skills" },
            { id: "projects", icon: <Briefcase size={24} />, label: "Projects" },
            { id: "contact", icon: <Mail size={24} />, label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => smoothScroll && smoothScroll(e, `#${item.id}`)}
              className={`relative group flex flex-col items-center px-4 py-2 rounded-lg ${
                activeSection === item.id ? "bg-blue-400 text-white" : "text-gray-300"
              }`}
            >
              {item.icon}
              <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 transition-opacity">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu - Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-40">
          {[
            { id: "home", icon: <Home size={24} />, label: "Home" },
            { id: "about", icon: <User size={24} />, label: "About" },
            { id: "skills", icon: <Wrench size={24} />, label: "Skills" },
            { id: "projects", icon: <Briefcase size={24} />, label: "Projects" },
            { id: "contact", icon: <Mail size={24} />, label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                if (smoothScroll) smoothScroll(e, `#${item.id}`);
                setIsMenuOpen(false); // Close menu on click
              }}
              className="text-white text-2xl py-3"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
