import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GivingHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://readdy.ai/api/search-image?query=hands%20giving%20offering%20with%20love%20and%20generosity%2C%20warm%20golden%20light%2C%20heart%20of%20worship%20and%20sacrifice%2C%20spiritual%20giving%2C%20community%20support%20and%20care%2C%20seeds%20of%20blessing%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=givinghero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=volunteers%20serving%20meals%20to%20community%20members%20in%20Brampton%2C%20compassionate%20care%20and%20generosity%2C%20people%20helping%20neighbors%20with%20food%2C%20heartwarming%20service%20and%20love%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=givinghero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=church%20building%20on%20hill%20at%20beautiful%20sunset%2C%20peaceful%20spiritual%20scene%2C%20cross%20silhouette%20against%20golden%20sky%2C%20inspiring%20faith%20and%20worship%20atmosphere%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=givinghero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=congregation%20worshiping%20with%20raised%20hands%20in%20gratitude%2C%20joyful%20giving%20and%20thanksgiving%2C%20spiritual%20celebration%2C%20people%20praising%20God%20together%2C%20warm%20church%20lighting%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=givinghero4&orientation=landscape'
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
            alt={`Giving hero slide ${index + 1}`}
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
            YOUR GENEROSITY CHANGES LIVES
          </p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-2xl">
            Give with <span className="text-accent-gold">Love</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 leading-relaxed italic drop-shadow-lg mb-4">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>
          <p className="text-lg text-white/90 font-medium">
            - 2 Corinthians 9:7
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