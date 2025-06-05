
import React from 'react';
import { motion } from 'framer-motion';

const results = [
  {
    metric: "2x Reach",
    period: "in just 3 weeks",
    description: "Doubled Instagram reach through strategic content planning and hashtag optimization.",
    color: "from-teal-400 to-cyan-400"
  },
  {
    metric: "30K → 75K",
    period: "Followers in 4 months", 
    description: "Consistent growth through optimized content strategy and engagement tactics.",
    color: "from-blue-400 to-indigo-400"
  },
  {
    metric: "10,000+ Views",
    period: "YouTube Shorts in 7 days",
    description: "Strategic short-form content creation with optimized titles and thumbnails.",
    color: "from-yellow-400 to-orange-400"
  },
  {
    metric: "$500+ Revenue",
    period: "Generated in 12 Months",
    description: "Consistent monetization through content strategy, client work, and digital offerings.",
    color: "from-purple-400 to-pink-400"
  }
,{
  metric: "100+ Comments",
  period: "Instagram Growth Series",
  description: "Interactive content with polls, callouts, and timed value drops.",
  color: "from-indigo-500 to-violet-400"
},  
  {
    metric: "1M+ followers",
    period: "Reels in 6 months",
    description: "Interactive content with polls, callouts, and timed value drops.",
    color: "from-pink-500 to-rose-500"
  }
];

const Results = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Results That Speak</h2>
          <p className="text-xl text-[#e4ded7]/80">Our clients see measurable growth. Here's what we've achieved.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#e4ded7]/20 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${result.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Animated curve/line */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.path
                    d="M10,90 Q50,10 90,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 + index * 0.3 }}
                    viewport={{ once: true }}
                    className={`text-gradient-to-r ${result.color}`}
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <motion.h3 
                  className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {result.metric}
                </motion.h3>
                
                <motion.p 
                  className="text-lg font-medium mb-4 text-[#e4ded7]/90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {result.period}
                </motion.p>
                
                <motion.p 
                  className="text-[#e4ded7]/70 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {result.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
