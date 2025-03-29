import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import PortfolioGrid from '../components/PortfolioGrid';
import { PortfolioItem, categories } from '../types/portfolio';
import { portfolioItems } from '../data/portfolio';

const Design: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('banners');
  const [items, setItems] = useState<PortfolioItem[]>([]);

  // Memoize filtered items
  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Update items immediately
  useEffect(() => {
    setItems(filteredItems);
  }, [filteredItems]);

  // Memoize category buttons
  const categoryButtons = useMemo(() => (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => setSelectedCategory(category.slug)}
          className={`px-6 py-3 rounded-full text-lg font-medium ${
            selectedCategory === category.slug
              ? 'bg-brand-green text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.title}
        </motion.button>
      ))}
    </div>
  ), [selectedCategory]);

  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Category Navigation */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            My Portfolio
          </h1>
          {categoryButtons}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {categories.find(c => c.slug === selectedCategory)?.description}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="min-h-[200px]">
          <PortfolioGrid items={items} />
        </div>
      </div>
    </Layout>
  );
};

export default Design;
