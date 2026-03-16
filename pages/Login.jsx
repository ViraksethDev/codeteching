// pages/Login.jsx
import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Add your auth logic here
      console.log('Login attempt:', { email, password });
    }, 1400);
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-200 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(168,85,247,0.12),transparent_50%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-10">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2.5px]">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-950 text-2xl font-bold text-white">
                S
              </div>
            </div>
            <h2 className="mt-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              Welcome back
            </h2>
            <p className="mt-2 text-gray-400">
              Sign in to continue to YourBrand
            </p>
          </div>

          {/* Social login buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
            >
              <Chrome size={18} />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
            >
              <Github size={18} />
              GitHub
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-950 px-4 text-gray-500">or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div className="group relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pb-3 pt-6 text-white placeholder-transparent backdrop-blur-sm transition focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                placeholder="name@example.com"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-2 origin-left -translate-y-4 scale-75 transform text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-400"
              >
                Email address
              </label>
            </div>

            {/* Password field */}
            <div className="group relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pb-3 pt-6 pr-11 text-white placeholder-transparent backdrop-blur-sm transition focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                placeholder="••••••••"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute left-4 top-2 origin-left -translate-y-4 scale-75 transform text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-400"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-indigo-600 focus:ring-indigo-500/30"
                />
                <span className="text-gray-400">Remember me</span>
              </label>

              <a href="#forgot-password" className="font-medium text-indigo-400 hover:text-indigo-300 transition">
                Forgot password?
              </a>
            </div>

            {/* Submit button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] hover:shadow-indigo-500/30 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <>
                  <Link to="/dashboard">Sign in</Link>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-indigo-400 hover:text-indigo-300 transition">
              Create one now →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}