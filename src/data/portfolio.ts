import { PortfolioItem } from '../types/portfolio';

// Helper function to generate portfolio items for a category
const generateItems = (
  category: 'logo-designs' | 'facebook-posts' | 'banners' | 'content',
  count: number
): PortfolioItem[] => {
  return Array.from({ length: count }, (_, i) => {
    // Special handling for banner images
    const imageNumber = i + 1;
    const imageUrl = category === 'banners'
      ? `/portfolio/banners/banner-${imageNumber}.jpg`
      : `/portfolio/${category}/${category.split('-')[0]}-${imageNumber}.jpg`;

    return {
      id: `${category}-${imageNumber}`,
      title: `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} ${imageNumber}`,
      imageUrl: imageUrl,
      category: category,
      tags: ['Design', category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')]
    };
  });
};

// Generate items for each category
export const portfolioItems: PortfolioItem[] = [
  ...generateItems('logo-designs', 20),
  ...generateItems('facebook-posts', 20),
  ...generateItems('banners', 20),
  ...generateItems('content', 20)
]; 