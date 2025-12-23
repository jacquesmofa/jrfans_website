import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://readdy.ai/api/search-image?query=volunteers%20at%20community%20food%20bank%20in%20Brampton%20Canada%20distributing%20fresh%20groceries%20and%20food%20packages%20to%20diverse%20families%20with%20children%2C%20warm%20welcoming%20atmosphere%2C%20people%20helping%20neighbors%20with%20compassion%2C%20community%20members%20receiving%20assistance%20with%20gratitude%2C%20heartwarming%20service%20scene%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-foodbank-main1&orientation=landscape',
      type: 'service',
      verse: 'For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in. - Matthew 25:35'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=diverse%20congregation%20worshipping%20with%20raised%20hands%20in%20modern%20church%20sanctuary%2C%20joyful%20praise%20and%20worship%2C%20spiritual%20atmosphere%20with%20warm%20lighting%2C%20people%20of%20all%20ages%20celebrating%20faith%20together%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-worship1&orientation=landscape',
      type: 'spiritual',
      verse: 'For where two or three gather in my name, there am I with them. - Matthew 18:20'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=volunteers%20serving%20hot%20meals%20at%20outdoor%20community%20event%20in%20Brampton%20Ontario%2C%20people%20distributing%20food%20to%20homeless%20and%20families%20in%20need%2C%20compassionate%20volunteers%20wearing%20aprons%20helping%20serve%20plates%20of%20food%2C%20diverse%20community%20members%20receiving%20warm%20meals%20with%20smiles%2C%20heartwarming%20charity%20work%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-community-meals1&orientation=landscape',
      type: 'service',
      verse: 'In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: It is more blessed to give than to receive. - Acts 20:35'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=three%20wooden%20crosses%20silhouetted%20on%20hill%20against%20dramatic%20golden%20sunset%20sky%20with%20rays%20of%20light%20breaking%20through%20clouds%2C%20peaceful%20spiritual%20scene%2C%20inspiring%20faith%20moment%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-crosses1&orientation=landscape',
      type: 'spiritual',
      verse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=volunteers%20organizing%20donated%20clothing%20and%20essential%20items%20at%20community%20center%20in%20Brampton%2C%20people%20sorting%20through%20boxes%20of%20donations%2C%20volunteers%20helping%20families%20select%20clothes%20and%20supplies%2C%20warm%20caring%20atmosphere%2C%20community%20support%20programs%20in%20action%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-donations1&orientation=landscape',
      type: 'service',
      verse: 'Each of you should use whatever gift you have received to serve others, as faithful stewards of God\'s grace in its various forms. - 1 Peter 4:10'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=beautiful%20church%20building%20on%20hill%20silhouetted%20against%20stunning%20orange%20and%20purple%20sunset%20sky%2C%20peaceful%20spiritual%20scene%2C%20cross%20on%20top%20of%20church%2C%20inspiring%20faith%20architecture%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-church-sunset1&orientation=landscape',
      type: 'spiritual',
      verse: 'I was glad when they said to me, Let us go to the house of the LORD. - Psalm 122:1'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=volunteers%20at%20food%20bank%20warehouse%20in%20Brampton%20packing%20boxes%20with%20fresh%20produce%20vegetables%20fruits%20and%20groceries%2C%20team%20of%20diverse%20volunteers%20working%20together%20organizing%20food%20donations%2C%20efficient%20community%20service%20operation%2C%20people%20preparing%20care%20packages%20for%20families%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-foodbank-packing1&orientation=landscape',
      type: 'service',
      verse: 'Share your food with the hungry, and give shelter to the homeless. Give clothes to those who need them, and do not hide from relatives who need your help. - Isaiah 58:7'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=powerful%20prayer%20gathering%20with%20people%20holding%20hands%20in%20circle%2C%20spiritual%20unity%20and%20fellowship%2C%20emotional%20worship%20moment%2C%20diverse%20believers%20praying%20together%2C%20inspiring%20faith%20scene%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-worship2&orientation=landscape',
      type: 'spiritual',
      verse: 'Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven. - Matthew 18:19'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=volunteers%20helping%20seniors%20and%20elderly%20people%20at%20community%20center%20in%20Brampton%20Ontario%2C%20compassionate%20care%20and%20assistance%20to%20older%20adults%2C%20volunteers%20serving%20meals%20to%20seniors%2C%20warm%20caring%20atmosphere%20with%20intergenerational%20connection%2C%20community%20support%20for%20elderly%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-seniors-care1&orientation=landscape',
      type: 'service',
      verse: 'Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress. - James 1:27'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=open%20holy%20bible%20glowing%20with%20divine%20light%20in%20darkness%2C%20rays%20of%20light%20emanating%20from%20scripture%20pages%2C%20spiritual%20illumination%2C%20God%20word%20bringing%20hope%2C%20inspiring%20faith%20scene%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-bible-light1&orientation=landscape',
      type: 'spiritual',
      verse: 'Your word is a lamp for my feet, a light on my path. - Psalm 119:105'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=community%20volunteers%20distributing%20winter%20coats%20blankets%20and%20warm%20clothing%20to%20families%20in%20need%20at%20outdoor%20event%20in%20Brampton%2C%20people%20helping%20homeless%20with%20essential%20supplies%2C%20volunteers%20handing%20out%20care%20packages%2C%20compassionate%20community%20outreach%2C%20heartwarming%20charity%20scene%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-winter-outreach1&orientation=landscape',
      type: 'service',
      verse: 'If anyone has material possessions and sees a brother or sister in need but has no pity on them, how can the love of God be in that person? - 1 John 3:17'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=baptism%20celebration%20in%20church%20with%20pastor%20and%20congregation%2C%20joyful%20spiritual%20moment%2C%20water%20baptism%20ceremony%2C%20new%20believers%20being%20baptized%2C%20powerful%20faith%20declaration%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-worship3&orientation=landscape',
      type: 'spiritual',
      verse: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. - Matthew 28:19'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=volunteers%20at%20community%20kitchen%20preparing%20and%20serving%20nutritious%20meals%20to%20families%20in%20Brampton%2C%20diverse%20team%20cooking%20together%2C%20people%20distributing%20hot%20food%20to%20community%20members%2C%20warm%20welcoming%20food%20service%2C%20compassionate%20meal%20program%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-community-kitchen1&orientation=landscape',
      type: 'service',
      verse: 'And do not forget to do good and to share with others, for with such sacrifices God is pleased. - Hebrews 13:16'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=passionate%20worship%20leader%20with%20raised%20hands%20praising%20God%20in%20church%2C%20emotional%20spiritual%20moment%2C%20congregation%20worshipping%20together%2C%20powerful%20praise%20and%20worship%20atmosphere%2C%20inspiring%20faith%20scene%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=1080&seq=hero-worship4&orientation=landscape',
      type: 'spiritual',
      verse: 'Shout for joy to the LORD, all the earth. Worship the LORD with gladness; come before him with joyful songs. - Psalm 100:1-2'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`${slide.type} slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <p className="text-accent-gold font-bold text-xl sm:text-2xl mb-2 tracking-wide">
              HE LOVES YOU NO MATTER WHAT
            </p>
          </motion.div>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-2xl">
            Experience the Fire<br />of <span className="text-accent-gold">Revival</span>
          </h1>
          
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl text-white font-medium mb-4 italic drop-shadow-lg"
          >
            "{slides[currentSlide].verse}"
          </motion.p>

          <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            A Home for Love, Freedom, Mercy, Rest, Restoration, Worship and Fellowship.<br />
            Join us as we spread God's love, salvation, and serve our community through weekly food bank ministry serving 500+ families.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/events"
              className="bg-accent-fire hover:bg-accent-fire/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-2xl whitespace-nowrap flex items-center cursor-pointer"
            >
              <i className="ri-calendar-event-fill mr-2"></i>
              Join Our Next Service
            </Link>
            <Link
              to="/media"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 border-2 border-white/50 whitespace-nowrap flex items-center cursor-pointer"
            >
              <i className="ri-play-circle-fill mr-2"></i>
              Watch Messages
            </Link>
            <Link
              to="/giving"
              className="bg-accent-gold hover:bg-accent-gold/90 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-2xl whitespace-nowrap flex items-center cursor-pointer"
            >
              <i className="ri-heart-fill mr-2"></i>
              Give with Love
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentSlide ? 'bg-accent-gold w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <i className="ri-arrow-down-line text-white text-3xl animate-bounce"></i>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}