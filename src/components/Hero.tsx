import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Link from 'next/link';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate tagline with split text effect
    if (taglineRef.current) {
      const text = taglineRef.current.textContent || '';
      taglineRef.current.innerHTML = text.split('').map(char => 
        char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
      ).join('');

      const chars = taglineRef.current.querySelectorAll('span');
      
      gsap.fromTo(chars, 
        { opacity: 0, y: 50, rotateX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      );
    }

    // Animate video container
    gsap.fromTo(videoRef.current,
      { scale: 0.8, opacity: 0, rotateY: 15 },
      { 
        scale: 1, 
        opacity: 1, 
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1
      }
    );

    // Animate stats counters
    const counters = statsRef.current?.querySelectorAll('.counter');
    counters?.forEach((counter, index) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      gsap.fromTo(counter,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2,
          delay: 2 + index * 0.3,
          ease: "power2.out",
          snap: { textContent: 1 },
          onComplete: () => {
            gsap.to(counter, {
              scale: 1.1,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut"
            });
          }
        }
      );
    });
  }, []);

  return (
    <section className="hero min-h-screen flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className="flex justify-between items-center p-6 md:p-8 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="text-xl sm:text-2xl font-serif font-bold">J Curve by Avi</div>
        <div className="flex gap-2 sm:gap-4">
          <motion.a
            href="/contact-book"
            className="px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book your free audit
          </motion.a>
          <motion.a
            href="https://calendly.com/avi-jcurvebyavi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-[#e4ded7] rounded-full hover:bg-[#e4ded7] hover:text-[#0e1016] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h1 
              ref={taglineRef}
              className="text-4xl md:text-6xl font-bold leading-tight"
              data-cursor="text"
            >
              Content that Converts <br />
              Growth that Sticks
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#e4ded7]/80 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              From strategy to execution, we empower entrepreneurs and creators to elevate their online presence, streamline their content, and build premium personal brands that generate real revenue and influence.
            </motion.p>

            {/* Stats */}
            <motion.div 
              ref={statsRef}
              className="flex gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <div>
                <div className="text-3xl font-bold">
                $<span className="counter" data-target="500">0</span>K+
                </div>
                <div className="text-sm text-[#e4ded7]/60">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  <span className="counter" data-target="100">0</span>M+
                </div>
                <div className="text-sm text-[#e4ded7]/60">Views</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Video */}
          <div className="flex justify-center items-center">
            <div 
              ref={videoRef}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-[#1a1a2e] rounded-2xl p-8 backdrop-blur-sm border border-[#e4ded7]/20">
                <video
                  className="w-full h-64 md:h-80 rounded-lg object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <div className="text-sm mb-2">Scroll to explore</div>
          <motion.div
            className="w-6 h-10 border-2 border-[#e4ded7] rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-[#e4ded7] rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
