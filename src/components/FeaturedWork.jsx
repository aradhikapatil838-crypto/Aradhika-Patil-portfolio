import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function FeaturedWork() {
  const projects = [
    {
      id: 'elderly-care',
      image: '/elderly frame.png',
      title: 'Managing Poly-Medication for Elderly Care',
      description:
        'A wellness app helping elderly users and caregivers manage multiple medications with ease  blending behavioral research with intuitive, trust-building design.',
      categories: 'UX Research · Interaction Design · Branding',
      link: '/work/elderly-medication',
    },
    {
      id: 'vaaniq',
      image: '/work/vaaniq-card.jpg',
      title: 'Vaaniq AI',
      description:
        'An AI-driven conversational platform that turns customer voice interactions into structured, actionable business intelligence.',
      categories: 'AI & Voice UX · Interface Design · Prototyping',
      link: '/work',
    },
    {
      id: 'group-dining',
      image: '/work/group-dining-card.jpg',
      title: 'Group Dining',
      description:
        'A streamlined group ordering experience for cafés and restaurants, eliminating split-bill friction and ordering delays.',
      categories: 'UX Research · Service Design · Mobile App',
      link: '/work',
    },
    {
      id: 'sbi-redesign',
      image: '/work/sbi-card.jpg',
      title: 'SBI Redesign',
      description:
        'Reimagining digital banking for millions of users with a focus on accessibility, visual clarity, and inclusive human-centered design.',
      categories: 'Fintech UX · Accessibility · Systems Design',
      link: '/work',
    },
  ];

  return (
    <section className="w-full bg-transparent pt-12 sm:pt-16 lg:pt-20 pb-0 px-0 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-14 lg:space-y-16">

        {/* Section Header: "Selected work." */}
        <div className="flex items-end justify-between border-b border-stone-200/60 pb-6">
          <h2 className="heading-editorial-section text-[#0C2B3A]">
            Selected work<span className="text-[#0C2B3A]">.</span>
          </h2>

          <Link
            to="/work"
            className="label-editorial text-[#0C2B3A] hover:text-[#164359] flex items-center gap-1.5 transition-colors group cursor-pointer"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2 x 2 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pb-12 sm:pb-16">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className="group flex flex-col justify-between w-full bg-white rounded-3xl sm:rounded-[32px] border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.025)] hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.995] transition-all duration-300 ease-out cursor-pointer overflow-hidden p-6 sm:p-8 lg:p-9"
            >
              {/* 1. NUMBER (Top-Left of Card) */}
              <div className="mb-3">
                <span className="label-editorial text-xs sm:text-[13px] tracking-[0.14em] text-[#164359]/50 block">
                  0{index + 1}
                </span>
              </div>

              {/* 2. IMAGE (Directly Underneath Number) */}
              <div className="w-full aspect-[4/3] bg-stone-50/40 rounded-2xl p-4 sm:p-6 mb-6 flex items-center justify-center overflow-hidden border border-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full max-h-[260px] sm:max-h-[280px] object-contain object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* 3. PROJECT TITLE & 4. DESCRIPTION */}
              <div className="space-y-3 mb-6 flex-grow">
                <h3 className="heading-editorial-project text-[#0C2B3A] group-hover:text-[#164359] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#164359]/80 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 5. PROJECT TAGS & 6. VIEW PROJECT LINK */}
              <div className="pt-5 border-t border-stone-200/60 flex items-center justify-between gap-3 mt-auto">
                <p className="label-editorial text-[11px] sm:text-xs text-[#1B4054]/75 truncate max-w-[65%]">
                  {project.categories}
                </p>

                <span className="inline-flex items-center gap-1 font-sans-body text-xs font-medium tracking-wide text-[#0C2B3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0">
                  <span>View project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
