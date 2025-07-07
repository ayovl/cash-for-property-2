'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const statsData = [
  { number: 1500, suffix: '+', label: 'Properties Purchased', sublabel: 'Since 1988' },
  { number: 14, suffix: ' Days', label: 'Average Closing Time', sublabel: 'From offer to cash' },
  { number: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Recommend our service' },
  { number: 35, suffix: '+', label: 'Years of Experience', sublabel: 'Trusted expertise' },
];

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}

function AnimatedCounter({ target, suffix = '', duration = 2000, start }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    if (target === 0) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    setCount(0);

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - (startTime as number)) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, duration, start]);

  return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center"> {/* Reduced gap from 16 to 8 */}
          {/* Left side - Image with overlay cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png"
                alt="Beautiful house with green lawn"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Top-left card - Properties Purchased - extends beyond image */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-3 md:p-4 max-w-[140px] sm:max-w-[160px] md:max-w-[200px] z-10">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[10px] leading-tight sm:text-xs md:text-sm text-gray-600">Properties Purchased</span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                1500+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Since 1988</div>
            </div>

            {/* Bottom-right card - Average Closing Time - extends beyond image */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-3 md:p-4 max-w-[140px] sm:max-w-[160px] md:max-w-[200px] z-10">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-[10px] leading-tight sm:text-xs md:text-sm text-gray-600">Average Closing Time</span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                14 Days
              </div>
              <div className="text-xs sm:text-sm text-gray-500">From offer to cash</div>
            </div>
          </motion.div>

          {/* Right side - Content and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => setIsInView(true)}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 lg:pl-8" // Added lg:pl-8 to push content right, balancing perceived space
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our numbers speak for themselves
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:flex-nowrap lg:justify-start lg:gap-12"> {/* Added lg:flex-nowrap */}
              {/* Properties Purchased */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full sm:w-4/5 md:w-auto text-center lg:text-left
                           p-4 sm:p-6 rounded-xl shadow-lg bg-slate-50
                           md:p-0 md:shadow-none md:bg-transparent  // Revert card styles from md upwards if they go side-by-side cleanly
                           lg:flex-shrink-0" // Ensure it shrinks on lg if needed. md:w-auto lets it take content width.
              >
                <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter target={1500} suffix="+" start={isInView} duration={2000} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 mb-1 leading-tight">Properties Purchased</h3>
                <p className="text-sm sm:text-base lg:text-xs text-gray-600 leading-tight">Since 1988</p>
              </motion.div>

              {/* Average Closing Time */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full sm:w-4/5 md:w-auto text-center lg:text-left
                           p-4 sm:p-6 rounded-xl shadow-lg bg-slate-50
                           md:p-0 md:shadow-none md:bg-transparent
                           lg:flex-shrink-0"
              >
                <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter target={14} suffix=" Days" start={isInView} duration={2000} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 mb-1 leading-tight">Average Closing Time</h3>
                <p className="text-sm sm:text-base lg:text-xs text-gray-600 leading-tight">From offer to cash</p>
              </motion.div>

              {/* Client Satisfaction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-full sm:w-4/5 md:w-auto text-center lg:text-left
                           p-4 sm:p-6 rounded-xl shadow-lg bg-slate-50
                           md:p-0 md:shadow-none md:bg-transparent
                           lg:flex-shrink-0"
              >
                <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter target={98} suffix="%" start={isInView} duration={2000} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 mb-1 leading-tight">Client Satisfaction</h3>
                <p className="text-sm sm:text-base lg:text-xs text-gray-600 leading-tight">Recommend our service</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}