import { useEffect, useState } from 'react';

import Header from '../components/Header';
import ElderlyOpening from './ElderlyOpening';
import { ArrowUp } from 'lucide-react';

export default function ElderlyMedicationCaseStudy() {
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

      {/* Main Case Study Container */}
      <main className="w-[90%] max-w-[1440px] mx-auto pt-20 sm:pt-24 pb-16 sm:pb-24 space-y-16 sm:space-y-24 lg:space-y-32">

        <ElderlyOpening />

        <section id="high-fidelity-screens" aria-labelledby="high-fidelity-title" className="elder-opening space-y-10 sm:space-y-14">
          <h2 id="high-fidelity-title" className="text-[#0C2B3A]">High-fidelity screens</h2>
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-[#0C2B3A]">Onboarding</h3>
            <img src="/work/elderly/onboarding.png" alt="High-fidelity onboarding screens for the elderly app and family caregiver, including setup and account linking" width="3323" height="2077" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          </div>
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-10">
            <h3 className="text-[#0C2B3A]">Home screen</h3>
            <img src="/work/elderly/home-screen.png" alt="High-fidelity home screens showing the elderly medicine reminders and family caregiver day and month views" width="3323" height="2077" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          </div>
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-10">
            <h3 className="text-[#0C2B3A]">Adding a medicine — Elderly app</h3>
            <img src="/work/elderly/add-medicine-elderly.png" alt="Elderly app medicine setup with voice input, routine-based timing and confirmation" width="3323" height="2077" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          </div>
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-10">
            <h3 className="text-[#0C2B3A]">Adding a medicine — Family caregiver app</h3>
            <img src="/work/elderly/add-medicine-family.png" alt="Family caregiver medicine setup with visual identification, routine selection and reminder scheduling" width="3323" height="2077" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          </div>
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-10">
            <h3 className="text-[#0C2B3A]">Managing medicines</h3>
            <img src="/work/elderly/medicine-management.png" alt="Family caregiver medicine list, inactive medicines and low-stock notification" width="3323" height="2077" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          </div>
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-10">
            <h3 className="text-[#0C2B3A]">Routine-based medicine reminders</h3>
            <img src="/work/elderly/medicine-reminders.png" alt="Before and redesigned medicine reminders with routine checks, visual medicine identification and next-dose timing" width="3323" height="2077" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          </div>
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-10">
            <h3 className="text-[#0C2B3A]">Booking a caregiver</h3>
            <img src="/work/elderly/book-caregiver.png" alt="Caregiver booking flow with time selection, available caregivers, profile details and call confirmation" width="3323" height="2077" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          </div>
        </section>

        <section id="medicine-pill-box" aria-labelledby="pill-box-title" className="elder-opening space-y-8 sm:space-y-10">
          <h2 id="pill-box-title" className="text-[#0C2B3A]">Medicine pill box</h2>
          <img src="/work/elderly/medicine-pill-box.png" alt="Medicine pill box concept" width="1536" height="1024" loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl sm:rounded-3xl" />
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            <div className="space-y-3">
              <h3>Pain Point:</h3>
              <p>Users find it tedious to manually sort multiple medicines into day- and time-based compartments a repetitive task they have to redo every week.</p>
            </div>
            <div className="space-y-3">
              <h3>Solution:</h3>
              <p>Keep medicines in their <strong>original state</strong>. When it’s time to take one, the <strong>corresponding section glows and the alarm rings</strong>, guiding the user to the right medicine.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}




