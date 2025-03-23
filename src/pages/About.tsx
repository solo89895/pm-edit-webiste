
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, Download, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Skills list - updated to remove UI/UX Design and Figma
  const skills = [
    "Logo Design",
    "Brand Identity",
    "Print Design",
    "Social Media Design",
    "Typography",
    "Adobe Creative Suite",
    "Motion Graphics",
    "Photography",
    "Digital Illustration",
    "Art Direction"
  ];
  
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-secondary to-gray-100">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Designer, problem solver, and creative enthusiast.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="animate-fade-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl border-8 border-brand-green max-w-md mx-auto shadow-xl">
                  <img 
                    src="/lovable-uploads/ab39fe14-9682-4dd7-9695-6348a487954e.png" 
                    alt="Portrait"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="animate-slide-in-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Hello, I'm Pathum Sanjaya</h2>
              
              <p className="text-lg text-muted-foreground mb-4">
                I'm a graphic designer specializing in creative design solutions that communicate clearly and effectively.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                With over 2 years of experience, I've had the pleasure of working with clients across various industries, 
                helping them establish strong visual identities and connect with their audiences through thoughtful design.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                My design philosophy centers around creativity and purpose. I believe in creating designs 
                that are both beautiful and functional.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-brand-green transition-colors duration-300 hover:scale-105 transform"
                >
                  Get In Touch <ArrowRight size={18} />
                </Link>
                
                <a 
                  href="https://drive.google.com/file/d/1T9Lt_gn0djc4LfF_1BMQ1sEJTdAT_2Pj/view?usp=sharing"
                  download="Pathum_Sanjaya_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-black px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300 hover:scale-105 transform"
                >
                  Download CV <Download size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-secondary">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "#f9f9f9" }}
              >
                <CheckCircle className="text-brand-green" size={20} />
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Design Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              My approach to every project follows a carefully crafted process that ensures quality results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your brand, objectives, and audience to create a strong foundation.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Concept</h3>
              <p className="text-muted-foreground">
                Exploring various design directions and developing initial concepts based on research.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Refinement</h3>
              <p className="text-muted-foreground">
                Iterating and refining the selected concept until it perfectly matches your vision.
              </p>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-muted-foreground">
                Providing final assets in all required formats, with ongoing support as needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-emerald-500">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work Together?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let's collaborate on your next project and create something exceptional.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Start a Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
