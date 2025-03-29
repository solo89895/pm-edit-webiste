import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  // Navigation links
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Design', path: '/design' },
    { title: 'Contact', path: '/contact' },
    { title: 'About', path: '/about' },
  ];

  // Logo animation variants
  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }),
    hover: { y: -2, color: '#39E535' }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container-custom">
        <nav className="flex justify-between items-center py-4">
          {/* Animated Logo */}
          <Link to="/" className="relative group" onClick={closeMenu}>
            <motion.div
              className="flex items-baseline"
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-baseline overflow-hidden">
                {/* PM */}
                <motion.span 
                  className="text-3xl font-black bg-gradient-to-r from-black to-brand-green bg-clip-text text-transparent [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]"
                  variants={letterVariants}
                  custom={0}
                >
                  P
                </motion.span>
                <motion.span 
                  className="text-3xl font-black bg-gradient-to-r from-black to-brand-green bg-clip-text text-transparent [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]"
                  variants={letterVariants}
                  custom={1}
                >
                  M
                </motion.span>
              </div>
              
              {/* EDIT */}
              <div className="flex items-baseline ml-1 overflow-hidden">
                {['E', 'D', 'I', 'T'].map((letter, i) => (
                  <motion.span
                    key={letter}
                    className="text-3xl font-black text-black [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]"
                    variants={letterVariants}
                    custom={i + 2}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-green"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-black tracking-wide uppercase transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-green' 
                    : 'text-gray-900 hover:text-brand-green'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-lg font-bold tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-green' 
                    : 'text-gray-900 hover:text-brand-green'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
