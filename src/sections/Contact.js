import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ShutterTransition() {
  const containerRef = useRef(null);
  const shutterRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const shutter = shutterRef.current;

    // Shutter pulls up to reveal bottom page - slower with more scroll distance
    gsap.to(shutter, {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=200%', // Increased scroll distance for slower reveal
        scrub: 2, // Increased scrub for smoother, more responsive feel
        pin: true,
        anticipatePin: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black flex items-center justify-center">
        <div className="text-center text-white px-8">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
            SCROLL DOWN
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tight">
            Shutter
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch the page lift up like a curtain
          </p>
          <div className="mt-12 animate-bounce">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Shutter Transition Container */}
      <div ref={containerRef} className="relative h-screen">
        {/* Bottom Page - Always visible underneath */}
        <div className="absolute inset-0 h-screen w-full bg-black">
          <div className="h-full flex items-center justify-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
              <div className="absolute top-0 left-0 w-full h-full" 
                   style={{
                     backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                     backgroundSize: '50px 50px'
                   }}>
              </div>
            </div>

            {/* Content */}
            <div className="text-center text-white px-8 z-10 max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-9xl font-bold mb-12 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revealed
                </span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto">
                The hidden page emerges as the shutter lifts away
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-5xl mb-6">🎭</div>
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">Dramatic</h3>
                  <p className="text-gray-400">Unveil content with impact</p>
                </div>
                
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                  <div className="text-5xl mb-6">🎬</div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-400">Cinematic</h3>
                  <p className="text-gray-400">Smooth reveal motion</p>
                </div>
                
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                  <div className="text-5xl mb-6">✨</div>
                  <h3 className="text-2xl font-bold mb-3 text-purple-400">Elegant</h3>
                  <p className="text-gray-400">Professional transition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Page - Shutter that lifts up */}
        <div
          ref={shutterRef}
          className="absolute inset-0 h-screen w-full z-10"
        >
          <div className="h-full w-full bg-gradient-to-br from-rose-600 via-pink-600 to-orange-600 flex items-center justify-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Content */}
            <div className="text-center text-white px-8 z-10">
              <div className="mb-8">
                <div className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm mb-8 font-semibold">
                  TOP LAYER
                </div>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl">
                Cover Page
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto drop-shadow-lg">
                Scroll to lift this page and reveal what's underneath
              </p>

              {/* Visual indicator */}
              <div className="mt-16 flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-white/40 rounded-full"></div>
                <div className="w-12 h-1 bg-white/60 rounded-full"></div>
                <div className="w-12 h-1 bg-white/80 rounded-full"></div>
                <div className="w-12 h-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Bottom edge shadow for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Continue Content */}
      <div className="min-h-screen bg-black flex items-center justify-center border-t border-gray-800">
        <div className="text-center text-white px-8 py-20">
          <h3 className="text-5xl md:text-7xl font-bold mb-8">
            Smooth Reveal
          </h3>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The shutter transition creates a layered effect, making your content feel dimensional and engaging
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Experience More
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white rounded-full font-semibold hover:border-gray-400 transition-colors">
              Learn How
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}