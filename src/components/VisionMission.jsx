import React from 'react';

const VisionMission = () => {
  return (
    // CHANGE 1: Yahan se 'bg-slate-950' hata diya hai taaki transparent ho jaye.
    <section className="w-full py-20 px-6 relative overflow-hidden">
      
      {/* Background Decor (Peeche halka sa blue shade) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10">

        {/* === VISION CARD === */}
        <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2">
          
          <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-500/20 transition">
            👁️
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Vision</span>
          </h2>
          
          <p className="text-slate-400 leading-relaxed">
            Our vision is to create India’s most trusted <span className="text-white font-medium">youth-driven cyber awareness ecosystem</span> that educates, empowers, and protects people from evolving cyber crimes through knowledge, technology, and community action.
          </p>
        </div>

        {/* === MISSION CARD === */}
        <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-2">
          
          <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-purple-500/20 transition">
            🎯
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Our <span className="text-purple-400">Mission</span>
          </h2>
          
          <p className="text-slate-400 leading-relaxed mb-4">
            Our mission is to spread cyber awareness at the grassroots level by conducting seminars, workshops, and awareness campaigns.
          </p>
          
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">✓</span> Educate about cyber crimes & scams.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">✓</span> Promote responsible digital behavior.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">✓</span> Collaborate with experts & law enforcement.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;