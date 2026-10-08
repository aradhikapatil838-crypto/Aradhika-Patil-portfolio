import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft, ArrowUp } from 'lucide-react';

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

      {/* Full-width Case Study Document (Full document top to bottom, ignoring margins) */}
      <main className="w-full pt-2 pb-16">
        <img
          src="/internship-ppt-full.png"
          alt="Summer Internship Presentation Document"
          className="w-full h-auto block"
          loading="eager"
          decoding="async"
        />
      </main>
    </div>
  );
}
