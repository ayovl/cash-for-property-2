'use client';

import { motion } from 'framer-motion';
import { Phone, DollarSign, Clock } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Contact Us',
    description: 'Fill out our simple form or call us directly. Tell us about your property and your timeline.',
  },
  {
    icon: DollarSign,
    number: '02',
    title: 'Get Your Offer',
    description: 'We\'ll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.',
  },
  {
    icon: Clock,
    number: '03',
    title: 'Close Quickly',
    description: 'Accept our offer and close on your timeline. Get cash in hand in as little as 7 days.',
  },
];

export default function ProcessSection() {
  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gray-600 mb-4 block">• How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We've streamlined the property selling process to make it fast and hassle-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass bg-gray-50/80 border border-gray-200/50 rounded-3xl p-8 text-left hover:shadow-xl transition-all duration-300 group-hover:bg-white/90">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-6xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors group flex items-center space-x-2">
                  <span>More info</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}