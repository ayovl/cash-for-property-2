'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, Shield, Zap, Home, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-2 py-1 glass bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white">
              • Trusted Property Buyers Since 1988
            </span>
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
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-7 py-4 rounded-2xl font-semibold text-base hover:bg-gray-100 transition-colors shadow-xl min-h-[54px] w-[220px] flex items-center justify-center"
            >
              Get Your Cash Offer
            </motion.button>
            <motion.a
              href="tel:1-800-730-1717"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 glass bg-white/10 border border-white/20 text-white px-7 py-4 rounded-2xl font-semibold text-base hover:bg-white/20 transition-colors shadow-xl min-h-[54px] w-[220px]"
            >
              <Phone className="w-4 h-4" />
              <span>1-800-730-1717</span>
            </motion.a>
          </motion.div>

          {/* Features */}
          {/* Features removed as requested */}
        </div>
      </div>
    </section>
  );
}