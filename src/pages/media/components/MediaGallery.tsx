import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MediaGallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [photosToShow, setPhotosToShow] = useState(8);
  const [videosToShow, setVideosToShow] = useState(8);

  // Expanded photo gallery - easily add more photos here
  const photos = [
    {
      url: 'https://readdy.ai/api/search-image?query=vibrant%20church%20worship%20service%20with%20raised%20hands%20praising%20God%2C%20diverse%20congregation%2C%20joyful%20atmosphere%2C%20modern%20church%20interior%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery1&orientation=landscape',
      title: 'Sunday Worship Service',
      date: 'Recent Service',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20community%20fellowship%20gathering%2C%20people%20sharing%20meals%20together%2C%20warm%20atmosphere%2C%20diverse%20group%2C%20love%20and%20unity%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery2&orientation=landscape',
      title: 'Community Fellowship',
      date: 'Fellowship Event',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20baptism%20ceremony%2C%20water%20baptism%2C%20spiritual%20celebration%2C%20joyful%20moment%2C%20congregation%20witnessing%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery3&orientation=landscape',
      title: 'Baptism Celebration',
      date: 'Special Service',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20youth%20group%20worship%2C%20young%20people%20praising%20God%2C%20energetic%20worship%2C%20modern%20church%20setting%2C%20inspiring%20atmosphere%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery4&orientation=landscape',
      title: 'Youth Ministry',
      date: 'Youth Service',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20prayer%20meeting%2C%20people%20praying%20together%2C%20hands%20joined%20in%20prayer%2C%20spiritual%20atmosphere%2C%20intimate%20gathering%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery5&orientation=landscape',
      title: 'Prayer Meeting',
      date: 'Weekly Prayer',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20outreach%20program%2C%20community%20service%2C%20helping%20people%2C%20charity%20work%2C%20volunteers%20serving%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery6&orientation=landscape',
      title: 'Community Outreach',
      date: 'Outreach Program',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20worship%20team%20rehearsal%2C%20musicians%20practicing%2C%20band%20members%2C%20modern%20worship%20instruments%2C%20dedication%20and%20passion%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery7&orientation=landscape',
      title: 'Worship Team',
      date: 'Ministry Team',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20childrens%20ministry%2C%20kids%20learning%20bible%20stories%2C%20sunday%20school%2C%20joyful%20children%2C%20teachers%20engaging%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery8&orientation=landscape',
      title: 'Children\'s Ministry',
      date: 'Kids Program',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=food%20bank%20volunteers%20distributing%20food%20packages%20to%20families%2C%20community%20service%2C%20helping%20neighbors%2C%20charity%20work%2C%20compassionate%20volunteers%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery9&orientation=landscape',
      title: 'Food Bank Ministry',
      date: 'Community Service',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20seniors%20ministry%2C%20elderly%20people%20fellowship%2C%20warm%20gathering%2C%20intergenerational%20community%2C%20caring%20atmosphere%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery10&orientation=landscape',
      title: 'Seniors Fellowship',
      date: 'Ministry Event',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20christmas%20celebration%20service%2C%20festive%20decorations%2C%20joyful%20congregation%2C%20holiday%20worship%2C%20special%20event%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery11&orientation=landscape',
      title: 'Christmas Celebration',
      date: 'Special Event',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20easter%20sunrise%20service%2C%20outdoor%20worship%2C%20dawn%20celebration%2C%20resurrection%20joy%2C%20spiritual%20gathering%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery12&orientation=landscape',
      title: 'Easter Service',
      date: 'Special Service',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20missions%20team%20preparing%20for%20outreach%2C%20volunteers%20organizing%20supplies%2C%20teamwork%2C%20dedication%2C%20mission%20preparation%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery13&orientation=landscape',
      title: 'Missions Preparation',
      date: 'Outreach Team',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20womens%20ministry%20gathering%2C%20ladies%20fellowship%2C%20prayer%20circle%2C%20sisterhood%2C%20spiritual%20support%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery14&orientation=landscape',
      title: 'Women\'s Ministry',
      date: 'Fellowship',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20mens%20ministry%20breakfast%2C%20men%20gathering%2C%20fellowship%20meal%2C%20brotherhood%2C%20spiritual%20growth%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery15&orientation=landscape',
      title: 'Men\'s Ministry',
      date: 'Fellowship Event',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=church%20small%20group%20bible%20study%2C%20intimate%20gathering%2C%20people%20studying%20scripture%20together%2C%20discussion%2C%20spiritual%20growth%2C%20professional%20photography%20ultra%20hd&width=800&height=600&seq=gallery16&orientation=landscape',
      title: 'Small Group Study',
      date: 'Weekly Meeting',
    },
  ];

  // Expanded video gallery - easily add more videos here
  const videos = [
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=church%20worship%20service%20video%20thumbnail%2C%20dynamic%20worship%20scene%2C%20professional%20video%20production%2C%20engaging%20visual&width=800&height=450&seq=video1&orientation=landscape',
      title: 'Sunday Service Highlights',
      duration: '15:30',
    },
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=church%20testimony%20video%20thumbnail%2C%20person%20sharing%20testimony%2C%20emotional%20moment%2C%20inspiring%20story&width=800&height=450&seq=video2&orientation=landscape',
      title: 'Powerful Testimonies',
      duration: '12:45',
    },
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=church%20community%20event%20video%20thumbnail%2C%20people%20gathering%2C%20celebration%2C%20joyful%20atmosphere&width=800&height=450&seq=video3&orientation=landscape',
      title: 'Community Events',
      duration: '20:15',
    },
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=church%20worship%20music%20video%20thumbnail%2C%20worship%20band%20performing%2C%20passionate%20worship%2C%20professional%20production&width=800&height=450&seq=video4&orientation=landscape',
      title: 'Worship Sessions',
      duration: '18:20',
    },
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=food%20bank%20distribution%20video%20thumbnail%2C%20volunteers%20serving%20families%2C%20community%20outreach%2C%20charity%20work&width=800&height=450&seq=video5&orientation=landscape',
      title: 'Food Bank Outreach',
      duration: '10:30',
    },
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=church%20baptism%20ceremony%20video%20thumbnail%2C%20water%20baptism%20celebration%2C%20spiritual%20milestone%2C%20joyful%20moment&width=800&height=450&seq=video6&orientation=landscape',
      title: 'Baptism Services',
      duration: '14:20',
    },
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=church%20youth%20ministry%20video%20thumbnail%2C%20young%20people%20worship%2C%20energetic%20praise%2C%20youth%20event&width=800&height=450&seq=video7&orientation=landscape',
      title: 'Youth Ministry Moments',
      duration: '16:45',
    },
    {
      thumbnail: 'https://readdy.ai/api/search-image?query=church%20missions%20trip%20video%20thumbnail%2C%20outreach%20team%20serving%2C%20international%20mission%2C%20community%20impact&width=800&height=450&seq=video8&orientation=landscape',
      title: 'Missions Trip Recap',
      duration: '22:10',
    },
  ];

  const loadMorePhotos = () => {
    setPhotosToShow(prev => prev + 8);
  };

  const loadMoreVideos = () => {
    setVideosToShow(prev => prev + 8);
  };

  const displayedPhotos = photos.slice(0, photosToShow);
  const displayedVideos = videos.slice(0, videosToShow);
  const hasMorePhotos = photosToShow < photos.length;
  const hasMoreVideos = videosToShow < videos.length;

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Ministry <span className="text-accent-gold">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Capturing moments of God's presence and community fellowship
          </p>
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <i className="ri-image-fill mr-2"></i>
              Photos ({photos.length})
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <i className="ri-video-fill mr-2"></i>
              Videos ({videos.length})
            </button>
          </div>
        </motion.div>

        {activeTab === 'photos' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {displayedPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="w-full h-64">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm text-white/80">{photo.date}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ri-zoom-in-line text-white text-xl"></i>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {hasMorePhotos && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 text-center"
              >
                <button
                  onClick={loadMorePhotos}
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-add-circle-line mr-2 text-xl"></i>
                  Load More Photos
                  <span className="ml-2 text-sm opacity-90">
                    ({photos.length - photosToShow} remaining)
                  </span>
                </button>
              </motion.div>
            )}
          </>
        )}

        {activeTab === 'videos' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {displayedVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="w-full h-64">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full group-hover:scale-110 transition-transform">
                        <i className="ri-play-fill text-3xl text-primary-600"></i>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/80">
                          <i className="ri-time-line mr-1"></i>
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {hasMoreVideos && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 text-center"
              >
                <button
                  onClick={loadMoreVideos}
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-add-circle-line mr-2 text-xl"></i>
                  Load More Videos
                  <span className="ml-2 text-sm opacity-90">
                    ({videos.length - videosToShow} remaining)
                  </span>
                </button>
              </motion.div>
            )}
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Want to share your photos or videos from our services and events?
          </p>
          <a
            href="mailto:jrfanscommunity@gmail.com?subject=Media Gallery Submission"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            <i className="ri-upload-cloud-fill mr-2 text-xl"></i>
            Submit Your Media
          </a>
        </motion.div>
      </div>
    </section>
  );
}