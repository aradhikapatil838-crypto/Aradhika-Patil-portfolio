import { NavLink } from 'react-router-dom';

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex items-center">
      <div className="inline-flex items-center gap-4 sm:gap-8 px-6 py-2.5 bg-white/90 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 relative">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `relative px-2 py-1 text-sm font-medium transition-colors duration-200 ease-in-out cursor-pointer ${
                isActive
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-500 hover:text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-7 h-[4px] bg-red-600 rounded-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
