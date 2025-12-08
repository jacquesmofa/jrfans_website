
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function LiveStreamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-accent-fire/10 text-accent-fire px-6 py-3 rounded-full font-bold text-sm mb-6">
            <div className="w-3 h-3 bg-accent-fire rounded-full animate-pulse mr-2"></div>
            LIVE NOW
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Watch Live Service
          </h2>
          <p className="text-xl text-gray-600">
            Join us live every Sunday at 9:00 AM and Wednesday at 7:00 PM
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto"
        >
          {showVideo ? (
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=UCxxx&autoplay=1"
              title="Live Stream"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src="https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg"
                alt="Live Stream"
                className="w-full h-full object-cover"
              />
              <div 
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 bg-black/40 flex items-center justify-center group hover:bg-black/50 transition-all cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-24 h-24 flex items-center justify-center bg-accent-fire rounded-full group-hover:scale-110 transition-transform mb-4 mx-auto">
                    <i className="ri-play-fill text-5xl text-white"></i>
                  </div>
                  <p className="text-white text-xl font-bold">Click to Watch Live</p>
                </div>
              </div>
            </>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <a
            href="https://www.youtube.com/@JesusRevivalForAllNations"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 cursor-pointer"
          >
            <i className="ri-youtube-fill text-3xl text-red-600"></i>
            <span className="font-bold text-gray-700">Watch on YouTube</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570726168326"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 cursor-pointer"
          >
            <i className="ri-facebook-fill text-3xl text-blue-600"></i>
            <span className="font-bold text-gray-700">Watch on Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com/@jesusrevivalforallnations"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 cursor-pointer"
          >
            <i className="ri-tiktok-fill text-3xl text-gray-900"></i>
            <span className="font-bold text-gray-700">Watch on TikTok</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
