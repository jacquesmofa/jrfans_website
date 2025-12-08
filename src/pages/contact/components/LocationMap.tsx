import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LocationMap() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
            Find Us Here
          </h2>
          <p className="text-xl text-gray-600">
            We're located in Brampton, Ontario, Canada
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8!2d-79.7624!3d43.7315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15d8c1234567%3A0x1234567890abcdef!2s101%20West%20Dr%2C%20Brampton%2C%20ON%20L6T%202J6%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JRFAN Location Map"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-6">
                Directions to Our Church
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <i className="ri-map-pin-line text-accent-gold text-xl mr-3 mt-1"></i>
                  <span>
                    <strong className="text-gray-900">From Downtown Brampton:</strong> Head west on Queen Street, turn right onto West Drive. Our church is located at Unit C2.
                  </span>
                </p>
                <p className="flex items-start">
                  <i className="ri-bus-line text-accent-gold text-xl mr-3 mt-1"></i>
                  <span>
                    <strong className="text-gray-900">Public Transit:</strong> Take Brampton Transit routes that service the West Drive area. Check Brampton Transit for the latest schedules.
                  </span>
                </p>
                <p className="flex items-start">
                  <i className="ri-parking-box-line text-accent-gold text-xl mr-3 mt-1"></i>
                  <span>
                    <strong className="text-gray-900">Parking:</strong> Ample parking space available for all visitors and members.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-6">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-user-smile-fill text-xl text-primary-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Warm Welcome</h4>
                    <p className="text-gray-600 text-sm">
                      Our greeters will welcome you with a smile and help you find a seat
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-music-fill text-xl text-primary-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Powerful Worship</h4>
                    <p className="text-gray-600 text-sm">
                      Experience dynamic worship that ushers you into God's presence
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-book-open-fill text-xl text-primary-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Life-Changing Messages</h4>
                    <p className="text-gray-600 text-sm">
                      Hear practical, biblical teaching that transforms your life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}