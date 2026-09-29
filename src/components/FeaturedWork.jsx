import { RevealCursor, ProjectReveal } from './ProjectReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function FeaturedWork() {
  const projects = [
    {
      id: 'elderly-care',
      image: '/elderly frame 1 flip.png',
      title: 'Simplifying Polypharmacy for Older Adults',
      description:
        'Designing an accessible experience for managing multiple medications and everyday care.',
      categories: 'UX Research · Interaction Design · Accessibility',
      link: '/work/elderly-medication',
    },
    {
      id: 'sbi-redesign',
      image: '/work/sbi-card.jpg',
      title: 'SBI Redesign',
      description:
        'Reimagining digital banking for millions of users with a focus on accessibility, visual clarity, and inclusive human-centered design.',
      categories: 'Fintech UX · Accessibility · Systems Design',
      link: '/work/sbi-redesign.html',
    },
  ];

  return (
    <section id="work" className="featured-work-compact w-full bg-transparent pt-6 sm:pt-8 pb-0 px-0 relative overflow-hidden">
      <RevealCursor />
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8 lg:px-10 space-y-5 sm:space-y-6">

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pb-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              data-reveal-card={project.id}
              to={project.link}
              reloadDocument={project.id === 'sbi-redesign'}
              className="group flex flex-col justify-between w-full bg-transparent hover:-translate-y-1 active:scale-[0.995] transition-all duration-300 ease-out cursor-pointer p-0"
            >
              <ProjectReveal project={project.id} />
              {/* 1. NUMBER (Top-Left of Card) */}
              <div className="project-card-copy mb-2 sm:mb-3">
                <span className="label-editorial text-xs sm:text-[13px] tracking-[0.14em] text-[#164359]/50 block">
                  0{index + 1}
                </span>
              </div>

              {/* 2. IMAGE (Directly Underneath Number) */}
              <div className="project-card-image w-full aspect-[16/10] bg-transparent mb-4 sm:mb-5 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full max-h-[220px] sm:max-h-[240px] object-contain object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
              {/* 3. PROJECT TITLE & 4. DESCRIPTION */}
              <div className="project-card-copy space-y-2 mb-4 sm:mb-5 flex-grow">
                <h3 className="heading-editorial-project text-xl sm:text-2xl lg:text-[26px] leading-tight text-[#0C2B3A] group-hover:text-[#164359] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#164359]/80 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 5. PROJECT TAGS & 6. VIEW PROJECT LINK */}
              <div className="project-card-copy pt-2 flex items-center justify-between gap-3 mt-auto">
                <p className="label-editorial text-[10px] sm:text-[11px] text-[#1B4054]/75 ">
                  {project.categories}
                </p>

                <span className="project-case-link inline-flex items-center gap-1 font-sans-body text-xs font-medium tracking-wide text-[#0C2B3A] transition-colors duration-200 shrink-0">
                  <span className="project-link-label"><span className="project-link-default">View project</span><span className="project-link-investigate">Investigate the case</span></span>
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





