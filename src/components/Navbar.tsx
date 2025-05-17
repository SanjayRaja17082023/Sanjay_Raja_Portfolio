
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    // { label: 'Certifications', link: '#certifications' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="font-bold text-xl text-portfolio-blue-dark">
          Sanjay Raja
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.link}
              className="text-portfolio-gray-dark hover:text-portfolio-blue transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#resume" 
            className="bg-portfolio-blue text-white px-4 py-2 rounded hover:bg-portfolio-blue-dark transition-colors"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.link}
                className="py-2 text-portfolio-gray-dark hover:text-portfolio-blue transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#resume" 
              className="py-2 text-portfolio-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
