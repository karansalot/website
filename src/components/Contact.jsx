import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Let's Connect</h2>
            <p className="text-lg text-gray-300 mb-8">
              Open to Fall 2025 Co-op and full-time opportunities from January 2026 in Data Analytics, Business Intelligence, and Product Management roles.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="card bg-blue-900/30 backdrop-blur-lg border-blue-500/20 hover:border-blue-400/40"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Email</h3>
                <a
                  href="mailto:karan20@arizona.edu"
                  className="text-blue-200 hover:text-blue-300 block mb-2"
                >
                  karan20@arizona.edu
                </a>
                <a
                  href="mailto:salotkaran@gmail.com"
                  className="text-blue-200 hover:text-blue-300 block"
                >
                  salotkaran@gmail.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="card bg-blue-900/30 backdrop-blur-lg border-blue-500/20 hover:border-blue-400/40"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Social</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://linkedin.com/in/karansalot20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-300 flex items-center gap-2"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/karansalot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-300 flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href="https://x.com/karan_salot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-300 flex items-center gap-2"
                  >
                    <FaTwitter /> Twitter
                  </a>
                  <a
                    href="https://instagram.com/karan.salot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-300 flex items-center gap-2"
                  >
                    <FaInstagram /> Instagram
                  </a>
                  <a
                    href="https://t.me/karansalot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-300 flex items-center gap-2"
                  >
                    <FaTelegram /> Telegram
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;