import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import StickyActionBar from '../../components/feature/StickyActionBar';
import MediaHero from './components/MediaHero';
import SermonFilters from './components/SermonFilters';
import SermonGrid from './components/SermonGrid';
import LiveStreamSection from './components/LiveStreamSection';
import PodcastSection from './components/PodcastSection';
import MediaGallery from './components/MediaGallery';
import DailyDevotion from './components/DailyDevotion';
import BibleReadingPlan from './components/BibleReadingPlan';
import ChurchAffirmation from './components/ChurchAffirmation';

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <StickyActionBar />
      <MediaHero />
      <DailyDevotion />
      <LiveStreamSection />
      <SermonFilters />
      <SermonGrid />
      <BibleReadingPlan />
      <MediaGallery />
      <ChurchAffirmation />
      <PodcastSection />
      <Footer />
    </div>
  );
}