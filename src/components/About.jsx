import React from 'react';

const About = () => {
  const teamMembers = [
    { name: "Yatendra Dixit", role: "Founder & CEO", image: "https://ui-avatars.com/api/?name=Yatendra+Dixit&background=eab308&color=fff" },
    { name: "Gajendra Singh", role: "Co-Founder & Director", image: "https://ui-avatars.com/api/?name=Gajendra+Singh&background=f59e0b&color=fff" },
    { name: "Shailendra Singh Dhakad", role: "CTO", image: "https://ui-avatars.com/api/?name=Shailendra+Singh&background=d97706&color=fff" }
  ];

  return (
    <section id="about" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Fade Up */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About <span className="text-yellow-500">Cyber Sudarshan</span></h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">We are a cybersecurity initiative focused on protecting individuals and organizations from cyber threats. Our mission is to educate, investigate, and secure the digital ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            
            // Cards Zoom In with Delay
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 150} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 text-center group shadow-none hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)]">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-amber-600 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition-all">
                <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover border-4 border-[#020617]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-yellow-400 font-medium tracking-wide uppercase text-sm">{member.role}</p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default About;