import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import StickyActionBar from '../../components/feature/StickyActionBar';
import EventsHero from './components/EventsHero';
import CalendarView from './components/CalendarView';
import UpcomingEvents from './components/UpcomingEvents';
import OutreachGallery from './components/OutreachGallery';
import WeeklySchedule from './components/WeeklySchedule';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <StickyActionBar />
      <EventsHero />
      <WeeklySchedule />
      <UpcomingEvents />
      <CalendarView />
      <OutreachGallery />
      <Footer />
    </div>
  );
}