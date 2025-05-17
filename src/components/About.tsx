
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserRound, Code, GitBranch, Database } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React.js', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express.js', category: 'backend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'HTML/CSS', category: 'frontend' },
    { name: 'MS SQL', category: 'database' },
    { name: 'SQL', category: 'database' },
    { name: 'Selenium', category: 'testing' },
    { name: 'Git', category: 'tools' },
  ];
  
  return (
    <section id="about" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-portfolio-blue-dark">Background</h3>
            <p className="text-gray-700">
              I'm a software developer with 2 years of experience specializing in web application development and testing automation. My passion lies in creating efficient, maintainable code and building tools that solve real-world problems.
            </p>
            
            <h3 className="text-2xl font-semibold text-portfolio-blue-dark">Career Objective</h3>
            <p className="text-gray-700">
              To leverage my expertise in test automation and software development to build innovative applications that deliver exceptional user experiences. I am committed to continuous learning and staying at the forefront of technological advancements.
            </p>
            
            <h3 className="text-2xl font-semibold text-portfolio-blue-dark">My Approach</h3>
            <p className="text-gray-700">
              I follow Agile methodologies to ensure project success through iterative development, continuous integration, and regular stakeholder feedback. This approach allows for flexibility and adaptability throughout the development lifecycle.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-portfolio-blue-dark mb-6">Technical Stack</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-portfolio-blue shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Code className="h-8 w-8 text-portfolio-blue" />
                    <div>
                      <h4 className="font-semibold text-portfolio-gray-dark">Frontend</h4>
                      <ul className="mt-2 space-y-1">
                        {techStack.filter(tech => tech.category === 'frontend').map(tech => (
                          <li key={tech.name} className="text-gray-600">{tech.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-portfolio-teal shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <GitBranch className="h-8 w-8 text-portfolio-teal" />
                    <div>
                      <h4 className="font-semibold text-portfolio-gray-dark">Backend</h4>
                      <ul className="mt-2 space-y-1">
                        {techStack.filter(tech => tech.category === 'backend').map(tech => (
                          <li key={tech.name} className="text-gray-600">{tech.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-portfolio-blue shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Database className="h-8 w-8 text-portfolio-blue" />
                    <div>
                      <h4 className="font-semibold text-portfolio-gray-dark">Database</h4>
                      <ul className="mt-2 space-y-1">
                        {techStack.filter(tech => tech.category === 'database').map(tech => (
                          <li key={tech.name} className="text-gray-600">{tech.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-portfolio-teal shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <UserRound className="h-8 w-8 text-portfolio-teal" />
                    <div>
                      <h4 className="font-semibold text-portfolio-gray-dark">Testing & Tools</h4>
                      <ul className="mt-2 space-y-1">
                        {techStack.filter(tech => tech.category === 'testing' || tech.category === 'tools').map(tech => (
                          <li key={tech.name} className="text-gray-600">{tech.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
