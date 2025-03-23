
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the circle
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Subtle movement
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
      {/* Background circle */}
      <div 
        ref={circleRef}
        className="green-circle w-[500px] h-[500px] md:w-[600px] md:h-[600px] right-[-100px] md:right-[10%] top-[20%] transition-transform duration-200 ease-out"
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl leading-tight mb-8">
              less is
              <br />
              <span className="text-brand-green">more.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md">
              Crafting minimalist designs that speak volumes. Clean, purposeful, and impactful.
            </p>
            <Link 
              to="/design" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-brand-green transition-colors duration-300"
            >
              View My Work <ArrowRight size={20} />
            </Link>
          </div>
          
          {/* Image */}
          <div className="animate-slide-in-right order-1 md:order-2 relative">
            <img 
              src={imageSrc}
              alt="Designer portrait" 
              className="w-full max-w-md mx-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
