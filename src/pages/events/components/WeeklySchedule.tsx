import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WeeklySchedule() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const schedule = [
    {
      day: 'Sunday',
      services: [
        {
          name: 'Sunday Worship Service',
          time: '9:00 AM - 12:00 PM',
          description: 'Join us for powerful worship, inspiring messages, and fellowship. Experience the presence of God as we gather together.',
          icon: 'ri-church-fill',
          color: 'from-accent-fire to-red-600',
        },
      ],
    },
    {
      day: 'Wednesday',
      services: [
        {
          name: 'Midweek Service',
          time: '7:00 PM - 9:00 PM',
          description: 'Bible study, prayer, and teaching. Grow deeper in your faith and understanding of God\'s Word.',
          icon: 'ri-book-open-fill',
          color: 'from-primary-600 to-primary-800',
        },
      ],
    },
    {
      day: 'Friday',
      services: [
        {
          name: 'Youth Night',
          time: '6:00 PM - 8:30 PM',
          description: 'Dynamic worship and relevant teaching for young people. Connect with peers and grow in your relationship with God.',
          icon: 'ri-user-star-fill',
          color: 'from-accent-gold to-yellow-600',
        },
        {
          name: 'Prayer & Intercession',
          time: '9:00 PM - 11:00 PM',
          description: 'Powerful prayer meeting where we intercede for nations, families, and personal breakthroughs.',
          icon: 'ri-praying-hands-fill',
          color: 'from-purple-600 to-indigo-600',
        },
      ],
    },
    {
      day: 'Saturday',
      services: [
        {
          name: 'Evangelism Outreach',
          time: '10:00 AM - 2:00 PM',
          description: 'Join us as we take the gospel to the streets, sharing God\'s love and winning souls for Christ.',
          icon: 'ri-map-pin-user-fill',
          color: 'from-green-600 to-emerald-600',
        },
      ],
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
            Weekly Schedule
          </h2>
          <p className="text-xl text-gray-600">
            Regular services and programs throughout the week
          </p>
        </motion.div>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
            >
              <h3 className="font-display font-bold text-3xl text-primary-900 mb-6 flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-accent-gold rounded-xl mr-4">
                  <i className="ri-calendar-fill text-2xl text-white"></i>
                </div>
                {day.day}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {day.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                  >
                    <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                      <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-xl mb-4">
                        <i className={`${service.icon} text-3xl`}></i>
                      </div>
                      <h4 className="font-display font-bold text-2xl mb-2">{service.name}</h4>
                      <p className="text-white/90 font-semibold flex items-center">
                        <i className="ri-time-fill mr-2"></i>
                        {service.time}
                      </p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}