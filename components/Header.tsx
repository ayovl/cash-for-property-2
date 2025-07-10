'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const handleScroll = useCallback(() => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      const heroSectionBottom = heroSection.offsetHeight;
      setIsScrolledPastHero(window.scrollY > heroSectionBottom);
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <motion.header
      id="main-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 lg:px-24 py-2 ${isScrolledPastHero ? 'header-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* The inner px-4 on the glass div is kept to maintain its appearance relative to the new outer padding */}
        <div className={`glass rounded-xl px-4 py-2 shadow-xl transition-all duration-500 ease-out bg-white/10 border-white/20`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 flex items-center justify-center p-1">
                <Image 
                  src="/logo.png" 
                  alt="Cash for Properties Logo" 
                  width={30} 
                  height={30} 
                  className={`object-contain transition-all duration-500 ease-out ${isScrolledPastHero ? '' : 'invert brightness-0 filter'}`}
                  key="logo-v5"
                  priority
                />
              </div>
              <span className={`md:hidden font-semibold text-sm transition-colors duration-300 ease-out ${isScrolledPastHero ? 'text-black' : 'text-white'}`}>Cash for Properties</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors duration-500 ease-out ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm`}
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors duration-500 ease-out ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm`}
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={`transition-colors duration-500 ease-out ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm`}
              >
                HOW IT WORKS
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-colors duration-500 ease-out ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm`}
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection('contact-details-area')}
                className={`transition-colors duration-500 ease-out ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm`}
              >
                CONTACT
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:1-800-730-1717"
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl glass-strong bg-white/10 border border-white/20 transition-all duration-300 ${isScrolledPastHero ? 'text-black bg-white/20' : 'text-white/90 bg-white/10'} hover:text-white hover:bg-white/20`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">1-800-730-1717</span>
              </a>
              <motion.button
                onClick={() => scrollToSection('cash-offer-form')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-xl transition-colors duration-500 ease-out font-medium text-sm ${isScrolledPastHero ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}
              >
                Get Cash Offer
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 transition-colors duration-300 ${isScrolledPastHero ? 'text-black' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 transition-colors duration-300 ${isScrolledPastHero ? 'text-black' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: '500px' }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-4 pt-4 border-t border-white/20 overflow-hidden"
              layout
            >
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`transition-colors duration-300 ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm text-left`}
                >
                  HOME
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`transition-colors duration-300 ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm text-left`}
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className={`transition-colors duration-300 ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm text-left`}
                >
                  HOW IT WORKS
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className={`transition-colors duration-300 ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm text-left`}
                >
                  SERVICES
                </button>
                <button 
                  onClick={() => scrollToSection('contact-details-area')}
                  className={`transition-colors duration-300 ${isScrolledPastHero ? 'text-black' : 'text-white/90'} hover:text-white font-medium text-sm text-left`}
                >
                  CONTACT
                </button>
                {isScrolledPastHero && (
                  <div className="pt-4 space-y-3 mt-4">
                    <a
                      href="tel:1-800-730-1717"
                      className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl glass-strong transition-all duration-300 font-medium text-sm ${isScrolledPastHero ? 'text-black bg-white/70 hover:bg-white border border-white/20' : 'text-white/90 bg-white/10 hover:text-white hover:bg-white/20 border border-white/20'}`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>1-800-730-1717</span>
                    </a>
                    <button 
                      onClick={() => scrollToSection('cash-offer-form')}
                      className={`w-full py-3 rounded-xl transition-colors font-medium text-sm ${isScrolledPastHero ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                      Get Cash Offer
                    </button>
                  </div>
                )}
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
    </>
  );
}