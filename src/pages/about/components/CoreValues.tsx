import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CoreValues() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    {
      icon: 'ri-heart-fill',
      title: 'Love',
      description: 'We demonstrate the unconditional love of God to everyone, showing compassion, kindness, and grace in all we do.',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and accountability in all aspects of ministry, finances, and relationships.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: 'ri-trophy-fill',
      title: 'Excellence',
      description: 'We pursue excellence in worship, teaching, service, and every ministry activity, giving God our very best.',
      color: 'from-accent-gold to-yellow-600',
    },
    {
      icon: 'ri-team-fill',
      title: 'Unity',
      description: 'We value unity in the body of Christ, working together in love and harmony to advance God\'s Kingdom.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: 'ri-fire-fill',
      title: 'Passion',
      description: 'We are passionate about God, His Word, and His mission, serving with zeal and fervor for His glory.',
      color: 'from-accent-fire to-orange-600',
    },
    {
      icon: 'ri-hand-heart-fill',
      title: 'Service',
      description: 'We serve God and humanity with humility, using our gifts and resources to bless others and meet needs.',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our ministry and shape our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${value.color} p-8 text-white`}>
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-xl mb-4">
                  <i className={`${value.icon} text-3xl`}></i>
                </div>
                <h3 className="font-display font-bold text-2xl">{value.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}