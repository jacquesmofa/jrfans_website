import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://readdy.ai/api/search-image?query=diverse%20multicultural%20congregation%20worshiping%20together%20with%20raised%20hands%2C%20unity%20in%20Christ%2C%20warm%20golden%20church%20lighting%2C%20joyful%20faces%2C%20spiritual%20family%20gathering%2C%20love%20and%20acceptance%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=abouthero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=volunteers%20serving%20community%20with%20love%20and%20compassion%20in%20Brampton%2C%20helping%20families%20and%20neighbors%2C%20community%20outreach%20ministry%2C%20people%20caring%20for%20others%2C%20heartwarming%20service%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=abouthero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=three%20wooden%20crosses%20on%20hill%20at%20golden%20sunset%2C%20dramatic%20sky%20with%20rays%20of%20light%2C%20spiritual%20scene%20of%20salvation%2C%20inspiring%20faith%20moment%2C%20peaceful%20worship%20atmosphere%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=abouthero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=church%20community%20gathering%20for%20fellowship%20and%20prayer%2C%20people%20embracing%20and%20supporting%20each%20other%2C%20spiritual%20family%20unity%2C%20warm%20welcoming%20atmosphere%2C%20diverse%20believers%20together%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=abouthero4&orientation=landscape'
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
            alt={`About hero slide ${index + 1}`}
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
            YOU ARE NOT ALONE - YOU HAVE A FAMILY
          </p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-2xl">
            About <span className="text-accent-gold">Our Ministry</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 leading-relaxed italic drop-shadow-lg mb-4">
            "For Christ himself has made peace between all nations and all tribes by making us all one people."
          </p>
          <p className="text-lg text-white/90 font-medium">
            - Ephesians 2:14
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