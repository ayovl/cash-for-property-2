'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const { count, ref } = useAnimatedCounter({ target, duration });
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                src="/stats.jpg"
                alt="Beautiful house with green lawn"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Top-left card - Properties Purchased - extends beyond image */}
            <div className="absolute -top-4 -left-4 sm:-top-4 sm:-left-4 z-10 w-[150px] rounded-xl bg-white/90 p-3 shadow-lg shadow-black/10 drop-shadow-lg backdrop-blur-sm sm:w-[160px] sm:rounded-2xl md:w-[200px] md:p-4" style={{ boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.07), 0 -4px 6px -2px rgba(0, 0, 0, 0.03), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <div className="mb-1.5 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span className="text-xs font-medium leading-tight text-gray-600 md:text-sm">Properties Purchased</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 md:text-2xl">
                1500+
              </div>
              <div className="text-xs text-gray-500 md:text-sm">Since 1988</div>
            </div>

            {/* Bottom-right card - Average Closing Time - extends beyond image */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-4 sm:-right-4 z-10 w-[150px] rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:w-[160px] sm:rounded-2xl md:w-[200px] md:p-4">
              <div className="mb-1.5 flex items-center gap-2">
                <div className="h-4 w-4 text-blue-500" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-xs font-medium leading-tight text-gray-600 md:text-sm">Average Closing Time</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 md:text-2xl">
                14 Days
              </div>
              <div className="text-xs text-gray-500 md:text-sm">From offer to cash</div>
            </div>
          </motion.div>

          {/* Right side - Content and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our numbers speak for themselves
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center lg:justify-items-start">
              {/* Properties Purchased */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full max-w-xs text-center lg:text-left p-4 sm:p-6 rounded-xl shadow-lg bg-slate-50 md:p-4 md:shadow-lg md:bg-slate-50 lg:p-0 lg:shadow-none lg:bg-transparent"
              >
                <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter target={1500} suffix="+" duration={2000} />
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
                className="w-full max-w-xs text-center lg:text-left p-4 sm:p-6 rounded-xl shadow-lg bg-slate-50 md:p-4 md:shadow-lg md:bg-slate-50 lg:p-0 lg:shadow-none lg:bg-transparent"
              >
                <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter target={14} suffix=" Days" duration={2000} />
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
                className="w-full max-w-xs text-center lg:text-left p-4 sm:p-6 rounded-xl shadow-lg bg-slate-50 md:p-4 md:shadow-lg md:bg-slate-50 lg:p-0 lg:shadow-none lg:bg-transparent sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-start"
              >
                <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter target={98} suffix="%" duration={2000} />
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