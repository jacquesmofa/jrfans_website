import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MinistryImpact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { number: '10,000+', label: 'Souls Saved', icon: 'ri-user-heart-fill' },
    { number: '50+', label: 'Nations Reached', icon: 'ri-global-fill' },
    { number: '5,000+', label: 'Miracles Witnessed', icon: 'ri-sparkling-fill' },
    { number: '100+', label: 'Crusades Held', icon: 'ri-calendar-event-fill' },
    { number: '20+', label: 'Churches Planted', icon: 'ri-church-fill' },
    { number: '500+', label: 'Leaders Trained', icon: 'ri-graduation-cap-fill' },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Our Ministry Impact
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            By God's grace, we have witnessed incredible transformation and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-accent-gold rounded-xl mx-auto mb-4">
                <i className={`${stat.icon} text-3xl text-white`}></i>
              </div>
              <div className="text-5xl font-display font-black text-white mb-2">{stat.number}</div>
              <p className="text-white/90 text-lg font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}