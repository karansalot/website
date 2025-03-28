import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Teaching Assistant – MIS 441",
      company: "University of Arizona",
      period: "January 2025 - Present",
      description: "Teaching Assistant for Systems Analysis & Design course",
      achievements: [
        "Designed and delivered curriculum on data-driven system design, SDLC, and Agile methodologies",
        "Led hands-on workshops on database modeling, ETL pipeline design, and cloud-based architectures",
        "Conducted SQL optimization labs, guiding students in query performance tuning and database normalization"
      ]
    },
    {
      title: "Research Assistant",
      company: "University of Arizona",
      period: "January 2025 - Present",
      description: "Conducting research in data analytics and business intelligence",
      achievements: [
        "Leading research projects in data analytics and business intelligence",
        "Publishing papers in top-tier journals",
        "Collaborating with faculty on cutting-edge research initiatives"
      ]
    },
    {
      title: "Data Analytics Consultant",
      company: "MHHC Enterprises",
      period: "August 2024 - Present",
      description: "Leading data analytics and business intelligence initiatives",
      achievements: [
        "Engineered ETL workflows to ingest and clean data from multiple enterprise systems",
        "Developed Tableau dashboards providing real-time visibility into B2B & B2C operational metrics",
        "Automated SQL queries to improve reporting performance, reducing manual extraction time by 30%"
      ]
    },
    {
      title: "Founding Engineer",
      company: "Happy Hunters Travel Agency",
      period: "January 2023 - August 2024",
      description: "Led technical development and data strategy initiatives",
      achievements: [
        "Designed and developed scalable SQL databases and automated data workflows using Python",
        "Solved critical JIRA tickets by implementing backend solutions that improved database performance by 25%",
        "Created a data analytics pipeline to analyze customer segmentation, resulting in a 57% increase in lead conversion rates",
        "Built data-driven product roadmaps, aligned with stakeholder requirements, and delivered prototypes using Figma"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Sshubh Consultancy",
      period: "August 2021 - August 2022",
      description: "Focused on data analysis and business intelligence",
      achievements: [
        "Built interactive Tableau dashboards for real-time monitoring of KPIs and financial metrics",
        "Developed predictive regression models to improve forecasting accuracy by 18%",
        "Automated data audit workflows, reducing manual effort by 21% and enhancing operational efficiency"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-title mb-0">Professional Experience</h2>
            <div className="flex gap-2">
              <span className="badge bg-blue-500/20 text-blue-200 border-blue-400/30">Open for Fall 2025 Co-op</span>
              <span className="badge bg-purple-500/20 text-purple-200 border-purple-400/30">Full-time from Jan 2026</span>
            </div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-blue-900/30 backdrop-blur-lg border-blue-500/20 hover:border-blue-400/40"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <p className="text-blue-400 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;