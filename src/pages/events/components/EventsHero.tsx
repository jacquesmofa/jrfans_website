import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function EventsHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://readdy.ai/api/search-image?query=large%20outdoor%20crusade%20gathering%20at%20sunset%2C%20thousands%20of%20people%20worshiping%20together%2C%20stage%20with%20cross%2C%20golden%20hour%20lighting%2C%20spiritual%20revival%20atmosphere%2C%20community%20united%20in%20faith%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=eventshero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=community%20volunteers%20helping%20families%20at%20food%20bank%20in%20Brampton%2C%20compassionate%20service%20and%20care%2C%20people%20distributing%20supplies%20with%20love%2C%20heartwarming%20community%20outreach%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=eventshero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=three%20crosses%20silhouetted%20on%20hill%20against%20dramatic%20golden%20sunset%20sky%20with%20clouds%2C%20peaceful%20spiritual%20scene%20of%20salvation%2C%20inspiring%20faith%20moment%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=eventshero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=joyful%20church%20congregation%20celebrating%20together%20with%20raised%20hands%2C%20powerful%20worship%20moment%2C%20diverse%20believers%20praising%20God%2C%20spiritual%20unity%20and%20fellowship%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=eventshero4&orientation=landscape'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Events hero slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-gold font-bold text-xl mb-4 tracking-wide">
            COME AS YOU ARE - GOD IS WAITING FOR YOU
          </p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-2xl">
            Events & <span className="text-accent-gold">Programs</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 leading-relaxed italic drop-shadow-lg mb-4">
            "Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another."
          </p>
          <p className="text-lg text-white/90 font-medium">
            - Hebrews 10:25
          </p>
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