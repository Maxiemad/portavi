
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Instagram & YouTube Management",
    description: "Done-for-you content calendars, posting, growth, and engagement.",
    cta: "Learn more"
  },
  {
    title: "Viral Short-Form Video Editing",
    description: "Reels, Shorts, TikToks that build brand & bring leads.",
    cta: "Learn more"
  },
  {
    title: "Personal Branding Strategy",
    description: "Positioning you as a category leader in your niche.",
    cta: "Learn more"
  },
  {
    title: "Content Scripting & Copywriting",
    description: "Hooks, captions, CTAs — all engineered to convert.",
    cta: "Learn more"
  },
  {
    title: "Digital Strategy & Consulting",
    description: "Weekly reviews, monthly reports, and high-conversion systems.",
    cta: "Learn more"
  },
  {
    title: "Account Audits",
    description: "Comprehensive review of your social presence with actionable recommendations.",
    cta: "Learn more"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Logo */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "back.out(1.7)" }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-8 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
            JC
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-[#e4ded7]/80">Premium solutions for premium brands</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-[24px] p-8 border border-[#e4ded7]/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#e4ded7]/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-2 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  {service.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
