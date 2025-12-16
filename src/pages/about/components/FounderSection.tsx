import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-fire font-bold text-lg mb-2">GOD'S CALLING</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            The Lead Pastor's Story
          </h2>
          <p className="text-xl text-gray-600 italic">
            "Before I formed you in the womb I knew you" - Jeremiah 1:5
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20woman%20pastor%20and%20ministry%20leader%2C%20warm%20smile%2C%20spiritual%20authority%2C%20compassionate%20expression%2C%20church%20background%2C%20dignified%20and%20inspiring%2C%20ultra%20high%20definition%20photography&width=600&height=800&seq=founder1&orientation=portrait"
                  alt="Rev. Irine Ashu, PhD"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-gold text-primary-900 p-6 rounded-lg shadow-xl">
                <p className="font-display font-bold text-2xl">Rev.</p>
                <p className="font-display font-black text-3xl">IRINE ASHU</p>
                <p className="text-sm font-medium mt-1">PhD - Founder & Lead Pastor</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent-fire">
                <h3 className="font-display font-bold text-2xl text-primary-900 mb-4">A Divine Calling from Childhood</h3>
                <p className="mb-4">
                  At a very tender age, I loved God with an unusual passion. As a child at the tender age of six, I would always cry in church whenever the message of the Crucifixion of Jesus Christ was being preached.
                </p>
                <p className="mb-4">
                  At that time, we had a priest who loved to raise some particular songs after his messages. For example, he liked to intone <em>"Hark the voice of Jesus calling. Who will go and work today?"</em> Another song he liked was <em>"Whom shall I send and who will go for us?"</em>
                </p>
                <p className="mb-4">
                  Whenever these songs were being sung in church, I would be crying and telling my parents to answer the call of Jesus and go work for Him.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-accent-gold">
                <h4 className="font-bold text-xl text-primary-900 mb-3">The Moment Everything Changed</h4>
                <p className="mb-4">
                  One day in church when I was 8 years old, as the congregation was singing one of those songs, I told my Papa that Jesus is calling him, and that he should answer Jesus. My sweet Father turned around and looked at me and with his sweet gentle voice, said something interesting.
                </p>
                <p className="mb-4 text-lg font-bold text-accent-fire italic">
                  He said, "my daughter you can answer Jesus if you want to."
                </p>
                <p className="mb-4">
                  At that moment, there was a certain peace and joy that came upon me and my eyes were filled with tears of joy. So, I asked him; "Papa, so I can also say yes to Jesus?" He said, "Yes, my child you can if you want to."
                </p>
                <p className="mb-4 text-lg font-bold text-primary-900">
                  Those words from my father were very powerful and from then, I walked around telling God to send me and use me to reach many with the love and compassion that He has for all men. I will never forget that lovely day.
                </p>
                
                <Link
                  to="/founder-story"
                  className="inline-flex items-center bg-accent-fire hover:bg-accent-fire/90 text-white px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg mt-4 cursor-pointer whitespace-nowrap"
                >
                  Read More
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>

              <div className="bg-gradient-to-r from-accent-fire to-accent-gold text-white p-6 rounded-lg shadow-xl">
                <p className="text-xl font-bold italic text-center">
                  "Here am I. Send me!" - Isaiah 6:8
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}