import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// 3 Organic SVG Petal Variations matching the hero artwork flower palette
const PetalSVG1 = ({ fill = '#F7B5C8', stroke = '#E690A8' }) => (
  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
    <path
      d="M12 2C8 2 4 6 4 12C4 17 8 22 13 22C18 22 21 16 20 10C19 5 15 2 12 2Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <path d="M12 4C11.5 8 11.5 14 13 18" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.45" fill="none" />
  </svg>
);

const PetalSVG2 = ({ fill = '#F4A6BC', stroke = '#DF7E99' }) => (
  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
    <path
      d="M11 2C6 3 3 8 3 13C3 18 7 21 12 21C17 21 21 17 21 11C21 6 16 1 11 2Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="0.5"
    />
    <path d="M11 3C11 8 11 13 12 18" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.45" fill="none" />
  </svg>
);

const PetalSVG3 = ({ fill = '#FAC0CF', stroke = '#EA97AE' }) => (
  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
    <path
      d="M12 2C9 3 5 7 5 12C5 16 8 20 13 20C17 20 20 16 20 11C20 6 16 1 12 2Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="0.5"
    />
    <path d="M12 4C11.5 8 12 13 13 17" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.45" fill="none" />
  </svg>
);

const PETALS = [
  {
    id: 1,
    size: 15,
    left: '-4%',
    top: '-6%',
    duration: '11s',
    delay: '0s',
    blur: '0px',
    opacity: 0.85,
    animation: 'petalDrift1',
    Shape: PetalSVG1,
  },
  {
    id: 2,
    size: 10,
    left: '12%',
    top: '-10%',
    duration: '13.5s',
    delay: '2.5s',
    blur: '0.8px',
    opacity: 0.7,
    animation: 'petalDrift2',
    Shape: PetalSVG2,
  },
  {
    id: 3,
    size: 18,
    left: '-8%',
    top: '15%',
    duration: '9.5s',
    delay: '4.8s',
    blur: '0px',
    opacity: 0.9,
    animation: 'petalDrift3',
    Shape: PetalSVG3,
  },
  {
    id: 4,
    size: 9,
    left: '26%',
    top: '-8%',
    duration: '12s',
    delay: '1.2s',
    blur: '1.2px',
    opacity: 0.6,
    animation: 'petalDrift1',
    Shape: PetalSVG2,
  },
  {
    id: 5,
    size: 16,
    left: '-6%',
    top: '30%',
    duration: '10.5s',
    delay: '6.2s',
    blur: '0.4px',
    opacity: 0.8,
    animation: 'petalDrift2',
    Shape: PetalSVG1,
  },
  {
    id: 6,
    size: 12,
    left: '6%',
    top: '-4%',
    duration: '14s',
    delay: '8s',
    blur: '0px',
    opacity: 0.75,
    animation: 'petalDrift3',
    Shape: PetalSVG3,
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

      {/* Gentle Floating Pink Petals Animation Layer */}
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
                width: `${petal.size}px`,
                height: `${petal.size * 1.15}px`,
                left: petal.left,
                top: petal.top,
                filter: petal.blur !== '0px' ? `blur(${petal.blur})` : 'none',
                opacity: petal.opacity,
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




