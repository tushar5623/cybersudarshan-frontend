import React from 'react';

const Hero = () => {
  return (
    // CHANGE 1: 'bg-slate-950' hata diya. Ab ye transparent hai.
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* 1. BACKGROUND GLOW EFFECT (Ye particles ke upar halka sa glow dega) */}
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

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer">
            Join the Mission
          </button>
          
          <button className="px-8 py-3 border border-slate-700 text-white hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-all bg-slate-900/50 backdrop-blur-sm cursor-pointer">
            Learn More
          </button>
        </div>

      </div>

      {/* Decorative Grid Bottom Fade (Isse remove nahi kiya taaki niche smooth lage) */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-20"></div>

    </section>
  );
};

export default Hero;
  