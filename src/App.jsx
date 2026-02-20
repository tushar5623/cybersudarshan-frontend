import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import ParticleBackground from './components/ParticleBackground'; 

function App() {
  return (
    // Relative position zaroori hai layering ke liye
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">
      
      {/* 1. BACKGROUND (Sabse peeche fix kar diya) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* 2. CONTENT (Isse z-index 10 diya taaki ye upar rahe) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}

export default App;