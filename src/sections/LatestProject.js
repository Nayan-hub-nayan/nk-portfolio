import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Arrow from '../assets/arow1.png'
import { Card1, Card2, Card3 } from '../component/ProjectCard';
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
          <Card1/>

          {/* Card 1 - HiKeys Synthesizer */}
          <Card2/>
          </div>
          
          
          {/* Card 2 - Red Monster Design */}
         <Card3/>

          {/* Card 3 - 3D Geometric Design */}
          <div className="flex md:flex-col justify-center gap-8 relative w-full">

          <Card2/>

          {/* Card 1 - HiKeys Synthesizer */}
          <Card1/>
      </div>

        </div>


        {/* Tablet: 3 Column */}
        <div className="hidden md:grid md:grid-cols-1  lg:hidden gap-8 w-full">
          
          {/* Card 1 - HiKeys Synthesizer */}
          <div className="flex  justify-center gap-8 relative w-full">
         <Card1/>
         <Card1/>
          </div>
          
          
          {/* Card 2 - Red Monster Design */}
        <Card3/>

          {/* Card 3 - 3D Geometric Design */}
          <div className="flex  justify-center gap-8 relative w-full">

          <Card2/>
          <Card2/>
          </div>

        </div>


            {/* Mobile: Single Column */}

         <div className="md:hidden space-y-5 px-6 w-full"> 
          
          {/* Card 1 - HiKeys Synthesizer */}
          <Card1/>
          <Card3/>
          <Card2/>
         

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