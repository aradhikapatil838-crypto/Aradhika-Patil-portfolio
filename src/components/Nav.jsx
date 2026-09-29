import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = [
    { name: 'Home', sectionId: 'hero', path: '/' },
    { name: 'Work', sectionId: 'work', path: '/work' },
    { name: 'About', sectionId: 'about', path: '/about' },
    { name: 'Contact', sectionId: 'contact', path: '/contact' },
  ];

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page -> Contact
      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection('Contact');
        return;
      }

      const workEl = document.getElementById('work');
      const aboutEl = document.getElementById('about');
      const contactEl = document.getElementById('contact');

      const headerOffset = 90;

      if (contactEl && scrollY >= contactEl.offsetTop - headerOffset - 80) {
        setActiveSection('Contact');
      } else if (aboutEl && scrollY >= aboutEl.offsetTop - headerOffset - 80) {
        setActiveSection('About');
      } else if (workEl && scrollY >= workEl.offsetTop - headerOffset - 80) {
        setActiveSection('Work');
      } else {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e, item) => {
    if (isHomePage) {
      e.preventDefault();
      setActiveSection(item.name);
      
      if (item.sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetEl = document.getElementById(item.sectionId);
        if (targetEl) {
          const headerHeight = 76;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    } else {
      e.preventDefault();
      navigate(`/#${item.sectionId}`);
    }
  };

  return (
    <nav className="flex items-center gap-7 sm:gap-11">
      {navItems.map((item) => {
        const isActive = isHomePage
          ? activeSection === item.name
          : location.pathname === item.path;

        return (
          <a
            key={item.name}
            href={isHomePage ? `#${item.sectionId}` : item.path}
            onClick={(e) => handleNavClick(e, item)}
            className={`font-serif-editorial text-base sm:text-lg lg:text-[19px] font-normal tracking-wide transition-colors duration-200 py-1 relative ${
              isActive
                ? 'text-[#0C2B3A] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0C2B3A]'
                : 'text-[#164359]/75 hover:text-[#0C2B3A]'
            }`}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}


