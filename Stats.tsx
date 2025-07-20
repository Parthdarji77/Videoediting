
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatProps {
  number: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCard({ number, label, suffix, delay }: StatProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = number;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(counter);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [number, delay]);
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        className="text-4xl lg:text-6xl font-bold text-green-400 mb-2"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {count}{suffix}
      </motion.div>
      <motion.p
        className="text-lg text-gray-300 font-medium"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            By the <span className="text-green-400">Numbers</span>
          </h2>
          <p className="text-xl text-gray-300">
            Proven track record of delivering exceptional results
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <StatCard number={50} label="Videos Edited" suffix="+" delay={0.2} />
          <StatCard number={4} label="Happy Clients" suffix="+" delay={0.4} />
          <StatCard number={1} label="Years Experience" suffix="+" delay={0.6} />
          <StatCard number={100} label="Projects Completed" suffix="%" delay={0.8} />
        </div>
      </div>
    </section>
  );
}
