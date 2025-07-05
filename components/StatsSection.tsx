'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
      // Optionally reset count if start becomes false and you want to show 0 or an initial state
      // setCount(0); // For this use case (once: true), this might not be strictly needed.
      return;
    }

    // Target is 0, set count to 0 and don't animate
    if (target === 0) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    // Reset count to 0 when animation is about to start.
    // This ensures that if the component was somehow showing a different number,
    // the animation correctly starts from 0.
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

interface StatCardProps {
  stat: typeof statsData[0];
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      key={stat.label} // Using a more stable key if available, index is fallback
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="glass bg-white/80 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow h-48 flex flex-col justify-center">
        <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          <AnimatedCounter target={stat.number} suffix={stat.suffix} start={isInView} duration={2000} />
        </div>
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2 leading-tight">{stat.label}</h3>
        <p className="text-gray-600 text-xs lg:text-sm leading-tight">{stat.sublabel}</p>
      </div>
    </motion.div>
  );
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
          {statsData.map((stat, index) => (
            <StatCard key={stat.label || index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}