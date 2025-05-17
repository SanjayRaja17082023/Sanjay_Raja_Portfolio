import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="bg-portfolio-blue-dark text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Interested in my experience?
        </h2>
        <p className="text-portfolio-gray-light mb-8 max-w-2xl mx-auto">
          Download my resume to see my complete work history, education, and
          additional skills.
        </p>
        <a
          href="/Sanjay_Raja-Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-white text-portfolio-blue-dark hover:bg-portfolio-gray-light flex items-center gap-2 mx-auto">
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
