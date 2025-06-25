import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Link from 'next/link';

gsap.registerPlugin(TextPlugin);

const YOUTUBE_ID = 'jAc6oGb86Yg';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Hero = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const [play, setPlay] = useState(false);

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

    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('ytplayer', {
        videoId: YOUTUBE_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          loop: 1,
          playlist: YOUTUBE_ID,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
        },
      });
    };

    // On first user interaction, unmute and play
    const enableAudio = () => {
      if (playerRef.current) {
        playerRef.current.unMute();
        playerRef.current.playVideo();
      }
      window.removeEventListener('mousemove', enableAudio);
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('scroll', enableAudio);
    };
    window.addEventListener('mousemove', enableAudio);
    window.addEventListener('click', enableAudio);
    window.addEventListener('scroll', enableAudio);

    return () => {
      window.removeEventListener('mousemove', enableAudio);
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('scroll', enableAudio);
    };
  }, []);

  return (
    <section className="hero min-h-screen flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className="flex flex-col w-full mt-[20px] sm:mt-[40px]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="text-sm sm:text-2xl font-serif font-bold whitespace-nowrap sm:ml-[40px]">J Curve by Avi</div>
          <div className="flex gap-1 sm:gap-6">
            <motion.a
              href="/contact-book"
              className="px-2 py-1 text-xs sm:px-6 sm:py-3 sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book your free audit
            </motion.a>
            <motion.a
              href="https://calendly.com/avi-jcurvebyavi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-xs sm:px-6 sm:py-3 sm:text-xl border border-[#e4ded7] rounded-full hover:bg-[#e4ded7] hover:text-[#0e1016] transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </div>
      </motion.nav>
      <div className="mt-[40px] sm:mt-0"></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-6xl leading-tight text-balance">
              <span className="block">Content that Converts</span>
              <span className="block">Growth that Sticks</span>
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
              <div
                className="relative bg-[#1a1a2e] rounded-2xl p-2 sm:p-4 md:p-8 backdrop-blur-sm border border-[#e4ded7]/20 flex justify-center items-center mx-auto shadow-xl"
                style={{
                  maxWidth: '1200px',
                  width: '100%',
                  aspectRatio: '16/9',
                  minHeight: '400px',
                }}
              >
                <div
                  className="w-full h-0"
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%', // 16:9
                    height: 0,
                  }}
                >
                  {!play && (
                    <button
                      onClick={() => setPlay(true)}
                      className="absolute inset-0 flex items-center justify-center w-full h-full z-20 bg-black/40 rounded-2xl focus:outline-none"
                      style={{ border: 'none', cursor: 'pointer' }}
                      aria-label="Play video"
                    >
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.7" />
                        <polygon points="32,24 60,40 32,56" fill="#1a1a2e" />
                      </svg>
                    </button>
                  )}
                  {play ? (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                      }}
                    >
                      <iframe
                        className="w-full h-full rounded-xl object-contain"
                        style={{ aspectRatio: '16/9' }}
                        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=0&loop=1&playlist=${YOUTUBE_ID}&playsinline=1&controls=1&rel=0`}
                        title="J Curve by Avi Intro"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <img
                      src="/Screenshot 2025-06-25 at 12.18.35 PM.png"
                      alt="Video thumbnail"
                      className="w-full h-full rounded-xl object-contain sm:object-cover"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '16px',
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;