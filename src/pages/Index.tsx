
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DesignSection, { DesignItem, DesignCategory } from '../components/DesignSection';
import { ArrowRight } from 'lucide-react';

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
