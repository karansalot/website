import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            Made with ❤️ by Karan Salot | © 2025
          </p>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/karansalot20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/karansalot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="mailto:karan20@arizona.edu"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;