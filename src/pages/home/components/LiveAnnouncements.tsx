import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LiveAnnouncements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const announcements = [
    {
      icon: 'ri-calendar-event-fill',
      title: 'Sunday Service',
      description: 'Join us this Sunday for powerful worship and the Word. Service starts at 9:00 AM. Come expecting miracles!',
      time: '2 hours ago',
      color: 'bg-primary-600',
    },
    {
      icon: 'ri-praying-hands-fill',
      title: 'Prayer Request',
      description: 'Submit your prayer requests online. Our intercessory team is standing with you in faith for breakthrough.',
      time: '5 hours ago',
      color: 'bg-accent-gold',
    },
    {
      icon: 'ri-live-fill',
      title: 'Live Stream Tonight',
      description: 'Special revival service tonight at 7:00 PM. Watch live on YouTube, Facebook, and our website.',
      time: '8 hours ago',
      color: 'bg-accent-fire',
    },
  ];

  const prayerRequests = [
    { name: 'Sister Mary', request: 'Healing from illness', time: '1 hour ago' },
    { name: 'Brother Paul', request: 'Job breakthrough', time: '3 hours ago' },
    { name: 'Sister Ruth', request: 'Family restoration', time: '6 hours ago' },
    { name: 'Brother James', request: 'Financial provision', time: '12 hours ago' },
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
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600">
            Stay connected with what's happening in the ministry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 flex items-center justify-center ${announcement.color} rounded-xl mb-4`}>
                <i className={`${announcement.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-display font-bold text-xl text-primary-900 mb-2">
                {announcement.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{announcement.description}</p>
              <p className="text-sm text-gray-400 flex items-center">
                <i className="ri-time-line mr-1"></i>
                {announcement.time}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 sm:p-12 text-white"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-bold text-3xl">Prayer Requests</h3>
            <div className="w-3 h-3 bg-accent-fire rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {prayerRequests.map((request, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{request.name}</h4>
                    <p className="text-white/80">{request.request}</p>
                  </div>
                  <span className="text-sm text-white/60 whitespace-nowrap ml-4">{request.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-accent-gold hover:bg-accent-gold/90 text-primary-900 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
              <i className="ri-add-line mr-2"></i>
              Submit Your Prayer Request
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}