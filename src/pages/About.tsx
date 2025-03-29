import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, Download, CheckCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const About: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailClick = async () => {
    try {
      setIsLoading(true);
      // Open Gmail in a new tab
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=your.email@gmail.com&su=Design%20Inquiry&body=Hello%20Pathum%2C%0A%0AI%20am%20reaching%20out%20regarding%20', '_blank');
      // Keep loading state for 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to open email client:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
              <div className="relative group mx-auto max-w-[320px] md:max-w-[380px]">
                {/* Main circular image */}
                <div className="relative z-20 rounded-full overflow-hidden border-4 border-[#39E535]/40 aspect-square shadow-[0_0_30px_rgba(57,229,53,0.15)]">
                  <img 
                    src="/lovable-uploads/about-portrait.jpg.png" 
                    alt="Pathum Sanjaya Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 -z-10">
                  {/* Rotating gradient border */}
                  <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-[#39E535] via-emerald-400 to-[#39E535] animate-[spin_3s_linear_infinite]" />
                  <div className="absolute inset-[-3px] rounded-full bg-white" />
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-[-60px] -z-20">
                  {/* Background circles */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#39E535]/20 animate-[spin_20s_linear_infinite_reverse]" />
                  <div className="absolute inset-[15px] rounded-full border-2 border-dashed border-[#39E535]/15 animate-[spin_15s_linear_infinite]" />
                  <div className="absolute inset-[30px] rounded-full border-2 border-dashed border-[#39E535]/10 animate-[spin_25s_linear_infinite_reverse]" />
                  
                  {/* Corner decorations */}
                  <div className="absolute top-[10%] left-[10%] w-3 h-3 rounded-full bg-gradient-to-r from-[#39E535] to-emerald-400 blur-[2px] animate-pulse" />
                  <div className="absolute top-[10%] right-[10%] w-2 h-2 rounded-full bg-gradient-to-r from-[#39E535] to-emerald-400 blur-[1px] animate-pulse delay-300" />
                  <div className="absolute bottom-[10%] left-[10%] w-2 h-2 rounded-full bg-gradient-to-r from-[#39E535] to-emerald-400 blur-[1px] animate-pulse delay-500" />
                  <div className="absolute bottom-[10%] right-[10%] w-3 h-3 rounded-full bg-gradient-to-r from-[#39E535] to-emerald-400 blur-[2px] animate-pulse delay-700" />
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
              
              <div className="flex flex-col gap-4">
                <Link 
                  to="/design" 
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-brand-green transition-colors duration-300 hover:scale-105 transform w-fit"
                >
                  View My Work <ArrowRight size={20} />
                </Link>
                
                <div className="flex items-center gap-4 mt-2">
                  <SocialLinks size="medium" />
                </div>
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
      
      {/* Email Box Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleEmailClick}
              disabled={isLoading}
              className="w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-brand-green border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Mail className="w-6 h-6 text-brand-green group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg font-medium text-gray-800 group-hover:text-brand-green transition-colors duration-300">
                    Send me an email
                  </span>
                </>
              )}
            </button>
          </motion.div>
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
