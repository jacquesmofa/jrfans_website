import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MediaHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://readdy.ai/api/search-image?query=modern%20church%20worship%20band%20on%20stage%20with%20dramatic%20lighting%2C%20passionate%20praise%20and%20worship%2C%20professional%20audio%20equipment%2C%20inspiring%20atmosphere%2C%20people%20recording%20sermon%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=mediahero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=volunteers%20distributing%20food%20and%20supplies%20at%20community%20outreach%20event%2C%20compassionate%20ministry%20in%20action%2C%20people%20serving%20with%20love%2C%20community%20care%20programs%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=mediahero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=beautiful%20church%20building%20on%20hill%20silhouetted%20against%20stunning%20sunset%20sky%2C%20peaceful%20spiritual%20scene%2C%20cross%20on%20church%20top%2C%20inspiring%20faith%20architecture%2C%20golden%20hour%20lighting%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=mediahero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=open%20holy%20bible%20with%20divine%20light%20rays%20shining%20from%20pages%20in%20darkness%2C%20spiritual%20illumination%2C%20God%20word%20bringing%20hope%20and%20truth%2C%20inspiring%20faith%20scene%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=mediahero4&orientation=landscape'
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
            alt={`Media hero slide ${index + 1}`}
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
            FEED YOUR SPIRIT WITH THE WORD
          </p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-2xl">
            Media <span className="text-accent-gold">Center</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 leading-relaxed italic drop-shadow-lg mb-4">
            "Faith comes from hearing the message, and the message is heard through the word about Christ."
          </p>
          <p className="text-lg text-white/90 font-medium">
            - Romans 10:17
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