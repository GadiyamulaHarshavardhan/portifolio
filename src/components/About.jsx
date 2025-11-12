// src/components/About.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="min-h-screen flex items-center px-6 py-20 bg-[#121212]"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content - Image Section - Normal flow on mobile */}
          <div className="lg:sticky lg:top-20 order-2 lg:order-1">
            <div className="relative">
               {/* Main Image Container */}
                            <motion.div 
                              className="relative bg-[#121212] border border-[#a6a6a6] rounded-lg p-8"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="aspect-square bg-gradient-to-br from-[#121212] to-[#1a1a1a] flex items-center justify-center">
                                <motion.div 
                                  className="text-center"
                                  animate={{ y: [0, -10, 0] }}
                                  transition={{ duration: 4, repeat: Infinity }}
                                >
                                 <div className="aspect-square bg-gradient-to-br from-[#121212] to-[#1a1a1a] flex items-center justify-center">
                                  <img 
                                    src="src/assets/harsha.jpg" 
                                    alt="Profile" 
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                  <p className="font-nunito text-[#a6a6a6]">Your Image Here</p>
                                </motion.div>
                              </div>
                            </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-[#f5f5f5] rounded-full"
              />
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-4 h-4 lg:w-6 lg:h-6 bg-[#a6a6a6] rounded-full"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-3 lg:-bottom-6 right-4 lg:right-8 bg-[#121212] border border-[#a6a6a6] px-4 py-2 lg:px-6 lg:py-3 rounded-full">
                <div className="text-center">
                  <div className="font-oswald text-[#f5f5f5] text-lg lg:text-2xl">05+</div>
                  <div className="font-nunito text-[#a6a6a6] text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text Section - Comes first on mobile */}
          <div className="text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Section Badge */}
              <div className="flex items-center gap-3 mb-6 lg:mb-8">
                <motion.div 
                  className="w-3 h-3 bg-[#f5f5f5] rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">ABOUT ME</span>
              </div>

              {/* Main Title */}
              <h2 className="font-oswald text-[#f5f5f5] text-4xl lg:text-6xl font-light uppercase leading-none tracking-tight mb-6 lg:mb-8">
                Harsha
              </h2>

              {/* Description */}
              <p className="font-nunito text-[#a6a6a6] text-base lg:text-lg leading-relaxed mb-8 lg:mb-12">
                Hello! I'm Harsha , a full-stack developer with nearly 20 years of experience in building scalable applications. I specialize in Angular, Ionic, PHP (CodeIgniter), and NodeJS.
              </p>
            </motion.div>

            {/* Personal Details Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { label: "Name", value: "Harsha" },
                { label: "Nationality", value: "Indian" },
                { label: "Experience", value: "05+ Years" },
                { label: "Freelance", value: "Available" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="border-l-2 border-[#a6a6a6] pl-3 lg:pl-4 py-2 lg:py-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-oswald text-[#f5f5f5] text-base lg:text-lg mb-1">{item.label}</div>
                  <div className="font-nunito text-[#a6a6a6] text-sm lg:text-base">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div 
              className="mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="font-oswald text-[#f5f5f5] text-xl lg:text-2xl mb-4">Languages</div>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {['English'].map((language, index) => (
                  <motion.div
                    key={language}
                    className="px-3 lg:px-4 py-2 bg-[#121212] border border-[#a6a6a6] text-[#f5f5f5] font-nunito text-sm hover:bg-[#a6a6a6] hover:text-[#121212] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {language}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <div className="space-y-6 lg:space-y-8">
              {Object.entries({
                front_end: ['HTML', 'CSS', 'JavaScript', 'Nxt', 'Angular', 'React'],
                back_end: ['PHP', 'ExpressJS', 'Python'],
                database: ['MySQL', 'MongoDB', 'PostgreSQL'],
                ui_styling: ['Sass', 'Bootstrap', 'GSAP Animations', 'Figma'],
                rest_apis: ['JWT', 'OAuth', 'Postman', 'CORS', 'HTTPS']
              }).map(([category, technologies], categoryIndex) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-oswald text-[#f5f5f5] text-lg lg:text-xl mb-3 lg:mb-4 capitalize">
                    {category.replace(/_/g, ' ')}
                  </div>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 lg:px-4 lg:py-2 bg-[#121212] border border-[#a6a6a6] text-[#a6a6a6] font-nunito text-xs lg:text-sm hover:border-[#f5f5f5] hover:text-[#f5f5f5] transition-all duration-300 inline-block"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.5 + categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar - Only show on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden lg:block mt-16 border-t border-[#a6a6a6] pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-oswald text-[#f5f5f5] text-3xl mb-2">32+</div>
              <div className="font-nunito text-[#a6a6a6] text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-oswald text-[#f5f5f5] text-3xl mb-2">10K+</div>
              <div className="font-nunito text-[#a6a6a6] text-sm">Reviews</div>
            </div>
            <div className="text-center">
              <div className="font-oswald text-[#f5f5f5] text-3xl mb-2">05+</div>
              <div className="font-nunito text-[#a6a6a6] text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-oswald text-[#f5f5f5] text-3xl mb-2">05+</div>
              <div className="font-nunito text-[#a6a6a6] text-sm">Teams Worked With</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
