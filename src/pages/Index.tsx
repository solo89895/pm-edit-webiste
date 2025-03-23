
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DesignSection, { DesignItem, DesignCategory } from '../components/DesignSection';
import { ArrowRight } from 'lucide-react';

// Placeholder design items
const featuredDesigns: DesignItem[] = [
  {
    id: '1',
    title: 'Brand Identity - Coffee Shop',
    category: ['logo' as DesignCategory],
    imageSrc: 'https://via.placeholder.com/600x450/f5f5f5/333333?text=Logo+Design',
    description: 'Minimalist logo design for a modern coffee shop brand, focusing on clean lines and recognizable shape.'
  },
  {
    id: '2',
    title: 'Social Media Campaign',
    category: ['facebook' as DesignCategory, 'content' as DesignCategory],
    imageSrc: 'https://via.placeholder.com/600x450/f5f5f5/333333?text=Social+Media',
    description: 'Series of Facebook posts designed for a product launch campaign with consistent visual language.'
  },
  {
    id: '3',
    title: 'Website Banner',
    category: ['banner' as DesignCategory],
    imageSrc: 'https://via.placeholder.com/600x450/f5f5f5/333333?text=Web+Banner',
    description: 'Clean, high-impact website banner that drives attention to the key message with strategic use of color.'
  }
];

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero imageSrc="/lovable-uploads/d476fe10-0b08-4912-a3f0-daa52a5a2461.png" />
      
      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6">Design Philosophy</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              I believe in the power of simplicity. My approach to design is guided by the principle that less is more. 
              By removing the unnecessary, what remains speaks with greater clarity and impact.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 font-medium text-brand-green hover:underline"
            >
              Learn more about me <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Works */}
      <section className="py-20">
        <div className="container-custom">
          <DesignSection items={featuredDesigns} limit={3} />
          
          <div className="text-center mt-12">
            <Link 
              to="/design" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-brand-green transition-colors duration-300"
            >
              View All Works <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-green">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Let's Work Together</h2>
            <p className="text-lg mb-8 text-white/90">
              Have a project in mind? I'm available for freelance work and collaborations.
              Let's create something amazing together.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
