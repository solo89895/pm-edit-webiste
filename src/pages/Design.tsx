
import React from 'react';
import Layout from '../components/Layout';
import DesignSection, { DesignItem } from '../components/DesignSection';

// Complete design portfolio items
const designItems: DesignItem[] = [
  // Logo designs
  {
    id: 'logo-1',
    title: 'Minimalist Brand Logo',
    category: ['logo'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Logo+Design+1',
    description: 'A clean, minimalist logo design that embodies the brand\'s core values of simplicity and elegance.'
  },
  {
    id: 'logo-2',
    title: 'Corporate Identity',
    category: ['logo'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Logo+Design+2',
    description: 'Modern corporate identity logo with a focus on professionalism and trust.'
  },
  {
    id: 'logo-3',
    title: 'Restaurant Branding',
    category: ['logo'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Logo+Design+3',
    description: 'Distinctive and memorable logo for a contemporary restaurant, balancing tradition with modernity.'
  },
  
  // Facebook post designs
  {
    id: 'fb-1',
    title: 'Product Launch Campaign',
    category: ['facebook'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Facebook+Post+1',
    description: 'Series of coordinated Facebook posts designed to build anticipation for a new product launch.'
  },
  {
    id: 'fb-2',
    title: 'Event Promotion',
    category: ['facebook'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Facebook+Post+2',
    description: 'Engaging visual content created to promote a major corporate event with strong brand presence.'
  },
  {
    id: 'fb-3',
    title: 'Social Media Strategy',
    category: ['facebook', 'content'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Facebook+Post+3',
    description: 'Cohesive set of social media assets designed as part of a broader brand communication strategy.'
  },
  
  // Banner designs
  {
    id: 'banner-1',
    title: 'E-commerce Banner',
    category: ['banner'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Banner+Design+1',
    description: 'High-converting e-commerce banner with clear call-to-action and compelling visual hierarchy.'
  },
  {
    id: 'banner-2',
    title: 'Billboard Design',
    category: ['banner'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Banner+Design+2',
    description: 'Impactful large-format billboard design created to capture attention in busy urban environments.'
  },
  {
    id: 'banner-3',
    title: 'Web Header',
    category: ['banner'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Banner+Design+3',
    description: 'Clean, modern website header banner that establishes the visual tone for the entire site.'
  },
  
  // Content designs
  {
    id: 'content-1',
    title: 'Magazine Layout',
    category: ['content'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Content+Design+1',
    description: 'Editorial design focusing on readability and visual interest for a lifestyle magazine feature.'
  },
  {
    id: 'content-2',
    title: 'Annual Report',
    category: ['content'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Content+Design+2',
    description: 'Corporate annual report with clear information hierarchy and data visualization.'
  },
  {
    id: 'content-3',
    title: 'Product Catalog',
    category: ['content'],
    imageSrc: 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Content+Design+3',
    description: 'Clean, organized product catalog design that showcases items in their best light.'
  }
];

const Design: React.FC = () => {
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
      
      <section className="container-custom">
        <DesignSection items={designItems} />
      </section>
    </Layout>
  );
};

export default Design;
