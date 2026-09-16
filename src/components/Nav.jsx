import { NavLink } from 'react-router-dom';

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex items-center gap-6 sm:gap-10">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            `text-xs sm:text-sm font-medium transition-colors duration-150 py-1 relative ${
              isActive
                ? 'text-[#0C2B3A] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#0C2B3A]'
                : 'text-[#164359]/80 hover:text-[#0C2B3A]'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

