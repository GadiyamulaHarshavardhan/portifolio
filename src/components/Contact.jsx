// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = {
    email: "gadiyamulaharsha@gmail.com",
    phone: "+91-8179864623",
    address: "Andhra Pradesh , Guntur"
  };

const socialMedia = [
  {
    name: "github",
    url: "https://github.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="inline-block"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.306 1.23A11.509 11.509 0 0112 5.803c.588 0 1.176.059 1.764.12 2.298-1.552 3.306-1.23 3.306-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )
  },
  {
    name: "behance",
    url: "https://behance.net",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="inline-block"
      >
        <path d="M0 0v24h24V0H0zm19.584 6.194c-.252 0-.444.054-.636.186-.192.12-.288.33-.288.618v7.248c0 .288.096.498.288.618.192.132.384.186.636.186h1.68c.252 0 .456-.054.636-.198.192-.12.288-.336.288-.618V7.008c0-.288-.096-.498-.288-.618-.18-.144-.384-.198-.636-.198h-1.68zm-15.84.42c-.192 0-.348.048-.504.192-.204.144-.3.36-.3.636v6.876c0 .276.096.492.3.636.156.144.312.192.504.192h1.38c.192 0 .348-.048.504-.192.204-.144.3-.36.3-.636V7.452c0-.276-.096-.492-.3-.636-.156-.144-.312-.192-.504-.192H3.744zm6.168 1.704h-1.92v1.5h1.788v1.224H7.92v1.632h1.92v1.212H6.312V6.972h3.528v1.956zm8.328 4.308c-.612 0-1.092.186-1.44.558-.336.36-.516.846-.516 1.458 0 .612.18 1.098.516 1.458.348.372.828.558 1.44.558.612 0 1.092-.186 1.44-.558.336-.36.516-.846.516-1.458 0-.612-.18-1.098-.516-1.458-.348-.372-.828-.558-1.44-.558zm0 4.02c-.492 0-.864-.162-1.116-.492-.24-.318-.372-.762-.372-1.32 0-.558.132-1.002.372-1.32.252-.33.624-.492 1.116-.492.492 0 .864.162 1.116.492.24.318.372.762.372 1.32 0 .558-.132 1.002-.372 1.32-.252.33-.624.492-1.116.492z" />
      </svg>
    )
  },
  {
    name: "fiverr",
    url: "https://fiverr.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="inline-block"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.297 14.367l-1.031 1.031c-.396.396-.621.84-.621 1.362 0 .522.225.966.621 1.362l-2.231 2.231c-.396.396-.953.621-1.495.621-.522 0-1.046-.225-1.387-.621-4.5-4.5-1.406-7.176.347-10.945.258-.535.015-1.148-.54-1.406-.566-.258-1.148-.015-1.406.54-2.066 4.466-4.787 7.12-3.24 10.848.258.54.885.798 1.405.798.523 0 1.045-.225 1.387-.621l2.391-2.391c.396-.396.621-.953.621-1.495 0-.522-.225-1.046-.621-1.387L8.54 9.54c-.396-.396-.84-.621-1.362-.621-.522 0-.966.225-1.362.621l-1.031 1.031c-.396.396-.621.84-.621 1.362 0 .522.225.966.621 1.362l6.75 6.75c.396.396.953.621 1.495.621.522 0 1.046-.225 1.387-.621l1.031-1.031c.396-.396.621-.84.621-1.362 0-.522-.225-.966-.621-1.362z" />
      </svg>
    )
  },
  {
    name: "linkedin",
    url: "https://linkedin.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="inline-block"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: "instagram",
    url: "https://instagram.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="inline-block"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44 0 .795.646 1.44 1.441 1.44.795 0 1.439-.645 1.439-1.44 0-.795-.644-1.44-1.439-1.44z" />
      </svg>
    )
  }
];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#121212] border-t border-[#a6a6a6]">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-oswald text-[#f5f5f5] text-2xl mb-4">
              Harsha<span className="text-[#a6a6a6]"></span>
            </h3>
            <p className="font-nunito text-[#a6a6a6] text-sm mb-4">
              Full Stack Developer crafting digital experiences with clean code and innovative solutions.
            </p>
            <motion.div 
              className="flex items-center gap-2 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-nunito text-[#a6a6a6] text-sm">Available for projects</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-oswald text-[#f5f5f5] text-lg mb-4 uppercase tracking-wide">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block font-nunito text-[#a6a6a6] text-sm hover:text-[#f5f5f5] transition-colors duration-300 mx-auto md:mx-0"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="font-oswald text-[#f5f5f5] text-lg mb-4 uppercase tracking-wide">Get In Touch</h4>
            <div className="space-y-2">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="block font-nunito text-[#a6a6a6] text-sm hover:text-[#f5f5f5] transition-colors duration-300"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                {contactInfo.email}
              </motion.a>
              <motion.a
                href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                className="block font-nunito text-[#a6a6a6] text-sm hover:text-[#f5f5f5] transition-colors duration-300"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {contactInfo.phone}
              </motion.a>
              <motion.p
                className="font-nunito text-[#a6a6a6] text-sm"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                {contactInfo.address}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-[#a6a6a6] pt-8"
        >
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialMedia.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#a6a6a6] hover:text-[#f5f5f5] transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-nunito text-[#a6a6a6] text-sm">
              © {new Date().getFullYear()} Tushar Joshi. All rights reserved.
            </p>
            <p className="font-nunito text-[#a6a6a6] text-xs mt-1">
              Crafted with passion and attention to detail
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={() => scrollToSection('#hero')}
            className="fixed bottom-6 right-6 w-12 h-12 bg-[#1a1a1a] border border-[#a6a6a6] text-[#f5f5f5] rounded-full flex items-center justify-center hover:border-[#f5f5f5] transition-all duration-300 z-50"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="font-nunito text-[#a6a6a6] text-sm italic">
            Ready to start your next project?{" "}
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="text-[#f5f5f5] hover:underline transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Let's talk
            </motion.a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;