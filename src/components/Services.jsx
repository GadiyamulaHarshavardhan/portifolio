// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      name: "Mobile App Development",
      description: "Custom hybrid applications tailored for iOS and Android using Ionic and Angular.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto text-[#f5f5f5]"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="12" y1="2" x2="12" y2="6" />
        </svg>
      )
    },
    {
      name: "Solid Design Solutions",
      description: "User-centered creative design that enhances productivity and revenue growth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto text-[#f5f5f5]"
        >
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" />
        </svg>
      )
    },
    {
      name: "Web Development",
      description: "Adaptive web design using modern frameworks like NodeJS and CodeIgniter.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto text-[#f5f5f5]"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="15" />
          <line x1="15" y1="9" x2="9" y2="15" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center px-6 py-20 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#f5f5f5] rounded-full"></div>
            <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">SERVICES</span>
          </div>
          <h2 className="font-oswald text-[#f5f5f5] text-4xl md:text-5xl font-light uppercase tracking-tight mb-4">
            What I Do
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#1a1a1a] border border-[#a6a6a6] rounded-lg p-8 text-center hover:border-[#f5f5f5] transition-all duration-300 h-full flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-oswald text-[#f5f5f5] text-xl mb-4">
                {service.name}
              </h3>
              <p className="font-nunito text-[#a6a6a6] flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;