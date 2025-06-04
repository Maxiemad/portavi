
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import CardCarousel from '../components/CardCarousel';
import WhoIHelp from '../components/WhoIHelp';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Comparison from '../components/Comparison';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    // Disable scroll initially
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-[#0e1016] text-[#e4ded7] overflow-x-hidden relative">
      {/* Background Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.015) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.008) 2px,
              rgba(255, 255, 255, 0.008) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.005) 2px,
              rgba(255, 255, 255, 0.005) 4px
            )
          `,
          backgroundSize: '200px 200px, 300px 300px, 20px 20px, 20px 20px'
        }}
      />
      
      <div className="relative z-10">
        <CustomCursor />
        
        <AnimatePresence>
          {!preloaderComplete && (
            <Preloader onComplete={handlePreloaderComplete} />
          )}
        </AnimatePresence>

        {preloaderComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <CardCarousel />
            <WhoIHelp />
            <About />
            <Services />
            <Process />
            <Comparison />
            <Results />
            <Testimonials />
            <Contact />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;
