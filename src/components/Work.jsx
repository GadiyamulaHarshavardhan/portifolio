// src/components/Work.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const companies = [
    {
      company: "Tech Rational",
      role: "Sr. Software Developer",
      period: "July 2022 – Dec 2023",
      projects: ["Innocew CRM", "TastyTruck App", "MyPro Mobile App", "MMD Sales App"],
      technologies: ["Angular", "Ionic", "NodeJS", "MongoDB"]
    },
    {
      company: "WebAppX Technology",
      role: "Sr. Software Analyst & Developer",
      period: "2020 – June 2022",
      projects: ["Conscious Auto", "SMSWay Web App", "SchoolMyLess"],
      technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript"]
    },
    {
      company: "Trinity Infocom",
      role: "MEAN / LAMP Developer",
      period: "March 2019 – Dec 2020",
      projects: ["Angular, NodeJS, MongoDB, MySQL Development"],
      technologies: ["MEAN Stack", "LAMP Stack", "MongoDB", "MySQL"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="work" className="min-h-screen flex items-center px-6 py-20 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#f5f5f5] rounded-full"></div>
            <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">EXPERIENCE</span>
          </div>
          <h2 className="font-oswald text-[#f5f5f5] text-4xl md:text-5xl font-light uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="font-nunito text-[#a6a6a6] text-lg max-w-2xl mx-auto">
            My professional journey through innovative companies and challenging projects
          </p>
        </motion.div>

        {/* Work Experiences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1a1a1a] border border-[#a6a6a6] rounded-lg p-6 hover:border-[#f5f5f5] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="font-oswald text-[#f5f5f5] text-2xl mb-2">
                    {company.company}
                  </h3>
                  <p className="font-nunito text-[#a6a6a6] text-lg">
                    {company.role}
                  </p>
                </div>
                <motion.span 
                  className="inline-block px-4 py-2 bg-[#121212] border border-[#a6a6a6] text-[#f5f5f5] font-oswald text-sm rounded-full mt-2 md:mt-0"
                  whileHover={{ scale: 1.05 }}
                >
                  {company.period}
                </motion.span>
              </div>

              {/* Projects */}
              <div className="mb-4">
                <h4 className="font-oswald text-[#f5f5f5] text-lg mb-3">Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  {company.projects.map((project, projectIndex) => (
                    <motion.span
                      key={projectIndex}
                      className="px-3 py-2 bg-[#121212] border border-[#a6a6a6] text-[#a6a6a6] font-nunito text-sm rounded-lg hover:border-[#f5f5f5] hover:text-[#f5f5f5] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: projectIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-oswald text-[#f5f5f5] text-lg mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {company.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-transparent border border-[#a6a6a6] text-[#a6a6a6] font-nunito text-xs rounded-full hover:bg-[#a6a6a6] hover:text-[#121212] transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: techIndex * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-[#a6a6a6] pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "3", label: "Companies" },
              { number: "10+", label: "Major Projects" },
              { number: "5", label: "Years" },
              { number: "100%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-oswald text-[#f5f5f5] text-2xl md:text-3xl mb-2">
                  {stat.number}
                </div>
                <div className="font-nunito text-[#a6a6a6] text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;