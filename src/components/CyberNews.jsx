import React, { useState, useEffect } from 'react';
import { Zap, ChevronRight, Clock, X, CheckCircle, AlertCircle, PlusCircle, Newspaper } from 'lucide-react';

const CyberNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: '', summary: '', fullDetails: '', type: 'News', imageUrl: ''
  });

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const showNotification = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  // FETCH ONLY APPROVED NEWS
  const fetchNews = async () => {
    try {
      const res = await fetch('https://cyber-sudarshan-backend-1.onrender.com/api/news');
      const data = await res.json();
      setNewsList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load news.");
    }
  };

  useEffect(() => { fetchNews(); }, []);

  // PUBLIC SUBMIT NEWS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://cyber-sudarshan-backend-1.onrender.com/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        showNotification("News submitted for verification! ✅", "success");
        setFormData({ title: '', summary: '', fullDetails: '', type: 'News', imageUrl: '' });
        setShowSubmitForm(false);
      } else { 
        showNotification("Action failed.", "error"); 
      }
    } catch (error) { 
      showNotification("Network Error!", "error"); 
    }
    setLoading(false);
  };

  const scrollingNews = newsList.length > 0 ? [...newsList, ...newsList, ...newsList] : [];

  return (
    <>
      {/* ======================================= */}
      {/* 🔔 TOAST NOTIFICATION (Moved Outside)   */}
      {/* ======================================= */}
      {toast.show && (
        <div className={`fixed top-24 right-6 z-[99999] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-right-8 duration-300 border backdrop-blur-md ${toast.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-red-500/10 border-red-500/50 text-red-400'}`}>
          {toast.type === 'success' ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
          <span className="font-bold tracking-wide">{toast.message}</span>
        </div>
      )}

      {/* ======================================= */}
      {/* MAIN SECTION                            */}
      {/* ======================================= */}
      <section className="py-16 bg-slate-950 relative overflow-hidden border-y border-slate-800/50 z-10">
        <style>
          {`
            @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 40s linear infinite; display: flex; width: max-content; }
            .animate-marquee:hover { animation-play-state: paused; }
          `}
        </style>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100px] bg-yellow-500/5 blur-[100px] pointer-events-none"></div>

        <div className="max-w-[100vw] mx-auto relative z-10 px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-10" data-aos="fade-down">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Zap className="text-yellow-500 animate-pulse" size={32} />
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Live <span className="text-yellow-500">Cyber News</span>
                </h2>
                <p className="text-slate-400 text-sm mt-1">Real-time alerts & updates.</p>
              </div>
            </div>

            <button 
              onClick={() => setShowSubmitForm(true)} 
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 font-bold px-4 py-2 rounded-lg hover:scale-105 transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] cursor-pointer"
            >
              <PlusCircle size={18} /> Share a News Tip
            </button>
          </div>

          {/* SLIDER CONTAINER */}
          {newsList.length === 0 ? (
            <div className="text-center py-10 text-slate-500 border border-slate-800 rounded-xl bg-slate-900/50">No recent cyber news at the moment.</div>
          ) : (
            <div className="overflow-hidden w-full relative">
              <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

              <div className="animate-marquee gap-6 px-3">
                {scrollingNews.map((news, index) => (
                  <div key={index} className="w-[320px] md:w-[400px] bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group shadow-lg flex flex-col overflow-hidden relative">
                    {news.imageUrl && (
                      <div className="h-40 w-full overflow-hidden">
                        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow cursor-pointer" onClick={() => setSelectedNews(news)}>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${news.type.includes('Alert') || news.type.includes('Urgent') ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30'}`}>
                          {news.type}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs font-medium mt-1">
                          <Clock size={12} /> {new Date(news.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-snug line-clamp-2">{news.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{news.summary}</p>
                      <div className="flex items-center gap-2 text-yellow-500 text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform mt-auto">Read Details <ChevronRight size={16} /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ======================================= */}
      {/* 📝 SUBMIT FORM MODAL (Moved Outside)    */}
      {/* ======================================= */}
      {showSubmitForm && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-yellow-500/50 w-full max-w-4xl p-8 md:p-10 rounded-2xl shadow-[0_0_40px_rgba(234,179,8,0.2)] relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <button onClick={() => setShowSubmitForm(false)} className="absolute top-4 right-4 bg-slate-800 text-slate-400 hover:text-white p-2 rounded-full transition-colors z-50 cursor-pointer"><X size={20} /></button>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><Newspaper className="text-yellow-500"/> Report a Cyber Incident</h3>
            <p className="text-slate-400 text-sm mb-6 pb-4 border-b border-slate-800">Your submission will be reviewed by our team before going live.</p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="News Title" required className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-yellow-500 outline-none" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
              <select className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-yellow-500 outline-none" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                <option value="News">General News</option>
                <option value="Critical Alert">Critical Alert</option>
                <option value="Scam Alert">Scam Alert</option>
                <option value="Urgent Update">Urgent Update</option>
              </select>
              <input type="url" placeholder="Image URL (Link to any relevant image)" className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-yellow-500 outline-none md:col-span-2" value={formData.imageUrl} onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} />
              <textarea rows="2" placeholder="Short Summary (visible on slider)..." required className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-yellow-500 outline-none md:col-span-2 resize-y" value={formData.summary} onChange={(e) => setFormData({...formData, summary: e.target.value})}></textarea>
              <textarea rows="6" placeholder="Full Details..." required className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-yellow-500 outline-none md:col-span-2 resize-y" value={formData.fullDetails} onChange={(e) => setFormData({...formData, fullDetails: e.target.value})}></textarea>
              <button disabled={loading} className="md:col-span-2 w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-900 font-extrabold py-3 mt-4 rounded-lg transition-all shadow-lg cursor-pointer">
                {loading ? "Submitting..." : "Submit for Verification"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ======================================= */}
      {/* 📖 DETAIL MODAL (Moved Outside)         */}
      {/* ======================================= */}
      {selectedNews && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-2xl shadow-[0_0_50px_rgba(234,179,8,0.15)] overflow-y-auto max-h-[90vh] relative animate-in zoom-in-95 duration-200 [&::-webkit-scrollbar]:hidden">
            <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-slate-400 hover:text-white p-2 rounded-full transition-colors z-50 cursor-pointer border border-slate-700"><X size={20} /></button>
            {selectedNews.imageUrl && (
              <div className="w-full h-64 md:h-80 overflow-hidden relative">
                <img src={selectedNews.imageUrl} alt={selectedNews.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
            )}
            <div className={`p-8 md:p-10 ${selectedNews.imageUrl ? '-mt-16 relative z-10' : ''}`}>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${selectedNews.type.includes('Alert') || selectedNews.type.includes('Urgent') ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30'}`}>{selectedNews.type}</span>
                <span className="flex items-center gap-1.5 text-slate-400 text-sm font-medium"><Clock size={14} /> Published on {new Date(selectedNews.date).toLocaleDateString()}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight pr-6">{selectedNews.title}</h3>
              <hr className="border-slate-800 mb-6" />
              <div className="prose prose-invert max-w-none"><p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">{selectedNews.fullDetails}</p></div>
              <div className="mt-10 pt-6 border-t border-slate-800 flex justify-end">
                <button onClick={() => setSelectedNews(null)} className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-extrabold px-8 py-3 rounded-xl transition-all cursor-pointer">Close News</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CyberNews; 