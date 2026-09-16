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
    <section className="w-full bg-transparent pt-10 sm:pt-14 lg:pt-16 pb-0 px-0 relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8 lg:px-10 space-y-8 sm:space-y-12 lg:space-y-14">

        {/* Section Header: "Selected work." */}
        <div className="flex items-end justify-between border-b border-stone-200/60 pb-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-10 sm:pb-14">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className="group flex flex-col justify-between w-full bg-transparent hover:-translate-y-1 active:scale-[0.995] transition-all duration-300 ease-out cursor-pointer p-0"
            >
              {/* 1. NUMBER (Top-Left of Card) */}
              <div className="mb-2 sm:mb-3">
                <span className="label-editorial text-xs sm:text-[13px] tracking-[0.14em] text-[#164359]/50 block">
                  0{index + 1}
                </span>
              </div>

              {/* 2. IMAGE (Directly Underneath Number) */}
              {project.id === 'elderly-care' ? (
                <div className="w-full aspect-[16/10] bg-transparent mb-4 sm:mb-5 flip-image-wrapper">
                  <div className="flip-image-inner">
                    {/* Front Image */}
                    <div className="flip-image-front">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full max-h-[220px] sm:max-h-[240px] object-contain object-center"
                      />
                    </div>
                    {/* Back Image */}
                    <div className="flip-image-back">
                      <img
                        src="/elderly frame 1 flip.jpg"
                        alt={`${project.title} back`}
                        className="w-full h-full max-h-[220px] sm:max-h-[240px] object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[16/10] bg-transparent mb-4 sm:mb-5 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-h-[220px] sm:max-h-[240px] object-contain object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>
              )}

              {/* 3. PROJECT TITLE & 4. DESCRIPTION */}
              <div className="space-y-2 mb-4 sm:mb-5 flex-grow">
                <h3 className="heading-editorial-project text-xl sm:text-2xl lg:text-[26px] leading-tight text-[#0C2B3A] group-hover:text-[#164359] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#164359]/80 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 5. PROJECT TAGS & 6. VIEW PROJECT LINK */}
              <div className="pt-2 flex items-center justify-between gap-3 mt-auto">
                <p className="label-editorial text-[10px] sm:text-[11px] text-[#1B4054]/75 truncate max-w-[65%]">
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

