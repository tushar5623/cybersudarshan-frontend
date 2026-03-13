import React from 'react';
import logo from '../assets/logo.png'; // 👇 LOGO IMPORT KIYA (Path check kar lena)

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* 1. NEW HOLOGRAPHIC LOGO MOTION BACKGROUND 🔥 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-center overflow-hidden z-0">
        
        {/* Giant Slowly Rotating Logo (Hologram Effect) */}
        {/* animate-[spin_40s_linear_infinite] isko bohot smooth aur slow ghumayega */}
        <img 
          src={logo} 
          alt="Cyber Sudarshan Hologram" 
          className="absolute w-[600px] md:w-[900px] opacity-[0.05] md:opacity-[0.07] animate-[spin_40s_linear_infinite] blur-[2px]"
        />
        
        {/* Core Glow (Jo logo ke theek center se niklega) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl space-y-6">
        
        {/* Badge (Yellow Alert Style) */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold mb-4 animate-pulse backdrop-blur-sm">
          🛡️ Building a Secure Digital India
        </div>

       {/* Hero Heading (Gold to Orange Gradient) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Securing The <br />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 animate-gradient-flow bg-clip-text text-transparent">
            Digital World
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto backdrop-blur-sm bg-slate-950/20 p-2 rounded-xl">
          Cyber Sudarshan is an initiative to fight cyber crime,
          spread awareness, and empower the youth with knowledge.
        </p>

        {/* Buttons (Black & Yellow Theme! 🔥) */}
        <div className="flex flex-col md:flex-row gap-5 justify-center pt-6 items-center">
          
          {/* JOIN THE MISSION - Solid Gold Button */}
          <button className="group flex items-center gap-2.5 px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:shadow-[0_0_35px_rgba(234,179,8,0.6)] hover:scale-105 active:scale-95 cursor-pointer text-lg relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
            <span className="relative z-10 text-xl group-hover:scale-110 transition-transform">👤+</span>
            <span className="relative z-10 tracking-wide uppercase text-sm">Join the Mission</span>
          </button>
          
          {/* LEARN MORE - Outline Gold Button */}
          <button className="flex items-center gap-2 px-8 py-3.5 border-2 border-slate-700 text-white hover:border-yellow-500 hover:text-yellow-400 rounded-xl transition-all duration-300 bg-slate-900/30 backdrop-blur-sm cursor-pointer group hover:bg-slate-900/60">
            Learn More
            <span className="text-slate-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
        </div>

      </div>

      {/* Decorative Grid Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>

    </section>
  );
};

export default Hero;