
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Testing Automation tool",
      description: "Developed a comprehensive web-based tool for automating test cases across different platforms, reducing testing time and improving reliability of test results.",
      technologies: ["React", "Tailwind CSS", "Typescript", "Express", "Node.js", "SQL Server", "Playwright (web, API)", "Appium (mobile)"],
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=350&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Assets and Accelerators Hub (Revamped Version)",
      description: ": Modernize and enhance the platform for better performance, usability, and scalability.",
      technologies: ["Next.js", "TypeScript", "MSSQL", "Material UI (MUI)", "Bootstrap"],
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=350&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Test Case Generation from Software Requirements",
      description: ": Create a system to analyze uploaded software requirements and automatically generate test cases in traditional or Gherkin formats.",
      technologies: ["React", "Typescript", "Tailwind CSS", "Node.js", "Express.js", "SQL Server"],
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop&q=80"
    },
    // {
    //   id: 4,
    //   title: "Performance Benchmarking Tool",
    //   description: "Developed a tool to measure and compare application performance metrics, identifying bottlenecks and providing optimization recommendations.",
    //   technologies: ["JavaScript", "Node.js", "Grafana", "Prometheus", "Redis"],
    //   role: "Backend Developer",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=350&fit=crop&q=80"
    // }
  ];

  return (
    <section id="projects" className="bg-portfolio-gray-light py-16">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-portfolio-blue" />
                  <CardTitle className="text-xl text-portfolio-blue-dark">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  <span className="font-medium">Role:</span> {project.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="bg-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
