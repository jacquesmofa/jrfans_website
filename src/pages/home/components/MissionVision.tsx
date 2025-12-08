import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MissionVision() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cards = [
    {
      icon: 'ri-fire-fill',
      title: 'Revival',
      description: 'Igniting the fire of revival in hearts across all nations, bringing spiritual awakening and transformation through the power of the Holy Spirit.',
      color: 'from-accent-fire to-red-600',
    },
    {
      icon: 'ri-heart-fill',
      title: "God's Love",
      description: 'Demonstrating the unconditional love of God to every person, showing compassion, mercy, and grace as we minister to the broken and lost.',
      color: 'from-accent-gold to-yellow-600',
    },
    {
      icon: 'ri-cross-fill',
      title: 'Salvation',
      description: 'Proclaiming the finished work of Christ on the cross, leading souls to eternal salvation and freedom through faith in Jesus Christ our Lord.',
      color: 'from-primary-600 to-primary-800',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Called to spread the gospel of Jesus Christ and bring revival to all nations through powerful worship, teaching, and outreach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${card.color} p-8 text-white`}>
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-xl mb-4">
                  <i className={`${card.icon} text-4xl`}></i>
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{card.title}</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}