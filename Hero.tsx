
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-green-400 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-20 h-2 bg-gradient-to-r from-green-400 to-transparent"
          animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-1 h-16 bg-gradient-to-b from-transparent via-green-400 to-transparent"
          animate={{ scaleY: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-60 right-1/3 w-16 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
          animate={{ scaleX: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20video%20editor%20workspace%20with%20dark%20aesthetic%2C%20cinematic%20lighting%2C%20modern%20editing%20setup%20with%20multiple%20monitors%20displaying%20video%20timelines%2C%20color%20grading%20tools%2C%20professional%20camera%20equipment%20in%20background%2C%20dramatic%20shadows%20and%20highlights%2C%20high-tech%20atmosphere%2C%20dark%20blue%20and%20green%20color%20scheme&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full"
          >
            {/* Decorative line above title */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-green-400 to-green-600 mb-6 rounded-full"
            />
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              An Expert Video Editor &{' '}
              <span className="text-green-400 relative">
                Content Creator
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-transparent origin-left"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming your raw footage into compelling visual stories that captivate audiences and deliver powerful messages through expert editing and creative storytelling.
            </motion.p>
            
            <motion.button
              className="px-8 py-4 bg-green-500 text-white text-lg rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap relative overflow-hidden group border-2 border-transparent hover:border-green-400"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame lines */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -top-8 -left-8 w-16 h-16 border-l-4 border-t-4 border-green-400"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute -bottom-8 -right-8 w-16 h-16 border-r-4 border-b-4 border-green-400"
              />
              
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-500/30 relative"
              >
                <img
                  src="https://static.readdy.ai/image/482e3baa8055f9ba35ce1db2b9edab48/e91d2c3264a4cd201ac70adee59ca8d9.png"
                  alt="Video Editor"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
