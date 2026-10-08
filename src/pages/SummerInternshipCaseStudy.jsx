import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft, ArrowUp, Download, ExternalLink, Sparkles, Layers, Layout, Video, UserCheck } from 'lucide-react';

export default function SummerInternshipCaseStudy() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0C2B3A] selection:bg-[#7EAEC3]/30">
      <Header />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 p-3.5 bg-[#0C2B3A] text-white rounded-full shadow-lg hover:bg-[#164359] hover:-translate-y-1 transition-all duration-300 cursor-pointer hidden sm:flex items-center justify-center border border-white/20"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Back button on top */}
      <div className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[#0C2B3A] hover:text-[#7EAEC3] font-medium transition-colors py-3"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* Hero Header & Summary */}
      <header className="max-w-7xl mx-auto px-6 sm:px-12 pt-4 pb-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200/80 pb-6">
          <div>
            <span className="label-editorial text-xs sm:text-sm tracking-widest text-[#164359]/70 uppercase block mb-1">
              Summer Internship 2026 · Tierce India
            </span>
            <h1 className="heading-editorial-project text-3xl sm:text-4xl lg:text-5xl text-[#0C2B3A]">
              Designing AI Products for Businesses
            </h1>
          </div>

          {/* Action Buttons for PDF */}
          <div className="flex items-center gap-3">
            <a
              href="/Internship ppt.pdf"
              download="Aradhika_Patil_Internship_PPT.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C2B3A] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#164359] transition-all duration-200 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PPT (PDF)</span>
            </a>
            <a
              href="/Internship ppt.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-200/70 text-[#0C2B3A] text-xs sm:text-sm font-medium rounded-full hover:bg-stone-300/80 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open PDF</span>
            </a>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          <div className="bg-white/80 border border-stone-200/70 p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[#164359] font-medium text-xs uppercase tracking-wider">
              <UserCheck className="w-4 h-4" /> Role & Duration
            </div>
            <p className="text-sm font-semibold text-[#0C2B3A]">UI/UX Design Intern</p>
            <p className="text-xs text-stone-500">May – July 2026</p>
          </div>

          <div className="bg-white/80 border border-stone-200/70 p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[#164359] font-medium text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4" /> Design System
            </div>
            <p className="text-sm font-semibold text-[#0C2B3A]">60+ Scalable Components</p>
            <p className="text-xs text-stone-500">B2B Design Foundations</p>
          </div>

          <div className="bg-white/80 border border-stone-200/70 p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[#164359] font-medium text-xs uppercase tracking-wider">
              <Layout className="w-4 h-4" /> Platform Screens
            </div>
            <p className="text-sm font-semibold text-[#0C2B3A]">80+ Screens & UI States</p>
            <p className="text-xs text-stone-500">AI Calling & WhatsApp Auto</p>
          </div>

          <div className="bg-white/80 border border-stone-200/70 p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[#164359] font-medium text-xs uppercase tracking-wider">
              <Video className="w-4 h-4" /> Media & Storytelling
            </div>
            <p className="text-sm font-semibold text-[#0C2B3A]">3 Landing Pages & Motion</p>
            <p className="text-xs text-stone-500">Explainer Videos & Mascot</p>
          </div>
        </div>
      </header>

      {/* Main Full-width Case Study Document */}
      <main className="w-full pt-2 pb-16 space-y-8">
        {/* Rendered Full Slide Image */}
        <div className="w-full bg-[#FAF8F5]">
          <img
            src="/internship-ppt-full.png"
            alt="Summer Internship Presentation Slide"
            className="w-full h-auto block max-w-7xl mx-auto shadow-sm border border-stone-200/50 rounded-lg"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Interactive PDF Viewer Embed */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#0C2B3A] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#164359]" />
              Interactive PDF Document View
            </h3>
            <a
              href="/Internship ppt.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#164359] underline hover:text-[#0C2B3A]"
            >
              Open in full screen
            </a>
          </div>
          <div className="w-full h-[650px] bg-stone-100 rounded-xl overflow-hidden border border-stone-300/80 shadow-inner">
            <iframe
              src="/Internship ppt.pdf#toolbar=1&navpanes=0&scrollbar=1"
              title="Internship Presentation PDF"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
