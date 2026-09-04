import { NavLink } from 'react-router-dom';

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex justify-center w-full py-6">
      <div className="inline-flex items-center gap-6 sm:gap-10 px-8 py-3.5 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 relative">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `relative px-2 py-1 text-sm sm:text-base font-medium transition-colors duration-200 ease-in-out cursor-pointer ${
                isActive
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-500 hover:text-gray-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute -bottom-[15px] left-1/2 -translate-x-1/2 w-8 h-[5px] bg-red-600 rounded-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
