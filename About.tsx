
'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-80 h-96 rounded-2xl overflow-hidden shadow-xl relative"
              >
                <img
                  src="https://static.readdy.ai/image/482e3baa8055f9ba35ce1db2b9edab48/e91d2c3264a4cd201ac70adee59ca8d9.png"
                  alt="About Me"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-gray-900/20"></div>
              </motion.div>
              
              <motion.div
                className="absolute -top-3 -left-3 w-full h-full border-2 border-green-500/30 rounded-2xl -z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Why Hire Me For Your{' '}
              <span className="text-green-400">
                Next Project?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              With years of experience in video editing and content creation, I bring a unique blend of technical expertise and creative vision to every project. I specialize in transforming raw footage into engaging stories that resonate with audiences, using industry-leading tools and techniques to deliver exceptional results that exceed expectations.
            </motion.p>
            
            <motion.button
              className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 cursor-pointer whitespace-nowrap relative overflow-hidden group border-2 border-transparent hover:border-green-400"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Read More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
