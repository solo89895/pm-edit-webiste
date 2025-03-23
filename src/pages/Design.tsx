
import React, { useState } from 'react';
import Layout from '../components/Layout';
import DesignSection, { DesignItem, DesignCategory } from '../components/DesignSection';

// Design portfolio items organized by category
const designsByCategory = {
  logo: [
    {
      id: 'logo-1',
      title: 'Gadget Hub Logo',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/d7c2eb82-a213-49a2-8b9c-35e53763691e.png',
      description: 'Modern and vibrant logo design for a tech gadget shop, featuring an iconic "G" symbol with a distinctive "Hub" typography in green.'
    },
    {
      id: 'logo-2',
      title: 'AI Music Logo',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/ae71f8d3-ac95-434b-b21f-a0d4444bc508.png',
      description: 'Minimalist black and white circular logo for a music production company, featuring "AI" as the central focus.'
    },
    {
      id: 'logo-3',
      title: 'A-Shope E-commerce Logo',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/0338bd28-1c04-4e08-94d7-82f6bbcfe5b1.png',
      description: 'Colorful and playful shopping brand logo featuring a shopping bag design with vibrant colors for an online shopping platform.'
    },
    {
      id: 'logo-4',
      title: 'Dark Whispers Logo',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/e0840281-dd23-4487-9ed0-b7bd82620c2b.png',
      description: 'Haunting logo design featuring a skull silhouette with red eyes and custom typography for a horror-themed brand.'
    },
    {
      id: 'logo-5',
      title: 'Did You Know - Educational',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/4bb68edd-4c58-490e-aad2-c9b2b6a72b63.png',
      description: 'Educational brand logo with a silhouette of a human profile and globe, with a focus on knowledge sharing and learning.'
    },
    {
      id: 'logo-6',
      title: 'Funk Entertainment Logo',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/6797e811-05ea-4ca2-bb6e-d63e9ec0c6a4.png',
      description: 'Vibrant purple entertainment logo featuring a stylized character silhouette with bold typography for a music brand.'
    },
    {
      id: 'logo-7',
      title: 'EDIT Minimalist Logo',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/1b96dad9-405a-402a-bfef-5878a2f2ce62.png',
      description: 'Ultra-minimalist design for a creative editing studio with clean, understated typography.'
    },
    {
      id: 'logo-8',
      title: 'Animal World Conservation',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/8775d54f-dde4-4c83-b0f1-ed0af31ded3c.png',
      description: 'Conservation-themed logo featuring silhouettes of various animals against a sunset backdrop, perfect for wildlife organizations.'
    },
    {
      id: 'logo-9',
      title: 'Pure Aura Naturals',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/c465acbe-4a44-42fa-ba3b-4d61bb907bb3.png',
      description: 'Elegant pink logo for a natural beauty brand featuring a female profile with leaf elements, conveying purity and natural ingredients.'
    },
    {
      id: 'logo-10',
      title: 'Chobo Chocolate Brand',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/5e7db208-5278-4116-8938-78f42aa13ef6.png',
      description: 'Rich brown logo for a chocolate company featuring cocoa pods integrated with the typography for an authentic feel.'
    },
    {
      id: 'logo-11',
      title: 'Food King Restaurant',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/bb34c25d-970f-4334-9b8f-50ed5987f4e0.png',
      description: 'Vibrant yellow and orange gradient logo for a restaurant, featuring a chef hat and elegant script typography.'
    },
    {
      id: 'logo-12',
      title: 'HJ Computers',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/11444686-fa1a-44e4-afeb-da151844e3d3.png',
      description: 'Modern technology company logo with a gradient purple-red color scheme featuring a stylized "HJ" lettermark.'
    },
    {
      id: 'logo-13',
      title: 'DJ Cricket Sports',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/53cfd584-22bf-4f20-ac76-6e372ef01b2c.png',
      description: 'Dynamic sports logo featuring a cricket batsman silhouette with "DJ" branding, perfect for a cricket team or sports organization.'
    },
    {
      id: 'logo-14',
      title: 'Dark Light Gaming',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/b3354c4d-8a02-45cb-b3e3-c4c5e68f30c7.png',
      description: 'Gaming logo with a masked character on a green circular background, perfect for an esports team or gaming content creator.'
    },
    {
      id: 'logo-15',
      title: 'Smart Mobile',
      category: ['logo' as DesignCategory],
      imageSrc: '/lovable-uploads/91b70ed3-2daf-42df-8a03-895f750241ae.png',
      description: 'Bold red and blue logo for a mobile phone retailer featuring a distinctive "M" lettermark and clean typography.'
    },
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
