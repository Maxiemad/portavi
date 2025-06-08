import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const cards = [
  { 
    id: 1, 
    image: "/Screenshot 2025-06-05 at 5.02.54 PM.png", 
    clientName: "Aleena Rais",
    impact: "4M+ subscribers on YouTube", 
    stat: "1.4M+ followers on Instagram" 
  },
  { 
    id: 2, 
    image: "/Screenshot 2025-06-05 at 5.12.17 PM.png", 
    clientName: "Shwetabh Gangwar",
    impact: "2M+ subscribers on YouTube",
    stat: "1M+ followers on Instagram" 
  },
  { 
    id: 3, 
    image: "/Screenshot 2025-06-05 at 6.46.21 PM.png", 
    clientName: "Aditi Goyal",
    impact: "1M+ followers on Instagram" 
  },
  { 
    id: 4, 
    image: "/Screenshot 2025-06-05 at 5.25.14 PM.png", 
    clientName: "Vijay Chandola",
    impact: "700k+ followers on Instagram",
    stat: "82K+ followers on LindedIn" 
  },
  { 
    id: 5, 
    image: "/Screenshot 2025-06-08 at 10.37.38 AM.png", 
    clientName: "Hyperke",
    impact: "US based business"
  },
  { 
    id: 6, 
    image: "/Screenshot 2025-06-05 at 5.34.06 PM.png", 
    clientName: "Soundarya Balasubramani",
    impact: "100k+ followers on LinkedIn",
    stat: "100k+ followers on Instagram"  
  },
  { 
    id: 7, 
    image: "/Screenshot 2025-06-05 at 6.48.10 PM.png", 
    clientName: "Unshackled",
    impact: "US based business",
   
  },
  { 
    id: 8, 
    image: "/Screenshot 2025-06-05 at 6.50.37 PM.png", 
    clientName: "Propques",
    impact: "Real Estate company in India",
    
  },
  { 
    id: 9, 
    image: "/Screenshot 2025-06-08 at 10.36.15 AM.png", 
    clientName: "Ministry of Arts",
    impact: "Dubai-based EdTech platform",
  }
];

const CardCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Infinite scroll animation
    const totalWidth = cards.length * 320; // 300px width + 20px gap
    
    gsap.set(carousel, { x: 0 });
    gsap.to(carousel, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1
    });

  }, []);

  return (
    <section className="py-20 overflow-hidden relative bg-[#0e1016] z-10">
      <div className="relative z-20">
        <div className="mb-12 text-center px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Clients
          </motion.h2>
          <motion.p 
            className="text-xl text-[#e4ded7]/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          </motion.p>
        </div>

        {/* Image Trail Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex gap-5"
            style={{ width: `${cards.length * 320 * 2}px` }}
          >
            {/* Duplicate cards for seamless loop */}
            {[...cards, ...cards].map((card, index) => (
              <motion.div
                key={`${card.id}-${index}`}
                className="group min-w-[300px] relative cursor-pointer z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % cards.length) * 0.1 }}
              >
                {/* Image Container */}
                <div className="h-[300px] relative rounded-2xl overflow-hidden border border-white/20 transition-transform duration-300 hover:scale-105 bg-gray-900">
                  <img 
                    src={card.image} 
                    alt={card.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Below Image */}
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold text-white mb-1">
                    {card.clientName}
                  </div>
                  {card.impact && (
                    <div className="text-base bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-medium mb-1">
                      {card.impact}
                    </div>
                  )}
                  {card.stat && (
                    <div className="text-base text-[#e4ded7]/80">
                      {card.stat}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Display */}
        <motion.div 
          className="text-center mt-12 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-lg text-[#e4ded7]/70">
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardCarousel;
