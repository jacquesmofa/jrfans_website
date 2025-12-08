import { motion } from 'framer-motion';

export default function HistoryVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-fire font-bold text-lg mb-2">OUR STORY & PURPOSE</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            History, Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 italic">
            "For I know the plans I have for you, declares the Lord" - Jeremiah 29:11
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=spiritual%20journey%20timeline%2C%20church%20history%20and%20growth%2C%20community%20building%20over%20years%2C%20ministry%20expansion%2C%20people%20serving%20together%2C%20ultra%20high%20definition%20photography&width=800&height=600&seq=history1&orientation=landscape"
                alt="Our History"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-3xl text-primary-900 mb-6">About Us</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-primary-700">JESUS REVIVAL FOR ALL NATIONS</strong> is a <strong>Home for Love, Freedom, Mercy, Rest, Restoration, Worship and Fellowship</strong>. This is a place of spiritual reawakening that helps to break the charms of Religion and the power of world traditions.
              </p>
              <p>
                At Jesus Revival For All Nations, believers are being taught to deepen their relationship with Christ through faith in the words of truth. Christ Gospel helps the world to break away from dry ritual and religious ceremonies and create a deep emotional need for a relationship with Christ.
              </p>
              <p className="text-xl font-bold text-accent-fire italic">
                HE LOVES YOU NO MATTER WHAT.
              </p>
              <p className="bg-primary-50 p-4 rounded-lg border-l-4 border-accent-gold italic">
                "For Christ himself has made peace between all nations and all tribes by making us all one people. He has broken down the wall of hostility that used to separate us." <br />
                <span className="font-bold text-primary-700">- Ephesians 2:14</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="font-display font-bold text-3xl text-primary-900 mb-6">Our Mission</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                To proclaim the Gospel of our LORD JESUS CHRIST through Fellowship and Evangelism; to bring to the limelight the mystery of the Cross to the uttermost part of the world; using the Gospel as a tool to educate the people on their right of Salvation and their Identity in Christ Jesus.
              </p>
              <p>
                The great love of God is shown through community programs and services that educate, equip, aid and empower.
              </p>
              <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-fire">
                <p className="text-lg font-bold text-primary-900 mb-2">We Are Called To:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="ri-check-line text-accent-fire text-xl mr-2 mt-1"></i>
                    <span>Proclaim the Gospel to all nations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-accent-fire text-xl mr-2 mt-1"></i>
                    <span>Educate people on their right of Salvation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-accent-fire text-xl mr-2 mt-1"></i>
                    <span>Demonstrate God's love through service</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=missionaries%20spreading%20gospel%2C%20evangelism%20outreach%2C%20people%20sharing%20faith%2C%20community%20service%20and%20love%2C%20helping%20others%20in%20Jesus%20name%2C%20ultra%20high%20definition%20photography&width=800&height=600&seq=mission1&orientation=landscape"
                alt="Our Mission"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=vision%20of%20future%20ministry%20growth%2C%20global%20impact%2C%20nations%20united%20in%20Christ%2C%20hope%20and%20transformation%2C%20spiritual%20awakening%20worldwide%2C%20ultra%20high%20definition%20photography&width=800&height=600&seq=vision1&orientation=landscape"
                alt="Our Vision"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-3xl text-primary-900 mb-6">Our Vision</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                To demonstrate the love of God to nations through the word of truth, leadership training, community programs and services for great empowerment.
              </p>
              <p className="text-xl font-bold text-primary-700 italic">
                "Where there is no vision, the people perish" - Proverbs 29:18
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="font-display font-bold text-3xl text-primary-900 mb-6">Our Impact</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-bold text-accent-fire">
                Touching lives, leading one soul at a time for Christ from nation to nations.
              </p>
              <p>
                We help in reconciling oneself with one's purpose by educating, equipping, aiding and empowering.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="font-bold text-primary-900 mb-3">JRFANS Is Also Involved In:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>Leadership/Skills Training</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>Empowerment Training & Counseling</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>Food Pantry & Clothing Drive for the Needy</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>Young Battalion & Cultural Diversity Programs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>No One is Left Behind Initiative</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>Water is Life Program</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>Support for Orphans & Local Church Building</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-fill text-accent-fire mr-2 mt-1"></i>
                    <span>Children's Recreational Programs & Bible Foundation</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=community%20impact%20and%20service%2C%20feeding%20the%20hungry%2C%20helping%20orphans%2C%20water%20wells%2C%20clothing%20drive%2C%20people%20serving%20with%20love%20and%20compassion%2C%20ultra%20high%20definition%20photography&width=800&height=600&seq=impact1&orientation=landscape"
                alt="Our Impact"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}