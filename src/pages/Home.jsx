import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/30 pt-20">
      <Header />
      <Hero />
      <FeaturedWork />
    </div>
  );
}
