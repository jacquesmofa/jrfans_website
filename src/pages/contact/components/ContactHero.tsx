import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://readdy.ai/api/search-image?query=welcoming%20church%20entrance%20with%20open%20doors%2C%20warm%20inviting%20light%20streaming%20out%2C%20pathway%20leading%20to%20sanctuary%2C%20peaceful%20evening%20atmosphere%2C%20home%20and%20family%20feeling%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=contacthero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=volunteers%20welcoming%20and%20helping%20community%20members%20at%20church%20event%2C%20warm%20embraces%20and%20friendly%20greetings%2C%20compassionate%20care%20and%20hospitality%2C%20people%20connecting%20with%20love%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=contacthero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=three%20wooden%20crosses%20on%20hill%20at%20peaceful%20sunset%2C%20dramatic%20golden%20sky%2C%20spiritual%20scene%20of%20hope%20and%20salvation%2C%20inspiring%20faith%20moment%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=contacthero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=diverse%20church%20congregation%20gathering%20for%20fellowship%2C%20people%20hugging%20and%20connecting%2C%20spiritual%20family%20unity%2C%20warm%20welcoming%20atmosphere%2C%20community%20love%20and%20support%2C%20ultra%20high%20definition%208k%20photography&width=1920&height=1080&seq=contacthero4&orientation=landscape'
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
            alt={`Contact hero slide ${index + 1}`}
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
            WE'RE HERE FOR YOU - YOU ARE LOVED
          </p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-2xl">
            Get in <span className="text-accent-gold">Touch</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 leading-relaxed italic drop-shadow-lg mb-4">
            "Come to me, all you who are weary and burdened, and I will give you rest."
          </p>
          <p className="text-lg text-white/90 font-medium">
            - Matthew 11:28
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