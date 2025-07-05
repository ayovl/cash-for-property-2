'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, Shield, Zap } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 glass bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
              • Trusted Property Buyers Since 1988
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Cash for Properties — Your
            <br />
            <span className="text-gray-200">Partner in</span> Real Estate Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We buy properties as-is for cash. No repairs, no agents, no hassle.
            From buying to selling, we create real estate experiences that inspire and endure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-2xl"
            >
              Contact us
            </motion.button>
            <motion.a
              href="tel:1-800-730-1717"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 glass bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call 1-800-730-1717</span>
            </motion.a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl">
              <Shield className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">No Repairs Needed</h3>
              <p className="text-gray-200 text-sm">Sell your property as-is</p>
            </div>
            <div className="glass bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl">
              <Zap className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">No Agent Commissions</h3>
              <p className="text-gray-200 text-sm">Keep more money in your pocket</p>
            </div>
            <div className="glass bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Close in Days, Not Months</h3>
              <p className="text-gray-200 text-sm">Fast cash transactions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}