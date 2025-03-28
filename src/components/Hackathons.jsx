import React from 'react';
import { motion } from 'framer-motion';

const Hackathons = () => {
  const hackathons = [
    {
      title: "NeuroNexus",
      event: "Hack Arizona 2025",
      description: "2nd Prize Winner - Built a unified student platform that simplifies campus life at UA with features like smart study planning, parking availability, pantry queue management, and cultural club discovery. Developed using React, Vite, TailwindCSS, and local AI integration.",
      image: "https://drive.google.com/uc?export=view&id=1Qcsfnud8Wuvvo7HuWERDWh6yBLvvYL4k",
      link: "https://devpost.com/software/neuronexus",
      features: [
        "Modern D2L-inspired dashboard",
        "Smart Study Assistant with personalized plans",
        "Real-time parking and bus tracking",
        "Multilingual support (English & Spanish)",
        "Interactive cultural club map"
      ]
    },
    {
      title: "Regen Art DAO",
      event: "ETH Denver 2025",
      description: "Winner - Developed a decentralized autonomous organization (DAO) for sustainable AI-generated art. The platform enables artists to create and trade generative art while ensuring fair compensation and environmental responsibility.",
      image: "https://drive.google.com/uc?export=view&id=10PqSsZxe6LhmGV-srsxtYgiAu29SSXif",
      link: "https://devpost.com/software/regen-art-dao",
      features: [
        "Smart contract-based DAO governance",
        "AI-powered art generation engine",
        "Carbon-neutral NFT minting",
        "Artist royalty distribution system",
        "Community-driven curation"
      ]
    },
    {
      title: "Keyless AI",
      event: "ETH San Francisco 2024",
      description: "Main Track Winner - Created an innovative decentralized authentication system that combines AI-powered biometric verification with blockchain security. The solution eliminates the need for traditional passwords while enhancing security.",
      image: "https://drive.google.com/uc?export=view&id=1v-lwK200o1aOUX1DKcgk__fN6HPCxSp5",
      link: "https://lnkd.in/d8df9W7h",
      features: [
        "Multi-modal biometric authentication",
        "Zero-knowledge proof implementation",
        "Decentralized identity verification",
        "Real-time threat detection",
        "Cross-chain compatibility"
      ]
    }
  ];

  return (
    <section id="hackathons" className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-title mb-0 text-white">Global Hackathon Wins</h2>
            <span className="badge bg-purple-500/20 text-purple-200 border-purple-400/30">5x Winner</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-indigo-900/30 backdrop-blur-lg border-purple-500/20 hover:border-purple-400/40 group"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent z-10"></div>
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="text-xs font-medium text-purple-200 bg-purple-500/20 px-2 py-1 rounded-full">
                      {hackathon.event}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200">{hackathon.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{hackathon.description}</p>
                {hackathon.features && (
                  <ul className="space-y-1 mb-4">
                    {hackathon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {hackathon.link && (
                  <a
                    href={hackathon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-300 hover:text-purple-200 text-sm font-medium group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hackathons;