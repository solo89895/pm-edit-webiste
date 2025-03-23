
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';

interface HeroProps {
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc }) => {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl leading-tight mb-8">
              creative
              <br />
              <span className="text-brand-green">designs.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md">
              Crafting creative and impactful designs that bring your vision to life. Simple, clean, and effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/design" 
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-brand-green transition-colors duration-300 hover:scale-105 transform"
              >
                View My Work <ArrowRight size={20} />
              </Link>
              
              <div className="mt-4 sm:mt-8">
                <SocialLinks size="medium" />
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-in-right order-1 md:order-2 relative">
            <img 
              src={imageSrc}
              alt="Designer portrait" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
