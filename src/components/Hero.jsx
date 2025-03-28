import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge bg-blue-500/20 text-blue-200 border-blue-400/30">Open to Fall 2025 Co-op</span>
              <span className="badge bg-purple-500/20 text-purple-200 border-purple-400/30">Full-time from Jan 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Karan Salot
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 mb-6">
              Data Scientist | Product Strategist | AI/ML Engineer | Blockchain Innovator
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Passionate innovator with expertise in AI/ML, blockchain, and product strategy. 
              5x Global Hackathon Winner crafting data-driven solutions that bridge technology and business needs. 
              Currently pursuing MS in Management Information Systems at University of Arizona.
            </p>
            <p className="text-lg text-blue-300 mb-8 leading-relaxed">
              Seeking roles in Data Science, Business Analytics, Product Management, AI/ML Engineering, and Blockchain Development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:karan20@arizona.edu" className="btn-primary bg-blue-500 hover:bg-blue-600">
                Contact Me
              </a>
              <a 
                href="https://linkedin.com/in/karansalot20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-indigo-500 hover:bg-indigo-600"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/karansalot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-purple-500 hover:bg-purple-600"
              >
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 animate-pulse"></div>
              <img 
                src="https://drive.google.com/uc?export=view&id=1TdtoAQib4sCJQRSq4m5Ozxr9Kz5a-t6v"
                alt="Karan Salot"
                className="relative rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;