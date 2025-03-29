export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'logo-designs' | 'facebook-posts' | 'banners' | 'content';
  tags?: string[];
}

export interface PortfolioCategory {
  id: string;
  title: string;
  slug: 'logo-designs' | 'facebook-posts' | 'banners' | 'content';
  description: string;
}

export const categories: PortfolioCategory[] = [
  {
    id: 'logo-designs',
    title: 'Logo Designs',
    slug: 'logo-designs',
    description: 'Creative and memorable logo designs for various brands and businesses.'
  },
  {
    id: 'facebook-posts',
    title: 'Facebook Posts',
    slug: 'facebook-posts',
    description: 'Engaging social media content designed for maximum impact on Facebook.'
  },
  {
    id: 'banners',
    title: 'Banners',
    slug: 'banners',
    description: 'Eye-catching banners for websites, events, and advertising.'
  },
  {
    id: 'content',
    title: 'Content',
    slug: 'content',
    description: 'Various content designs including graphics, illustrations, and marketing materials.'
  }
]; 