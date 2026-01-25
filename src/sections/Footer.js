import React from 'react';
import { GradientButton } from '../component/Button';

const DesignerFooter = () => {
  return (
    <footer className="relative flex  w-full h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black  text-white overflow-hidden flex-col items-center justify-between">
     
     
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
      
       
     
      {/* Animated Text Ticker Background */}
      <div className="absolute inset-0 flex flex-col justify-evenly overflow-hidden pointer-events-none opacity-5">
        {/* First ticker row - moving right */}
        <div className="flex whitespace-nowrap animate-scroll-right">
          <div className="flex space-x-8 text-6xl font-black">
            <span>DESIGN • DEVELOP • CREATE • INNOVATE • </span>
            <span>DESIGN • DEVELOP • CREATE • INNOVATE • </span>
            <span>DESIGN • DEVELOP • CREATE • INNOVATE • </span>
          </div>
        </div>
        
        {/* Second ticker row - moving left */}
        <div className="flex whitespace-nowrap animate-scroll-left">
          <div className="flex space-x-8 text-6xl font-black">
            <span>BUILD • CRAFT • INSPIRE • COLLABORATE • </span>
            <span>BUILD • CRAFT • INSPIRE • COLLABORATE • </span>
            <span>BUILD • CRAFT • INSPIRE • COLLABORATE • </span>
          </div>
        </div>
        
        {/* Third ticker row - moving right */}
        <div className="flex whitespace-nowrap animate-scroll-right-slow">
          <div className="flex space-x-8 text-6xl font-black">
            <span>SWEVEN • DESIGN • STUDIO • PORTFOLIO • </span>
            <span>SWEVEN • DESIGN • STUDIO • PORTFOLIO • </span>
            <span>SWEVEN • DESIGN • STUDIO • PORTFOLIO • </span>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circles in background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-white/5 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] border-2 border-white/5 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 border-2 border-white/5 rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 border-2 border-white/5 rounded-full" />
      </div>


      {/* Main Content */}
      <div className="relative h-screen justify-center flex flex-col z-10 text-center px-8">
        {/* Small heading */}
        <div className="relative z-10 text-center px-8">

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">
          Want to work together?
        </p>
        
        {/* Large Email with Red Underline */}
        <div className="inline-block">
                 
         
        <GradientButton/>

        </div>
      </div>

      

        </div>
        <div className='relative w-full text-sm sm:text-xl md:text-[18px] font-runiga text-white md:flex md:justify-between z-10 text-center px-8  mb-8 sm:mb-12'>
          <h1>nayan@design.com</h1>
          <h1>©2026</h1>
          <h1><span className='  text-gray-400'>By    </span>  Nayan Kawalkar</h1>
        </div>
       

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right-slow {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right-slow 30s linear infinite;
        }
      `}</style>
      
    </footer>
  );
};

export default DesignerFooter;