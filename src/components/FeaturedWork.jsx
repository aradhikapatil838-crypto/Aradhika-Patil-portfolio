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

        {/* Large Horizontal Project Cards Stack (One Project Per Row) */}
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14 pb-12 sm:pb-16">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className="group block w-full bg-white rounded-3xl sm:rounded-[32px] border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.025)] hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.995] transition-all duration-300 ease-out cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-stretch min-h-[380px] lg:min-h-[420px]">

                {/* LEFT SIDE: Project Information (50% width on desktop) */}
                <div className="w-full lg:w-[50%] p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between space-y-6">

                  {/* Title & Description Container */}
                  <div className="space-y-4 sm:space-y-5">
                    {/* Project Number & Title */}
                    <div className="space-y-2">
                      <span className="label-editorial text-[#164359]/50 block">
                        0{index + 1}
                      </span>
                      <h3 className="heading-editorial-project text-[#0C2B3A] group-hover:text-[#164359] transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="font-sans-body text-sm sm:text-base text-[#164359]/80 font-normal leading-[1.7] max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: Categories / Tags & View Link */}
                  <div className="pt-6 sm:pt-8 border-t border-stone-200/50 flex flex-wrap items-center justify-between gap-4">
                    <p className="label-editorial text-[#1B4054]/75">
                      {project.categories}
                    </p>

                    <span className="inline-flex items-center gap-1 font-sans-body text-xs sm:text-sm font-medium tracking-wide text-[#0C2B3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0">
                      <span>View project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                </div>

                {/* RIGHT SIDE: Illustration (50% width on desktop) */}
                <div className="w-full lg:w-[50%] bg-white p-3 sm:p-5 lg:p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] max-h-[520px] flex items-center justify-center relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full max-h-[480px] lg:max-h-[500px] object-contain object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
