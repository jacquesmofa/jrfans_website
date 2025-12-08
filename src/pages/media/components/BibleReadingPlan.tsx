import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BibleReadingPlan() {
  const [selectedPlan, setSelectedPlan] = useState<'one-year' | 'two-year'>('one-year');

  const oneYearPlan = [
    { month: 'January', readings: 'Genesis 1-50, Matthew 1-28, Psalms 1-31' },
    { month: 'February', readings: 'Exodus 1-40, Mark 1-16, Psalms 32-59' },
    { month: 'March', readings: 'Leviticus 1-27, Numbers 1-36, Luke 1-24, Psalms 60-88' },
    { month: 'April', readings: 'Deuteronomy 1-34, Joshua 1-24, John 1-21, Psalms 89-106' },
    { month: 'May', readings: 'Judges 1-21, Ruth 1-4, 1 Samuel 1-31, Acts 1-28, Psalms 107-119' },
    { month: 'June', readings: '2 Samuel 1-24, 1 Kings 1-22, Romans 1-16, Psalms 120-134' },
    { month: 'July', readings: '2 Kings 1-25, 1 Chronicles 1-29, 1 Corinthians 1-16, Psalms 135-145' },
    { month: 'August', readings: '2 Chronicles 1-36, Ezra 1-10, 2 Corinthians 1-13, Galatians 1-6, Psalms 146-150' },
    { month: 'September', readings: 'Nehemiah 1-13, Esther 1-10, Job 1-42, Ephesians 1-6, Philippians 1-4' },
    { month: 'October', readings: 'Proverbs 1-31, Ecclesiastes 1-12, Colossians 1-4, 1 Thessalonians 1-5, 2 Thessalonians 1-3' },
    { month: 'November', readings: 'Song of Solomon 1-8, Isaiah 1-66, 1 Timothy 1-6, 2 Timothy 1-4' },
    { month: 'December', readings: 'Jeremiah 1-52, Lamentations 1-5, Titus 1-3, Philemon, Hebrews 1-13, James 1-5, 1 Peter 1-5, 2 Peter 1-3, 1 John 1-5, 2 John, 3 John, Jude, Revelation 1-22' }
  ];

  const twoYearPlan = [
    { period: 'Year 1 - January to June', readings: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, Matthew, Mark, Psalms 1-75' },
    { period: 'Year 1 - July to December', readings: '1 Samuel, 2 Samuel, 1 Kings, 2 Kings, Luke, John, Acts, Psalms 76-150' },
    { period: 'Year 2 - January to June', readings: '1 Chronicles, 2 Chronicles, Ezra, Nehemiah, Esther, Job, Romans, 1 Corinthians, 2 Corinthians, Galatians, Ephesians, Philippians' },
    { period: 'Year 2 - July to December', readings: 'Proverbs, Ecclesiastes, Song of Solomon, Isaiah, Jeremiah, Lamentations, Colossians, 1 Thessalonians, 2 Thessalonians, 1 Timothy, 2 Timothy, Titus, Philemon, Hebrews, James, 1 Peter, 2 Peter, 1 John, 2 John, 3 John, Jude, Revelation' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent-fire font-bold text-lg mb-2">GROW IN GOD\'S WORD</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Bible Reading Plans 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read through the entire Bible in one or two years. Choose the plan that works best for you and commit to daily time in God\'s Word.
          </p>
        </motion.div>

        {/* Plan Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setSelectedPlan('one-year')}
              className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedPlan === 'one-year'
                  ? 'bg-accent-fire text-white'
                  : 'text-gray-600 hover:text-primary-900'
              }`}
            >
              <i className="ri-calendar-fill mr-2"></i>
              One Year Plan
            </button>
            <button
              onClick={() => setSelectedPlan('two-year')}
              className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedPlan === 'two-year'
                  ? 'bg-accent-fire text-white'
                  : 'text-gray-600 hover:text-primary-900'
              }`}
            >
              <i className="ri-calendar-2-fill mr-2"></i>
              Two Year Plan
            </button>
          </div>
        </div>

        {/* One Year Plan */}
        {selectedPlan === 'one-year' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-4">
                One Year Bible Reading Plan
              </h3>
              <p className="text-gray-600 mb-6">
                Read through the entire Bible in 365 days. This plan takes you through the Old Testament, New Testament, Psalms, and Proverbs systematically.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {oneYearPlan.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-accent-fire rounded-lg mr-3">
                        <i className="ri-book-open-fill text-xl text-white"></i>
                      </div>
                      <h4 className="font-bold text-xl text-primary-900">{item.month}</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.readings}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 text-white text-center">
              <i className="ri-lightbulb-flash-fill text-5xl text-accent-gold mb-4 block"></i>
              <h3 className="font-display font-bold text-2xl mb-4">Daily Reading Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-bold mb-2">Set a Time</h4>
                  <p className="text-white/90 text-sm">Choose a consistent time each day for your Bible reading</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Find a Place</h4>
                  <p className="text-white/90 text-sm">Create a quiet space free from distractions</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Pray First</h4>
                  <p className="text-white/90 text-sm">Ask the Holy Spirit to illuminate God\'s Word</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Two Year Plan */}
        {selectedPlan === 'two-year' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-4">
                Two Year Bible Reading Plan
              </h3>
              <p className="text-gray-600 mb-6">
                Read through the entire Bible in 24 months at a more relaxed pace. Perfect for those who want more time to meditate on Scripture and go deeper in their study.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {twoYearPlan.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-accent-fire rounded-lg mr-4">
                        <i className="ri-book-2-fill text-2xl text-white"></i>
                      </div>
                      <h4 className="font-bold text-xl text-primary-900">{item.period}</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.readings}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl mb-6 text-center">Benefits of the Two Year Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <i className="ri-time-fill text-3xl text-accent-gold mr-4 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-2">More Time to Reflect</h4>
                    <p className="text-white/90 text-sm">Spend more time meditating on each passage and applying it to your life</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-book-mark-fill text-3xl text-accent-gold mr-4 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-2">Deeper Study</h4>
                    <p className="text-white/90 text-sm">Use commentaries and study guides to go deeper into God\'s Word</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-group-fill text-3xl text-accent-gold mr-4 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-2">Sustainable Pace</h4>
                    <p className="text-white/90 text-sm">A more manageable reading schedule that fits busy lifestyles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-heart-fill text-3xl text-accent-gold mr-4 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-2">Build Consistency</h4>
                    <p className="text-white/90 text-sm">Develop a lasting habit of daily Bible reading and devotion</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
            <i className="ri-download-cloud-fill text-5xl text-accent-fire mb-4 block"></i>
            <h3 className="font-display font-bold text-2xl text-primary-900 mb-4">
              Download Your Reading Plan
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Get a printable PDF version of your chosen reading plan to track your progress throughout the year
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-accent-fire text-white font-bold rounded-lg hover:bg-accent-fire/90 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
                <i className="ri-file-pdf-fill text-xl mr-2"></i>
                Download One Year Plan
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-primary-900 text-white font-bold rounded-lg hover:bg-primary-800 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
                <i className="ri-file-pdf-fill text-xl mr-2"></i>
                Download Two Year Plan
              </button>
            </div>
          </div>
        </motion.div>

        {/* Scripture Encouragement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-primary-900 mb-4 italic">
              "Your word is a lamp to my feet and a light to my path."
            </p>
            <p className="text-xl text-gray-600">- Psalm 119:105</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}