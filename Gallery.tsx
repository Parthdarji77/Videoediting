'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  videoId: string;
  category: string;
  client: string;
  duration: string;
  caseStudyLink: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Brand Commercial',
    description: 'Dynamic commercial video with motion graphics and color grading',
    videoId: 'K_sgxh5xgDk',
    category: 'Commercial',
    client: 'TechCorp',
    duration: '60 seconds',
    caseStudyLink: '/case-study/brand-commercial'
  },
  {
    id: '2',
    title: 'Wedding Highlight',
    description: 'Cinematic wedding video with emotional storytelling',
    videoId: 'ZEPcTwAEolI',
    category: 'Wedding',
    client: 'Sarah & Mike',
    duration: '3 minutes',
    caseStudyLink: '/case-study/wedding-highlight'
  },
  {
    id: '3',
    title: 'Product Launch',
    description: 'High-energy product reveal with advanced visual effects',
    videoId: 'JP_YNEbfzNM',
    category: 'Product',
    client: 'InnovateTech',
    duration: '90 seconds',
    caseStudyLink: '/case-study/product-launch'
  },
  {
    id: '4',
    title: 'Music Video',
    description: 'Creative music video with synchronized editing and effects',
    videoId: '2wkLrhc6XnE',
    category: 'Music',
    client: 'Rising Star Records',
    duration: '4 minutes',
    caseStudyLink: '/case-study/music-video'
  },
  {
    id: '5',
    title: 'Corporate Training',
    description: 'Professional training video with clear explanations',
    videoId: 'AjQvaJV8HUQ',
    category: 'Corporate',
    client: 'BusinessPro',
    duration: '8 minutes',
    caseStudyLink: '/case-study/corporate-training'
  },
  {
    id: '6',
    title: 'Social Media Campaign',
    description: 'Engaging social media content with viral potential',
    videoId: 'cialL3AhrEE',
    category: 'Social Media',
    client: 'TrendyBrand',
    duration: '30 seconds',
    caseStudyLink: '/case-study/social-media-campaign'
  }
];

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${item.videoId}`}
          title={item.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Overlay with project info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 flex items-center justify-center"
        >
          <div className="text-center p-4">
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{item.description}</p>
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-400 mb-4">
              <span className="px-2 py-1 bg-green-600 text-white rounded">{item.category}</span>
              <span>{item.duration}</span>
            </div>
            <Link 
              href={item.caseStudyLink}
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm whitespace-nowrap cursor-pointer"
            >
              <i className="ri-file-text-line w-4 h-4 flex items-center justify-center mr-2"></i>
              View Case Study
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <p>Client: {item.client}</p>
            <p>Duration: {item.duration}</p>
          </div>
          <span className="px-2 py-1 bg-gray-700 text-green-400 rounded text-xs">
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest video editing projects and discover the stories behind each creation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center mr-2"></i>
              View All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
