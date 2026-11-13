import SiteGallery from '../../../components/feature/SiteGallery';

// Ministry gallery: albums in src/content/gallery.json (food bank photos + church life),
// strip layout in JRFAN indigo + gold, with a full-screen viewer.
export default function MediaGallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-primary-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Ministry <span className="text-accent-gold">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600">Capturing moments of God's presence and community fellowship. Tap any photo to see it full size.</p>
        </div>
        <SiteGallery
          note="Church Life pictures are illustrations until our own photos are added."
          theme={{ layout: 'strip', ink: '#1e1b4b', muted: '#4b5563', accent: '#4F46E5', accentInk: '#ffffff', tabBg: '#e0e7ff', radius: '1rem', headingClass: 'font-display' }}
        />
      </div>
    </section>
  );
}
