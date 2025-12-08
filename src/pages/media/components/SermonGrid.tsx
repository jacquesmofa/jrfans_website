import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SermonGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedSermon, setSelectedSermon] = useState<number | null>(null);
  const [sermons, setSermons] = useState<any[]>([]);

  useEffect(() => {
    // Mock data - In production, this would fetch from YouTube API
    const mockSermons = [
      {
        title: 'The Power of Faith in Action',
        speaker: 'Rev Irine Ashu',
        date: 'December 15, 2024',
        series: 'Walking in Victory',
        topic: 'Faith',
        duration: '45:30',
        views: '2.5K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
        description: 'Discover how faith transforms lives and moves mountains. Learn to activate your faith and experience breakthrough.',
        videoId: 'video1'
      },
      {
        title: 'Healing Through the Cross',
        speaker: 'Rev Irine Ashu',
        date: 'December 10, 2024',
        series: 'The Finished Work',
        topic: 'Healing',
        duration: '38:15',
        views: '1.8K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
        description: 'By His stripes we are healed. Understand the biblical foundation for divine healing and receive your miracle.',
        videoId: 'video2'
      },
      {
        title: 'Revival Fire: Igniting Your Passion',
        speaker: 'Rev Irine Ashu',
        date: 'December 8, 2024',
        series: 'Revival Fire',
        topic: 'Revival',
        duration: '52:20',
        views: '3.2K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
        description: 'Experience a fresh fire of revival in your heart. Learn how to maintain spiritual passion and hunger for God.',
        videoId: 'video3'
      },
      {
        title: 'The Authority of the Believer',
        speaker: 'Rev Irine Ashu',
        date: 'December 3, 2024',
        series: 'Walking in Victory',
        topic: 'Faith',
        duration: '41:45',
        views: '2.1K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
        description: 'Understand your authority in Christ and learn to exercise dominion over circumstances through faith.',
        videoId: 'video4'
      },
      {
        title: 'Worship in Spirit and Truth',
        speaker: 'Rev Irine Ashu',
        date: 'December 1, 2024',
        series: 'True Worship',
        topic: 'Worship',
        duration: '35:50',
        views: '1.5K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
        description: 'Discover what it means to worship God in spirit and truth. Transform your worship experience.',
        videoId: 'video5'
      },
      {
        title: 'Prayer That Gets Results',
        speaker: 'Rev Irine Ashu',
        date: 'November 26, 2024',
        series: 'The Power of Prayer',
        topic: 'Prayer',
        duration: '48:30',
        views: '2.8K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
        description: 'Learn the secrets of effective prayer that brings breakthrough, healing, and answered petitions.',
        videoId: 'video6'
      },
      {
        title: 'Salvation: The Greatest Gift',
        speaker: 'Rev Irine Ashu',
        date: 'November 24, 2024',
        series: 'The Gospel Message',
        topic: 'Salvation',
        duration: '42:15',
        views: '3.5K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
        description: 'Understand the full scope of salvation and what it means to be born again through Christ.',
        videoId: 'video7'
      },
      {
        title: 'Living by the Spirit',
        speaker: 'Rev Irine Ashu',
        date: 'November 19, 2024',
        series: 'Spirit-Led Life',
        topic: 'Holy Spirit',
        duration: '39:40',
        views: '1.9K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
        description: 'Learn to walk in the Spirit and experience the fullness of the Holy Spirit in your daily life.',
        videoId: 'video8'
      },
      {
        title: 'Overcoming Fear with Faith',
        speaker: 'Rev Irine Ashu',
        date: 'November 17, 2024',
        series: 'Faith That Moves Mountains',
        topic: 'Faith',
        duration: '44:25',
        views: '2.3K',
        image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
        description: 'Conquer fear and anxiety through faith in God. Walk in confidence and peace regardless of circumstances.',
        videoId: 'video9'
      },
    ];

    setSermons(mockSermons);
  }, []);

  return (
    <>
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedSermon(index)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative aspect-video">
                  <img src={sermon.image} alt={sermon.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                    <div className="w-16 h-16 flex items-center justify-center bg-accent-fire rounded-full">
                      <i className="ri-play-fill text-3xl text-white"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {sermon.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-xs font-semibold mb-3">
                    {sermon.series}
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary-900 mb-2 line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{sermon.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <i className="ri-user-fill mr-1"></i>
                      {sermon.speaker}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-eye-fill mr-1"></i>
                      {sermon.views}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-gray-400 flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {sermon.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedSermon !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSermon(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden cursor-default"
            >
              <div className="relative aspect-video">
                <img
                  src={sermons[selectedSermon].image}
                  alt={sermons[selectedSermon].title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedSermon(null)}
                  className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-white"></i>
                </button>
              </div>
              <div className="p-8">
                <h2 className="font-display font-bold text-3xl text-primary-900 mb-4">
                  {sermons[selectedSermon].title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">{sermons[selectedSermon].description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <i className="ri-user-fill mr-2 text-primary-600"></i>
                    <span>{sermons[selectedSermon].speaker}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="ri-calendar-fill mr-2 text-primary-600"></i>
                    <span>{sermons[selectedSermon].date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="ri-time-fill mr-2 text-primary-600"></i>
                    <span>{sermons[selectedSermon].duration}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-bold transition-all whitespace-nowrap">
                    <i className="ri-play-fill mr-2"></i>
                    Watch Now
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-lg font-bold transition-all whitespace-nowrap">
                    <i className="ri-download-fill mr-2"></i>
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}