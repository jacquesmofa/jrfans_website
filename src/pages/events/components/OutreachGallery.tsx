import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OutreachGallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const outreachEvents = [
    {
      title: 'Street Evangelism',
      location: 'Downtown Brampton',
      date: 'December 2024',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      description: 'Sharing the gospel and distributing food to the homeless and needy in downtown Brampton.',
    },
    {
      title: 'Prison Ministry',
      location: 'Toronto South Detention Centre',
      date: 'November 2024',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
      description: 'Bringing hope and salvation to inmates through worship, preaching, and counseling.',
    },
    {
      title: 'Hospital Visitation',
      location: 'Brampton Civic Hospital',
      date: 'November 2024',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0011-1024x768.jpg',
      description: 'Praying for the sick, encouraging patients, and sharing God\'s love with hospital staff.',
    },
    {
      title: 'School Outreach',
      location: 'Local Brampton Schools',
      date: 'October 2024',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0012-1024x768.jpg',
      description: 'Teaching students about faith, character, and purpose through interactive sessions.',
    },
    {
      title: 'Community Outreach',
      location: 'Brampton & Mississauga',
      date: 'September 2024',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0013-1024x768.jpg',
      description: 'Taking the gospel to local communities with care packages, food distribution, and preaching.',
    },
    {
      title: 'Community Clean-Up',
      location: 'Brampton Neighborhoods',
      date: 'August 2024',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0014-1024x768.jpg',
      description: 'Serving the community by cleaning streets and public spaces while sharing God\'s love.',
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
            Outreach & Community Impact
          </h2>
          <p className="text-xl text-gray-600">
            Serving our community and spreading God's love through action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outreachEvents.map((outreach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="relative aspect-video">
                <img src={outreach.image} alt={outreach.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-display font-bold text-xl mb-1">{outreach.title}</h3>
                  <p className="text-sm text-white/90 flex items-center">
                    <i className="ri-map-pin-line mr-1"></i>
                    {outreach.location}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">{outreach.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {outreach.date}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center cursor-pointer">
                    View Gallery
                    <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}