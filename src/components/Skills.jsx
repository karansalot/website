import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & ML",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP"]
    },
    {
      title: "Product & Analytics",
      skills: ["Product Strategy", "Data Analytics", "A/B Testing", "User Research", "Market Analysis", "SQL", "Tableau", "Power BI"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "MLOps"]
    },
    {
      title: "Blockchain & Web3",
      skills: ["Solidity", "Smart Contracts", "Web3.js", "DeFi", "TokenEconomics"]
    },
    {
      title: "Development",
      skills: ["React", "Node.js", "TypeScript", "GraphQL", "MongoDB", "PostgreSQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-blue-900/30 backdrop-blur-lg border-blue-500/20 hover:border-blue-400/40"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-800/30 text-blue-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;