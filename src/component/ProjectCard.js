import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Arrow from '../assets/arow1.png'



export const Card1=()=>{
  const [likes, setLikes] = useState({ card1: 223,});
  const [liked, setLiked] = useState({ card1: false,});

  const handleLike = (cardId) => {
    setLiked(prev => ({ ...prev, [cardId]: !prev[cardId] }));
    setLikes(prev => ({ 
      ...prev, 
      [cardId]: prev[cardId] + (liked[cardId] ? -1 : 1) 
    }));
  };
  return(

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
    
  )
}

export const Card2=()=>{
  const [likes, setLikes] = useState({ card1: 223, card2: 156, card3: 342 });
  const [liked, setLiked] = useState({ card1: false, card2: false, card3: false });

  const handleLike = (cardId) => {
    setLiked(prev => ({ ...prev, [cardId]: !prev[cardId] }));
    setLikes(prev => ({ 
      ...prev, 
      [cardId]: prev[cardId] + (liked[cardId] ? -1 : 1) 
    }));
  };
  return(

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
    
  )
}
export const Card3=()=>{
  const [likes, setLikes] = useState({ card1: 223, card2: 156, card3: 342 });
  const [liked, setLiked] = useState({ card1: false, card2: false, card3: false });

  const handleLike = (cardId) => {
    setLiked(prev => ({ ...prev, [cardId]: !prev[cardId] }));
    setLikes(prev => ({ 
      ...prev, 
      [cardId]: prev[cardId] + (liked[cardId] ? -1 : 1) 
    }));
  };
  return(

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
    
  )
}