
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Comparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && sectionRef.current) {
      // Animate background particles
      gsap.fromTo('.particle', {
        y: 100,
        opacity: 0,
        scale: 0
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Animate spotlight gradients
      gsap.fromTo('.spotlight', {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      });
    }
  }, [isInView]);

  const jCurveFeatures = [
    {
      title: "1-on-1 Attention",
      description: "Direct access to your dedicated content manager"
    },
    {
      title: "Worked with Influencers", 
      description: "Experience with top creators across niches"
    },
    {
      title: "Results-Driven",
      description: "Focused on metrics that matter to your growth"
    },
    {
      title: "Affordable",
      description: "Premium service without the premium price tag"
    }
  ];

  const agencyFlaws = [
    {
      title: "Account Managers",
      description: "Multiple clients per manager, limited attention"
    },
    {
      title: "Corporate Clients Only",
      description: "Limited experience with personal brands"
    },
    {
      title: "Vanity Metrics",
      description: "Focus on likes and followers, not conversions"
    },
    {
      title: "Expensive Retainers",
      description: "High monthly fees with long-term contracts"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 px-4 overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Spotlight Gradients */}
      <div className="spotlight absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="spotlight absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            How We're Different
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Not all content management services are created equal. Here's why creators choose J Curve.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* J Curve Card */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center font-serif">
                J Curve by Avi
              </h3>
              
              <div className="space-y-6">
                {jCurveFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover/item:shadow-lg group-hover/item:shadow-green-500/50"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover/item:text-green-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1 group-hover/item:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VS Divider (Mobile) */}
          <div className="lg:hidden flex items-center justify-center py-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl font-bold text-gray-500 bg-gray-800/50 rounded-full w-16 h-16 flex items-center justify-center border border-gray-600"
            >
              VS
            </motion.div>
          </div>

          {/* Typical Agencies Card */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center font-serif">
                Typical Agencies
              </h3>
              
              <div className="space-y-6">
                {agencyFlaws.map((flaw, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: [-5, 5, -5, 5, 0],
                        transition: { duration: 0.6 }
                      }}
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center group-hover/item:shadow-lg group-hover/item:shadow-red-500/50"
                    >
                      <X className="w-4 h-4 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover/item:text-red-400 transition-colors duration-300">
                        {flaw.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1 group-hover/item:text-gray-300 transition-colors duration-300">
                        {flaw.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            Ready to experience the J Curve difference?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .particle {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Comparison;
