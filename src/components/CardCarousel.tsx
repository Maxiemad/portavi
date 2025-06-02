
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const cards = [
  { id: 1, image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", stat: "3M+ followers on IG" },
  { id: 2, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", stat: "1M+ YouTube subscribers" },
  { id: 3, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", stat: "500K+ TikTok views" },
  { id: 4, image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop", stat: "75K+ newsletter subs" },
  { id: 5, image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop", stat: "2.5M+ impressions" },
  { id: 6, image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop", stat: "$500K+ revenue" },
  { id: 7, image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop", stat: "95% engagement rate" },
  { id: 8, image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop", stat: "10X growth rate" },
  { id: 9, image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", stat: "100+ brand deals" },
  { id: 10, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", stat: "50M+ reach" }
];

const CardCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Infinite scroll animation
    const totalWidth = cards.length * 320; // 300px width + 20px gap
    
    gsap.set(carousel, { x: 0 });
    gsap.to(carousel, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1
    });

  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
        <p className="text-xl text-[#e4ded7]/80">Real results from real creators</p>
      </div>

      {/* Infinite Carousel */}
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
              className="group min-w-[300px] h-[400px] relative rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => {
                gsap.to(statsRef.current, {
                  opacity: 0,
                  y: 20,
                  duration: 0.3,
                  onComplete: () => {
                    if (statsRef.current) {
                      statsRef.current.textContent = card.stat;
                    }
                    gsap.to(statsRef.current, {
                      opacity: 1,
                      y: 0,
                      duration: 0.3
                    });
                  }
                });
              }}
            >
              <img 
                src={card.image} 
                alt={`Client ${card.id}`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:invert"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Stats */}
      <div className="text-center mt-12">
        <div 
          ref={statsRef}
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Hover over cards to see results
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
