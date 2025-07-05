'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { number: 1500, suffix: '+', label: 'Properties Purchased', sublabel: 'Since 1988' },
  { number: 14, suffix: ' Days', label: 'Average Closing Time', sublabel: 'From offer to cash' },
  { number: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Recommend our service' },
  { number: 35, suffix: '+', label: 'Years of Experience', sublabel: 'Trusted expertise' },
];

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gray-600 mb-4 block">• Our Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our numbers speak for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="glass bg-white/80 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow h-48 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2 leading-tight">{stat.label}</h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-tight">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}