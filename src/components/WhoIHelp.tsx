
import React from 'react';
import { motion } from 'framer-motion';

const personas = [
  {
    emoji: "👑",
    title: "Influencers",
    subtitle: "with 500k+ followings",
    backContent: "Helped influencers grow from 200k to 1M in 6 months."
  },
  {
    emoji: "💼",
    title: "Coaches & Course Creators",
    subtitle: "doing 6-figure months",
    backContent: "Helped launching courses and scaled it to $60k per month in 6 months."
  },
  {
    emoji: "🚀",
    title: "Founders",
    subtitle: "scaling their online presence",
    backContent: "Built complete personal brand ecosystem and increased visibility."
  },
  {
    emoji: "🎯",
    title: "Creators",
    subtitle: "tired of algorithm-chasing",
    backContent: "Created sustainable content strategy that maintains 85% engagement rates."
  }
];

const WhoIHelp = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who I Help</h2>
          <p className="text-xl text-[#e4ded7]/80">Empowering creators and entrepreneurs to build premium brands</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="group relative h-64 perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-[#e4ded7]/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">{persona.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
                  <p className="text-[#e4ded7]/60">{persona.subtitle}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 flex items-center justify-center text-center border border-blue-400/30 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed">{persona.backContent}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIHelp;
