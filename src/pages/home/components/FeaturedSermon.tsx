
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeaturedSermon() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [latestVideo, setLatestVideo] = useState<any>(null);
  const [recentVideos, setRecentVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      // YouTube Channel ID for Jesus Revival For All Nations
      const channelId = 'UCxxx'; // This will be replaced with actual channel ID
      const apiKey = 'YOUR_YOUTUBE_API_KEY'; // User needs to provide this
      
      // For now, using mock data that matches the channel
      const mockLatest = {
        id: 'latest-video',
        title: 'The Power of Faith in Action',
        description: 'Discover how faith transforms lives and moves mountains. In this powerful message, we explore the biblical principles of faith, salvation, and the finished work of Christ on the cross. Learn how to activate your faith and experience breakthrough in every area of your life through the power of God\'s Word and the Holy Spirit.',
        thumbnail: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
        publishedAt: 'December 15, 2024',
        speaker: 'Rev Irine Ashu',
        videoId: 'dQw4w9WgXcQ' // Replace with actual video ID
      };

      const mockRecent = [
        {
          id: 'video-2',
          title: 'Healing Through the Cross',
          thumbnail: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
          publishedAt: 'December 10, 2024',
          videoId: 'video2id'
        },
        {
          id: 'video-3',
          title: 'Revival Fire: Igniting Your Passion',
          thumbnail: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
          publishedAt: 'December 8, 2024',
          videoId: 'video3id'
        },
        {
          id: 'video-4',
          title: 'The Authority of the Believer',
          thumbnail: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
          publishedAt: 'December 3, 2024',
          videoId: 'video4id'
        }
      ];

      setLatestVideo(mockLatest);
      setRecentVideos(mockRecent);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">Loading latest message...</div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent-fire font-bold text-lg mb-2">LATEST MESSAGE</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Watch our most recent powerful sermon
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto">
              <img
                src={latestVideo?.thumbnail}
                alt={latestVideo?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group hover:bg-black/50 transition-all cursor-pointer">
                <div className="w-20 h-20 flex items-center justify-center bg-accent-fire rounded-full group-hover:scale-110 transition-transform">
                  <i className="ri-play-fill text-4xl text-white"></i>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-accent-fire text-white px-4 py-2 rounded-lg font-bold text-sm">
                NEW SERMON
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-display font-black text-3xl text-primary-900 mb-4">
                {latestVideo?.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {latestVideo?.description}
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <i className="ri-user-fill mr-2 text-primary-600"></i>
                <span className="font-semibold">{latestVideo?.speaker}</span>
                <span className="mx-3">•</span>
                <i className="ri-calendar-fill mr-2 text-primary-600"></i>
                <span>{latestVideo?.publishedAt}</span>
              </div>
              <div className="flex gap-4">
                <a
                  href={`https://www.youtube.com/watch?v=${latestVideo?.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-bold text-center transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-play-fill mr-2"></i>
                  Watch Now
                </a>
                <a
                  href="https://www.youtube.com/@JesusRevivalForAllNations?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-fire hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-youtube-fill mr-2"></i>
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display font-bold text-2xl text-primary-900 mb-6 text-center">
            Previous Messages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentVideos.map((video, index) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-video">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-all">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent-fire rounded-full">
                      <i className="ri-play-fill text-2xl text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-primary-900 mb-2 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-500">{video.publishedAt}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@JesusRevivalForAllNations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Watch More Sermons
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
