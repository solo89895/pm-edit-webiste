
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, Download, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  // Skills list
  const skills = [
    "Logo Design",
    "Brand Identity",
    "Print Design",
    "Social Media Design",
    "UI/UX Design",
    "Typography",
    "Adobe Creative Suite",
    "Figma",
    "Motion Graphics",
    "Photography",
    "Digital Illustration",
    "Art Direction"
  ];
  
  return (
    <Layout>
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Designer, problem solver, and minimalist enthusiast.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-full border-8 border-brand-green max-w-md mx-auto">
                  <img 
                    src="/lovable-uploads/d476fe10-0b08-4912-a3f0-daa52a5a2461.png" 
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6">Hello, I'm Pathum Sanjaya</h2>
              
              <p className="text-lg text-muted-foreground mb-4">
                I'm a graphic designer specializing in minimalist design solutions that communicate clearly and effectively.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                With over 5 years of experience, I've had the pleasure of working with clients across various industries, 
                helping them establish strong visual identities and connect with their audiences through thoughtful design.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                My design philosophy centers around the principle that "less is more." I believe in the power of simplicity 
                and strive to create designs that are both beautiful and functional.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-brand-green transition-colors duration-300"
                >
                  Get In Touch <ArrowRight size={18} />
                </Link>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 border-2 border-black px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
                >
                  Download CV <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-brand-green" size={20} />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Design Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            My approach to every project follows a carefully crafted process that ensures quality results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your brand, objectives, and audience to create a strong foundation.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Concept</h3>
              <p className="text-muted-foreground">
                Exploring various design directions and developing initial concepts based on research.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Refinement</h3>
              <p className="text-muted-foreground">
                Iterating and refining the selected concept until it perfectly matches your vision.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-muted-foreground">
                Providing final assets in all required formats, with ongoing support as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work Together?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let's collaborate on your next project and create something exceptional.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              Start a Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
