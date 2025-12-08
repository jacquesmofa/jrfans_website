import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import StickyActionBar from '../../components/feature/StickyActionBar';
import GivingHero from './components/GivingHero';
import GivingOptions from './components/GivingOptions';
import TransparencySection from './components/TransparencySection';
import ImpactStories from './components/ImpactStories';

export default function GivingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <StickyActionBar />
      <GivingHero />
      <GivingOptions />
      <TransparencySection />
      <ImpactStories />
      <Footer />
    </div>
  );
}