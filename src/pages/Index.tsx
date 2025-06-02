
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
    <div className="min-h-screen bg-[#0e1016] text-[#e4ded7] overflow-x-hidden">
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
  );
};

export default Index;
