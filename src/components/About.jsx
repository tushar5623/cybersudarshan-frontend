import React from 'react';

const About = () => {
  const teamMembers = [
    { name: "Yatendra Dixit", role: "Founder & CEO", image: "https://ui-avatars.com/api/?name=Yatendra+Dixit&background=eab308&color=fff" },
    { name: "Gajendra Singh", role: "Co-Founder & Director", image: "https://ui-avatars.com/api/?name=Gajendra+Singh&background=f59e0b&color=fff" },
    { name: "Shailendra Singh Dhakad", role: "CTO", image: "https://ui-avatars.com/api/?name=Shailendra+Singh&background=d97706&color=fff" }
  ];

  return (
    // 🔥 MOBILE FIX: Top/Bottom padding mobile ke liye 'py-12' aur desktop ke liye 'md:py-20'
    <section id="about" className="py-12 md:py-20 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Title Fade Up */}
        {/* 🔥 MOBILE FIX: Bottom margin 'mb-10' on mobile, 'md:mb-16' on desktop */}
        <div data-aos="fade-up" className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            About <span className="text-yellow-500">Cyber Sudarshan</span>
          </h2>
          {/* 🔥 MOBILE FIX: Text size 'text-sm' kiya mobile pe padding ke sath */}
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
            We are a cybersecurity initiative focused on protecting individuals and organizations from cyber threats. Our mission is to educate, investigate, and secure the digital ecosystem.
          </p>
        </div>

        {/* 🔥 MOBILE FIX: Added 'sm:grid-cols-2' for tablets and adjusted gap 'gap-5 md:gap-8' */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {teamMembers.map((member, index) => (
            
            // Cards Zoom In with Delay
            <div 
              key={index} 
              data-aos="zoom-in" 
              data-aos-delay={index * 150} 
              className="bg-slate-800/50 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 text-center group shadow-none hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)]"
            >
              {/* 🔥 MOBILE FIX: Avatar size 'w-24 h-24' kiya mobile pe taaki card compact lage */}
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-amber-600 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition-all">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-[#020617]" 
                />
              </div>
              
              {/* 🔥 MOBILE FIX: Text sizes adjusted */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{member.name}</h3>
              <p className="text-yellow-400 font-medium tracking-wide uppercase text-xs md:text-sm">{member.role}</p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default About;