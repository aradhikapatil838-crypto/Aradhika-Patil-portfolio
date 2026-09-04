import { Link } from 'react-router-dom';

export default function FeaturedWork() {
  const projects = [
    {
      id: '01',
      image: '/work/01.jpg',
      title: 'OrbiCare — Managing Multiple Medicines',
      description: 'Exploring how medication routines can feel simpler and more familiar for older adults.',
      link: '/work',
    },
    {
      id: '02',
      image: '/work/02.jpg',
      title: 'Rethinking Group Ordering',
      description: 'Exploring the coordination between shared orders, individual choices, and splitting the bill.',
      link: '/work',
    },
    {
      id: '03',
      image: '/work/03.jpg',
      title: 'Vaaniq — AI Communication Platform',
      description: 'Designing conversational experiences across AI calling and WhatsApp automation.',
      link: '/work',
    },
    {
      id: '04',
      image: '/work/04.jpg',
      title: 'Redesigning SBI',
      description: 'Reimagining everyday banking interactions to make them simpler, clearer, and easier to navigate.',
      link: '/work',
    },
  ];

  return (
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Selected work
          </h2>
        </div>

        {/* Project Cards Grid (2x2 on Desktop, 1 column on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group block bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-none hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/70 hover:border-gray-300 active:scale-[0.98] active:translate-y-0 transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Card Screenshot Container */}
              <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-6 sm:p-7 space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
