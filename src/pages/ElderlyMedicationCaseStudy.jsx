import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft, ArrowUp, CheckCircle, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';

// ============================================================================
// IMAGE SYSTEM MAP
// ============================================================================
// Main temporary placeholder image for elderly medication project assets
const elderlyPlaceholder = '/elderly frame.png';

const caseStudyImages = {
  // Replace later with final Hero illustration
  hero: elderlyPlaceholder,

  // Replace later with final Project Context illustration
  context: elderlyPlaceholder,

  // Replace later with final Research interview imagery
  research: elderlyPlaceholder,

  // Replace later with final Key Insight visual
  insight: elderlyPlaceholder,

  // Replace later with final Problem Statement illustration
  problem: elderlyPlaceholder,

  // Replace later with final solution mockup
  solution: elderlyPlaceholder,

  // Replace later with adding medicine setup screens
  addMedicine: elderlyPlaceholder,

  // Replace later with medicine-detail UI
  medicineDetail: elderlyPlaceholder,

  // Replace later with two-screen medication reminder mockup
  reminderExperience: elderlyPlaceholder,

  // Replace later with routine visualization
  routine: elderlyPlaceholder,

  // Replace later with pre-meal reminder UI screens
  preMeal: elderlyPlaceholder,

  // Replace later with caregiver dashboard UI
  caregiver: elderlyPlaceholder,

  // Replace later with wireframes and design iterations
  iterations: elderlyPlaceholder,

  // Replace later with multi-device final gallery
  finalExperience: elderlyPlaceholder,
};

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
      <main className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 pb-24 sm:pb-32 space-y-24 sm:space-y-36 lg:space-y-44">

        {/* ====================================================================
            1. PROJECT HERO
        ==================================================================== */}
        <section className="space-y-10 sm:space-y-14">
          {/* Back Navigation Link */}
          <div>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#164359]/80 hover:text-[#0C2B3A] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Hero Title & Description */}
          <div className="space-y-6 sm:space-y-8 max-w-5xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold text-[#0C2B3A] tracking-tight leading-[1.08]">
              Managing Poly-Medication <br className="hidden sm:inline" />
              for Elderly Care
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#164359]/85 font-normal leading-relaxed max-w-3xl">
              A wellness app helping elderly users and caregivers manage multiple medications with ease — blending behavioral research with intuitive, trust-building design.
            </p>
          </div>

          {/* Editorial Metadata Grid (No heavy cards) */}
          <div className="pt-8 sm:pt-12 border-t border-stone-300/60 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="space-y-2">
              <p className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">MY ROLE</p>
              <p className="text-sm sm:text-base text-[#0C2B3A] font-medium leading-relaxed">
                UX Research, User Interviews, Behavioural Research, Interaction Design, Information Architecture, Wireframing, Visual Design, Prototyping
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">PROJECT TYPE</p>
              <p className="text-sm sm:text-base text-[#0C2B3A] font-medium leading-relaxed">
                UX Research · Interaction Design · Accessibility
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">FOCUS</p>
              <p className="text-sm sm:text-base text-[#0C2B3A] font-medium leading-relaxed">
                Elderly Users · Caregivers · Poly-Medication
              </p>
            </div>
          </div>

          {/* Hero Image Visual */}
          {/* Replace later with final Hero illustration */}
          <div className="w-full pt-4">
            <div className="w-full bg-white rounded-3xl p-4 sm:p-8 border border-stone-200/80 shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src={caseStudyImages.hero}
                alt="Managing Poly-Medication Hero Showcase"
                className="w-full h-auto max-h-[640px] object-contain"
              />
            </div>
          </div>
        </section>


        {/* ====================================================================
            2. PROJECT CONTEXT
        ==================================================================== */}
        <section className="space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Text (42%) */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.15]">
                Managing medicines sounds simple — until there are too many.
              </h2>

              <p className="text-base sm:text-lg text-[#164359]/80 font-normal leading-relaxed">
                Older adults taking multiple medicines often have to remember different pills, different timings, before/after-food instructions, and changing prescriptions.
              </p>

              <div className="p-6 bg-[#F5F0E6]/70 rounded-2xl border-l-4 border-[#0C2B3A] space-y-3">
                <p className="text-sm sm:text-base text-[#0C2B3A] font-medium leading-relaxed">
                  The challenge is not simply reminding someone to take a pill.
                </p>
                <p className="text-sm sm:text-base text-[#164359] font-normal leading-relaxed">
                  The real challenge is helping them understand: <strong className="text-[#0C2B3A]">Which medicine? When? Why? Have I already taken it?</strong> — without increasing cognitive load.
                </p>
              </div>
            </div>

            {/* Right Column: Visual (58%) */}
            {/* Replace later with final Project Context illustration */}
            <div className="lg:col-span-7">
              <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm flex items-center justify-center">
                <img
                  src={caseStudyImages.context}
                  alt="Project Context Illustration"
                  className="w-full h-auto max-h-[480px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>


        {/* ====================================================================
            3. RESEARCH QUESTION
        ==================================================================== */}
        <section className="py-12 sm:py-16 border-y border-stone-300/60 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Huge Question & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">RESEARCH DISCOVERY</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.12]">
              How do elderly people actually remember their medicines?
            </h2>

            <p className="text-base sm:text-lg text-[#164359]/80 font-normal leading-relaxed">
              Instead of immediately designing another reminder app, I wanted to understand the mental models older adults already use in their everyday lives.
            </p>

            <div className="pt-2">
              <p className="text-sm font-semibold text-[#0C2B3A] mb-3">Key exploration areas:</p>
              <ul className="space-y-2 text-sm sm:text-base text-[#164359]/85">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0C2B3A] mt-2 shrink-0" />
                  <span>How they identify medicines in their home</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0C2B3A] mt-2 shrink-0" />
                  <span>How they remember timing across daily schedules</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0C2B3A] mt-2 shrink-0" />
                  <span>How they respond to missed or uncertain doses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0C2B3A] mt-2 shrink-0" />
                  <span>What medicine information actually matters to them</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0C2B3A] mt-2 shrink-0" />
                  <span>How caregivers currently support their routine</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Visual */}
          {/* Replace later with final Research interview imagery */}
          <div className="lg:col-span-6">
            <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm flex items-center justify-center">
              <img
                src={caseStudyImages.research}
                alt="Research Question Imagery"
                className="w-full h-auto max-h-[440px] object-contain"
              />
            </div>
          </div>
        </section>


        {/* ====================================================================
            4. RESEARCH APPROACH
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3A] tracking-tight">
              Understanding the current behaviour
            </h2>
            <p className="text-base sm:text-lg text-[#164359]/80 font-normal leading-relaxed">
              I combined primary observations with behavioural and HCI research to understand how medication management changes with ageing.
            </p>
          </div>

          {/* 3 Large Editorial Research Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4">
            <div className="space-y-4 p-8 bg-white/70 rounded-3xl border border-stone-200/80">
              <span className="text-3xl font-extrabold text-[#7EAEC3]">01</span>
              <h3 className="text-xl font-bold text-[#0C2B3A]">User conversations</h3>
              <p className="text-sm sm:text-base text-[#164359]/80 leading-relaxed">
                I studied how older adults currently organise their medicines, how they describe them, and what language they naturally use.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white/70 rounded-3xl border border-stone-200/80">
              <span className="text-3xl font-extrabold text-[#7EAEC3]">02</span>
              <h3 className="text-xl font-bold text-[#0C2B3A]">Behavioural & HCI research</h3>
              <p className="text-sm sm:text-base text-[#164359]/80 leading-relaxed">
                I explored research around ageing, memory, medication adherence, habit formation, cognitive load, and interface usability for older adults.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white/70 rounded-3xl border border-stone-200/80">
              <span className="text-3xl font-extrabold text-[#7EAEC3]">03</span>
              <h3 className="text-xl font-bold text-[#0C2B3A]">Existing solutions</h3>
              <p className="text-sm sm:text-base text-[#164359]/80 leading-relaxed">
                I analysed medication reminder applications and found that many still depend heavily on text, forms, medical terminology and individual medicine schedules.
              </p>
            </div>
          </div>
        </section>


        {/* ====================================================================
            5. KEY RESEARCH INSIGHT 01
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">KEY INSIGHT 01</span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.08] max-w-4xl">
              Older adults often remember medicines visually — not medically.
            </h2>
            <p className="text-base sm:text-xl text-[#164359]/80 font-normal leading-relaxed max-w-3xl">
              One of the strongest insights was that medicines are often recalled through simple visual or everyday cues rather than their medical terminology.
            </p>
          </div>

          {/* Prominent Highlight Words */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 py-4">
            {['SHAPE', 'COLOUR', 'SIZE', 'ROUTINE'].map((word) => (
              <span
                key={word}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0C2B3A] text-white font-extrabold text-base sm:text-xl tracking-wider rounded-2xl shadow-sm"
              >
                {word}
              </span>
            ))}
          </div>

          {/* Large Quote Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-8 bg-[#F3EEE6]/60 rounded-3xl border border-stone-200/60 space-y-3">
              <p className="text-xl sm:text-2xl font-semibold italic text-[#0C2B3A]">
                “The small white one after breakfast.”
              </p>
              <p className="text-xs text-[#164359]/60 font-medium">— Participant quote</p>
            </div>

            <div className="p-8 bg-[#F3EEE6]/60 rounded-3xl border border-stone-200/60 space-y-3">
              <p className="text-xl sm:text-2xl font-semibold italic text-[#0C2B3A]">
                “The red tablet before tea.”
              </p>
              <p className="text-xs text-[#164359]/60 font-medium">— Participant quote</p>
            </div>

            <div className="p-8 bg-[#F3EEE6]/60 rounded-3xl border border-stone-200/60 space-y-3">
              <p className="text-xl sm:text-2xl font-semibold italic text-[#0C2B3A]">
                “The big pill at night.”
              </p>
              <p className="text-xs text-[#164359]/60 font-medium">— Participant quote</p>
            </div>
          </div>

          {/* Supporting Visual */}
          {/* Replace later with final Key Insight visual */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm flex items-center justify-center">
            <img
              src={caseStudyImages.insight}
              alt="Visual Memory Insight"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </section>


        {/* ====================================================================
            6. ROUTINE INSIGHT (KEY INSIGHT 02)
        ==================================================================== */}
        <section className="p-8 sm:p-14 bg-[#F5F0E6]/80 rounded-[36px] border border-stone-300/70 space-y-10 sm:space-y-14">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">KEY INSIGHT 02</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.12] max-w-4xl">
              Time is not always the strongest reminder. Routine is.
            </h2>
            <p className="text-base sm:text-lg text-[#164359]/85 leading-relaxed max-w-3xl">
              Instead of thinking only in exact clock times, many older adults connect medicines to familiar daily activities.
            </p>
          </div>

          {/* Routine Moment Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {['Before chai', 'After breakfast', 'Before lunch', 'After dinner', 'Before sleeping'].map((routine) => (
              <span
                key={routine}
                className="px-5 py-2.5 bg-white text-[#0C2B3A] font-semibold text-sm sm:text-base rounded-full border border-stone-200 shadow-sm"
              >
                {routine}
              </span>
            ))}
          </div>

          {/* High Impact Shift Statement */}
          <div className="p-8 sm:p-12 bg-[#0C2B3A] text-white rounded-3xl space-y-4 text-center sm:text-left">
            <p className="text-xs font-bold tracking-widest text-[#7EAEC3] uppercase">PARADIGM SHIFT</p>
            <p className="text-2xl sm:text-4xl font-extrabold leading-snug">
              This shifted the design from: <br className="hidden sm:inline" />
              <span className="line-through text-white/50">“Medicine at 8:00 AM”</span>
              <span className="mx-3 text-[#7EAEC3]">→</span>
              <span className="text-white underline decoration-[#7EAEC3] decoration-4">“Medicine before chai.”</span>
            </p>
          </div>
        </section>


        {/* ====================================================================
            7. PROBLEM STATEMENT
        ==================================================================== */}
        <section className="space-y-10 sm:space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">CORE PROBLEM</span>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.08]">
                Problem <br /> statement
              </h2>

              <p className="text-base sm:text-lg text-[#164359]/85 leading-relaxed">
                Managing multiple medicines becomes difficult when the system expects users to remember names, timings, instructions and completion states simultaneously.
              </p>
            </div>

            {/* Right Column: Visual */}
            {/* Replace later with final Problem Statement illustration */}
            <div className="lg:col-span-7">
              <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm flex items-center justify-center">
                <img
                  src={caseStudyImages.problem}
                  alt="Problem Statement Visual"
                  className="w-full h-auto max-h-[440px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* HMW Box */}
          <div className="p-8 sm:p-12 bg-white rounded-3xl border-2 border-[#0C2B3A]/20 space-y-4 shadow-sm">
            <span className="text-xs font-extrabold tracking-widest text-[#1B4054] uppercase">HOW MIGHT WE...</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0C2B3A] leading-snug">
              How might we help elderly users manage multiple medicines without forcing them to learn a complex digital system?
            </h3>
            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              The experience should reduce memory load, make medicines easy to recognise, connect reminders to familiar routines, and reassure users when they are uncertain.
            </p>
          </div>
        </section>


        {/* ====================================================================
            8. DESIGN PRINCIPLES
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">GUIDING FRAMEWORK</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.12]">
              The experience needed to feel familiar before it felt intelligent.
            </h2>
          </div>

          {/* 4 Editorial Design Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-sm font-extrabold tracking-widest text-[#7EAEC3]">PRINCIPLE 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C2B3A]">RECOGNISE, DON'T RECALL</h3>
              <p className="text-base text-[#164359]/80 leading-relaxed">
                Use medicine shape, colour and visual appearance instead of relying only on medicine names.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-sm font-extrabold tracking-widest text-[#7EAEC3]">PRINCIPLE 02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C2B3A]">ONE DECISION AT A TIME</h3>
              <p className="text-base text-[#164359]/80 leading-relaxed">
                Avoid dense forms and complicated multi-step decisions that overwhelm attention.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-sm font-extrabold tracking-widest text-[#7EAEC3]">PRINCIPLE 03</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C2B3A]">ROUTINE OVER RIGID SCHEDULES</h3>
              <p className="text-base text-[#164359]/80 leading-relaxed">
                Connect medicine reminders to familiar everyday activities like tea time or meal times.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-sm font-extrabold tracking-widest text-[#7EAEC3]">PRINCIPLE 04</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C2B3A]">REASSURANCE OVER PUNISHMENT</h3>
              <p className="text-base text-[#164359]/80 leading-relaxed">
                Missed medicines should not make elderly users feel that they failed. Provide gentle support.
              </p>
            </div>
          </div>
        </section>


        {/* ====================================================================
            9. SOLUTION OVERVIEW
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">THE SOLUTION</span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.08] max-w-4xl">
              Designing around how people already remember.
            </h2>

            <div className="flex flex-wrap items-center gap-4 py-2">
              <span className="text-lg font-bold text-[#0C2B3A]">ADD</span>
              <span className="text-[#7EAEC3]">→</span>
              <span className="text-lg font-bold text-[#0C2B3A]">RECOGNISE</span>
              <span className="text-[#7EAEC3]">→</span>
              <span className="text-lg font-bold text-[#0C2B3A]">TAKE</span>
            </div>

            <p className="text-base sm:text-xl text-[#164359]/80 leading-relaxed max-w-3xl">
              The experience combines simple medicine setup, visual medicine identification, routine-based reminders, clear Taken / Next / Missed states, and caregiver connection.
            </p>
          </div>

          {/* LARGE SOLUTION SHOWCASE */}
          {/* Replace later with final solution mockup */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-12 border border-stone-200/80 shadow-md flex items-center justify-center overflow-hidden">
            <img
              src={caseStudyImages.solution}
              alt="Solution Showcase Mockup"
              className="w-full h-auto max-h-[640px] object-contain"
            />
          </div>
        </section>


        {/* ====================================================================
            10. ADDING A MEDICINE
        ==================================================================== */}
        <section className="space-y-10 sm:space-y-14">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2B3A] tracking-tight">
              Adding a medicine without filling a long form.
            </h2>
            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              Instead of forcing elderly users to manually type every medicine detail, I explored simpler ways of adding medicines.
            </p>
          </div>

          {/* Two Solution Paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#7EAEC3] uppercase">PATH 01</span>
              <h3 className="text-xl font-bold text-[#0C2B3A]">PRESCRIPTION SCAN</h3>
              <p className="text-sm text-[#164359]/80">Scan prescription → Detect medicines → Review list → Confirm</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#7EAEC3] uppercase">PATH 02</span>
              <h3 className="text-xl font-bold text-[#0C2B3A]">VOICE-ASSISTED SETUP</h3>
              <p className="text-sm text-[#164359]/80">The system asks one simple question at a time (“What colour is it?”, “When do you take it?”)</p>
            </div>
          </div>

          {/* Mobile UI Screen Container */}
          {/* Replace later with adding medicine setup screens */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm flex items-center justify-center">
            <img
              src={caseStudyImages.addMedicine}
              alt="Adding Medicine Setup Screens"
              className="w-full h-auto max-h-[480px] object-contain"
            />
          </div>
        </section>


        {/* ====================================================================
            11. MEDICINE IDENTIFICATION
        ==================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text & Attributes */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.12]">
              Make the medicine recognisable at a glance.
            </h2>

            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              The medicine detail screen focuses on information that matters when the user is trying to recognise a medicine.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {['NAME', 'SHAPE', 'COLOUR', 'PURPOSE'].map((attr) => (
                <span key={attr} className="px-4 py-2 bg-[#0C2B3A] text-white text-xs font-bold tracking-wider rounded-xl">
                  {attr}
                </span>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 space-y-2">
              <p className="text-xs font-bold text-[#7EAEC3] uppercase tracking-wider">PREVIEW SPECIFICATION</p>
              <p className="text-sm font-semibold text-[#0C2B3A]">1 Tablet — Metformin</p>
              <p className="text-xs text-[#164359]/80">Shape: Round | Colour: Red | Use: Diabetes</p>
            </div>
          </div>

          {/* Right Column: Mobile UI Visual */}
          {/* Replace later with medicine-detail UI */}
          <div className="lg:col-span-7">
            <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm flex items-center justify-center">
              <img
                src={caseStudyImages.medicineDetail}
                alt="Medicine Detail Screen UI"
                className="w-full h-auto max-h-[480px] object-contain"
              />
            </div>
          </div>
        </section>


        {/* ====================================================================
            12. TODAY / REMINDER EXPERIENCE
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3A] tracking-tight">
              What do I need to take right now?
            </h2>
            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              Instead of showing a complicated medication calendar first, the home screen prioritises what matters at this moment.
            </p>
          </div>

          {/* 3 States */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2">
              <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase">STATE 01 — TAKEN</span>
              <p className="text-base font-semibold text-emerald-900">“You have taken your blood sugar medicine.”</p>
            </div>

            <div className="p-6 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-2">
              <span className="text-xs font-bold tracking-wider text-amber-700 uppercase">STATE 02 — NEXT</span>
              <p className="text-base font-semibold text-amber-900">“Your next pill in 5 mins.”</p>
            </div>

            <div className="p-6 bg-blue-50/80 rounded-2xl border border-blue-200 space-y-2">
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">STATE 03 — COMPLETE</span>
              <p className="text-base font-semibold text-blue-900">“Today’s schedule is complete.”</p>
            </div>
          </div>

          {/* Large Mockup Presentation Area (Two Mobile Screens) */}
          {/* Replace later with two-screen medication reminder mockup */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-12 border border-stone-200/80 shadow-md flex items-center justify-center">
            <img
              src={caseStudyImages.reminderExperience}
              alt="Reminder Experience Two Screen Presentation"
              className="w-full h-auto max-h-[560px] object-contain"
            />
          </div>
        </section>


        {/* ====================================================================
            13. ROUTINE GROUPING
        ==================================================================== */}
        <section className="space-y-10 sm:space-y-14">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2B3A] tracking-tight">
              Medicines grouped around life — not around the interface.
            </h2>
            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              Instead of presenting every medicine as an independent reminder, medicines can be grouped around familiar moments in the day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 space-y-1">
              <p className="text-xs font-bold text-[#7EAEC3] uppercase">MORNING</p>
              <p className="text-base font-semibold text-[#0C2B3A]">Before chai</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 space-y-1">
              <p className="text-xs font-bold text-[#7EAEC3] uppercase">AFTERNOON</p>
              <p className="text-base font-semibold text-[#0C2B3A]">After lunch</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 space-y-1">
              <p className="text-xs font-bold text-[#7EAEC3] uppercase">EVENING</p>
              <p className="text-base font-semibold text-[#0C2B3A]">After tea</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 space-y-1">
              <p className="text-xs font-bold text-[#7EAEC3] uppercase">NIGHT</p>
              <p className="text-base font-semibold text-[#0C2B3A]">Before sleeping</p>
            </div>
          </div>

          <div className="p-8 bg-[#F3EEE6] rounded-3xl border border-stone-200 space-y-3">
            <p className="text-sm font-bold text-[#0C2B3A] uppercase tracking-wider">ROUTINE MOMENT EXAMPLE</p>
            <p className="text-2xl font-bold text-[#0C2B3A]">BEFORE CHAI — 2 of 3 medicines taken</p>
            <p className="text-base text-[#164359]/80">
              Grouping medicines by routine gives users a simpler mental model and reduces the need to remember several independent reminders.
            </p>
          </div>
        </section>


        {/* ====================================================================
            14. PRE-MEAL REMINDERS
        ==================================================================== */}
        <section className="space-y-10 sm:space-y-14">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2B3A] tracking-tight">
              Sometimes the reminder starts before the medicine.
            </h2>
            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              For medicines dependent on meals, the system first checks whether the relevant activity has actually happened.
            </p>
          </div>

          {/* Interactive Logic Box */}
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-stone-200/80 space-y-6">
            <p className="text-xl font-bold text-[#0C2B3A]">“Did you have lunch?”</p>
            <div className="flex gap-4">
              <span className="px-6 py-2.5 bg-[#0C2B3A] text-white text-sm font-bold rounded-xl">YES</span>
              <span className="px-6 py-2.5 bg-stone-200 text-[#0C2B3A] text-sm font-bold rounded-xl">NOT YET</span>
            </div>
            <p className="text-sm text-[#164359]/80 border-t border-stone-100 pt-4">
              If the user chooses <strong>NOT YET</strong>, the system responds: <em>“Will have lunch in 15 mins”</em> and adapts the medicine reminder accordingly.
            </p>
          </div>

          {/* Mobile Screens Area */}
          {/* Replace later with pre-meal reminder UI screens */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm flex items-center justify-center">
            <img
              src={caseStudyImages.preMeal}
              alt="Pre-meal Reminder UI Flow"
              className="w-full h-auto max-h-[480px] object-contain"
            />
          </div>
        </section>


        {/* ====================================================================
            15. CAREGIVER EXPERIENCE
        ==================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.12]">
              Care without taking away independence.
            </h2>
            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              Caregivers can be linked through a simple connection code and access important medication information without controlling every interaction.
            </p>

            <ul className="space-y-3 text-sm sm:text-base text-[#164359]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7EAEC3]" />
                <span>Caregiver connection code</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7EAEC3]" />
                <span>Medicine status tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7EAEC3]" />
                <span>Monthly calendar & appointments</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7EAEC3]" />
                <span>Missed medicine information when necessary</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Visual */}
          {/* Replace later with caregiver dashboard UI */}
          <div className="lg:col-span-7">
            <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm flex items-center justify-center">
              <img
                src={caseStudyImages.caregiver}
                alt="Caregiver Experience UI"
                className="w-full h-auto max-h-[480px] object-contain"
              />
            </div>
          </div>
        </section>


        {/* ====================================================================
            16. ACCESSIBILITY DECISIONS
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">ACCESSIBILITY ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.12]">
              Designed for ageing eyes, hands and attention.
            </h2>
          </div>

          {/* Editorial Accessibility Decision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-3">
              <h3 className="text-lg font-bold text-[#0C2B3A]">LARGE TYPOGRAPHY</h3>
              <p className="text-sm text-[#164359]/80">Body text designed around approximately 18px or larger for easy readability.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-3">
              <h3 className="text-lg font-bold text-[#0C2B3A]">LARGE TOUCH TARGETS</h3>
              <p className="text-sm text-[#164359]/80">Important action buttons designed at 56px or larger for steady tapping.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-3">
              <h3 className="text-lg font-bold text-[#0C2B3A]">ONE PRIMARY ACTION</h3>
              <p className="text-sm text-[#164359]/80">Avoid competing primary actions on a single screen to preserve focus.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-3">
              <h3 className="text-lg font-bold text-[#0C2B3A]">ICONS + LABELS</h3>
              <p className="text-sm text-[#164359]/80">Never depend on icons alone; pair every icon with explicit text labels.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-3">
              <h3 className="text-lg font-bold text-[#0C2B3A]">CLEAR CONFIRMATION</h3>
              <p className="text-sm text-[#164359]/80">Tell users exactly what happened immediately after taking any action.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-3">
              <h3 className="text-lg font-bold text-[#0C2B3A]">UNDO CAPACITY</h3>
              <p className="text-sm text-[#164359]/80">Allow users to recover instantly from accidental taps without panic.</p>
            </div>
          </div>
        </section>


        {/* ====================================================================
            17. MICROCOPY
        ==================================================================== */}
        <section className="p-10 sm:p-16 bg-[#0C2B3A] text-white rounded-[36px] space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#7EAEC3] uppercase">MICROCOPY DESIGN</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Words matter when confidence is low.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-lg sm:text-xl font-medium">“You have 2 medicines before tea.”</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-lg sm:text-xl font-medium">“See medicines now”</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-lg sm:text-xl font-medium">“Remind me in 15 minutes”</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-lg sm:text-xl font-medium">“Well done — both medicines taken.”</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10 md:col-span-2">
              <p className="text-lg sm:text-xl font-medium">“Marked by mistake? Go back.”</p>
            </div>
          </div>
        </section>


        {/* ====================================================================
            18. DESIGN EVOLUTION
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2B3A] tracking-tight">
              What changed through the process?
            </h2>
          </div>

          {/* 4 Comparisons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">BEFORE</span>
              <p className="text-base text-[#164359]/70 line-through">Long medication forms with medical jargon</p>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">AFTER</span>
                <p className="text-base font-semibold text-[#0C2B3A]">Only essential visual information requested</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">BEFORE</span>
              <p className="text-base text-[#164359]/70 line-through">Exact time-based alarm notifications</p>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">AFTER</span>
                <p className="text-base font-semibold text-[#0C2B3A]">Routine-based contextual reminders</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">BEFORE</span>
              <p className="text-base text-[#164359]/70 line-through">Text-heavy medicine identification list</p>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">AFTER</span>
                <p className="text-base font-semibold text-[#0C2B3A]">Shape + colour + medicine name visual cards</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">BEFORE</span>
              <p className="text-base text-[#164359]/70 line-through">Overriding caregiver control</p>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">AFTER</span>
                <p className="text-base font-semibold text-[#0C2B3A]">Supportive, non-intrusive caregiver connection</p>
              </div>
            </div>
          </div>

          {/* Iterations Visual Area */}
          {/* Replace later with wireframes and design iterations */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm flex items-center justify-center">
            <img
              src={caseStudyImages.iterations}
              alt="Design Iterations and Evolution"
              className="w-full h-auto max-h-[480px] object-contain"
            />
          </div>
        </section>


        {/* ====================================================================
            19. FINAL EXPERIENCE
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16">
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">FINAL SYSTEM</span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0C2B3A] tracking-tight leading-[1.08]">
              A medication system designed around how people actually remember.
            </h2>
          </div>

          {/* Multi-Screen Gallery Presentation */}
          {/* Replace later with multi-device final gallery */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-12 border border-stone-200/80 shadow-md flex items-center justify-center">
            <img
              src={caseStudyImages.finalExperience}
              alt="Final Experience Multi-Screen Gallery"
              className="w-full h-auto max-h-[600px] object-contain"
            />
          </div>
        </section>


        {/* ====================================================================
            20. REFLECTION
        ==================================================================== */}
        <section className="space-y-12 sm:space-y-16 pt-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#1B4054]/60 uppercase">REFLECTION</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2B3A] tracking-tight">
              What I learned
            </h2>

            <p className="text-base sm:text-xl text-[#164359]/85 font-normal leading-relaxed">
              This project made me realise that accessibility is not simply about larger buttons or larger text. It is about understanding the mental model people already have and designing around it.
            </p>

            <p className="text-base sm:text-lg text-[#164359]/80 leading-relaxed">
              The most meaningful design decisions came from small behavioural observations — how people describe pills, how they structure routines, and what happens when they feel uncertain.
            </p>
          </div>

          {/* Final Highlighted Statement */}
          <div className="p-10 sm:p-16 bg-[#F5F0E6] rounded-[36px] border border-stone-300/60 text-center space-y-4">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2B3A] leading-tight max-w-4xl mx-auto">
              “Good design did not mean teaching elderly users a new system. It meant making the system speak their language.”
            </p>
          </div>

          {/* Back to Work Link */}
          <div className="pt-8 flex justify-center">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C2B3A] text-white font-medium text-sm sm:text-base rounded-full hover:bg-[#164359] transition-all duration-200 shadow-md group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Selected Work</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
