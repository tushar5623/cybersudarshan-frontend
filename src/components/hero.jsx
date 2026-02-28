import React, { useState } from 'react';

const Hero = () => {
  // --- NAYA PASSWORD CHECKER LOGIC ---
  const [password, setPassword] = useState('');

  const checkStrength = (pass) => {
    let score = 0;
    if (!pass) return score;
    if (pass.length > 7) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const score = checkStrength(password);

const getStrengthDetails = () => {
    switch (score) {
      case 0: return { label: 'Very Weak ❌', color: 'bg-red-600', width: 'w-1/4', textColor: 'text-red-500' };
      case 1: return { label: 'Weak ⚠️', color: 'bg-orange-500', width: 'w-2/4', textColor: 'text-orange-500' };
      case 2: return { label: 'Moderate 🟡', color: 'bg-yellow-400', width: 'w-3/4', textColor: 'text-yellow-400' };
      case 3: return { label: 'Strong ✅', color: 'bg-green-500', width: 'w-full', textColor: 'text-green-500' };
      case 4: return { label: 'Unbreakable 🛡️', color: 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]', width: 'w-full', textColor: 'text-cyan-400' };
      default: return { label: '', color: 'bg-transparent', width: 'w-0', textColor: '' };
    }
  };        
  const details = getStrengthDetails();
  // --- LOGIC END ---

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* 1. BACKGROUND GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl w-full space-y-6 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-2 animate-pulse">
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

        {/* 👇 NAYA PASSWORD CHECKER COMPONENT (Buttons ki jagah) 👇 */}
        <div className="pt-6 w-full max-w-md mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔐</span>
              <h3 className="text-slate-200 font-semibold text-sm tracking-wide uppercase">Live Password Checker</h3>
            </div>

            <input
              type="text"
              placeholder="Type to test your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-slate-950/80 text-white border border-slate-600/50 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder-slate-500 font-mono"
            />
            
            {password && (
              <div className="mt-4 animate-fade-in">
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${details.color} transition-all duration-500 ease-in-out ${details.width}`}></div>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span className="text-slate-400 font-medium">Strength Level:</span>
                  <span className={`font-bold tracking-wide ${details.textColor}`}>{details.label}</span>
                </div>
              </div>
            )}

          </div>
        </div>
        {/* 👆 PASSWORD CHECKER END 👆 */}

      </div>

      {/* Decorative Grid Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-20"></div>

    </section>
  );
};

export default Hero;