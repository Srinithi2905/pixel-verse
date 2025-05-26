import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger & close icons

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Inspire Me', path: '/inspire' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/90 dark:bg-zinc-900/90 shadow-md sticky top-0 z-50 backdrop-blur p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          PixelVerse
        </Link>

        {/* Desktop Nav Links */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-base transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden  focus:outline-none text-indigo-500"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
