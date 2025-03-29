import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types/portfolio';
import ImageModal from './ImageModal';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Preload all images immediately
  useEffect(() => {
    // Reset states when items change
    setLoadedImages({});
    setImageErrors({});

    // Preload all images at once
    items.forEach(item => {
      const img = new Image();
      img.src = item.imageUrl;
      
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [item.id]: true }));
      };
      
      img.onerror = () => {
        setImageErrors(prev => ({ ...prev, [item.id]: true }));
      };
    });
  }, [items]);

  // Memoize the grid items
  const gridItems = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
          onClick={() => setSelectedItem(item)}
        >
          {/* Loading Placeholder */}
          {!loadedImages[item.id] && !imageErrors[item.id] && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand-green"></div>
            </div>
          )}

          {/* Error Placeholder */}
          {imageErrors[item.id] && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {/* Image */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className={`h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110 ${
              !loadedImages[item.id] ? 'opacity-0' : 'opacity-100'
            }`}
            onError={() => setImageErrors(prev => ({ ...prev, [item.id]: true }))}
            onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
            loading="eager"
            decoding="async"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  ), [items, loadedImages, imageErrors, setSelectedItem]);

  return (
    <>
      {gridItems}
      <ImageModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
};

export default PortfolioGrid; 