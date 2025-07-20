
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  delay: number;
}

function SkillCircle({ name, percentage, delay }: SkillProps) {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercentage(percentage);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);
  
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#374151"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#10B981"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
          >
            {currentPercentage}%
          </motion.span>
        </div>
      </div>
      <motion.h3 
        className="text-lg font-semibold text-white text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.h3>
    </motion.div>
  );
}

export default function Skills() {
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
            My <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300">
            Expertise in industry-leading tools and techniques
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          <SkillCircle name="Premiere Pro" percentage={70} delay={0.2} />
          <SkillCircle name="After Effects" percentage={60} delay={0.4} />
          <SkillCircle name="Color Grading" percentage={45} delay={0.6} />
          <SkillCircle name="Final Cut Pro" percentage={55} delay={0.8} />
        </div>
      </div>
    </section>
  );
}
