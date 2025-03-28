import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  const publications = [
    {
      title: "Improving QOS of DSDV Protocol to deliver successful collision avoidance message in case of an emergency in VANET",
      authors: "Dr. Pratik Kanani, Karan Salot, et al",
      journal: "Soft Computing, Springer",
      doi: "10.1007/s00500-023-08766-w",
      year: "2023"
    },
    {
      title: "Smart automatic COVID door opening system with contactless temperature sensing",
      authors: "Dr. V.Venkataramanan, Karan Salot, et al",
      journal: "e-Prime-Advances in Electrical Engineering, Electronics and Energy",
      doi: "10.1016/j.prime.2023.100284",
      year: "2023"
    },
    {
      title: "Car transportation using KNN",
      authors: "Karan Salot et al",
      journal: "International Journal of All Research Education & Scientific Methods",
      year: "2023"
    },
    {
      title: "The Role of Data Analytics in Predicting Customer Churn in E-commerce",
      authors: "Karan Salot et al",
      journal: "International Journal of Research Publication & Reviews",
      volume: "Volume 4, Issue 10",
      year: "October 2023"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Publications</h2>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-purple-900/30 backdrop-blur-lg border-purple-500/20 hover:border-purple-400/40"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-200">{pub.title}</h3>
                <p className="text-gray-300 mb-2">{pub.authors}</p>
                <p className="text-blue-300">{pub.journal}</p>
                {pub.volume && (
                  <p className="text-gray-400">{pub.volume}</p>
                )}
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="text-gray-400">{pub.year}</span>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-200 inline-flex items-center"
                    >
                      DOI: {pub.doi}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Publications;