import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import StickyActionBar from '../../components/feature/StickyActionBar';
import HeroSection from './components/HeroSection';
import MissionVision from './components/MissionVision';
import CommunityImpact from './components/CommunityImpact';
import FeaturedSermon from './components/FeaturedSermon';
import UpcomingCrusade from './components/UpcomingCrusade';
import TestimonialSlider from './components/TestimonialSlider';
import LiveAnnouncements from './components/LiveAnnouncements';
import CallToAction from './components/CallToAction';
import SocialFeed from './components/SocialFeed';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <StickyActionBar />
      <HeroSection />
      <MissionVision />
      <CommunityImpact />
      <FeaturedSermon />
      <UpcomingCrusade />
      <TestimonialSlider />
      <LiveAnnouncements />
      <SocialFeed />
      <CallToAction />
      <Footer />
    </div>
  );
}