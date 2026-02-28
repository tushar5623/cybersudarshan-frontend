import React, { useState } from 'react';

const EmailBreachChecker = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

const checkBreach = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setResult(null);

    try {
      // Ab hum direct API nahi, apna Render wala backend call karenge
      const response = await fetch(`https://cyber-sudarshan-backend-1.onrender.com/api/breach/${email}`);
    // const response = await fetch(`http://localhost:5000/api/breach/${email}`);
      if (response.ok) {
        const data = await response.json();
        if (data.safe) {
            setResult({ safe: true });
        } else {
            setResult({ safe: false, breaches: data.breaches });
        }
      } else {
        setResult({ error: "Backend error! Please try again." });
      }
    } catch (error) {
      setResult({ error: "Network Error! Apna internet check karo." });
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-slate-950 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
        
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-4xl">📧</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Data Breach <span className="text-cyan-400">Scanner</span></h2>
          </div>
          <p className="text-slate-400 text-lg">Check if your email address has been compromised in a data breach.</p>
        </div>

        <form onSubmit={checkBreach} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-4 bg-slate-950/80 text-white border border-slate-600/50 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder-slate-500 font-mono"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Scanning..." : "Scan Now"}
          </button>
        </form>

        {/* RESULTS SECTION */}
        {result && (
          <div className="mt-8 max-w-2xl mx-auto animate-fade-in">
            {result.error && (
              <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-400 rounded-xl text-center">
                {result.error}
              </div>
            )}

            {result.safe === true && (
              <div className="p-6 bg-green-900/20 border border-green-500/50 rounded-xl text-center">
                <span className="text-5xl block mb-2">🎉</span>
                <h3 className="text-2xl font-bold text-green-400 mb-2">Good News! No Breaches Found.</h3>
                <p className="text-green-200/70">Your email is safe and hasn't been found in any known data leaks.</p>
              </div>
            )}

            {result.safe === false && (
              <div className="p-6 bg-red-900/20 border border-red-500/50 rounded-xl">
                <div className="text-center mb-6">
                  <span className="text-5xl block mb-2">🚨</span>
                  <h3 className="text-2xl font-bold text-red-500 mb-2">Oh no! Your email has been leaked!</h3>
                  <p className="text-red-300/70">We found your email in the following data breaches:</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {result.breaches.map((breachName, index) => (
                    <span key={index} className="px-3 py-1 bg-red-950 border border-red-800 text-red-300 rounded-md text-sm font-mono">
                      {breachName}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-slate-950 rounded-lg border border-slate-800">
                  <p className="font-semibold text-slate-300 mb-2">💡 Next Steps:</p>
                  <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                    <li>Change your password immediately for the affected sites.</li>
                    <li>Use a strong, unique password (use our Password Checker!).</li>
                    <li>Enable Two-Factor Authentication (2FA) wherever possible.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default EmailBreachChecker;