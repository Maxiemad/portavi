
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const cards = [
  { 
    id: 1, 
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", 
    clientName: "Sarah Martinez",
    impact: "Revenue Boosted 3x",
    stat: "3M+ followers on IG" 
  },
  { 
    id: 2, 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", 
    clientName: "Tech Solutions Co",
    impact: "Lead Gen Up 500%",
    stat: "1M+ YouTube subscribers" 
  },
  { 
    id: 3, 
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", 
    clientName: "Elite Fitness",
    impact: "Community Grew 10x",
    stat: "500K+ TikTok views" 
  },
  { 
    id: 4, 
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop", 
    clientName: "Digital Nomad Hub",
    impact: "Engagement Rate 95%",
    stat: "75K+ newsletter subs" 
  },
  { 
    id: 5, 
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop", 
    clientName: "Luxury Lifestyle",
    impact: "Brand Deals +200%",
    stat: "2.5M+ impressions" 
  },
  { 
    id: 6, 
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop", 
    clientName: "Wellness Coach",
    impact: "Course Sales $500K+",
    stat: "$500K+ revenue" 
  },
  { 
    id: 7, 
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop", 
    clientName: "Food & Travel Blog",
    impact: "Sponsorship ROI 400%",
    stat: "95% engagement rate" 
  },
  { 
    id: 8, 
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop", 
    clientName: "Business Mentor",
    impact: "Authority Built Fast",
    stat: "10X growth rate" 
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
            Real results from real creators
          </motion.p>

          {/* Ready to Work Section with Platform Icons */}
          <motion.div 
            className="flex items-center justify-center gap-3 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-[#e4ded7]/90">Ready to Work:</span>
            <Instagram 
              className="w-6 h-6 text-pink-500 transition-transform duration-300 hover:scale-110 hover:rotate-3 cursor-pointer" 
            />
            <Linkedin 
              className="w-6 h-6 text-blue-400 transition-transform duration-300 hover:scale-110 hover:rotate-3 cursor-pointer" 
            />
            
          </motion.div>
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
                  
                  {/* Success Label Overlay - Persistent Color */}
                  
                </div>
                
                {/* Text Below Image */}
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold text-white mb-1">
                    {card.clientName}
                  </div>
                  <div className="text-base bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-medium">
                    {card.impact}
                  </div>
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
