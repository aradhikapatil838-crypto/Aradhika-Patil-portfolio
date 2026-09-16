import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import About from '../components/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-[#0C2B3A]">
      <LoadingScreen />
      <Header />
      <Hero />
      <FeaturedWork />
      <About />
    </div>
  );
}

