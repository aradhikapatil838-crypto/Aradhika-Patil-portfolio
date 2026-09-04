import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-8 md:py-12 px-6">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Text & Call to Action */}
        <div className="flex flex-col items-start justify-center space-y-6 md:space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              I design around how people <span className="text-red-600">think, feel,</span> and <span className="text-red-600">behave.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-medium tracking-wide">
              Designing, observing, learning.
            </p>
          </div>

          <div>
            <Button
              asChild
              className="bg-red-600 text-white hover:bg-red-700 font-semibold px-7 py-3.5 rounded-full text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Link to="/work">See selected work</Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100/80 group">
            <img
              src="/hero.jpg"
              alt="Aradhika Patil - Designer"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
