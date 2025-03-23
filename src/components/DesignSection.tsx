
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
  filter?: DesignCategory;
}

const DesignSection: React.FC<DesignSectionProps> = ({ 
  items, 
  showTitle = true,
  limit,
  filter
}) => {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
  
  // Filter designs based on active category if filter prop is provided
  const displayedItems = filter && filter !== 'all' 
    ? items.filter(item => item.category.includes(filter))
    : items;
    
  // Limit items if needed
  const finalItems = limit ? displayedItems.slice(0, limit) : displayedItems;
  
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
  
  // Helper function to check if an image path is a URL or a local path
  const getImageUrl = (src: string) => {
    if (src.startsWith('http') || src.startsWith('https')) {
      return src;
    }
    return src; // Already a local path with proper formatting
  };
  
  return (
    <div className="py-6">
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">My Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of designs crafted with minimalist principles. 
            Each project represents my commitment to clarity and purpose.
          </p>
        </div>
      )}
      
      {/* Design Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {finalItems.length > 0 ? (
          finalItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="card-hover rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openModal(item)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center">
                <img 
                  src={getImageUrl(item.imageSrc)} 
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 p-2"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.imageSrc}`);
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.category.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ')}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-muted-foreground">No designs found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Modal View */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white max-w-4xl w-full rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="bg-gray-50 flex items-center justify-center">
                <img 
                  src={getImageUrl(selectedItem.imageSrc)} 
                  alt={selectedItem.title}
                  className="w-full max-h-[70vh] object-contain p-4"
                  onError={(e) => {
                    console.error(`Failed to load image: ${selectedItem.imageSrc}`);
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/f5f5f5/333333?text=Image+Not+Found';
                  }}
                />
              </div>
              <button 
                className="absolute top-4 right-4 rounded-full bg-black/70 text-white p-2 hover:bg-brand-green transition-colors duration-300"
                onClick={closeModal}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                {selectedItem.category.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ')}
              </p>
              <p className="text-muted-foreground">{selectedItem.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DesignSection;
