
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Design category type
export type DesignCategory = 'all' | 'logo' | 'facebook' | 'banner' | 'content';

// Design item type
export interface DesignItem {
  id: string;
  title: string;
  category: DesignCategory[];
  imageSrc: string;
  description: string;
}

interface DesignSectionProps {
  items: DesignItem[];
  showTitle?: boolean;
  limit?: number;
}

const DesignSection: React.FC<DesignSectionProps> = ({ 
  items, 
  showTitle = true,
  limit
}) => {
  const [activeCategory, setActiveCategory] = useState<DesignCategory>('all');
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
  
  // Filter designs based on active category
  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category.includes(activeCategory));
    
  // Limit items if needed
  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;
  
  // Categories for filter
  const categories: { label: string; value: DesignCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Logo', value: 'logo' },
    { label: 'Facebook Posts', value: 'facebook' },
    { label: 'Banners', value: 'banner' },
    { label: 'Content', value: 'content' }
  ];
  
  // Open modal to view design details
  const openModal = (item: DesignItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };
  
  // Close modal
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="py-12">
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">My Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of designs crafted with minimalist principles. 
            Each project represents my commitment to clarity and purpose.
          </p>
        </div>
      )}
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.value 
                ? 'bg-brand-green text-white' 
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Design Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="card-hover rounded-lg overflow-hidden bg-white shadow-md"
            onClick={() => openModal(item)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={item.imageSrc} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {item.category.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Modal View */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white max-w-3xl w-full rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedItem.imageSrc} 
              alt={selectedItem.title}
              className="w-full max-h-[70vh] object-contain bg-white"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
              <p className="text-muted-foreground mt-2">{selectedItem.description}</p>
              <button 
                className="mt-4 px-5 py-2 rounded bg-black text-white hover:bg-brand-green transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignSection;
