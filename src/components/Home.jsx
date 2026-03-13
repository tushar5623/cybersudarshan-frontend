import React, { useState, useEffect } from 'react';
import Hero from './hero';
import VisionMission from './VisionMission';
import About from './About';
import Services from './Services';
import ContactFooter from './ContactFooter';
import PasswordChecker from './PasswordChecker';
import EmailBreachChecker from './EmailBreachChecker';

// 👇 AOS ANIMATION IMPORTS 👇
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // 1. EMERGENCY VARIABLES
  const [showEmergency, setShowEmergency] = useState(false);
  const [emergencyData, setEmergencyData] = useState({ name: '', email: '', mobile: '', problem: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 👇 2. START AOS ANIMATION ENGINE 👇
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation kitni der chalegi (0.8 seconds)
      easing: 'ease-in-out', // Smooth motion
      once: false, // False ka matlab jab bhi scroll up/down karoge animation dubara hogi
      mirror: true,
      offset: 100, // Screen mein element aane ke 100px baad animation shuru hogi
    });
  }, []);

  const handleEmergencyChange = (e) => {
    setEmergencyData({ ...emergencyData, [e.target.name]: e.target.value });
  };

  const handleEmergencySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://cyber-sudarshan-backend-1.onrender.com/api/emergency', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emergencyData),
      });

      if (response.ok) {
        alert("Emergency Alert Sent! We will contact you soon. ");
        setShowEmergency(false); 
        setEmergencyData({ name: '', email: '', mobile: '', problem: '' }); 
      } else {
        alert("Error sending alert. Please try again.");
      }
    } catch (error) {
      alert("Network error!");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="overflow-x-hidden"> {/* Horizontal scroll roknne ke liye */}
      <Hero />
      <VisionMission />
      <About />
      <Services />

      {/* Tools with Scroll Animation */}
      <div data-aos="fade-up">
        <PasswordChecker />
      </div>
      <div data-aos="fade-up">
        <EmailBreachChecker />
      </div>

      <ContactFooter />

      {/* EMERGENCY BUTTON */}
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={() => setShowEmergency(true)}
          className="animate-pulse bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-extrabold py-4 px-6 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.6)] flex items-center gap-2 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <span className="text-2xl drop-shadow-md">🚨</span> REPORT EMERGENCY
        </button>
      </div>

      {/* EMERGENCY POPUP FORM */}
      {showEmergency && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[100] p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-red-500/50 p-8 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.2)] w-full max-w-md relative animate-in zoom-in-95 duration-200">
            <button onClick={() => setShowEmergency(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white bg-slate-800 hover:bg-red-500/20 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer">✖</button>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-red-500 flex items-center justify-center gap-2">🚨 Cyber Fraud Alert</h2>
              <p className="text-slate-400 text-sm mt-2">Fill this form for immediate assistance.</p>
            </div>
            <form onSubmit={handleEmergencySubmit} className="flex flex-col gap-4">
              <input type="text" name="name" placeholder="Enter Name" required value={emergencyData.name} onChange={handleEmergencyChange} className="p-3.5 bg-slate-950/50 text-white border border-slate-700 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-slate-500 backdrop-blur-md"/>
              <input type="email" name="email" placeholder="Email Address" required value={emergencyData.email} onChange={handleEmergencyChange} className="p-3.5 bg-slate-950/50 text-white border border-slate-700 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-slate-500 backdrop-blur-md"/>
              <input type="tel" name="mobile" placeholder="Mobile Number" required value={emergencyData.mobile} onChange={handleEmergencyChange} className="p-3.5 bg-slate-950/50 text-white border border-slate-700 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-slate-500 backdrop-blur-md"/>
              <textarea name="problem" rows="3" placeholder="Briefly describe the fraud..." required value={emergencyData.problem} onChange={handleEmergencyChange} className="p-3.5 bg-slate-950/50 text-white border border-slate-700 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-slate-500 resize-none backdrop-blur-md"></textarea>
              <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-extrabold py-3.5 rounded-xl mt-2 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] disabled:opacity-50 cursor-pointer">{isSubmitting ? "Sending Alert..." : "Send Emergency Alert"}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;