
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Counter animation
    const counters = counterRef.current?.querySelectorAll('.counter');
    counters?.forEach((counter, index) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo(counter,
              { textContent: 0 },
              {
                textContent: target,
                duration: 2,
                delay: index * 0.3,
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
            observer.unobserve(entry.target);
          }
        });
      });

      if (counter) observer.observe(counter);
    });
  }, []);

  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Custom shadow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-[32px] blur-2xl transform translate-x-4 translate-y-4"></div>
              
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop"
                alt="Avi Sharma"
                className="relative rounded-[32px] w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-300 border border-[#e4ded7]/20"
                data-blobity-tooltip="Avi Sharma"
              />
            </div>

            {/* Stats below image */}
            <motion.div 
              ref={counterRef}
              className="flex justify-center gap-8 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <span className="counter" data-target="10">0</span>K+
                </div>
                <div className="text-sm text-[#e4ded7]/60">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  $<span className="counter" data-target="500">0</span>K+
                </div>
                <div className="text-sm text-[#e4ded7]/60">Revenue Generated</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">About Avi Sharma</h2>
            
            <motion.div
              className="space-y-4 text-lg text-[#e4ded7]/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                With over a decade of experience in business strategy and entrepreneurship, I've helped hundreds of business owners and freelancers achieve exponential growth.
              </p>
              <p>
                My approach combines data-driven strategies with practical implementation, ensuring that every client not only understands what to do but actually does it.
              </p>
              <p>
                From zero to seven figures, I've been there. Let me show you the shortcuts and help you avoid the costly mistakes I made along the way.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
