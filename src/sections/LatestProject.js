import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Arrow from '../assets/arow1.png'
export default function LatestProject() {
  const [likes, setLikes] = useState({ card1: 223, card2: 156, card3: 342 });
  const [liked, setLiked] = useState({ card1: false, card2: false, card3: false });

  const handleLike = (cardId) => {
    setLiked(prev => ({ ...prev, [cardId]: !prev[cardId] }));
    setLikes(prev => ({ 
      ...prev, 
      [cardId]: prev[cardId] + (liked[cardId] ? -1 : 1) 
    }));
  };



  return (
<section id='projects' className="relative min-h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black  overflow-hidden pt-[60px] sm:pt-[140px] md:pt-[160px] lg:pt-[80px] pb-[20px] sm:pb-[60px] md:pb-[60px] lg:pb-[60px]"
   >
    <div className=" relative max-w-[1280px] mx-auto px-2 sm:px-5 md:px-5 lg:px-5 sm:max-w-[810px] md:max-w-[810px] lg:max-w-[1280px]">      
      
   
       {/* Loading Screen - Plain Dark Background with Logo */}
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-60">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Center bright glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,140,0,0.08) 30%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>
         {/* Center Radial Glow - Primary */}
         <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary Accent Glow */}
        <div 
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 60%)',
            filter: 'blur(60px)',
            animation: 'float 10s ease-in-out infinite'
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      

        <h1 className="text-center mb-12">
          <div className="text-white text-6xl md:text-9xl font-runiga tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
Projects          </div></h1>

      {/* Furniture Image */}
      <div className="relative z-10 flex flex-col justify-center items-center  px-8 pb-12">
        <div className="relative w-full max-w-4xl">
          {/* Chair silhouette with gradient */}
          <div className="flex justify-center gap-8 relative w-full">


              {/* Desktop: 3 Column */}
          <div className="hidden relative lg:grid lg:grid-cols-3 gap-6 w-full">
          
          {/* Card 1 - HiKeys Synthesizer */}
          <div className="flex md:flex-col justify-center gap-8 relative w-full">
          <div className="group w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/5">
            <div className="relative bg-white p-8 aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 text-black text-sm font-medium">HiKeys—1977</div>
              <div className="absolute top-4 right-4 text-xs text-gray-400">Concept & Design</div>
              
              {/* Synthesizer Image */}
              <div className="w-full ">
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                  {/* Synth Controls */}
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-8 rounded-full border-2 border-gray-400 bg-gray-100"></div>
                    ))}
                  </div>
                  {/* Display */}
                  <div className="bg-black text-green-400 text-xs font-mono p-2 rounded mb-4 flex items-center gap-2">
                    <span>■ ●●●●</span>
                  </div>
                  {/* Keys */}
                  <div className="flex gap-0.5">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'h-16 bg-white' : 'h-10 bg-gray-800'} flex-1 border border-gray-300 rounded-b`}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Large Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 text-9xl font-black leading-none text-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                HK77
              </div>
              
              {/* Plus Icons */}
              <div className="absolute bottom-6 left-6 text-3xl font-bold text-black">++</div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">++</div>
                <div>
                  <div className="font-semibold">++hellohello</div>
                  <div className="text-sm text-gray-400">3h</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                hikeys1977.com
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card1')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card1 ? 'fill-blue-500 text-blue-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card1 ? 'text-blue-500' : 'text-gray-400'}>{likes.card1}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>47</span>
                </button>
              </div>
            </div>
          </div>

                    {/* Card 1 - HiKeys Synthesizer */}
                    <div className="group h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/10">
            <div className="relative bg-black p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* 3D Shape with dramatic lighting */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl"></div>
                
                {/* Main Geometric Shape */}
                <div className="relative" style={{ perspective: '1000px' }}>
                  <div className="w-64 h-64 relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(15deg)' }}>
                    {/* Front face */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 transform translate-z-16" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      {/* Letter R */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-black text-white/90 tracking-tighter" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                          R
                        </div>
                      </div>
                    </div>
                    
                    {/* Edge highlight */}
                    <div className="absolute top-0 left-1/2 w-1 h-32 bg-gradient-to-b from-white/80 to-transparent transform -translate-x-1/2 blur-sm"></div>
                  </div>
                </div>
                
                {/* Dramatic light beam */}
                <div className="absolute -right-32 top-1/2 w-96 h-2 bg-gradient-to-r from-white via-white/50 to-transparent blur-xl transform -translate-y-1/2 rotate-[-15deg]"></div>
              </div>
              
              {/* Subtle grid background */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full flex items-center justify-center text-xl font-bold">
                  R
                </div>
                <div>
                  <div className="font-semibold">studio_render</div>
                  <div className="text-sm text-gray-400">1d</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                3d-geometric.design
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card3')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card3 ? 'fill-white text-white' : 'text-gray-400'} 
                  />
                  <span className={liked.card3 ? 'text-white' : 'text-gray-400'}>{likes.card3}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>124</span>
                </button>
              </div>
            </div>
          </div>
          </div>
          
          
          {/* Card 2 - Red Monster Design */}
          <div className="group bg-gradient-to-br h-fit from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-red-500/10">
            <div className="relative bg-gradient-to-b from-gray-800 to-black p-8 aspect-[4/3]">
              {/* Top Icons */}
              <div className="flex gap-4 mb-6 justify-center">
                {['MUSIC', 'TECH', 'TYSON', 'MISC'].map((label, i) => (
                  <div key={i} className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold shadow-lg">
                    {label}
                  </div>
                ))}
              </div>
              
              {/* Red Monster Card */}
              <div className="bg-red-600 rounded-2xl p-8 shadow-2xl">
                <div className="relative">
                  {/* Monster Face */}
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gradient-to-b from-red-800 to-red-900 rounded-t-full px-16 py-8">
                      <div className="flex gap-4 mb-2">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      <div className="w-24 h-12 bg-white rounded-lg mx-auto"></div>
                    </div>
                    <div className="w-32 h-24 bg-white rounded-b-full mx-auto -mt-2"></div>
                    {/* Arms */}
                    <div className="flex justify-between -mt-12">
                      <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform -rotate-12"></div>
                      <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform rotate-12"></div>
                    </div>
                  </div>
                  
                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 text-white text-xs">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2"></div>
                      <div className="font-bold">ORIGIN</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold mb-1">MUZZY</div>
                      <div className="text-white/70">CHARACTER</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold mb-1">HALF HUMAN</div>
                      <div className="text-white/70">APPEARANCE</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Text */}
              <div className="mt-6 text-center">
                <div className="text-3xl font-light text-white mb-1">Let's make</div>
                <div className="text-3xl font-light italic text-emerald-400">it more</div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">redmonster_</div>
                  <div className="text-sm text-gray-400">5h</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card2')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card2 ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card2 ? 'text-red-500' : 'text-gray-400'}>{likes.card2}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>89</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - 3D Geometric Design */}
          <div className="flex md:flex-col justify-center gap-8 relative w-full">

          <div className="group h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/10">
            <div className="relative bg-black p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* 3D Shape with dramatic lighting */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl"></div>
                
                {/* Main Geometric Shape */}
                <div className="relative" style={{ perspective: '1000px' }}>
                  <div className="w-64 h-64 relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(15deg)' }}>
                    {/* Front face */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 transform translate-z-16" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      {/* Letter R */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-black text-white/90 tracking-tighter" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                          R
                        </div>
                      </div>
                    </div>
                    
                    {/* Edge highlight */}
                    <div className="absolute top-0 left-1/2 w-1 h-32 bg-gradient-to-b from-white/80 to-transparent transform -translate-x-1/2 blur-sm"></div>
                  </div>
                </div>
                
                {/* Dramatic light beam */}
                <div className="absolute -right-32 top-1/2 w-96 h-2 bg-gradient-to-r from-white via-white/50 to-transparent blur-xl transform -translate-y-1/2 rotate-[-15deg]"></div>
              </div>
              
              {/* Subtle grid background */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full flex items-center justify-center text-xl font-bold">
                  R
                </div>
                <div>
                  <div className="font-semibold">studio_render</div>
                  <div className="text-sm text-gray-400">1d</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                3d-geometric.design
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card3')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card3 ? 'fill-white text-white' : 'text-gray-400'} 
                  />
                  <span className={liked.card3 ? 'text-white' : 'text-gray-400'}>{likes.card3}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>124</span>
                </button>
              </div>
            </div>
          </div>

          <div className="group w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/5">
            <div className="relative bg-white p-8 aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 text-black text-sm font-medium">HiKeys—1977</div>
              <div className="absolute top-4 right-4 text-xs text-gray-400">Concept & Design</div>
              
              {/* Synthesizer Image */}
              <div className="w-full ">
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                  {/* Synth Controls */}
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-8 rounded-full border-2 border-gray-400 bg-gray-100"></div>
                    ))}
                  </div>
                  {/* Display */}
                  <div className="bg-black text-green-400 text-xs font-mono p-2 rounded mb-4 flex items-center gap-2">
                    <span>■ ●●●●</span>
                  </div>
                  {/* Keys */}
                  <div className="flex gap-0.5">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'h-16 bg-white' : 'h-10 bg-gray-800'} flex-1 border border-gray-300 rounded-b`}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Large Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 text-9xl font-black leading-none text-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                HK77
              </div>
              
              {/* Plus Icons */}
              <div className="absolute bottom-6 left-6 text-3xl font-bold text-black">++</div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">++</div>
                <div>
                  <div className="font-semibold">++hellohello</div>
                  <div className="text-sm text-gray-400">3h</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                hikeys1977.com
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card1')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card1 ? 'fill-blue-500 text-blue-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card1 ? 'text-blue-500' : 'text-gray-400'}>{likes.card1}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>47</span>
                </button>
              </div>
            </div>
          </div>
      </div>

        </div>


        {/* Tablet: 3 Column */}
        <div className="hidden md:grid md:grid-cols-1  lg:hidden gap-8 w-full">
          
          {/* Card 1 - HiKeys Synthesizer */}
          <div className="flex  justify-center gap-8 relative w-full">
          <div className="group w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/5">
            <div className="relative bg-white p-8 aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 text-black text-sm font-medium">HiKeys—1977</div>
              <div className="absolute top-4 right-4 text-xs text-gray-400">Concept & Design</div>
              
              {/* Synthesizer Image */}
              <div className="w-full ">
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                  {/* Synth Controls */}
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-8 rounded-full border-2 border-gray-400 bg-gray-100"></div>
                    ))}
                  </div>
                  {/* Display */}
                  <div className="bg-black text-green-400 text-xs font-mono p-2 rounded mb-4 flex items-center gap-2">
                    <span>■ ●●●●</span>
                  </div>
                  {/* Keys */}
                  <div className="flex gap-0.5">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'h-16 bg-white' : 'h-10 bg-gray-800'} flex-1 border border-gray-300 rounded-b`}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Large Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 text-9xl font-black leading-none text-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                HK77
              </div>
              
              {/* Plus Icons */}
              <div className="absolute bottom-6 left-6 text-3xl font-bold text-black">++</div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">++</div>
                <div>
                  <div className="font-semibold">++hellohello</div>
                  <div className="text-sm text-gray-400">3h</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                hikeys1977.com
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card1')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card1 ? 'fill-blue-500 text-blue-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card1 ? 'text-blue-500' : 'text-gray-400'}>{likes.card1}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>47</span>
                </button>
              </div>
            </div>
          </div>

                    {/* Card 1 - HiKeys Synthesizer */}

                    <div className="group w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/5">
            <div className="relative bg-white p-8 aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 text-black text-sm font-medium">HiKeys—1977</div>
              <div className="absolute top-4 right-4 text-xs text-gray-400">Concept & Design</div>
              
              {/* Synthesizer Image */}
              <div className="w-full ">
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                  {/* Synth Controls */}
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-8 rounded-full border-2 border-gray-400 bg-gray-100"></div>
                    ))}
                  </div>
                  {/* Display */}
                  <div className="bg-black text-green-400 text-xs font-mono p-2 rounded mb-4 flex items-center gap-2">
                    <span>■ ●●●●</span>
                  </div>
                  {/* Keys */}
                  <div className="flex gap-0.5">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'h-16 bg-white' : 'h-10 bg-gray-800'} flex-1 border border-gray-300 rounded-b`}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Large Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 text-9xl font-black leading-none text-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                HK77
              </div>
              
              {/* Plus Icons */}
              <div className="absolute bottom-6 left-6 text-3xl font-bold text-black">++</div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">++</div>
                <div>
                  <div className="font-semibold">++hellohello</div>
                  <div className="text-sm text-gray-400">3h</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                hikeys1977.com
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card1')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card1 ? 'fill-blue-500 text-blue-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card1 ? 'text-blue-500' : 'text-gray-400'}>{likes.card1}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>47</span>
                </button>
              </div>
            </div>
          </div>
          </div>
          
          
          {/* Card 2 - Red Monster Design */}
          <div className="group bg-gradient-to-br h-fit from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-red-500/10">
            <div className="relative bg-gradient-to-b from-gray-800 to-black p-8 aspect-[4/3]">
              {/* Top Icons */}
              <div className="flex gap-4 mb-6 justify-center">
                {['MUSIC', 'TECH', 'TYSON', 'MISC'].map((label, i) => (
                  <div key={i} className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold shadow-lg">
                    {label}
                  </div>
                ))}
              </div>
              
              {/* Red Monster Card */}
              <div className="bg-red-600 rounded-2xl p-8 shadow-2xl">
                <div className="relative">
                  {/* Monster Face */}
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gradient-to-b from-red-800 to-red-900 rounded-t-full px-16 py-8">
                      <div className="flex gap-4 mb-2">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      <div className="w-24 h-12 bg-white rounded-lg mx-auto"></div>
                    </div>
                    <div className="w-32 h-24 bg-white rounded-b-full mx-auto -mt-2"></div>
                    {/* Arms */}
                    <div className="flex justify-between -mt-12">
                      <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform -rotate-12"></div>
                      <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform rotate-12"></div>
                    </div>
                  </div>
                  
                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 text-white text-xs">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2"></div>
                      <div className="font-bold">ORIGIN</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold mb-1">MUZZY</div>
                      <div className="text-white/70">CHARACTER</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold mb-1">HALF HUMAN</div>
                      <div className="text-white/70">APPEARANCE</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Text */}
              <div className="mt-6 text-center">
                <div className="text-3xl font-light text-white mb-1">Let's make</div>
                <div className="text-3xl font-light italic text-emerald-400">it more</div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">redmonster_</div>
                  <div className="text-sm text-gray-400">5h</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card2')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card2 ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card2 ? 'text-red-500' : 'text-gray-400'}>{likes.card2}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>89</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - 3D Geometric Design */}
          <div className="flex  justify-center gap-8 relative w-full">

          <div className="group h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/10">
            <div className="relative bg-black p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* 3D Shape with dramatic lighting */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl"></div>
                
                {/* Main Geometric Shape */}
                <div className="relative" style={{ perspective: '1000px' }}>
                  <div className="w-64 h-64 relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(15deg)' }}>
                    {/* Front face */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 transform translate-z-16" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      {/* Letter R */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-black text-white/90 tracking-tighter" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                          R
                        </div>
                      </div>
                    </div>
                    
                    {/* Edge highlight */}
                    <div className="absolute top-0 left-1/2 w-1 h-32 bg-gradient-to-b from-white/80 to-transparent transform -translate-x-1/2 blur-sm"></div>
                  </div>
                </div>
                
                {/* Dramatic light beam */}
                <div className="absolute -right-32 top-1/2 w-96 h-2 bg-gradient-to-r from-white via-white/50 to-transparent blur-xl transform -translate-y-1/2 rotate-[-15deg]"></div>
              </div>
              
              {/* Subtle grid background */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full flex items-center justify-center text-xl font-bold">
                  R
                </div>
                <div>
                  <div className="font-semibold">studio_render</div>
                  <div className="text-sm text-gray-400">1d</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                3d-geometric.design
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card3')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card3 ? 'fill-white text-white' : 'text-gray-400'} 
                  />
                  <span className={liked.card3 ? 'text-white' : 'text-gray-400'}>{likes.card3}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>124</span>
                </button>
              </div>
            </div>
          </div>

          <div className="group h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/10">
            <div className="relative bg-black p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* 3D Shape with dramatic lighting */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl"></div>
                
                {/* Main Geometric Shape */}
                <div className="relative" style={{ perspective: '1000px' }}>
                  <div className="w-64 h-64 relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(15deg)' }}>
                    {/* Front face */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 transform translate-z-16" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      {/* Letter R */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-black text-white/90 tracking-tighter" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                          R
                        </div>
                      </div>
                    </div>
                    
                    {/* Edge highlight */}
                    <div className="absolute top-0 left-1/2 w-1 h-32 bg-gradient-to-b from-white/80 to-transparent transform -translate-x-1/2 blur-sm"></div>
                  </div>
                </div>
                
                {/* Dramatic light beam */}
                <div className="absolute -right-32 top-1/2 w-96 h-2 bg-gradient-to-r from-white via-white/50 to-transparent blur-xl transform -translate-y-1/2 rotate-[-15deg]"></div>
              </div>
              
              {/* Subtle grid background */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full flex items-center justify-center text-xl font-bold">
                  R
                </div>
                <div>
                  <div className="font-semibold">studio_render</div>
                  <div className="text-sm text-gray-400">1d</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                3d-geometric.design
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card3')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card3 ? 'fill-white text-white' : 'text-gray-400'} 
                  />
                  <span className={liked.card3 ? 'text-white' : 'text-gray-400'}>{likes.card3}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>124</span>
                </button>
              </div>
            </div>
          </div>
      </div>

        </div>


            {/* Mobile: Single Column */}

         <div className="md:hidden space-y-5 px-6 w-full"> 
          
          {/* Card 1 - HiKeys Synthesizer */}
          <div className="group w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/5">
            <div className="relative bg-white p-8 aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 text-black text-sm font-medium">HiKeys—1977</div>
              <div className="absolute top-4 right-4 text-xs text-gray-400">Concept & Design</div>
              
              {/* Synthesizer Image */}
              <div className="w-full ">
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                  {/* Synth Controls */}
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-8 rounded-full border-2 border-gray-400 bg-gray-100"></div>
                    ))}
                  </div>
                  {/* Display */}
                  <div className="bg-black text-green-400 text-xs font-mono p-2 rounded mb-4 flex items-center gap-2">
                    <span>■ ●●●●</span>
                  </div>
                  {/* Keys */}
                  <div className="flex gap-0.5">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'h-16 bg-white' : 'h-10 bg-gray-800'} flex-1 border border-gray-300 rounded-b`}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Large Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 text-9xl font-black leading-none text-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                HK77
              </div>
              
              {/* Plus Icons */}
              <div className="absolute bottom-6 left-6 text-3xl font-bold text-black">++</div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">++</div>
                <div>
                  <div className="font-semibold">++hellohello</div>
                  <div className="text-sm text-gray-400">3h</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                hikeys1977.com
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card1')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card1 ? 'fill-blue-500 text-blue-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card1 ? 'text-blue-500' : 'text-gray-400'}>{likes.card1}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>47</span>
                </button>
              </div>
            </div>
          </div>

                 
          

          
          
          
          {/* Card 2 - Red Monster Design */}
          <div className="group bg-gradient-to-br h-fit from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-red-500/10">
            <div className="relative bg-gradient-to-b from-gray-800 to-black p-8 aspect-[4/3]">
              {/* Top Icons */}
              <div className="flex gap-4 mb-6 justify-center">
                {['MUSIC', 'TECH', 'TYSON', 'MISC'].map((label, i) => (
                  <div key={i} className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold shadow-lg">
                    {label}
                  </div>
                ))}
              </div>
              
              {/* Red Monster Card */}
              <div className="bg-red-600 rounded-2xl p-8 shadow-2xl">
                <div className="relative">
                  {/* Monster Face */}
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gradient-to-b from-red-800 to-red-900 rounded-t-full px-16 py-8">
                      <div className="flex gap-4 mb-2">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      <div className="w-24 h-12 bg-white rounded-lg mx-auto"></div>
                    </div>
                    <div className="w-32 h-24 bg-white rounded-b-full mx-auto -mt-2"></div>
                    {/* Arms */}
                    <div className="flex justify-between -mt-12">
                      <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform -rotate-12"></div>
                      <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform rotate-12"></div>
                    </div>
                  </div>
                  
                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 text-white text-xs">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2"></div>
                      <div className="font-bold">ORIGIN</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold mb-1">MUZZY</div>
                      <div className="text-white/70">CHARACTER</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold mb-1">HALF HUMAN</div>
                      <div className="text-white/70">APPEARANCE</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Text */}
              <div className="mt-6 text-center">
                <div className="text-3xl font-light text-white mb-1">Let's make</div>
                <div className="text-3xl font-light italic text-emerald-400">it more</div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">redmonster_</div>
                  <div className="text-sm text-gray-400">5h</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card2')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card2 ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
                  />
                  <span className={liked.card2 ? 'text-red-500' : 'text-gray-400'}>{likes.card2}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>89</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - 3D Geometric Design */}

            {/* Card 1 - HiKeys Synthesizer */}
            <div className="group h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/10">
            <div className="relative bg-black p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* 3D Shape with dramatic lighting */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl"></div>
                
                {/* Main Geometric Shape */}
                <div className="relative" style={{ perspective: '1000px' }}>
                  <div className="w-64 h-64 relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(15deg)' }}>
                    {/* Front face */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 transform translate-z-16" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      {/* Letter R */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-black text-white/90 tracking-tighter" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                          R
                        </div>
                      </div>
                    </div>
                    
                    {/* Edge highlight */}
                    <div className="absolute top-0 left-1/2 w-1 h-32 bg-gradient-to-b from-white/80 to-transparent transform -translate-x-1/2 blur-sm"></div>
                  </div>
                </div>
                
                {/* Dramatic light beam */}
                <div className="absolute -right-32 top-1/2 w-96 h-2 bg-gradient-to-r from-white via-white/50 to-transparent blur-xl transform -translate-y-1/2 rotate-[-15deg]"></div>
              </div>
              
              {/* Subtle grid background */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full flex items-center justify-center text-xl font-bold">
                  R
                </div>
                <div>
                  <div className="font-semibold">studio_render</div>
                  <div className="text-sm text-gray-400">1d</div>
                </div>
              </div>
              
              <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                3d-geometric.design
              </a>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => handleLike('card3')}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={20} 
                    className={liked.card3 ? 'fill-white text-white' : 'text-gray-400'} 
                  />
                  <span className={liked.card3 ? 'text-white' : 'text-gray-400'}>{likes.card3}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>124</span>
                </button>
              </div>
            </div>
          </div>

        </div>



          </div> 
          
        </div>
       
          <div className=" group text-white flex text-xl md:text-xl font-runiga tracking-wider mb-4 mt-6 justify-center items-center gap-2 opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          <h1 className=' group-hover:underline'>All Projects </h1> <img src={Arrow} className=' w-4 h-4 group-hover:rotate-[45deg]'/></div>
      </div>
      </div>

    

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        @keyframes curtainReveal {
          0% {
            clip-path: ellipse(150% 100% at 50% 0%);
            opacity: 1;
          }
          100% {
            clip-path: ellipse(150% 0% at 50% 0%);
            opacity: 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out 1.6s forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 1s ease-out;
        }
        .animate-curtainReveal {
          animation: curtainReveal 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </section>

    
  );
}