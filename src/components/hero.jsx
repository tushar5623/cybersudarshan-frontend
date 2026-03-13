import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* 1. BACKGROUND GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl space-y-6">
        
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-4 animate-pulse">
          🛡️ Building a Secure Digital India
        </div>

       {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Securing The <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-flow bg-clip-text text-transparent">
            Digital World
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Cyber Sudarshan is an initiative to fight cyber crime,
          spread awareness, and empower the youth with knowledge.
        </p>

        {/* Buttons (Wapas aa gaye!) */}
       {/* Buttons (New Attractive Design! 🔥) */}
        <div className="flex flex-col md:flex-row gap-5 justify-center pt-6 items-center">
          
          {/* JOIN THE MISSION - Attractive Button with Neon Pulse Icon */}
          <button className="group flex items-center gap-2.5 px-10 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-extrabold rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] hover:scale-105 active:scale-95 cursor-pointer text-lg relative overflow-hidden">
            
            {/* Animated Glow Border on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
            
            {/* Mission Icon (Shield/User) with pulsing glow */}
            <span className="relative z-10 text-xl group-hover:scale-110 transition-transform">
                👤+
            </span>
            
            {/* Text */}
            <span className="relative z-10 tracking-wide uppercase text-sm">Join the Mission</span>
          </button>
          
          {/* LEARN MORE - Clean Outline Button (Matching Cyber Theme) */}
          <button className="flex items-center gap-2 px-8 py-3.5 border-2 border-slate-700 text-white hover:border-cyan-500 hover:text-cyan-400 rounded-xl transition-all duration-300 bg-slate-900/30 backdrop-blur-sm cursor-pointer group hover:bg-slate-900/60">
            Learn More
            <span className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
        </div>

      </div>

      {/* Decorative Grid Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-20"></div>

    </section>
  );
};

export default Hero;