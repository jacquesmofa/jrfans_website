import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TransparencySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fundAllocation = [
    { category: 'Ministry Operations', percentage: 40, color: 'bg-primary-600' },
    { category: 'Missions & Outreach', percentage: 25, color: 'bg-accent-fire' },
    { category: 'Building & Facilities', percentage: 20, color: 'bg-accent-gold' },
    { category: 'Humanitarian Projects', percentage: 15, color: 'bg-green-600' },
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
            Financial Transparency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to stewarding your gifts with integrity and accountability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-3xl text-primary-900 mb-6">
              How Your Donations Are Used
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Every dollar you give is carefully allocated to advance God's Kingdom and transform lives. We maintain strict financial accountability and regularly audit our books to ensure transparency and proper stewardship of your generous contributions.
            </p>
            <div className="space-y-6">
              {fundAllocation.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700">{item.category}</span>
                    <span className="font-bold text-primary-900">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`${item.color} h-full rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="font-display font-bold text-2xl text-primary-900 mb-6">
              Our Commitment to You
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-shield-check-fill text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">100% Accountability</h4>
                  <p className="text-gray-600 text-sm">
                    Regular financial audits and transparent reporting to our congregation and partners
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-hand-heart-fill text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Faithful Stewardship</h4>
                  <p className="text-gray-600 text-sm">
                    Every gift is used wisely and strategically to maximize Kingdom impact
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-file-list-fill text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Annual Reports</h4>
                  <p className="text-gray-600 text-sm">
                    Detailed annual reports available to all donors showing ministry impact and finances
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-lock-fill text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Secure Transactions</h4>
                  <p className="text-gray-600 text-sm">
                    All online donations are processed through secure, encrypted payment systems
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}