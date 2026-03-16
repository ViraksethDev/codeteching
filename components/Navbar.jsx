// components/Navbar.jsx
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'; // or use heroicons / your icon library
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-950 font-bold text-white">
                S
              </div>
            </div>
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-xl font-semibold text-transparent">
              YourBrand
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            <NavLink href="/hero">Home</NavLink>
            <NavLink href="/features">Features</NavLink>

            {/* Dropdown */}
            <div className="relative">
              <button
                className="group flex items-center gap-1.5 rounded-lg px-4 py-2 text-gray-300 transition-all hover:bg-white/5 hover:text-white"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Products
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full mt-2 w-56 origin-top-left rounded-xl border border-white/10 bg-gray-900/95 p-2 shadow-2xl backdrop-blur-lg transition-all duration-200 ${
                  isDropdownOpen
                    ? 'pointer-events-auto scale-100 opacity-100'
                    : 'pointer-events-none scale-95 opacity-0'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {['Analytics', 'CRM', 'Marketing', 'Support', 'Automation'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block rounded-lg px-4 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>

                {!user ? (
                <div className="flex flex-col gap-3">
                  <Link to="/login">
                    <button  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white">
                      Log in
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02]">
                    Dashboard
                  </button>
                </div>
              )}

            {/* CTA Buttons */}
            {/* <div className="ml-4 flex items-center gap-3">
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white">
                Log in
              </button>
              <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.03] hover:shadow-indigo-500/30 active:scale-100">
                Get Started
              </button>
            </div> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-lg p-2 text-gray-400 hover:bg-white/5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-xl transition-all duration-300 ease-in-out`}
      >
        <div className="space-y-1 px-4 pb-6 pt-3">
          <MobileNavLink href="#home">Home</MobileNavLink>
          <MobileNavLink href="#features">Features</MobileNavLink>
          <MobileNavLink href="#pricing">Pricing</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>

          <div className="my-4 h-px bg-white/5" />

          {!user ? (
            <div className="flex flex-col gap-3">
              <button className="w-full rounded-lg border border-white/10 py-3 text-center text-white transition hover:bg-white/5">
                Log in
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02]">
                Dashboard
              </button>
            </div>
          )}

          {/* <div className="flex flex-col gap-3 pt-2">
            <button className="w-full rounded-lg border border-white/10 py-3 text-center text-white transition hover:bg-white/5">
              Log in
            </button>
            <button className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02]">
              Get Started →
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

// Reusable components
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="block rounded-lg px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}