import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import StickyActionBar from '../../components/feature/StickyActionBar';
import AboutHero from './components/AboutHero';
import HistoryVision from './components/HistoryVision';
import FounderSection from './components/FounderSection';
import CommunityServiceSection from './components/CommunityServiceSection';
import GovernanceSection from './components/GovernanceSection';
import BeliefsSection from './components/BeliefsSection';
import CoreValues from './components/CoreValues';
import LeadershipSection from './components/LeadershipSection';
import MinistryImpact from './components/MinistryImpact';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <HistoryVision />
      <FounderSection />
      <CommunityServiceSection />
      <GovernanceSection />
      <BeliefsSection />
      <CoreValues />
      <LeadershipSection />
      <MinistryImpact />
      <Footer />
      <StickyActionBar />
    </div>
  );
}