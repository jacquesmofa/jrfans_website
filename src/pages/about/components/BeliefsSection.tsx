import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BeliefsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const beliefs = [
    {
      icon: 'ri-book-open-fill',
      title: 'The Holy Bible',
      description: 'We believe the Bible is the inspired, infallible, and authoritative Word of God. It is our final authority for faith, doctrine, and Christian living. Every word is God-breathed and profitable for teaching, correction, and training in righteousness.',
    },
    {
      icon: 'ri-cross-fill',
      title: 'The Trinity',
      description: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit. Each person of the Trinity is fully God, co-equal, and co-eternal. They work in perfect unity for the salvation and sanctification of humanity.',
    },
    {
      icon: 'ri-heart-pulse-fill',
      title: 'Salvation by Grace',
      description: 'We believe salvation is a free gift of God through faith in Jesus Christ alone. It is not earned by works but received by grace. Jesus died on the cross for our sins, was buried, and rose again on the third day, securing eternal life for all who believe.',
    },
    {
      icon: 'ri-water-flash-fill',
      title: 'Water Baptism',
      description: 'We believe in water baptism by immersion as an outward expression of an inward faith. It symbolizes the death, burial, and resurrection of Jesus Christ and represents the believer\'s identification with Christ in His death and new life.',
    },
    {
      icon: 'ri-fire-fill',
      title: 'Baptism of the Holy Spirit',
      description: 'We believe in the baptism of the Holy Spirit as a distinct experience subsequent to salvation. This empowerment enables believers to witness boldly, operate in spiritual gifts, and live victoriously. The evidence of this baptism includes speaking in tongues and a transformed life.',
    },
    {
      icon: 'ri-hand-heart-fill',
      title: 'Divine Healing',
      description: 'We believe in divine healing for the body, mind, and spirit. By the stripes of Jesus, we are healed. Healing is part of the atonement and is available to all believers through faith in God\'s Word and the power of prayer.',
    },
    {
      icon: 'ri-church-fill',
      title: 'The Church',
      description: 'We believe the Church is the body of Christ, composed of all born-again believers. It is called to worship God, make disciples, demonstrate love, and advance the Kingdom of God on earth through evangelism, teaching, and service.',
    },
    {
      icon: 'ri-time-fill',
      title: 'Second Coming of Christ',
      description: 'We believe in the personal, visible, and imminent return of Jesus Christ. He will come again to rapture His Church, judge the world, and establish His eternal Kingdom. We live in expectation and readiness for His glorious appearing.',
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
            Our Core Beliefs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Biblical truths that form the foundation of our faith and ministry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl mb-4">
                <i className={`${belief.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-display font-bold text-xl text-primary-900 mb-3">
                {belief.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{belief.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}