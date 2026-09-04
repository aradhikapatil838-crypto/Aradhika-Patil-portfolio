import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Side: Brand / Name Link */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 hover:text-red-600 transition-colors duration-200"
        >
          Aradhika Patil
        </Link>

        {/* Right Side: Navigation & Action Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Nav />
          <Button
            asChild
            className="bg-red-600 text-white hover:bg-red-700 font-medium px-5 py-2 rounded-full text-sm shadow-sm hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <a href="mailto:aradhikapatil838@gmail.com">Book a call</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
