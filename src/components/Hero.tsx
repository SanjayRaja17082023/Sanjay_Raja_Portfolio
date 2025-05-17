
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-portfolio-gray-light to-white pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80" 
              src='public/shared image (2)-modified.png'
              alt="Sanjay Raja" 
              className="rounded-full w-60 h-60 mx-auto md:mx-0 object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-portfolio-teal font-medium text-lg">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-gray-dark">
              Sanjay Raja
            </h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-blue font-semibold">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
            Passionate full-stack web developer with 2 years of experience in building scalable and performant web applications
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button className="bg-portfolio-blue hover:bg-portfolio-blue-dark text-white" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-portfolio-gray-dark hover:text-portfolio-blue">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
