import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#7EAEC3] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center pt-24 sm:pt-28 pb-10 sm:pb-14">
      {/* Full Artwork Image filling the entire Hero background */}
      <img
        src="/port-figma-svg.jpg?v=6"
        alt="Aradhika Patil Hero Artwork"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Overlaid Content Area */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-left pt-2 sm:pt-6">

          {/* Greeting Header */}
          <p className="font-serif-editorial text-xl sm:text-2xl md:text-3xl italic text-[#1B4054] mb-2 font-normal">
            Hi, I am
          </p>

          {/* 1. Large Aradhika Patil Display Name Heading (Cormorant Garamond Serif) */}
          <h1 className="heading-editorial-h1 text-[#0C2B3A] mb-4 sm:mb-6">
            Aradhika Patil
          </h1>

          {/* 3. Subtitle / Bio Paragraph */}
          <p className="font-sans-body text-base sm:text-lg lg:text-xl text-[#164359] font-normal leading-[1.7] max-w-md sm:max-w-xl mb-8 sm:mb-10">
            A UX Designer living at the intersection of psychology and design.
            My favorite pastime? Overthinking why do people behave the way they do.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/work"
              className="bg-[#0C2B3A] text-white hover:bg-[#164359] font-sans-body font-medium px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2 group shadow-sm"
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="bg-transparent border border-[#0C2B3A]/40 text-[#0C2B3A] hover:bg-[#0C2B3A]/10 font-sans-body font-medium px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer inline-flex items-center"
            >
              About me
            </Link>
          </div>

        </div>
      </div>

      {/* Single Smooth Animated Cream Wave at Bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none h-9 sm:h-12 lg:h-14">
        <svg
          className="relative block w-[200%] h-full animate-hero-wave"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0,40 C 300,85 600,5 900,60 C 1050,85 1200,40 1200,40 C 1500,85 1800,5 2100,60 C 2250,85 2400,40 2400,40 L 2400,120 L 0,120 Z"
            fill="#FCF5EF"
          />
        </svg>
      </div>
    </section>
  );
}



