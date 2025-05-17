
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-portfolio-blue-dark mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to contact me using the form or through my contact information.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:sanjay.raja@example.com" className="text-portfolio-blue-dark font-medium hover:text-portfolio-blue transition-colors">
                    rsanjayraja78@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-teal/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-portfolio-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+919876543210" className="text-portfolio-blue-dark font-medium hover:text-portfolio-blue transition-colors">
                    +91 9677334820
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-blue/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sanjay-raja-7100a3248/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue-dark font-medium hover:text-portfolio-blue transition-colors">
                  linkedin.com/in/sanjay-raja-7100a3248
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                {formSubmitted ? (
                  <div className="bg-green-50 text-green-700 p-4 rounded text-center">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-portfolio-blue hover:bg-portfolio-blue-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
