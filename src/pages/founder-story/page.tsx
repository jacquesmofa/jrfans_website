import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FounderStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=open%20holy%20bible%20with%20divine%20light%20rays%20shining%20from%20pages%2C%20spiritual%20illumination%20and%20calling%2C%20God%20word%20bringing%20hope%20and%20direction%2C%20inspiring%20faith%20scene%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=founderstoryhero&orientation=landscape"
            alt="Founder Story Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-gold font-bold text-xl mb-4 tracking-wide">
              A DIVINE CALLING
            </p>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-2xl">
              Rev. <span className="text-accent-gold">Irine Ashu, PhD</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed italic drop-shadow-lg">
              "Here am I. Send me!" - Isaiah 6:8
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link
              to="/about"
              className="inline-flex items-center text-accent-fire hover:text-accent-fire/80 font-bold mb-8 cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to About Us
            </Link>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-8">
              {/* Header with Image */}
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20woman%20pastor%20and%20ministry%20leader%2C%20warm%20smile%2C%20spiritual%20authority%2C%20compassionate%20expression%2C%20church%20background%2C%20dignified%20and%20inspiring%2C%20ultra%20high%20definition%20photography&width=600&height=600&seq=founderprofile&orientation=squarish"
                    alt="Rev. Irine Ashu, PhD"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-display font-black text-4xl text-primary-900 mb-2">
                    JESUS REVIVAL FOR ALL NATIONS
                  </h2>
                  <h3 className="font-display font-bold text-3xl text-accent-fire mb-4">
                    Rev. IRINE ASHU, PhD
                  </h3>
                  <p className="text-xl text-gray-600 font-medium">Founder & Lead Pastor</p>
                </div>
              </div>

              {/* The Founder Section */}
              <div className="prose prose-lg max-w-none">
                <h3 className="font-display font-bold text-3xl text-primary-900 mb-6 border-b-4 border-accent-gold pb-3">
                  The Founder
                </h3>

                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At a very tender age growing up in Cameroon, I loved God with an unusual passion. As a child at the tender age of six, I would always cry in church whenever the message of the Crucifixion of Jesus Christ was being preached.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At that time, we had a priest who loved to raise some particular songs after his messages. For example, he liked to intone <em className="text-accent-fire font-semibold">"Hark the voice of Jesus calling. Who will go and work today?"</em> Another song he liked was <em className="text-accent-fire font-semibold">"Whom shall I send and who will go for us?"</em>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Whenever these songs were being sung in church, I would be crying and telling my parents to answer the call of Jesus and go work for Him.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-accent-fire/10 to-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-fire mb-6">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">The Moment Everything Changed</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    One day in church when I was 8 years old, as the congregation was singing one of those songs, I told my Papa that Jesus is calling him, and that he should answer Jesus. My sweet Father turned around and looked at me and with his sweet gentle voice, said something interesting.
                  </p>
                  <p className="text-xl font-bold text-accent-fire italic mb-4 pl-4 border-l-4 border-accent-gold">
                    He said, "my daughter you can answer Jesus if you want to."
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At that moment, there was a certain peace and joy that came upon me and my eyes were filled with tears of joy. So, I asked him; "Papa, so I can also say yes to Jesus?" He said, "Yes, my child you can if you want to."
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Those words from my father were very powerful and from then, I walked around telling God to send me and use me to reach many with the love and compassion that He has for all men. I will never forget that lovely day.
                  </p>
                </div>

                {/* Journey as a Crusader */}
                <div className="mt-8">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">My Journey as a Crusader for Jesus Christ</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      My journey as a crusader for Jesus Christ began that season. Few weeks after that memorable exchange, I asked my parents if I could join the Cadets of Mary to enable me go out with other girls of my age to minister around the neighborhood and they both gave their permission.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      During my elementary, secondary and high school education, though in the World, I continued to minister to my peers, staff and different neighborhoods whenever the need arose.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      My hunger grew, I saw many young and vibrant individuals wasting their precious lives with the pleasures of the world. My own life was no different from that of my age group, but there was something in me that held me back and ministered the truth in me each time I was doing what was not of the Lord.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      My friends usually called me a sell-out. Despite my worldly way of life, the Spirit of Christ in me would never let me miss Sunday service, no matter what happened on Saturday night.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      At this moment in my life, I began to hear and understand the voice of the Lord through His words leading me to individuals for salvation.
                    </p>
                  </div>
                </div>

                {/* Journey to Canada */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">The Call to Canada</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      When I arrived in Canada, I proceeded to work with Toral Cast, a division of Magna and later went back to school and studied community and social services work.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      During my years in college, I kept hearing this still small voice in me asking me to go study my word. So, I joined a prayer group and I hosted a branch of our then church home cell in my home, just to know more of God's word.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      After I had my handsome and perfect-in-Christ children, I did open a restaurant but I was not successful with the restaurant for it was gradually turning into a prayer and counselling house.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold text-accent-fire">
                      So I went and inquired of the Lord why that was happening, and He revealed His purpose for my life in a powerful way.
                    </p>
                  </div>
                </div>

                {/* Divine Direction */}
                <div className="mt-8 bg-primary-50 p-6 rounded-lg border-l-4 border-accent-fire">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">Divine Direction and Calling</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The response I got from the Lord was that I should go and study His Word, and then counsel and revive His people. In my own little mind, I thought the Lord wanted me to become a psychologist. So I closed the restaurant and moved to York University to study psychology.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      While studying at York University, my grades were very good but I had a series of financial difficulties beyond any human understanding. I was not fulfilling my purpose despite the fact that I was doing very well in the program.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      During my years at York University, the Spirit of God would always tell me to go and study the book that water runs out of. I began searching for explanations and studying my bible even more and I bought and read uncountable spiritual books from cover to cover.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Yet, the voice of God would not stop telling me to go and study His word. I was particularly impacted by "where there is no prophet my people perish."
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      I was confused at this time because I was literally doing my best in studying the word of God. It got to a point where I had so many challenges in my life and no company would hire me. It was so bad that not even a factory would hire me, no matter what I did. At one point during this journey, I was also abandoned by very close family and friends.
                    </p>
                  </div>
                </div>

                {/* The Turning Point */}
                <div className="mt-8 bg-gradient-to-r from-accent-fire/10 to-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">The Turning Point</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      One day, while praying and asking God for clear direction, I heard those songs that I had heard in church when I was a little girl and which troubled my soul ("Send me I will go Lord" and "Hark the voice of Jesus calling"). The Lord repeated that "go and study my word."
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      At this point, I got even more frustrated and I shouted that I have been studying and what do you want from me, Lord? The gentle but lion-like voice spoke and said "Go to school and study my Word for you promised if I send you, you will go."
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      I replied and stated clearly that I am not a pastor so why would you ask me to go to Bible School? I went further to say I would not be labelled as one of the frustrated women whom life challenges have made frustrated and desperate and, are now using God as a cover-up. I will not go down in history like that.
                    </p>
                    <p className="text-xl font-bold text-accent-fire italic pl-4 border-l-4 border-accent-fire">
                      And the gentle voice said to me "if you don't go you will be registered as one who was rejected by close love ones and ended up in a mental institution. Fulfill your promises to me and be free my child and I will make you the envy of the world."
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      This was the reality I needed to hear. So, I dropped out in pursuit of my calling and passion.
                    </p>
                  </div>
                </div>

                {/* Bible School and Ministry Training */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">Bible School and Ministry Training</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      I went into World Impact Bible Institute in Toronto and graduated with a diploma in Biblical Studies and later acquired Bachelors and Masters degrees in Christian Counselling and later a PhD in Ministry.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      During my years in World Impact Bible Institute, I was directed by the Lord to volunteer my home and time in teaching children and adults about the Word of Truth.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      During this period, my passion and hunger for ministry and the Call of God in my life grew drastically and led me to travel to many parts of Africa for the Gospel of Christ.
                    </p>
                  </div>
                </div>

                {/* The Birth of JRFAN */}
                <div className="mt-8 bg-gradient-to-r from-accent-gold/20 to-accent-fire/20 p-6 rounded-lg">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">Jesus Revival For All Nations</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    After many missionary trips to Africa, I was instructed by the Lord Almighty to create a platform for Him where people of all Nations and colour would come and worship Him in spirit and in truth and Jesus will revive them from the troubles of this world and they will find love, compassion, salvation, fellowship, comfort and union with Him, their Creator and Father.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                    Today, Jesus Revival For All Nations (JRFAN) stands as a testament to God's faithfulness and His calling on my life. We are committed to spreading the gospel, serving our community, and bringing hope to the hopeless.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Our mission is simple but powerful: to share God's unconditional love with everyone, regardless of their background, and to demonstrate that love through both spiritual ministry and practical community service.
                  </p>
                  <div className="mt-6 bg-white/50 p-4 rounded-lg">
                    <p className="text-gray-700 italic text-sm">
                      "The circumstances of your life are your ministry professor, you become the best teacher of what you have actually experienced in life and not from what others say or write."
                    </p>
                  </div>
                </div>

                {/* Vision for the Future */}
                <div className="mt-8">
                  <h4 className="font-bold text-2xl text-primary-900 mb-4">Vision for the Future</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      As we continue to grow and expand our ministry in Brampton, Ontario and beyond, our vision remains clear: to be a beacon of hope, a center of worship, and a community of love where everyone can experience the transforming power of Jesus Christ.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to serving our local community through food banks, outreach programs, and compassionate care, while also maintaining a strong focus on spiritual growth, worship, and biblical teaching.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                      The call that began when I was 8 years old continues to burn brightly today. God is faithful, and His work through JRFAN is just beginning.
                    </p>
                  </div>
                </div>

                {/* Scripture Quote */}
                <div className="mt-12 bg-gradient-to-r from-accent-fire to-accent-gold text-white p-8 rounded-xl shadow-2xl text-center">
                  <p className="text-2xl font-bold italic mb-4">
                    "Here am I. Send me!"
                  </p>
                  <p className="text-xl font-medium">
                    - Isaiah 6:8
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <p className="text-xl text-gray-700 mb-6">
                  Join us as we continue this journey of faith, service, and revival!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/events"
                    className="bg-accent-fire hover:bg-accent-fire/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap inline-flex items-center justify-center cursor-pointer"
                  >
                    <i className="ri-calendar-event-fill mr-2"></i>
                    Join Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-accent-gold hover:bg-accent-gold/90 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap inline-flex items-center justify-center cursor-pointer"
                  >
                    <i className="ri-mail-fill mr-2"></i>
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}