import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import StickyActionBar from '../../components/feature/StickyActionBar';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import ServiceTimes from './components/ServiceTimes';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <StickyActionBar />
      <ContactHero />
      <ContactForm />
      <ServiceTimes />
      <LocationMap />
      <Footer />
    </div>
  );
}