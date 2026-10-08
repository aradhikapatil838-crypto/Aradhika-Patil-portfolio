import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import About from '../components/About';
import SecretDecoderSection from '../components/SecretDecoderSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerHeight = 76;
          const targetY = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-transparent text-[#0C2B3A]">
      <LoadingScreen />
      <Header />
      <Hero />
      <FeaturedWork />
      <About />
      <SecretDecoderSection />
      <ContactSection />
    </div>
  );
}

