import { NavLink } from 'react-router-dom';

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex items-center gap-7 sm:gap-11">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            `font-serif-editorial text-base sm:text-lg lg:text-[19px] font-normal tracking-wide transition-colors duration-200 py-1 relative ${
              isActive
                ? 'text-[#0C2B3A] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0C2B3A]'
                : 'text-[#164359]/75 hover:text-[#0C2B3A]'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

