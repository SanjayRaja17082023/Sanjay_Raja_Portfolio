
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-gray-dark text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Sanjay Raja. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#home" className="text-portfolio-gray-light hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-portfolio-gray-light hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-portfolio-gray-light hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-portfolio-gray-light hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
