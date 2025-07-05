'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-black/70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Sell Your Property for Cash?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light">
            Get a fair, no-obligation cash offer today and close on your timeline.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-2xl"
            >
              Get Your Cash Offer
            </motion.button>
            <motion.a
              href="tel:1-800-730-1717"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 glass bg-white/20 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call 1-800-730-1717</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}