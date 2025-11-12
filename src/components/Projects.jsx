// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "FoodCho PWA Web & Mobile Application",
      description: "Food Delivery Web & Mobile Application with Admin Panel and Delivery App for a complete delivery service ecosystem.",
      category: "Full Stack",
      tags: ["Food Delivery", "PWA", "Mobile App", "NodeJS", "Admin Panel", "Delivery App"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 2,
      title: "Innocew CRM",
      description: "Comprehensive Customer Relationship Management system with advanced analytics and automation features.",
      category: "Web App",
      tags: ["CRM", "Analytics", "Automation", "React", "NodeJS"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 3,
      title: "TastyTruck App",
      description: "Mobile application for food truck ordering and real-time location tracking.",
      category: "Mobile",
      tags: ["Food Truck", "Mobile App", "Real-time", "Ionic", "Angular"],
      status: "Completed",
      year: "2022"
    },
    {
      id: 4,
      title: "Conscious Auto",
      description: "Automotive platform for eco-friendly vehicle recommendations and sustainability tracking.",
      category: "Web App",
      tags: ["Automotive", "Sustainability", "Platform", "Vue.js", "MongoDB"],
      status: "Completed",
      year: "2022"
    },
    {
      id: 5,
      title: "MyPro Mobile App",
      description: "Professional networking and portfolio management application for creative professionals.",
      category: "Mobile",
      tags: ["Networking", "Portfolio", "Mobile", "React Native", "Firebase"],
      status: "Completed",
      year: "2021"
    },
    {
      id: 6,
      title: "SMSWay Web App",
      description: "Enterprise-grade SMS marketing platform with advanced segmentation and automation.",
      category: "Web App",
      tags: ["SMS", "Marketing", "Automation", "PHP", "MySQL"],
      status: "Completed",
      year: "2021"
    }
  ];

  const categories = ['All', 'Full Stack', 'Web App', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = (projectId) => {
    console.log('View project:', projectId);
    // Add your view project logic here
  };

  const handleViewDetails = (projectId) => {
    console.log('View details:', projectId);
    // Add your view details logic here
  };

  const handleStartProject = () => {
    console.log('Start project clicked');
    // Add your start project logic here
  };

  const handleViewAllProjects = () => {
    console.log('View all projects clicked');
    // Add your view all projects logic here
  };

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20 bg-[#121212]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div 
              className="w-3 h-3 bg-[#f5f5f5] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="font-oswald text-[#f5f5f5] text-4xl md:text-6xl font-light uppercase tracking-tight mb-6">
            Featured Projects
          </h2>
          <motion.p 
            className="font-nunito text-[#a6a6a6] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            User-centered Development Approach Enhances Productivity and Drives Revenue Growth
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 font-oswald text-sm uppercase tracking-wide transition-all duration-300 rounded-full ${
                activeFilter === category
                  ? 'bg-[#f5f5f5] text-[#121212] border border-[#f5f5f5]'
                  : 'bg-transparent text-[#a6a6a6] border border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#1a1a1a] border border-[#a6a6a6] rounded-lg overflow-hidden hover:border-[#f5f5f5] transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2 opacity-60">📱</div>
                      <p className="font-nunito text-[#a6a6a6] text-sm">Project Image</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#121212] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center">
                      <button
                        onClick={() => handleViewProject(project.id)}
                        className="px-6 py-3 bg-[#f5f5f5] text-[#121212] font-oswald text-sm uppercase tracking-wide rounded-full mb-2 mx-1 hover:scale-105 transition-transform duration-200"
                      >
                        View Project
                      </button>
                      <button
                        onClick={() => handleViewDetails(project.id)}
                        className="px-6 py-3 bg-transparent border border-[#f5f5f5] text-[#f5f5f5] font-oswald text-sm uppercase tracking-wide rounded-full mx-1 hover:scale-105 transition-transform duration-200"
                      >
                        Details
                      </button>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 font-oswald text-xs uppercase tracking-wide rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-400'
                        : 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#121212] bg-opacity-80 text-[#a6a6a6] font-oswald text-xs uppercase tracking-wide rounded-full border border-[#a6a6a6]">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-[#121212] text-[#a6a6a6] font-oswald text-xs uppercase tracking-wide rounded border border-[#a6a6a6]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-oswald text-[#f5f5f5] text-xl mb-3 group-hover:text-[#f5f5f5] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-nunito text-[#a6a6a6] text-sm mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[#121212] text-[#a6a6a6] font-nunito text-xs rounded border border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-[#121212] text-[#a6a6a6] font-nunito text-xs rounded border border-[#a6a6a6]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;