
import React, { useState } from 'react';
import Layout from '../components/Layout';
import DesignSection, { DesignItem, DesignCategory } from '../components/DesignSection';

// Design portfolio items organized by category
const designsByCategory = {
  logo: [
    {
      id: 'logo-1',
      title: 'Minimalist Brand Logo',
      category: ['logo' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Logo+Design+1',
      description: 'A clean, minimalist logo design that embodies the brand\'s core values of simplicity and elegance.'
    },
    {
      id: 'logo-2',
      title: 'Corporate Identity',
      category: ['logo' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Logo+Design+2',
      description: 'Modern corporate identity logo with a focus on professionalism and trust.'
    },
    {
      id: 'logo-3',
      title: 'Restaurant Branding',
      category: ['logo' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Logo+Design+3',
      description: 'Distinctive and memorable logo for a contemporary restaurant, balancing tradition with modernity.'
    }
  ],
  facebook: [
    {
      id: 'fb-1',
      title: 'Product Launch Campaign',
      category: ['facebook' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Facebook+Post+1',
      description: 'Series of coordinated Facebook posts designed to build anticipation for a new product launch.'
    },
    {
      id: 'fb-2',
      title: 'Event Promotion',
      category: ['facebook' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Facebook+Post+2',
      description: 'Engaging visual content created to promote a major corporate event with strong brand presence.'
    },
    {
      id: 'fb-3',
      title: 'Social Media Strategy',
      category: ['facebook' as DesignCategory, 'content' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Facebook+Post+3',
      description: 'Cohesive set of social media assets designed as part of a broader brand communication strategy.'
    }
  ],
  banner: [
    {
      id: 'banner-1',
      title: 'E-commerce Banner',
      category: ['banner' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Banner+Design+1',
      description: 'High-converting e-commerce banner with clear call-to-action and compelling visual hierarchy.'
    },
    {
      id: 'banner-2',
      title: 'Billboard Design',
      category: ['banner' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Banner+Design+2',
      description: 'Impactful large-format billboard design created to capture attention in busy urban environments.'
    },
    {
      id: 'banner-3',
      title: 'Web Header',
      category: ['banner' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Banner+Design+3',
      description: 'Clean, modern website header banner that establishes the visual tone for the entire site.'
    }
  ],
  content: [
    {
      id: 'content-1',
      title: 'Magazine Layout',
      category: ['content' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Content+Design+1',
      description: 'Editorial design focusing on readability and visual interest for a lifestyle magazine feature.'
    },
    {
      id: 'content-2',
      title: 'Annual Report',
      category: ['content' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Content+Design+2',
      description: 'Corporate annual report with clear information hierarchy and data visualization.'
    },
    {
      id: 'content-3',
      title: 'Product Catalog',
      category: ['content' as DesignCategory],
      imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Content+Design+3',
      description: 'Clean, organized product catalog design that showcases items in their best light.'
    }
  ]
};

// Flatten designs for the all category view
const allDesigns: DesignItem[] = [
  ...designsByCategory.logo,
  ...designsByCategory.facebook,
  ...designsByCategory.banner,
  ...designsByCategory.content
];

const Design: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<DesignCategory>('all');
  
  // Get the appropriate designs based on active category
  const getDisplayedDesigns = (): DesignItem[] => {
    if (activeCategory === 'all') return allDesigns;
    return designsByCategory[activeCategory as keyof typeof designsByCategory] || [];
  };

  return (
    <Layout>
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl mb-6">My Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Browse through my selected works across various design categories. 
              Each project represents a unique challenge and creative solution.
            </p>
          </div>
        </div>
      </section>
      
      <section className="container-custom py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all' 
                ? 'bg-brand-green text-white' 
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            All Designs
          </button>
          <button
            onClick={() => setActiveCategory('logo')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'logo' 
                ? 'bg-brand-green text-white' 
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            Logo Designs
          </button>
          <button
            onClick={() => setActiveCategory('facebook')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'facebook' 
                ? 'bg-brand-green text-white' 
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            Facebook Posts
          </button>
          <button
            onClick={() => setActiveCategory('banner')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'banner' 
                ? 'bg-brand-green text-white' 
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            Banners
          </button>
          <button
            onClick={() => setActiveCategory('content')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'content' 
                ? 'bg-brand-green text-white' 
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            Content
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          {activeCategory === 'all' ? 'All Designs' : 
           activeCategory === 'logo' ? 'Logo Designs' :
           activeCategory === 'facebook' ? 'Facebook Posts' :
           activeCategory === 'banner' ? 'Banners' : 'Content Designs'}
        </h2>
        
        <DesignSection items={getDisplayedDesigns()} showTitle={false} />
      </section>
    </Layout>
  );
};

export default Design;
