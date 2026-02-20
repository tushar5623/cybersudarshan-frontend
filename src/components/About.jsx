import React from 'react';

const About = () => {
  // Yahan humne Team ka Data ek list (Array) mein rakha hai.
  // Isse naya member add karna bahut aasaan ho jata hai.
  const teamMembers = [
    {
      name: "Yatendra Dixit",
      role: "Founder & CEO",
      image: "https://ui-avatars.com/api/?name=Yatendra+Dixit&background=06b6d4&color=fff" // Placeholder Image
    },
    {
      name: "Gajendra Singh",
      role: "Co-Founder & Director",
      image: "https://ui-avatars.com/api/?name=Gajendra+Singh&background=8b5cf6&color=fff"
    },
    {
      name: "Shailendra Singh Dhakad",
      role: "CTO",
      image: "https://ui-avatars.com/api/?name=Shailendra+Singh&background=ec4899&color=fff"
    }
  ];

  return (
    // CHANGE 1: 'bg-slate-900' hata diya taaki section transparent ho jaye
    <section id="about" className="py-20 relative z-10">
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* === PART 1: ABOUT TEXT === */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Cyber Sudarshan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a cybersecurity initiative focused on protecting individuals
            and organizations from cyber threats. Our mission is to educate,
            investigate, and secure the digital ecosystem.
          </p>
        </div>

        {/* === PART 2: TEAM CARDS (Looping) === */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            
            // CHANGE 2: Team Cards ko backdrop-blur-sm diya for Glassmorphism
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 text-center group">
              
              {/* Image Circle with Glow */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-[#020617]"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-cyan-400 font-medium">{member.role}</p>
              
            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default About;