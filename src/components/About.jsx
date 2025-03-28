import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8 overflow-hidden rounded-xl">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1GfEvRMd2cy6j_Xn3fkB7P-1DRYpfTd_k" 
                  alt="Karan in Chicago" 
                  className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Data-driven innovator and product strategist specializing in data analytics, business intelligence, 
                and quantitative analysis. Expertise in developing scalable data solutions, predictive analytics systems, 
                and data-driven product strategies. Proven track record in leading cross-functional teams and delivering 
                impactful solutions at the intersection of technology and business.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="badge">Data Analytics</span>
                <span className="badge">Business Intelligence</span>
                <span className="badge">Product Strategy</span>
                <span className="badge">Data Engineering</span>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="card bg-blue-900/50 border-blue-700/50">
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-white">MS in Management Information Systems</h4>
                      <p className="text-blue-300">University of Arizona (August 2024 - December 2025)</p>
                      <p className="text-sm text-gray-300 mt-2">Relevant Coursework:</p>
                      <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                        <li>Data Mining</li>
                        <li>Enterprise Data Management</li>
                        <li>Business Intelligence</li>
                        <li>Advanced Analytics</li>
                      </ul>
                      <p className="text-sm text-blue-300 mt-2">CGPA: 3.7/4.0</p>
                    </div>
                  </div>
                  <div className="card bg-blue-900/50 border-blue-700/50">
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-white">Bachelor of Technology in Electronics & Telecommunications</h4>
                      <h4 className="font-semibold text-blue-300">Honors in Artificial Intelligence and Machine Learning</h4>
                      <p className="text-blue-300">Dwarkadas J. Sanghvi College of Engineering, University of Mumbai</p>
                      <p className="text-blue-300">August 2020 - June 2024</p>
                      <p className="text-sm text-gray-300 mt-2">Relevant Coursework:</p>
                      <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                        <li>Data Structures</li>
                        <li>Database Management Systems</li>
                        <li>Big Data Analytics</li>
                      </ul>
                      <p className="text-sm text-blue-300 mt-2">CGPA: 3.8/4.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;