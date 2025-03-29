import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types/portfolio';

interface ImageModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
        onClick={onClose}
      >
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>

          {/* Image */}
          <div className="relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto max-h-[60vh] object-contain bg-gray-100"
            />
          </div>

          {/* Content */}
          <div className="p-4 border-t">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            
            {item.description && (
              <p className="text-gray-600 text-sm mb-3">
                {item.description}
              </p>
            )}
            
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs 
                             rounded-full border border-brand-green/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal; 