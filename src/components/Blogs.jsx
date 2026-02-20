import React, { useState, useEffect } from 'react';
import { User, PenTool, Send, Lock, Unlock, X, ShieldCheck, LogOut, AlertCircle } from 'lucide-react'; // AlertCircle add kiya

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', author: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- ADMIN STATE ---
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  // --- MODAL STATE ---
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  
  // NEW: Login Error State ❌
  const [loginError, setLoginError] = useState(''); 

  // 1. Fetch Blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/blogs');
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to load blogs.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 2. Handle Login (Updated Logic)
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError(''); // Purana error hatao

    try {
      const res = await fetch('http://localhost:5000/api/verify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: inputPassword })
      });
      
      const data = await res.json();

      if (data.success) {
        setIsAdmin(true);
        setAdminPassword(inputPassword);
        setShowLoginModal(false);
        setInputPassword('');
        setLoginError(''); // Success hone par error clear
      } else {
        // ALERT HATAYA -> State set kiya
        setLoginError("Incorrect PassWord. Access Denied.");
      }
    } catch (error) {
      setLoginError("Server Error. Try again later.");
    }
  };

  // Jab modal band ho toh error bhi clear ho jaye
  const closeLoginModal = () => {
    setShowLoginModal(false);
    setLoginError('');
    setInputPassword('');
  };

  // 3. Handle Logout
  const confirmLogout = () => {
    setIsAdmin(false);
    setAdminPassword('');
    setShowLogoutModal(false);
  };

  // 4. Handle Blog Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, adminPassword })
      });
      
      if (res.ok) {
        alert("Blog Posted Successfully! 🎉");
        setFormData({ title: '', author: '', content: '' });
        fetchBlogs();
      } else {
        alert("Failed to post. Check admin status.");
      }
    } catch (error) {
      alert("Error posting blog");
    }
    setLoading(false);
  };

  return (
    <section className="bg-slate-950 py-20 px-6 min-h-screen text-white pt-24 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">Community <span className="text-cyan-400">Blogs</span></h2>
            <p className="text-slate-400">Read insights from our security experts.</p>
          </div>

          {/* Login/Logout Button Triggers */}
          <div>
            {!isAdmin ? (
              <button 
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-2 border border-slate-700 bg-slate-900 text-slate-400 px-4 py-2 rounded-lg hover:text-cyan-400 hover:border-cyan-400 transition-all text-sm group"
              >
                <Lock size={16} className="group-hover:text-cyan-400" /> Admin Login
              </button>
            ) : (
              <button 
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center gap-2 bg-red-500/10 border border-red-500 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-all text-sm"
              >
                <LogOut size={16} /> Logout
              </button>
            )}
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Write Form */}
          {isAdmin && (
            <div className="md:col-span-1 bg-slate-900 p-8 rounded-2xl border border-cyan-500/30 h-fit shadow-[0_0_20px_rgba(6,182,212,0.1)] animate-in slide-in-from-left duration-500">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                   <PenTool size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">New Post</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Title" 
                  className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-cyan-400 outline-none transition-colors"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
                <input 
                  type="text" 
                  placeholder="Author (CEO/Admin)" 
                  className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-cyan-400 outline-none transition-colors"
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  required
                />
                <textarea 
                  rows="6"
                  placeholder="Share your thoughts..." 
                  className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-cyan-400 outline-none resize-none transition-colors"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  required
                ></textarea>
                <button disabled={loading} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-3 rounded-lg font-bold flex justify-center items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all">
                  <Send size={18} /> {loading ? "Posting..." : "Publish Post"}
                </button>
              </form>
            </div>
          )}

          {/* Blogs List */}
          <div className={isAdmin ? "md:col-span-2" : "md:col-span-3"}>
            <div className="space-y-6">
              {blogs && blogs.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <p className="text-slate-500 text-lg">No blogs published yet.</p>
                </div>
              ) : (
                blogs?.map((blog) => (
                  <div key={blog._id} className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:translate-y-[-2px] group">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{blog.title}</h4>
                    <div className="flex items-center gap-3 text-sm text-cyan-400 mb-4 bg-slate-950 w-fit px-3 py-1 rounded-full border border-slate-800">
                      <User size={14} /> 
                      <span className="font-semibold uppercase tracking-wider">{blog.author}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg opacity-90">{blog.content}</p>
                    <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODALS (POPUPS) ================= */}

      {/* 1. LOGIN MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-cyan-500/50 w-full max-w-md p-8 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.2)] relative animate-in zoom-in-95 duration-200">
            
            {/* Close Icon (Ab error bhi clear karega) */}
            <button onClick={closeLoginModal} className="absolute top-4 right-4 text-slate-500 hover:text-white">
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                <ShieldCheck size={32} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Admin Access</h3>
              <p className="text-slate-400 text-sm mt-1">Enter your secret key to continue</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Input Field (Red Border Logic) */}
              <input 
                type="password" 
                placeholder="Enter Secret Key..." 
                className={`w-full bg-slate-950 p-4 rounded-xl border text-white outline-none text-center tracking-widest transition-all 
                  ${loginError 
                    ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' // Error Style
                    : 'border-slate-700 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.3)]' // Normal Style
                  }`}
                value={inputPassword}
                onChange={(e) => {
                  setInputPassword(e.target.value);
                  setLoginError(''); // Type karte hi error hata do
                }}
                autoFocus
              />

              {/* Error Message Box (Sirf Error aane par dikhega) */}
              {loginError && (
                <div className="flex items-center justify-center gap-2 text-red-400 text-sm bg-red-500/10 py-2 rounded-lg animate-in fade-in slide-in-from-top-1">
                  <AlertCircle size={16} />
                  <span>{loginError}</span>
                </div>
              )}

              <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                Unlock Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-red-500/30 w-full max-w-sm p-6 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.15)] relative animate-in zoom-in-95 duration-200 text-center">
            
            <div className="bg-red-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
              <LogOut size={28} className="text-red-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Sign Out?</h3>
            <p className="text-slate-400 text-sm mb-6">Are you sure you want to exit admin mode?</p>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={confirmLogout}
                className="flex-1 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/20 transition-all font-medium"
              >
                Yes, Logout
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Blogs;