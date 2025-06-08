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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
              <img
                src="/IMG_0816-removebg.png"
                alt="Avi Sharma"
                className="relative rounded-[32px] w-full h-[500px] object-cover transition-all duration-300"
                data-blobity-tooltip="Avi Sharma"
              />
            </div>

            {/* Stats below image */}
            <motion.div 
              ref={counterRef}
              className="flex justify-center gap-8 mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <span className="counter" data-target="10">0</span>+
                </div>
                <div className="text-sm text-[#e4ded7]/60">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  $<span className="counter" data-target="500">0</span>K+
                </div>
                <div className="text-sm text-[#e4ded7]/60">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <span className="counter" data-target="100">0</span>M+
                </div>
                <div className="text-sm text-[#e4ded7]/60">Views Generated</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-4 mt-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hey, I'm Avi</h2>
            
            <motion.div
              className="space-y-3 text-lg text-[#e4ded7]/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
              The guy behind J Curve by Avi. Over the past 4+ years, I've helped 10+ brands grow faster, smarter, and more profitably through a mix of organic and performance marketing. 
              </p>
              <p>
              From scaling content to 100M+ views to driving over $500K in client revenue, I've seen what works (and what doesn't). 
              </p>
              <p>
              J Curve isn't just a name - it's the philosophy I live by: short-term effort, long-term explosive growth. What drives me? 
              </p>
              <p>
              Building things that matter, solving real marketing problems, and helping brands stop guessing and start growing.
              </p>
              <p>
              If that sounds like the kind of growth you're after - let's build your curve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
