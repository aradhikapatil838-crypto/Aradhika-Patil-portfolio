import Header from '../components/Header';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-[#FAF6F0] relative overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-10">
      {/* Background Watercolor Artwork */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/contact-bg-art.png"
          alt="Contact Section Botanical Background"
          className="w-full h-full object-cover object-center opacity-85"
        />
      </div>

      <Header />

      {/* Main Content Area */}
      <main className="max-w-4xl w-full mx-auto px-6 sm:px-10 relative z-10 text-center my-auto pt-6 pb-8 space-y-6 sm:space-y-8">

        {/* 1. Header Title & Subtitle */}
        <div className="space-y-3 sm:space-y-4">
          <span className="font-serif-editorial text-xs sm:text-sm tracking-[0.25em] text-[#6B5A4B] uppercase italic block font-light">
            LET'S
          </span>

          <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-normal text-[#1B1917] tracking-tight flex items-center justify-center gap-2 sm:gap-3">
            <span>Talk</span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2623] select-none">✧</span>
          </h1>

          <p className="font-serif-editorial text-lg sm:text-xl md:text-[22px] italic text-[#4A4238] font-normal leading-relaxed max-w-lg sm:max-w-xl mx-auto pt-1">
            Have a project in mind, a question, or just want to say hi?
            <br className="hidden sm:inline" /> I'd love to hear from you.
          </p>

          {/* Small Organic Wave Flourish Divider */}
          <div className="pt-2 flex justify-center">
            <svg viewBox="0 0 120 16" className="w-28 sm:w-32 h-4 text-[#C4B29E]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 6,8 C 30,2 54,14 78,8 C 90,5 102,11 114,8" />
            </svg>
          </div>
        </div>

        {/* 2. Torn-Paper Email Card CTA */}
        <div className="max-w-2xl mx-auto w-full pt-2">
          <a
            href="mailto:aradhikapatil06@gmail.com"
            className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8 w-full bg-[#FAF7F2] rounded-2xl border border-[#E8E0D2] shadow-[0_10px_35px_rgba(60,50,40,0.06)] hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.995] transition-all duration-300 ease-out cursor-pointer p-7 sm:p-9 md:p-10 text-left overflow-visible"
          >
            {/* Top-Left Peach Washi Tape Accent */}
            <div className="absolute -top-3 left-6 sm:left-8 w-12 sm:w-14 h-6 bg-[#E8C4B8]/85 backdrop-blur-xs border border-[#D8AB9C]/40 shadow-xs transform -rotate-6 rounded-xs pointer-events-none" />

            <div className="flex items-center gap-5 sm:gap-7 w-full sm:w-auto">
              {/* Hand-Drawn Style Envelope Icon */}
              <div className="w-12 h-10 sm:w-14 sm:h-11 shrink-0 flex items-center justify-center text-[#2C2623]">
                <svg viewBox="0 0 52 38" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="48" height="34" rx="4" />
                  <path d="M 2 4 L 26 24 L 50 4" />
                  <path d="M 2 36 L 18 20" />
                  <path d="M 50 36 L 34 20" />
                </svg>
              </div>

              {/* Text Information */}
              <div className="space-y-1">
                <span className="label-editorial text-[10px] sm:text-[11px] tracking-[0.22em] text-[#7A6B5D] block uppercase font-medium">
                  SEND ME AN EMAIL
                </span>
                <span className="font-serif-editorial text-xl sm:text-2xl md:text-[28px] font-normal text-[#1B1917] group-hover:text-[#4A3E33] transition-colors duration-200 block break-all sm:break-normal">
                  aradhikapatil06@gmail.com
                </span>
              </div>
            </div>

            {/* Circular Nude Arrow Button */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EFE9DD] border border-[#DDD5C5] text-[#2C2623] flex items-center justify-center shrink-0 group-hover:bg-[#E5DDD0] transition-colors duration-200 self-end sm:self-center">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>
        </div>

        {/* 3. Below Card Details */}
        <div className="space-y-3 pt-2">
          {/* Vertical Line Segment */}
          <div className="w-[1px] h-6 bg-[#CFC4B2] mx-auto opacity-70" />

          {/* Reply Time */}
          <p className="label-editorial text-[10px] sm:text-[11px] tracking-[0.24em] text-[#7A6B5D] uppercase font-medium">
            I USUALLY REPLY WITHIN 1–2 DAYS.
          </p>

          {/* Small Organic 3-Leaf Stem Icon */}
          <div className="pt-2 pb-1 flex justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#7A8A6D]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V10" />
              <path d="M12 14C8 12 5 8 7 4C11 5 12 9 12 14Z" fill="#8C9B7E" fillOpacity="0.3" />
              <path d="M12 10C16 8 19 4 17 0C13 1 12 5 12 10Z" fill="#8C9B7E" fillOpacity="0.3" />
              <path d="M12 18C15 17 17 14 16 11C13 12 12 15 12 18Z" fill="#8C9B7E" fillOpacity="0.25" />
            </svg>
          </div>

          {/* Cursive Handwritten Sign-off */}
          <p className="font-serif-editorial italic text-2xl sm:text-3xl text-[#2C2623] font-normal tracking-wide">
            Looking forward to connecting! ♡
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto text-center relative z-10 pt-4">
        <p className="label-editorial text-[10px] sm:text-xs text-[#7A6B5D]/60 tracking-[0.16em]">
          © {new Date().getFullYear()} ARADHIKA PATIL · ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}


