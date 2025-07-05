'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroSectionBottom = heroSection.offsetHeight;
        if (window.scrollY > heroSectionBottom) {
          setIsScrolledPastHero(true);
        } else {
          setIsScrolledPastHero(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-2 ${isScrolledPastHero ? 'header-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 nav-link-text"
            >
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xs">C</span>
              </div>
              <span className="font-semibold text-sm">Cash for Properties</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="nav-link-text hover:text-white transition-colors font-medium text-sm"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="nav-link-text hover:text-white transition-colors font-medium text-sm"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="nav-link-text hover:text-white transition-colors font-medium text-sm"
              >
                HOW IT WORKS
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="nav-link-text hover:text-white transition-colors font-medium text-sm"
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="nav-link-text hover:text-white transition-colors font-medium text-sm"
              >
                CONTACT
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:1-800-730-1717"
                className="flex items-center space-x-2 nav-link-text hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 nav-icon" />
                <span className="text-sm font-medium">1-800-730-1717</span>
              </a>
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors font-medium text-sm"
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
                <X className="w-6 h-6 nav-icon" />
              ) : (
                <Menu className="w-6 h-6 nav-icon" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }} // Animate from bottom or a slide-in effect
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              // The menu itself is part of the scrollable header's content flow initially
              // On mobile, when open, it needs to behave like a full screen overlay.
              // The parent <motion.header> is z-50.
              // This div is inside .glass.
              // Let's make this div itself fixed when open, to overlay everything else.
              className="md:hidden fixed inset-x-0 bottom-0 h-[97vh] bg-white z-40 shadow-xl overflow-y-auto p-6 pt-24"
              // pt-24 is a guess for padding top to clear the header bar. THIS WILL NEED TESTING & ADJUSTMENT.
            >
              <nav className="flex flex-col space-y-5">
                {/* Links should be black on white bg */}
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-black hover:text-gray-700 transition-colors font-medium text-lg text-left"
                >
                  HOME
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-black hover:text-gray-700 transition-colors font-medium text-lg text-left"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-black hover:text-gray-700 transition-colors font-medium text-lg text-left"
                >
                  HOW IT WORKS
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-black hover:text-gray-700 transition-colors font-medium text-lg text-left"
                >
                  SERVICES
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-black hover:text-gray-700 transition-colors font-medium text-lg text-left"
                >
                  CONTACT
                </button>
                <div className="pt-6 space-y-4 border-t border-gray-200 mt-4">
                  <a
                    href="tel:1-800-730-1717"
                    className="flex items-center space-x-2 text-black hover:text-gray-700"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-lg font-medium">1-800-730-1717</span>
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Cash Offer
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}