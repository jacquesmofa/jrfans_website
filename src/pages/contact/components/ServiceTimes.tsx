import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServiceTimes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const services = [
    {
      day: 'Sunday',
      name: 'Morning Worship Service',
      time: '10:00 AM - 12:30 PM',
      description: 'Join us for powerful worship, inspiring messages, and fellowship',
      icon: 'ri-sun-fill',
      color: 'from-accent-gold to-yellow-600',
    },
    {
      day: 'Wednesday',
      name: 'Midweek Bible Study',
      time: '7:00 PM - 9:00 PM',
      description: 'Deep dive into God\'s Word with interactive teaching and discussion',
      icon: 'ri-book-open-fill',
      color: 'from-primary-600 to-primary-800',
    },
    {
      day: 'Friday',
      name: 'Prayer & Intercession',
      time: '7:00 PM - 9:00 PM',
      description: 'Corporate prayer, worship, and seeking God\'s presence together',
      icon: 'ri-hands-pray-fill',
      color: 'from-accent-fire to-red-600',
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
            Service Times
          </h2>
          <p className="text-xl text-gray-600">
            Join us for worship, prayer, and fellowship at our Brampton location
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-2xl mb-4">
                  <i className={`${service.icon} text-4xl`}></i>
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">{service.day}</h3>
                <p className="text-white/90 text-lg font-semibold">{service.name}</p>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <i className="ri-time-fill text-2xl text-primary-600 mr-3"></i>
                  <span className="text-xl font-bold text-gray-900">{service.time}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="font-display font-bold text-3xl mb-4">
            First Time Visiting?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            We'd love to meet you! Come as you are and experience the warmth of our community. 
            No matter where you are in your spiritual journey, you are welcome here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jrfanscommunity@gmail.com?subject=First Time Visit Inquiry"
              className="inline-flex items-center justify-center bg-accent-gold hover:bg-yellow-500 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-fill mr-2"></i>
              Let Us Know You're Coming
            </a>
            <a
              href="tel:+16478035901"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 border-2 border-white/30 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call Us: +1 (647) 803-5901
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}