// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-blue-400">Home</Link>
          <Link href="#about" className="hover:text-blue-400">About</Link>
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4 text-center">
          <Link href="#home" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#projects" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;