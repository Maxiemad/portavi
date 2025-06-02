
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sabrina Lee",
    role: "Wellness Coach",
    content: "Working with JCurve transformed our brand. The growth was exponential and the strategy was elite.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "James R.",
    role: "Content Creator", 
    content: "We saw our audience double in weeks. Their insights and storytelling are top-notch.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Neha Varma",
    role: "Tech Entrepreneur",
    content: "The most professional and creative team I've collaborated with. Absolute game-changers.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Carlos D.",
    role: "Course Creator",
    content: "From zero to viral in no time. If you want content that converts—go with JCurve.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Maya Singh", 
    role: "Brand Consultant",
    content: "Their ability to connect brand vision with content was truly impressive.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Liam O'Connor",
    role: "Digital Marketer",
    content: "Analytics-driven, emotionally resonant. A rare combo. 10/10 experience!",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-[#e4ded7]/80">Real testimonials from real transformations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-[#e4ded7]/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
              initial={{ 
                opacity: 0, 
                y: 50, 
                rotate: Math.random() * 4 - 2 // Random slight rotation
              }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotate: Math.random() * 2 - 1,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Profile Image */}
                <motion.div
                  className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-[#e4ded7]/20 group-hover:ring-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <motion.p 
                  className="text-[#e4ded7]/80 mb-4 leading-relaxed italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Name & Role */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#e4ded7]/60 text-sm">{testimonial.role}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
