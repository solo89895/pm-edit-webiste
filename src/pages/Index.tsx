
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DesignSection, { DesignItem, DesignCategory } from '../components/DesignSection';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Featured design items for homepage
const featuredDesigns: DesignItem[] = [
  {
    id: '1',
    title: 'Gadget Hub Logo',
    category: ['logo' as DesignCategory],
    imageSrc: '/lovable-uploads/d7c2eb82-a213-49a2-8b9c-35e53763691e.png',
    description: 'Modern and vibrant logo design for a tech gadget shop, featuring an iconic "G" symbol with a distinctive "Hub" typography in green.'
  },
  {
    id: '2',
    title: 'Pure Aura Naturals',
    category: ['logo' as DesignCategory],
    imageSrc: '/lovable-uploads/c465acbe-4a44-42fa-ba3b-4d61bb907bb3.png',
    description: 'Elegant pink logo for a natural beauty brand featuring a female profile with leaf elements, conveying purity and natural ingredients.'
  },
  {
    id: '3',
    title: 'Dark Light Gaming',
    category: ['logo' as DesignCategory],
    imageSrc: '/lovable-uploads/b3354c4d-8a02-45cb-b3e3-c4c5e68f30c7.png',
    description: 'Gaming logo with a masked character on a green circular background, perfect for an esports team or gaming content creator.'
  }
];

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero imageSrc="/lovable-uploads/f4add1e7-0551-46bd-a63d-e41b639035e9.png" />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-gray-100">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Design Philosophy</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              I believe in the power of creativity. My approach to design is guided by innovation and purpose.
              Creating designs that communicate effectively and make a lasting impression.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 font-medium text-brand-green hover:underline"
            >
              Learn more about me <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Works */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <DesignSection items={featuredDesigns} limit={3} />
          </motion.div>
          
          <div className="text-center mt-12">
            <Link 
              to="/design" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-brand-green transition-colors duration-300 hover:scale-105 transform"
            >
              View All Works <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-emerald-500">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Let's Work Together</h2>
            <p className="text-lg mb-8 text-white/90">
              Have a project in mind? I'm available for freelance work and collaborations.
              Let's create something amazing together.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
