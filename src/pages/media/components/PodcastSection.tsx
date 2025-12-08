
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PodcastSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const podcasts = [
    {
      title: 'Daily Devotional: Walking with God',
      episode: 'Episode 45',
      duration: '15:30',
      date: 'December 16, 2024',
      type: 'sermon'
    },
    {
      title: 'Faith Conversations: Living Victoriously',
      episode: 'Episode 23',
      duration: '28:45',
      date: 'December 14, 2024',
      type: 'sermon'
    },
    {
      title: 'Prayer Power Hour',
      episode: 'Episode 67',
      duration: '60:00',
      date: 'December 12, 2024',
      type: 'sermon'
    },
  ];

  const musicLinks = [
    {
      title: 'JRFAN Worship Collection',
      platform: 'Spotify',
      icon: 'ri-spotify-fill',
      color: 'text-green-600',
      url: 'https://open.spotify.com/search/jesus%20revival%20for%20all%20nations'
    },
    {
      title: 'Gospel Lane Media',
      platform: 'Spotify',
      icon: 'ri-spotify-fill',
      color: 'text-green-600',
      url: 'https://open.spotify.com/search/gospel%20lane%20media'
    },
    {
      title: 'Worship & Praise',
      platform: 'Spotify',
      icon: 'ri-spotify-fill',
      color: 'text-green-600',
      url: 'https://open.spotify.com/search/christian%20worship%20music'
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
            Audio Podcasts
          </h2>
          <p className="text-xl text-gray-600">
            Listen to our messages on the go
          </p>
        </motion.div>

        {/* Sermon Podcasts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-600 rounded-xl mb-4">
                <i className="ri-headphone-fill text-3xl text-white"></i>
              </div>
              <h3 className="font-display font-bold text-xl text-primary-900 mb-2">
                {podcast.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{podcast.episode}</p>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <i className="ri-time-line mr-1"></i>
                  {podcast.duration}
                </span>
                <span className="flex items-center">
                  <i className="ri-calendar-line mr-1"></i>
                  {podcast.date}
                </span>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer">
                <i className="ri-play-fill mr-2"></i>
                Listen Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Gospel Music Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-50 to-primary-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-black text-3xl text-primary-900 mb-3">
              Gospel Music & Worship
            </h3>
            <p className="text-gray-600 text-lg">
              Listen to inspiring worship music and gospel songs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {musicLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 flex items-center justify-center ${link.color} bg-gray-50 rounded-xl`}>
                    <i className={`${link.icon} text-3xl`}></i>
                  </div>
                  <i className="ri-external-link-line text-gray-400 text-xl"></i>
                </div>
                <h4 className="font-bold text-lg text-primary-900 mb-2">
                  {link.title}
                </h4>
                <p className="text-sm text-gray-600">
                  Listen on {link.platform}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Enjoy uplifting worship music from our church and Gospel Lane Media
            </p>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-spotify-fill mr-2 text-xl"></i>
              Explore More on Spotify
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
