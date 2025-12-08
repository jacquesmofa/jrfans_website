
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function UpcomingEvents() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const events = [
    {
      title: 'Christmas Celebration 2025',
      date: 'December 20, 2025',
      time: '5:00 PM',
      location: '101 West Dr Unit C2, Brampton, ON L6T 2J6',
      description: 'Greetings family of Fresh Breath JRFANS COMMUNITY. Our Christmas Party has been scheduled for the 20th of December 2025. At 5 p.m please use this flyer to invite your family and friends to join in this golden event. God bless you as you do so in Jesus name.',
      image: 'https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/c9db3b1f45f37d2aba3c85c55374331f.jpeg',
      featured: true,
    },
    {
      title: 'Women\'s Conference',
      date: 'February 14-15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: '101 West Dr Unit C2, Brampton, ON',
      description: 'A special gathering for women to be empowered, encouraged, and equipped. Topics include faith, family, purpose, and spiritual warfare.',
      image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20women%20praying%20together%20in%20modern%20church%20setting%20with%20raised%20hands%20in%20worship%2C%20warm%20lighting%2C%20spiritual%20atmosphere%2C%20professional%20photography%2C%20simple%20clean%20background&width=800&height=600&seq=women-conf-2025&orientation=landscape',
      featured: false,
    },
    {
      title: 'Youth Explosion',
      date: 'March 8, 2025',
      time: '5:00 PM - 10:00 PM',
      location: '101 West Dr Unit C2, Brampton, ON',
      description: 'An electrifying night of worship, powerful teaching, and fun activities for young people. Special guest speakers and live performances.',
      image: 'https://readdy.ai/api/search-image?query=energetic%20youth%20worship%20service%20with%20young%20people%20raising%20hands%20in%20praise%2C%20dynamic%20lighting%2C%20contemporary%20church%20setting%2C%20vibrant%20atmosphere%2C%20professional%20photography%2C%20simple%20background&width=800&height=600&seq=youth-exp-2025&orientation=landscape',
      featured: false,
    },
    {
      title: 'Easter Celebration',
      date: 'April 20, 2025',
      time: '7:00 AM - 12:00 PM',
      location: '101 West Dr Unit C2, Brampton, ON',
      description: 'Celebrate the resurrection of Jesus Christ with us. Special sunrise service, worship, communion, and a powerful message on the victory of the cross.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20sunrise%20over%20cross%20on%20hill%20with%20golden%20light%20rays%20breaking%20through%20clouds%2C%20Easter%20morning%20celebration%2C%20spiritual%20and%20uplifting%20scene%2C%20professional%20photography%2C%20simple%20clean%20background&width=800&height=600&seq=easter-2025&orientation=landscape',
      featured: false,
    },
    {
      title: 'Leadership Training Conference',
      date: 'May 10-12, 2025',
      time: '9:00 AM - 5:00 PM',
      location: '101 West Dr Unit C2, Brampton, ON',
      description: 'Intensive training for church leaders, ministers, and aspiring leaders. Learn biblical leadership principles, ministry skills, and spiritual growth strategies.',
      image: 'https://readdy.ai/api/search-image?query=professional%20church%20leadership%20training%20session%20with%20diverse%20group%20of%20people%20in%20modern%20conference%20room%2C%20open%20bibles%20and%20notebooks%2C%20collaborative%20learning%20environment%2C%20professional%20photography%2C%20simple%20background&width=800&height=600&seq=leadership-2025&orientation=landscape',
      featured: false,
    },
    {
      title: 'Family Fun Day',
      date: 'June 15, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Brampton Community Park, ON',
      description: 'A day of fun, games, food, and fellowship for the whole family. Strengthen family bonds and create lasting memories together.',
      image: 'https://readdy.ai/api/search-image?query=happy%20diverse%20families%20enjoying%20outdoor%20church%20picnic%20with%20children%20playing%20games%2C%20food%20tables%2C%20joyful%20atmosphere%20in%20park%20setting%2C%20professional%20photography%2C%20simple%20clean%20background&width=800&height=600&seq=family-day-2025&orientation=landscape',
      featured: false,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Mark your calendar and join us for these special events
          </p>
        </motion.div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                event.featured ? 'bg-gradient-to-br from-accent-gold/10 to-accent-fire/10' : 'bg-white'
              } rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  {event.featured && (
                    <div className="absolute top-4 left-4 bg-accent-fire text-white px-4 py-2 rounded-lg font-bold text-sm animate-pulse">
                      FEATURED EVENT
                    </div>
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-3xl text-primary-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{event.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <i className="ri-calendar-event-fill text-accent-gold text-xl mr-3"></i>
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <i className="ri-time-fill text-accent-gold text-xl mr-3"></i>
                      <span className="font-semibold">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <i className="ri-map-pin-fill text-accent-gold text-xl mr-3"></i>
                      <span className="font-semibold">{event.location}</span>
                    </div>
                  </div>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 whitespace-nowrap inline-flex items-center justify-center">
                    <i className="ri-ticket-fill mr-2"></i>
                    Register Now - Free Entry
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
