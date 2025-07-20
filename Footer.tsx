
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 400,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', budget: 400, message: '' });
  };

  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Create Something <span className="text-green-400">Amazing</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to bring your vision to life? Get in touch and let's discuss your next video project.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-green-500"></i>
                </div>
                <span className="text-gray-300">editwithfox@gmail.com
</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-green-500"></i>
                </div>
                <span className="text-gray-300">+91 8320391624</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              {[ 'ri-instagram-line', 'ri-youtube-line', 'ri-twitter-line', 'ri-linkedin-line' ].map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all cursor-pointer"
                >
                  <i className={`${icon} text-xl text-white hover:text-green-400`}></i>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Budget Range</label>
                <div className="relative">
                  <input
                    type="range"
                    name="budget"
                    min="400"
                    max="10000"
                    step="100"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${((formData.budget - 400) / (10000 - 400)) * 100}%, #374151 ${((formData.budget - 400) / (10000 - 400)) * 100}%, #374151 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>₹400</span>
                    <span>₹10,000</span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      ₹{formData.budget.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  maxLength={500}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors resize-none text-sm"
                  required
                />
                <div className="text-right text-xs text-gray-400 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold cursor-pointer whitespace-nowrap relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            2024 Edit with Fox. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
