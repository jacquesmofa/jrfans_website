
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function UpcomingCrusade() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/c9db3b1f45f37d2aba3c85c55374331f.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-12"
        >
          <div className="inline-block bg-accent-fire px-6 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
            UPCOMING EVENT
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl mb-6">
            Christmas Celebration 2025
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Join us for a joyful celebration of Christ's birth with worship, fellowship, and the warmth of community
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-accent-gold rounded-xl mx-auto mb-4">
                <i className="ri-calendar-event-fill text-3xl text-white"></i>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Date</h4>
              <p className="text-white/80 text-lg">December 20, 2025</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-accent-gold rounded-xl mx-auto mb-4">
                <i className="ri-map-pin-fill text-3xl text-white"></i>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Location</h4>
              <p className="text-white/80 text-lg">101 West Dr Unit C2, Brampton, ON</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-accent-gold rounded-xl mx-auto mb-4">
                <i className="ri-time-fill text-3xl text-white"></i>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Time</h4>
              <p className="text-white/80 text-lg">5:00 PM</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Greetings family of Fresh Breath JRFANS COMMUNITY. Our Christmas Party has been scheduled for the 20th of December 2025. At 5 p.m please use this flyer to invite your family and friends to join in this golden event. God bless you as you do so in Jesus name.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center bg-accent-gold hover:bg-accent-gold/90 text-primary-900 px-10 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap"
            >
              <i className="ri-ticket-fill mr-2 text-xl"></i>
              Register Now - Free Entry
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
