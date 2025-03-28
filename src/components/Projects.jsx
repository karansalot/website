import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Student Enrollment Prediction Model",
      description: "Advanced machine learning project for university analytics",
      achievements: [
        "Built a student enrollment prediction model using 6 machine learning algorithms (Logistic Regression, Random Forest, XGBoost, etc.) to compare performance and accuracy",
        "Provided a scalable solution to the University Analytics team, improving predictive accuracy and optimizing institutional planning"
      ],
      tech: ["Python", "Machine Learning", "Data Analytics", "Predictive Modeling"]
    },
    {
      title: "Smart Study Assistant – AI-Powered Chatbot",
      description: "Intelligent learning assistant for enhanced student experience",
      achievements: [
        "Designed and developed a prototype using Figma for an AI chatbot that organizes study materials and provides personalized recommendations",
        "Enhanced the university's platform (D2L) by developing a personalized learning tool that generates study plans tailored to user progress"
      ],
      tech: ["AI/ML", "Figma", "UX Design", "Educational Technology"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Academic Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-blue-900/30 backdrop-blur-lg border-blue-500/20 hover:border-blue-400/40"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-800/30 text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
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

export default Projects;