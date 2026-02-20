import React, { useState } from 'react';

const ContactFooter = () => {
  // 1. FORM DATA STATE
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. INPUT CHANGE HANDLE KARNA
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. FORM SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Node.js Backend Call
      const response = await fetch(' https://cyber-sudarshan-backend-1.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message Sent Successfully via Node.js! 🚀");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Server Error! Message not sent.");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Is the server running?");
    }

    setIsSubmitting(false);
  };

  return (
    // CHANGE 1: 'bg-slate-950' hata diya taaki transparent ho jaye
    <div className="relative z-10">
      
      {/* === CONTACT SECTION === */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Have a question or want to organize a cyber awareness workshop?
              Fill out the form and we will get back to you within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <span className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-lg text-cyan-400">📧</span>
                <span> cybersudarshan.in@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <span className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-lg text-cyan-400">📞</span>
                <span>+91 89232 05311</span>
                <span>+91 89557 62932</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <span className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-lg text-cyan-400">📍</span>
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl">
            
            <div className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-600 backdrop-blur-md"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-600 backdrop-blur-md"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  required
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-600 resize-none backdrop-blur-md"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </div>
          </form>

        </div>
      </section>

      {/* === FOOTER === */}
      {/* CHANGE 2: Footer ko bhi transparent aur blur kiya */}
      <footer className="border-t border-slate-800/50 bg-slate-950/30 backdrop-blur-md py-8 text-center mt-10">
        <p className="text-slate-500 text-sm">
          © 2026 <span className="text-cyan-400 font-semibold">Cyber Sudarshan</span>. All Rights Reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Designed for a Secure Digital India 🇮🇳
        </p>
      </footer>

    </div>
  );
};

export default ContactFooter;