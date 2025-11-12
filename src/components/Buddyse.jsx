// src/components/Buddyse.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Buddyse = () => {
  const services = {
    customSoftwareDevelopment: [
      {
        title: "Application Migration & Re-Engineering",
        description: "We modernize legacy systems for performance and scalability."
      },
      {
        title: "Product Development Service",
        description: "We take ideas from concept to launch-ready digital products."
      },
      {
        title: "Enterprise Application Development",
        description: "Building robust applications that power enterprise operations."
      }
    ],
    clientServerDevelopment: [
      {
        title: "Client-server Application Development",
        description: "We design efficient, secure client-server systems."
      },
      {
        title: "On-premise Application Development",
        description: "Custom-built solutions for in-house business operations."
      },
      {
        title: "Maintenance and Support",
        description: "Full-cycle support and continuous optimization services."
      }
    ]
  };

  const stats = [
    { number: "25+", label: "Expert Team Members" },
    { number: "100+", label: "Projects Delivered" },
    { number: "15+", label: "Industries Served" },
    { number: "99%", label: "Client Retention" }
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="buddyse" className="min-h-screen flex items-center px-6 py-20 bg-[#121212]">
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
            <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">COLLABORATION</span>
          </div>
          <h2 className="font-oswald text-[#f5f5f5] text-4xl md:text-6xl font-light uppercase tracking-tight mb-6">
            Buddyse
          </h2>
          <motion.p 
            className="font-nunito text-[#a6a6a6] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A team of 25+ experts crafting and delivering impactful custom software and marketing solutions.
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-oswald text-[#f5f5f5] text-2xl md:text-3xl mb-2">
                {stat.number}
              </div>
              <div className="font-nunito text-[#a6a6a6] text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Custom Software Development */}
          <motion.div variants={itemVariants}>
            <div className="bg-[#1a1a1a] border border-[#a6a6a6] rounded-lg p-8 h-full hover:border-[#f5f5f5] transition-all duration-300">
              <h3 className="font-oswald text-[#f5f5f5] text-2xl md:text-3xl mb-8 text-center uppercase tracking-wide">
                Custom Software Development
              </h3>
              <div className="space-y-6">
                {services.customSoftwareDevelopment.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-[#f5f5f5] pl-6 py-4 group hover:border-[#a6a6a6] transition-all duration-300"
                  >
                    <h4 className="font-oswald text-[#f5f5f5] text-xl mb-3 group-hover:text-[#f5f5f5] transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="font-nunito text-[#a6a6a6] leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Client-Server Development */}
          <motion.div variants={itemVariants}>
            <div className="bg-[#1a1a1a] border border-[#a6a6a6] rounded-lg p-8 h-full hover:border-[#f5f5f5] transition-all duration-300">
              <h3 className="font-oswald text-[#f5f5f5] text-2xl md:text-3xl mb-8 text-center uppercase tracking-wide">
                Client-Server Development
              </h3>
              <div className="space-y-6">
                {services.clientServerDevelopment.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-[#f5f5f5] pl-6 py-4 group hover:border-[#a6a6a6] transition-all duration-300"
                  >
                    <h4 className="font-oswald text-[#f5f5f5] text-xl mb-3 group-hover:text-[#f5f5f5] transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="font-nunito text-[#a6a6a6] leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Buddyse;