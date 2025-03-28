import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    } py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer">
            KS
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="about" smooth={true} className="nav-link">About</Link>
            <Link to="experience" smooth={true} className="nav-link">Experience</Link>
            <Link to="hackathons" smooth={true} className="nav-link">Hackathons</Link>
            <Link to="publications" smooth={true} className="nav-link">Publications</Link>
            <Link to="skills" smooth={true} className="nav-link">Skills</Link>
            <Link to="projects" smooth={true} className="nav-link">Projects</Link>
            <Link to="contact" smooth={true} className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;