import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Hand-illustrated pink teardrop petals matching the homepage artwork
// Each SVG includes a solid offset shadow underneath to match the illustration style
const IllustratedPetal1 = () => (
  <svg viewBox="0 0 28 32" className="w-full h-full overflow-visible">
    {/* Solid Illustrated Offset Shadow */}
    <path
      d="M 14 2 C 8 4 3 10 4 18 C 5 25 11 29 18 28 C 24 26 27 18 24 10 C 22 5 18 1 14 2 Z"
      fill="#102D3B"
      fillOpacity="0.32"
      transform="translate(1.8, 2.2)"
    />
    {/* Main Petal Fill */}
    <path
      d="M 14 2 C 8 4 3 10 4 18 C 5 25 11 29 18 28 C 24 26 27 18 24 10 C 22 5 18 1 14 2 Z"
      fill="#F8A7C4"
      stroke="#DE7296"
      strokeWidth="0.8"
    />
    {/* Inner Petal Shading Detail */}
    <path
      d="M 14 4 C 11.5 10 12.5 18 16.5 24"
      stroke="#CF537C"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const IllustratedPetal2 = () => (
  <svg viewBox="0 0 28 32" className="w-full h-full overflow-visible">
    {/* Solid Offset Shadow */}
    <path
      d="M 13 2 C 7 3 2 8 3 16 C 4 24 10 28 17 27 C 23 25 26 17 25 9 C 23 4 17 1 13 2 Z"
      fill="#102D3B"
      fillOpacity="0.32"
      transform="translate(1.8, 2.2)"
    />
    {/* Main Petal */}
    <path
      d="M 13 2 C 7 3 2 8 3 16 C 4 24 10 28 17 27 C 23 25 26 17 25 9 C 23 4 17 1 13 2 Z"
      fill="#F6A0BE"
      stroke="#D7678C"
      strokeWidth="0.8"
    />
    {/* Inner Fold Line */}
    <path
      d="M 13 4.5 C 11 10.5 13 18.5 16 23.5"
      stroke="#C84872"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const IllustratedPetal3 = () => (
  <svg viewBox="0 0 28 32" className="w-full h-full overflow-visible">
    {/* Solid Offset Shadow */}
    <path
      d="M 14 2.5 C 8.5 3.5 4 9 4.5 17 C 5 24 10.5 28 17.5 27 C 23.5 25.5 26 18 24.5 10.5 C 23 5 18.5 2 14 2.5 Z"
      fill="#102D3B"
      fillOpacity="0.32"
      transform="translate(1.8, 2.2)"
    />
    {/* Main Petal */}
    <path
      d="M 14 2.5 C 8.5 3.5 4 9 4.5 17 C 5 24 10.5 28 17.5 27 C 23.5 25.5 26 18 24.5 10.5 C 23 5 18.5 2 14 2.5 Z"
      fill="#FAAEC8"
      stroke="#E27A9E"
      strokeWidth="0.8"
    />
    {/* Inner Detail Line */}
    <path
      d="M 14 5 C 12 11 13.5 18.5 17 23.5"
      stroke="#D25881"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// 5 Minimal Petals starting from top-left regions, drifting diagonally (slanting) across the hero
const PETALS = [
  {
    id: 1,
    width: 24,
    height: 27,
    left: '-4%',
    top: '-6%',
    duration: '11s',
    delay: '0s',
    animation: 'petalDrift1',
    Shape: IllustratedPetal1,
  },
  {
    id: 2,
    width: 20,
    height: 23,
    left: '12%',
    top: '-10%',
    duration: '13.5s',
    delay: '2.5s',
    animation: 'petalDrift2',
    Shape: IllustratedPetal2,
  },
  {
    id: 3,
    width: 26,
    height: 29,
    left: '-8%',
    top: '15%',
    duration: '9.5s',
    delay: '4.8s',
    animation: 'petalDrift3',
    Shape: IllustratedPetal3,
  },
  {
    id: 4,
    width: 22,
    height: 25,
    left: '26%',
    top: '-8%',
    duration: '12s',
    delay: '1.2s',
    animation: 'petalDrift1',
    Shape: IllustratedPetal2,
  },
  {
    id: 5,
    width: 25,
    height: 28,
    left: '-6%',
    top: '30%',
    duration: '10.5s',
    delay: '6.2s',
    animation: 'petalDrift2',
    Shape: IllustratedPetal1,
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#7EAEC3] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center pt-24 sm:pt-28 pb-10 sm:pb-14">
      {/* Full Artwork Image filling the entire Hero background */}
      <img
        src="/port-figma-svg.jpg?v=6"
        alt="Aradhika Patil Hero Artwork"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Gentle Floating Pink Petals Layer */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[5]"
        aria-hidden="true"
      >
        {PETALS.map((petal) => {
          const ShapeComponent = petal.Shape;
          return (
            <div
              key={petal.id}
              className="hero-petal absolute pointer-events-none will-change-transform"
              style={{
                width: `${petal.width}px`,
                height: `${petal.height}px`,
                left: petal.left,
                top: petal.top,
                animation: `${petal.animation} ${petal.duration} cubic-bezier(0.37, 0, 0.63, 1) infinite`,
                animationDelay: petal.delay,
              }}
            >
              <ShapeComponent />
            </div>
          );
        })}
      </div>

      {/* Overlaid Content Area */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-left pt-2 sm:pt-6">

          {/* Greeting Header */}
          <p className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl italic text-[#1B4054] mb-2 font-normal">
            Hi, I am
          </p>

          {/* 1. Large Aradhika Patil Display Name Graphic */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <img
              src="/My name is ara patil.png"
              alt="Aradhika Patil"
              className="w-full max-w-[300px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] h-auto object-contain pointer-events-none select-none drop-shadow-sm -ml-1 sm:-ml-2"
            />
          </div>

          {/* 3. Subtitle / Bio Info Paragraph */}
          <p className="font-serif-editorial text-xl sm:text-2xl lg:text-[26px] text-[#164359] font-normal leading-[1.6] max-w-md sm:max-w-2xl mb-8 sm:mb-10">
            A <strong className="font-semibold text-[#0C2B3A]">UX Designer</strong> living at the <strong className="font-semibold text-[#0C2B3A]">intersection of psychology and design</strong>.
            My favorite pastime? Overthinking why do people behave the way they do.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/work"
              className="bg-[#0C2B3A] text-white hover:bg-[#164359] font-serif-editorial font-normal px-7 py-3 rounded-full text-base sm:text-lg tracking-wide transition-all duration-200 cursor-pointer inline-flex items-center gap-2 group shadow-sm"
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="bg-transparent border border-[#0C2B3A]/40 text-[#0C2B3A] hover:bg-[#0C2B3A]/10 font-serif-editorial font-normal px-7 py-3 rounded-full text-base sm:text-lg tracking-wide transition-all duration-200 cursor-pointer inline-flex items-center"
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




