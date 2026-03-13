// import React from 'react';

// const VisionMission = () => {
//   return (
//     <section className="w-full py-20 px-6 relative overflow-hidden">
      
//       {/* Background Decor (Gold & Amber glow) */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
//         <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-yellow-600/20 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-amber-600/20 rounded-full blur-[100px]"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10">

//         {/* === VISION CARD (Yellow Theme) === */}
//         <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:-translate-y-2">
          
//           <div className="w-14 h-14 bg-yellow-500/10 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-yellow-500/20 transition">
//             👁️
//           </div>
          
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Our <span className="text-yellow-400">Vision</span>
//           </h2>
          
//           <p className="text-slate-400 leading-relaxed">
//             Our vision is to create India’s most trusted <span className="text-white font-medium">youth-driven cyber awareness ecosystem</span> that educates, empowers, and protects people from evolving cyber crimes through knowledge, technology, and community action.
//           </p>
//         </div>

//         {/* === MISSION CARD (Amber Theme) === */}
//         <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:-translate-y-2">
          
//           <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-amber-500/20 transition">
//             🎯
//           </div>
          
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Our <span className="text-amber-400">Mission</span>
//           </h2>
          
//           <p className="text-slate-400 leading-relaxed mb-4">
//             Our mission is to spread cyber awareness at the grassroots level by conducting seminars, workshops, and awareness campaigns.
//           </p>
          
//           <ul className="space-y-2 text-slate-400">
//             <li className="flex items-start gap-2">
//               <span className="text-amber-400 mt-1">✓</span> Educate about cyber crimes & scams.
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-amber-400 mt-1">✓</span> Promote responsible digital behavior.
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-amber-400 mt-1">✓</span> Collaborate with experts & law enforcement.
//             </li>
//           </ul>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default VisionMission;
import React from 'react';

const VisionMission = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-yellow-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-amber-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10">

        {/* === VISION CARD (Left se aayega) === */}
        <div data-aos="fade-right" className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-yellow-500/10 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-yellow-500/20 transition">👁️</div>
          <h2 className="text-3xl font-bold text-white mb-4">Our <span className="text-yellow-400">Vision</span></h2>
          <p className="text-slate-400 leading-relaxed">Our vision is to create India’s most trusted <span className="text-white font-medium">youth-driven cyber awareness ecosystem</span> that educates, empowers, and protects people from evolving cyber crimes through knowledge, technology, and community action.</p>
        </div>

        {/* === MISSION CARD (Right se aayega) === */}
        <div data-aos="fade-left" data-aos-delay="200" className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-amber-500/20 transition">🎯</div>
          <h2 className="text-3xl font-bold text-white mb-4">Our <span className="text-amber-400">Mission</span></h2>
          <p className="text-slate-400 leading-relaxed mb-4">Our mission is to spread cyber awareness at the grassroots level by conducting seminars, workshops, and awareness campaigns.</p>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Educate about cyber crimes & scams.</li>
            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Promote responsible digital behavior.</li>
            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Collaborate with experts & law enforcement.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;