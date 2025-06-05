
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const texts = textsRef.current?.querySelectorAll('span');

    if (!preloader || !texts) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      }
    });

    // Animate text in
    tl.fromTo(texts, 
      {
        y: 70,
        skewY: 10,
        opacity: 0
      },
      {
        y: 0,
        skewY: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
    )
    // Hold for a moment
    .to({}, { duration: 1 })
    // Animate text out
    .to(texts, {
      y: -70,
      skewY: -10,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.in"
    })
    // Slide preloader up
    .to(preloader, {
      height: '0vh',
      duration: 1.2,
      ease: "power4.inOut"
    }, "-=0.3");

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="preloader fixed inset-0 bg-[#0e1016] text-[#e4ded7] z-50 flex items-center justify-center"
      style={{ height: '100vh' }}
    >
      <div ref={textsRef} className="texts-container text-center">
        <span className="block text-4xl md:text-6xl font-light mb-4 font-serif">Strategize</span>
        <span className="block text-4xl md:text-6xl font-light mb-4 font-serif">Build</span>
        <span className="block text-4xl md:text-6xl font-light font-serif">Scale</span>
      </div>
    </div>
  );
};

export default Preloader;
