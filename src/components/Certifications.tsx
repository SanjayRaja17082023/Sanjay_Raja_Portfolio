
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Software Testing",
      issuer: "Indian Institute of Technical Education",
      date: "January 2023",
      description: "Comprehensive course covering manual and automated testing methodologies with hands-on experience using industry tools."
    },
    {
      id: 2,
      name: "Advanced React Development",
      issuer: "Frontend Masters",
      date: "June 2022",
      description: "Deep dive into React.js advanced concepts including React Hooks, Context API, and performance optimization."
    },
    {
      id: 3,
      name: "Python for Data Science",
      issuer: "DataCamp",
      date: "November 2022",
      description: "Course covering Python fundamentals for data analysis, manipulation, and visualization."
    }
  ];

  return (
    <section id="certifications" className="bg-portfolio-gray-light py-16">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {certifications.map((cert, index) => (
            <Card key={cert.id} className="hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-portfolio-teal" />
                  <h3 className="text-xl font-semibold text-portfolio-blue-dark">{cert.name}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                  <p className="text-sm font-medium text-portfolio-teal">{cert.date}</p>
                  <p className="text-gray-700 mt-2">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
