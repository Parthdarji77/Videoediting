
'use client';

import { motion } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

function ServiceCard({ title, description, icon, delay }: ServiceProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors relative">
          <i className={`${icon} text-2xl text-green-500`}></i>
          
          {/* Icon background pulse */}
          <motion.div
            className="absolute inset-0 bg-green-500/10 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Video Editing",
      description: "Professional video editing with seamless transitions, color correction, and audio enhancement to create compelling visual narratives.",
      icon: "ri-film-line",
      delay: 0.1
    },
    {
      title: "Reels",
      description: "Short-form content creation optimized for social media platforms with engaging hooks and dynamic storytelling techniques.",
      icon: "ri-instagram-line",
      delay: 0.2
    },
    {
      title: "UI/UX Animation",
      description: "Motion graphics and UI animations that enhance user experience and bring digital interfaces to life with smooth interactions.",
      icon: "ri-magic-line",
      delay: 0.3
    },
    {
      title: "Color Correction",
      description: "Professional color grading and correction services to enhance visual consistency and create the perfect mood for your content.",
      icon: "ri-palette-line",
      delay: 0.4
    },
    {
      title: "Social Media Editing",
      description: "Platform-specific video editing tailored for various social media channels with optimal formatting and engagement strategies.",
      icon: "ri-share-line",
      delay: 0.5
    },
    {
      title: "Post Production",
      description: "Complete post-production services including sound design, visual effects, and final delivery in multiple formats.",
      icon: "ri-movie-2-line",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Services and <span className="text-green-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive video editing services to bring your vision to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
