'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2"
            >
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xs">C</span>
              </div>
              <span className="text-white font-semibold text-sm">Cash for Properties</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
              >
                HOW IT WORKS
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
              >
                CONTACT
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:1-800-730-1717"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
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
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20"
            >
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm text-left"
                >
                  HOME
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm text-left"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm text-left"
                >
                  HOW IT WORKS
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm text-left"
                >
                  SERVICES
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm text-left"
                >
                  CONTACT
                </button>
                <div className="pt-4 space-y-3">
                  <a
                    href="tel:1-800-730-1717"
                    className="flex items-center space-x-2 text-white/90"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">1-800-730-1717</span>
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-white text-black py-2.5 rounded-xl font-medium text-sm"
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