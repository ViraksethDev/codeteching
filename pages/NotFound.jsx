// pages/NotFound.jsx  (or 404.jsx)
import { useNavigate } from 'react-router-dom'; // or next/navigation if using Next.js
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-200 overflow-hidden flex items-center justify-center px-4">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(168,85,247,0.10),transparent_60%)]" />

      <div className="relative z-10 max-w-2xl text-center space-y-10">
        {/* 404 Number with gradient */}
        <div className="relative">
          <h1 className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-black leading-none tracking-tighter bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 bg-clip-text text-transparent opacity-80 select-none">
            404
          </h1>
          
          {/* Floating orb / accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse-slow pointer-events-none" />
        </div>

        {/* Main message */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Page Not Found
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto">
            Oops! It looks like this page has wandered off into the digital void. 
            The page you're looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25 hover:shadow-xl active:scale-[0.98]"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.03] hover:shadow-indigo-500/35 active:scale-100"
          >
            <Home size={18} />
            Back to Home
          </button>
        </div>

        {/* Search suggestion */}
        <div className="pt-8">
          <p className="text-gray-500 mb-4">Or try searching for what you need:</p>
          
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 pl-11 text-white placeholder-gray-500 backdrop-blur-sm focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Fun easter egg / subtle animation */}
        <div className="pt-12 text-sm text-gray-600 opacity-70">
          <p className="animate-pulse-slow">Error code: 404 — Reality not found in this dimension 🌌</p>
        </div>
      </div>
    </div>
  );
}