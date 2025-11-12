// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Project Manager",
      company: "Tech Rational",
      review: "Working with Tushar was an exceptional experience. His technical expertise and attention to detail helped us deliver our CRM project ahead of schedule. He consistently went above and beyond to ensure the solution met all our requirements.",
      rating: 5,
      project: "Innocew CRM",
      photo: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO",
      company: "WebAppX Technology",
      review: "Tushar's ability to understand complex business requirements and translate them into scalable technical solutions is remarkable. His work on our automotive platform set new standards for performance and user experience.",
      rating: 5,
      project: "Conscious Auto",
      photo: "👨‍💼"
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Product Owner",
      company: "FoodCho",
      review: "The FoodCho PWA application developed by Tushar exceeded our expectations. His innovative approach to food delivery technology and dedication to user experience resulted in a 40% increase in customer engagement.",
      rating: 5,
      project: "FoodCho PWA",
      photo: "👩‍💻"
    }
  ];

  const recognitions = [
    {
      title: "Quality - ZED Certification",
      organization: "MSME",
      awardedTo: "Dravya Technosys Pvt. Ltd",
      type: "certification"
    },
    {
      title: "Certificate of Excellence",
      organization: "Vijeya Bank Computer Center",
      awardedTo: "Tushar Narendrakumar Joshi",
      type: "award"
    },
    {
      title: "Responsiveness Recognition",
      organization: "Multiple Organizations",
      awardedTo: "52+ Software Projects",
      type: "recognition"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-[#a6a6a6]'
        }`}
      >
        ★
      </span>
    ));
  };

  const getTypeColor = (type) => {
    const colors = {
      certification: 'border-green-400 text-green-400',
      award: 'border-blue-400 text-blue-400',
      recognition: 'border-purple-400 text-purple-400'
    };
    return colors[type] || 'border-[#a6a6a6] text-[#a6a6a6]';
  };

const getTypeIcon = (type) => {
  const iconProps = {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "inline-block"
  };

  const icons = {
    certification: (
      <svg {...iconProps}>
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
        <circle cx="12" cy="8" r="7" />
      </svg>
    ),
    award: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
      </svg>
    ),
    recognition: (
      <svg {...iconProps}>
        <path d="M4 12V6a2 2 0 0 1 2-2h2" />
        <path d="M12 4h4a2 2 0 0 1 2 2v6" />
        <path d="M6 20v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        <path d="M12 12v8" />
        <path d="M8 16h8" />
      </svg>
    )
  };

  return icons[type] || (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
};

  return (
    <section id="testimonials" className="min-h-screen flex items-center px-6 py-20 bg-[#121212]">
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
            <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="font-oswald text-[#f5f5f5] text-4xl md:text-6xl font-light uppercase tracking-tight mb-6">
            Client Reviews
          </h2>
          <motion.p 
            className="font-nunito text-[#a6a6a6] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What clients say about working with me and the solutions we've built together.
          </motion.p>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#1a1a1a] border border-[#a6a6a6] rounded-lg p-6 h-full hover:border-[#f5f5f5] transition-all duration-300 flex flex-col">
                {/* Client Photo and Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.photo}</div>
                  <div className="flex-1">
                    <h3 className="font-oswald text-[#f5f5f5] text-lg">{testimonial.name}</h3>
                    <p className="font-nunito text-[#a6a6a6] text-sm">{testimonial.position}</p>
                    <p className="font-nunito text-[#a6a6a6] text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Project */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[#121212] border border-[#a6a6a6] text-[#a6a6a6] font-oswald text-xs uppercase tracking-wide rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="font-nunito text-[#a6a6a6] text-sm leading-relaxed mb-4 flex-grow italic">
                  "{testimonial.review}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="text-right">
                    <span className="font-oswald text-[#f5f5f5] text-sm">
                      {testimonial.rating}.0/5.0
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-oswald text-[#f5f5f5] text-2xl md:text-3xl mb-4">
              Awards & Recognitions
            </h3>
            <p className="font-nunito text-[#a6a6a6] text-lg max-w-2xl mx-auto">
              Formal recognition of quality work and professional excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] border border-[#a6a6a6] rounded-lg p-6 text-center hover:border-[#f5f5f5] transition-all duration-300"
              >
                <div className="text-3xl mb-3">
                  {getTypeIcon(recognition.type)}
                </div>
                <h4 className="font-oswald text-[#f5f5f5] text-lg mb-2">
                  {recognition.title}
                </h4>
                <p className="font-nunito text-[#a6a6a6] text-sm mb-2">
                  {recognition.organization}
                </p>
                <p className="font-oswald text-[#f5f5f5] text-sm">
                  {recognition.awardedTo}
                </p>
                <span className={`inline-block mt-3 px-3 py-1 border rounded-full font-oswald text-xs uppercase tracking-wide ${getTypeColor(recognition.type)}`}>
                  {recognition.type}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-[#a6a6a6] pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100%", label: "Client Satisfaction" },
              { number: "05+", label: "Teams Collaborated" },
              { number: "32+", label: "Projects Delivered" },
              { number: "5★", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
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

export default Testimonials;