import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-accent-fire/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white mb-6">
            Ready to Experience<br />God's Power?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't wait another moment. Join us for worship, receive prayer, and encounter the living God. Your breakthrough is waiting!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="bg-accent-gold hover:bg-accent-gold/90 text-primary-900 px-10 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap flex items-center"
            >
              <i className="ri-map-pin-fill mr-2 text-xl"></i>
              Visit Us This Sunday
            </Link>
            <Link
              to="/giving"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 border-2 border-white/50 whitespace-nowrap flex items-center"
            >
              <i className="ri-hand-heart-fill mr-2 text-xl"></i>
              Partner With Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-5xl font-display font-black text-accent-gold mb-2">1000+</div>
            <p className="text-white text-lg">Souls Saved</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-5xl font-display font-black text-accent-gold mb-2">500+</div>
            <p className="text-white text-lg">Miracles Witnessed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-5xl font-display font-black text-accent-gold mb-2">50+</div>
            <p className="text-white text-lg">Nations Reached</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}