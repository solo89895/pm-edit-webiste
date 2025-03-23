
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Page transition effect
  useEffect(() => {
    setIsPageLoaded(false);
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className={`flex-grow ${isPageLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
        {children}
      </main>
      
      <footer className="py-6 border-t">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} PM Edit. All rights reserved.
              </p>
            </div>
            
            <SocialLinks />
            
            <div>
              <p className="text-sm font-medium">Design your own design</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
