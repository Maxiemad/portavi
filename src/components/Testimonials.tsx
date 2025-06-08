
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Aleena Rais",
    role: "Educator",
    content: "Avi just got what we were trying to do. He didn’t throw generic strategies at us — he listened, asked the right questions, and came back with a plan that actually worked. It finally felt like our brand had direction.",
    image: "/Screenshot 2025-06-05 at 5.02.54 PM.png"
  },
  {
    name: "Aditi Goyal",
    role: "Food Entrepreneur", 
    content: "Honestly, working with J Curve felt like I finally had a teammate who cared as much as I did. Avi’s ideas were sharp, his execution was clean, and he never made me feel like I was just another project.",
    image: "/Screenshot 2025-06-05 at 6.46.21 PM.png"
  },
  {
    name: "Shwetabh Gangwar",
    role: "Author",
    content: "Before Avi, I was stuck — posting without a plan and hoping something would click. He brought in structure, helped me clean up my messaging, and the results started showing. I finally felt proud of my content again.",
    image: "/Screenshot 2025-06-05 at 5.12.17 PM.png"
  },
  {
    name: "Vijay Chandola",
    role: "Product Manager",
    content: "What stood out for me was how involved Avi was. He wasn’t just giving me tips — he was inside the brand, tweaking things, testing what worked, and always keeping me in the loop. Super hands-on.",
    image: "/Screenshot 2025-06-05 at 5.25.14 PM.png"
  },
  {
    name: "Ministry of Arts", 
    role: "Dubai-based EdTech platform",
    content: "I used to dread marketing meetings. With Avi, it was different. He made it simple, focused, and honestly… fun. We finally stopped guessing and started growing — and that lifted a huge weight off my shoulders.",
    image: "/Screenshot 2025-06-08 at 10.36.15 AM.png"
  },
  {
    name: "Propques",
    role: "Real Estate Business",
    content: "You can tell Avi actually cares. He’s not trying to force some one-size-fits-all playbook. He took time to understand my brand and gave suggestions that felt right — and they worked. That’s rare.",
    image: "/Screenshot 2025-06-05 at 6.50.37 PM.png"
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
