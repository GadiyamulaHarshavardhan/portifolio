// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Hero = ({ data }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section 
      ref={sectionRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#a6a6a6] rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-[#f5f5f5] rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-8 h-8 border border-[#a6a6a6] rounded-full opacity-40"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text Section */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="w-3 h-3 bg-[#f5f5f5] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">DEVELOPER</span>
              <span className="text-[#a6a6a6]">/</span>
              <span className="font-oswald text-[#a6a6a6] text-sm tracking-wider">FULL STACK</span>
            </motion.div>

            {/* Main Name */}
            <motion.h1 
              className="font-oswald text-[#f5f5f5] text-7xl md:text-8xl lg:text-9xl font-light uppercase leading-none tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Harsha
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="font-nunito text-[#a6a6a6] text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              My goal is to write clean, maintainable code that enhances the development process and makes coding enjoyable through structured and thoughtful practices.
            </motion.p>
          </motion.div>

          {/* Right Content - Visual Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y, opacity }}
          >
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
                      src="src/assets/harsha.png" 
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
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#f5f5f5] rounded-full"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#a6a6a6] rounded-full"
            />
            
            {/* Stats Bar */}
            <motion.div 
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#121212] border border-[#a6a6a6] px-6 py-3 rounded-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-oswald text-[#f5f5f5] text-lg">05+</div>
                  <div className="font-nunito text-[#a6a6a6] text-xs">Teams</div>
                </div>
                <div className="w-px h-6 bg-[#a6a6a6]"></div>
                <div className="text-center">
                  <div className="font-oswald text-[#f5f5f5] text-lg">05+</div>
                  <div className="font-nunito text-[#a6a6a6] text-xs">Years</div>
                </div>
                <div className="w-px h-6 bg-[#a6a6a6]"></div>
                <div className="text-center">
                  <div className="font-oswald text-[#f5f5f5] text-lg">32+</div>
                  <div className="font-nunito text-[#a6a6a6] text-xs">Projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;