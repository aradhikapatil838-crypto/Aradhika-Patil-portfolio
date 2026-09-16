import { Link } from 'react-router-dom';
import Nav from './Nav';
import { ArrowUpRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-30 pt-6 sm:pt-8 pb-4 px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link
          to="/"
          aria-label="Home"
          className="flex items-center hover:opacity-85 transition-opacity"
        >
          <img
            src="/my logo design3.png"
            alt="Logo"
            className="h-11 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <Nav />

        {/* Right Side: Let's talk button */}
        <Link
          to="/contact"
          className="bg-white text-[#0C2B3A] hover:bg-white/95 font-serif-editorial font-normal px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-base sm:text-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
        >
          <span>Let's talk</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}

