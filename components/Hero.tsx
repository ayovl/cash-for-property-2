'use client';

import { motion } from 'framer-motion';
import { Building2, Phone } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  useEffect(() => {
    // Preload hero image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/hero.png';
    link.as = 'image';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.0, delay: 0.2 } },
  };

  return (
    <section id="hero-section" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.png"
          alt="NYC Property Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          onLoad={handleImageLoad}
          quality={85}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-24 pt-16 pb-8">
        <div className="text-center mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            <span className="block">Get Cash For</span>
            <span className="block text-white font-extrabold tracking-tight">
              Your NYC
              <span className="align-middle inline-flex mx-2" style={{verticalAlign: 'middle'}}>
                <span className="inline-flex items-center justify-center w-12 h-12 bg-white/20 border border-white/40 rounded-2xl shadow-lg backdrop-blur-md -mt-2">
                  <Building2 className="w-7 h-7 text-white/90" />
                </span>
              </span>
              Property
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
           We buy properties as-is for cash. No repairs, no agents, no hassle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a href="#cash-offer-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg min-h-[48px] w-[180px] flex items-center justify-center whitespace-nowrap"
              >
                Get Your Cash Offer
              </motion.button>
            </a>
            <motion.a
              href="tel:1-800-730-1717"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 border border-white/20 text-black px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors shadow-lg min-h-[48px] w-[180px] flex items-center justify-center space-x-2 whitespace-nowrap"
              style={{ backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}
            >
              <Phone className="w-4 h-4 text-bla" />
              <span>1-800-730-1717</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}