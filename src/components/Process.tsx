
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "Deep dive into your current situation and identify growth opportunities",
    icon: "🔍"
  },
  {
    number: "02", 
    title: "Strategy Development",
    description: "Create a customized roadmap tailored to your specific goals",
    icon: "🎯"
  },
  {
    number: "03",
    title: "Implementation", 
    description: "Execute the strategy with ongoing support and guidance",
    icon: "⚡"
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "Monitor results and continuously optimize for maximum growth",
    icon: "📈"
  }
];

const Process = () => {
  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work Together</h2>
          <p className="text-xl text-[#e4ded7]/80">A proven 4-step process that transforms businesses and careers</p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#e4ded7]/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-4">{step.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#e4ded7]/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connection dot for timeline */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
