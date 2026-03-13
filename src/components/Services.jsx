import React, { useState } from 'react';
import { Megaphone, Laptop, Handshake, X, BookOpen } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      icon: <Megaphone size={40} className="text-orange-500" />,
      title: "Cyber Awareness",
      shortDesc: "Interactive workshops & seminars to educate youth about digital safety.",
      fullDesc: "Our Cyber Awareness program is designed to educate students and employees about the latest cyber threats. We cover topics like Social Engineering, Phishing, and Safe Browsing habits.",
      curriculum: ["Identity Theft Protection", "Social Media Safety", "Fake News Detection", "Secure Banking Practices"],
      status: "Upcoming Events: March 2026",
      statusColor: "text-orange-400"
    },
    {
      id: 2,
      icon: <Laptop size={40} className="text-yellow-400" />,
      title: "Ethical Hacking Training",
      shortDesc: "Hands-on training programs designed to teach cybersecurity fundamentals.",
      fullDesc: "Become a certified Ethical Hacker. This course starts from basics of Linux and Networking to advanced Penetration Testing using tools like Metasploit, Wireshark, and Burp Suite.",
      curriculum: ["Linux & Networking Basics", "Web Application Hacking", "System Hacking", "Bug Bounty Hunting"],
      status: "Course Launching Soon",
      statusColor: "text-yellow-400"
    },
    {
      id: 3,
      icon: <Handshake size={40} className="text-amber-500" />,
      title: "Cyber Crime Support",
      shortDesc: "Guidance and legal support for victims of online frauds and scams.",
      fullDesc: "Got scammed? Don't panic. We provide step-by-step guidance on how to report cyber crimes to the National Cyber Crime Portal and help you draft legal complaints.",
      curriculum: ["Financial Fraud Recovery", "Social Media Account Hacked", "Blackmail & Sextortion Help", "Legal FIR Support"],
      status: "Service Available 24/7",
      statusColor: "text-amber-400"
    }
  ];

  return (
    <>
      <section id="services" className="py-20 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Title Fade Down */}
          <div data-aos="fade-down" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-yellow-500 underline decoration-4 decoration-yellow-600 underline-offset-8">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Empowering you with knowledge and tools to stay safe in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              
              // 👇 CARDS FADE UP ANIMATION WITH DELAY 👇
              <div 
                key={service.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 200} // Har card 0.2s late aayega (Staggered Effect)
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] group relative overflow-hidden"
              >
                <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed relative z-10">
                  {service.shortDesc}
                </p>
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className={`flex items-center gap-2 font-semibold transition-colors relative z-10 ${service.statusColor} cursor-pointer`}
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Popup (No AOS here, we keep it simple fade-in) */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-slate-800 text-slate-400 hover:text-white p-2 rounded-full transition-colors z-10 cursor-pointer hover:bg-red-500/20 hover:text-red-400"
            >
              <X size={20} />
            </button>

            <div className="p-8 pb-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>
              
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-800 border ${selectedService.statusColor} border-opacity-30 ${selectedService.statusColor}`}>
                {selectedService.status}
              </span>
            </div>

            <div className="p-8">
              <p className="text-slate-300 mb-6 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <BookOpen size={18} className="text-yellow-500" />
                What to expect:
              </h4>
              <ul className="space-y-2 mb-8">
                {selectedService.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setSelectedService(null)}
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-900 font-extrabold py-3 rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]"
              >
                Got it!
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Services;