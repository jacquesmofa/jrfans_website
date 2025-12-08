import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GivingOptions() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [givingType, setGivingType] = useState<'one-time' | 'recurring'>('one-time');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];

  const givingCategories = [
    {
      icon: 'ri-church-fill',
      title: 'General Ministry',
      description: 'Support the overall operations, programs, and activities of JRFAN ministry.',
      color: 'from-primary-600 to-primary-800',
    },
    {
      icon: 'ri-building-fill',
      title: 'Building Fund',
      description: 'Help us build a state-of-the-art worship center to accommodate our growing congregation.',
      color: 'from-accent-gold to-yellow-600',
    },
    {
      icon: 'ri-global-fill',
      title: 'Missions & Outreach',
      description: 'Fund crusades, evangelism, and outreach programs to reach the unreached with the gospel.',
      color: 'from-accent-fire to-red-600',
    },
    {
      icon: 'ri-hand-heart-fill',
      title: 'Humanitarian Projects',
      description: 'Support orphanages, schools, medical clinics, and community development initiatives.',
      color: 'from-green-600 to-emerald-600',
    },
  ];

  const handleProceedToPayment = () => {
    setShowPaymentModal(true);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Ways to Give
          </h2>
          <p className="text-xl text-gray-600">
            Choose how you'd like to support the ministry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <h3 className="font-display font-bold text-3xl text-primary-900 mb-8">
              Make Your Donation
            </h3>

            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4">Giving Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setGivingType('one-time')}
                  className={`px-6 py-4 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    givingType === 'one-time'
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  onClick={() => setGivingType('recurring')}
                  className={`px-6 py-4 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    givingType === 'recurring'
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Monthly Partner
                </button>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4">Select Amount (CAD)</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                      selectedAmount === amount
                        ? 'bg-accent-gold text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount('');
                }}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none font-semibold"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4">Designation</label>
              <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none font-semibold cursor-pointer">
                <option>General Ministry</option>
                <option>Building Fund</option>
                <option>Missions & Outreach</option>
                <option>Humanitarian Projects</option>
              </select>
            </div>

            <button 
              onClick={handleProceedToPayment}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap"
            >
              <i className="ri-secure-payment-fill mr-2"></i>
              Proceed to Secure Payment
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              <i className="ri-lock-fill mr-1"></i>
              Your donation is secure and encrypted
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {givingCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                  <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-xl mb-3">
                    <i className={`${category.icon} text-3xl`}></i>
                  </div>
                  <h4 className="font-display font-bold text-2xl">{category.title}</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="font-display font-bold text-3xl mb-4">Other Ways to Give</h3>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            You can also support the ministry through e-transfer, bank transfer, or by mailing a check
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i className="ri-exchange-dollar-fill text-4xl text-accent-gold mb-3 block"></i>
              <h4 className="font-bold text-lg mb-2">E-Transfer (Interac)</h4>
              <p className="text-white/80 text-sm mb-3">Send directly to:</p>
              <p className="text-white font-semibold text-sm mb-2">jrfanscommunity@gmail.com</p>
              <div className="bg-white/10 rounded-lg p-3 text-xs">
                <p className="text-white/90 mb-1"><strong>Security Question:</strong> beneficiary?</p>
                <p className="text-white/90"><strong>Answer:</strong> jrfans</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i className="ri-bank-fill text-4xl text-accent-gold mb-3 block"></i>
              <h4 className="font-bold text-lg mb-2">Bank Transfer</h4>
              <p className="text-white/80 text-sm">Contact us for bank details</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i className="ri-mail-fill text-4xl text-accent-gold mb-3 block"></i>
              <h4 className="font-bold text-lg mb-2">Mail a Check</h4>
              <p className="text-white/80 text-sm">Send to our church address</p>
            </div>
          </div>
        </motion.div>

        {/* Donate Items Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-accent-gold to-yellow-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  src="https://readdy.ai/api/search-image?query=church%20equipment%20technology%20items%20cameras%20computers%20chairs%20worship%20ministry%20resources%20organized%20display%20professional%20setting&width=800&height=600&seq=items001&orientation=landscape"
                  alt="Donate Items"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <i className="ri-gift-fill text-5xl mb-4 block"></i>
                <h3 className="font-display font-bold text-3xl mb-4">
                  Donate Items for Ministry
                </h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Help us equip the ministry with essential items like cameras, computers, chairs, 
                  buses, and more. Your donation of equipment helps us reach more souls and serve better.
                </p>
                <div>
                  <a
                    href="/giving/items-donation"
                    className="inline-flex items-center bg-white hover:bg-gray-100 text-accent-gold px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-arrow-right-line mr-2"></i>
                    View Items Needed
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-fill text-3xl text-white"></i>
              </div>
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-2">
                Thank You for Your Generosity!
              </h3>
              <p className="text-gray-600">
                To complete your donation, please contact us directly
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <a
                href="mailto:jrfanscommunity@gmail.com"
                className="flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold transition-all cursor-pointer"
              >
                <i className="ri-mail-fill mr-2"></i>
                Email Us
              </a>
              <a
                href="tel:+16478035901"
                className="flex items-center justify-center bg-accent-gold hover:bg-accent-gold/90 text-white px-6 py-4 rounded-lg font-semibold transition-all cursor-pointer"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call Us
              </a>
            </div>

            <div className="bg-primary-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-700 text-center">
                <strong>Email:</strong> jrfanscommunity@gmail.com<br />
                <strong>Phone:</strong> +1 (647) 803-5901
              </p>
            </div>

            <button
              onClick={() => setShowPaymentModal(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}