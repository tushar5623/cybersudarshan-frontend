import React, { useState } from 'react';
import Hero from './hero';
import VisionMission from './VisionMission';
import About from './About';
import Services from './Services';
import ContactFooter from './ContactFooter';
import EmailBreachChecker from './EmailBreachChecker';

const Home = () => {
  // 👇 1. EMERGENCY VARIABLES AUR FUNCTIONS 👇
  const [showEmergency, setShowEmergency] = useState(false);
  const [emergencyData, setEmergencyData] = useState({ name: '', email: '', mobile: '', problem: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        setShowEmergency(false); // Popup band kar do
        setEmergencyData({ name: '', email: '', mobile: '', problem: '' }); // Form clear kar do
      } else {
        alert("Error sending alert. Please try again.");
      }
    } catch (error) {
      alert("Network error!");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Hero />
      <VisionMission />
      <About />
      <Services />

      {/* 👇 NAYA DATA BREACH SCANNER TOOL YAHAN LAGA DIYA 👇 */}
      <EmailBreachChecker />

      <ContactFooter />

      {/* EMERGENCY BUTTON (Red & Pulsing) */}
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={() => setShowEmergency(true)}
          className="animate-pulse bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.7)] flex items-center gap-2 transition-all duration-300 transform hover:scale-110"
        >
          <span className="text-2xl">🚨</span> REPORT EMERGENCY
        </button>
      </div>

      {/* EMERGENCY POPUP FORM (Modal) */}
      {showEmergency && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100]">
          <div className="bg-gray-900 border border-red-600 p-8 rounded-xl shadow-2xl w-[90%] max-w-md relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowEmergency(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
              🚨 Emergency Cyber Fraud Alert
            </h2>

            <form onSubmit={handleEmergencySubmit} className="flex flex-col gap-4">
              <input 
                type="text" name="name" placeholder="Enter Name" required
                value={emergencyData.name} onChange={handleEmergencyChange}
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded focus:border-red-500 outline-none"
              />
              <input 
                type="email" name="email" placeholder="Email Address" required
                value={emergencyData.email} onChange={handleEmergencyChange}
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded focus:border-red-500 outline-none"
              />
              <input 
                type="tel" name="mobile" placeholder="Mobile Number" required
                value={emergencyData.mobile} onChange={handleEmergencyChange}
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded focus:border-red-500 outline-none"
              />
              <textarea 
                name="problem" rows="3" placeholder="Has fraud happened to you?   (Short detail)" required
                value={emergencyData.problem} onChange={handleEmergencyChange}
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded focus:border-red-500 outline-none"
              ></textarea>
              
              <button 
                type="submit" disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded mt-2 transition-colors"
              >
                {isSubmitting ? "Sending Alert..." : "Send Emergency Alert"}
              </button>
            </form>
          </div>
        </div>
      )}

    </>
  );
};

export default Home;