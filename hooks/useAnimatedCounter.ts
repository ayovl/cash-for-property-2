'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface UseAnimatedCounterProps {
  target: number;
  duration?: number;
  threshold?: number;
}

export function useAnimatedCounter({ 
  target, 
  duration = 2000, 
  threshold = 0.1 
}: UseAnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const animate = useCallback((timestamp: number, startTime: number) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    setCount(Math.floor(progress * target));
    
    if (progress < 1) {
      requestAnimationFrame((ts) => animate(ts, startTime));
    }
  }, [target, duration]);

  useEffect(() => {
    if (!startAnimation || target === 0) {
      if (target === 0) setCount(0);
      return;
    }

    setCount(0);
    requestAnimationFrame((timestamp) => animate(timestamp, timestamp));
  }, [target, startAnimation, animate]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { count, ref };
}
