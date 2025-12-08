import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TestimonialSlider() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Grace Thompson',
      location: 'Brampton, Ontario',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      text: 'My life was completely transformed when I attended the revival service. I was healed from a chronic illness that doctors said was incurable. The power of God is real, and JRFAN showed me the love of Jesus in a way I never experienced before. Glory to God!',
    },
    {
      name: 'Emmanuel Johnson',
      location: 'Mississauga, Ontario',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
      text: 'I was lost in sin and addiction, but through the powerful messages at JRFAN, I found salvation and freedom in Christ. The ministry team prayed for me, and I felt the chains break. Today, I am a new creation, serving God with all my heart. Thank you, Jesus!',
    },
    {
      name: 'Sarah Williams',
      location: 'Toronto, Ontario',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      text: 'The worship at JRFAN is unlike anything I have ever experienced. The presence of God is so strong, and every service brings breakthrough. My family was restored, my finances turned around, and I received the baptism of the Holy Spirit. This ministry is truly anointed!',
    },
    {
      name: 'David Martinez',
      location: 'Brampton, Ontario',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
      text: 'I came to JRFAN broken and hopeless, but God met me there. The teaching on the finished work of Christ opened my eyes to the truth of the gospel. I was baptized, filled with the Spirit, and now I am on fire for God. This ministry changed my eternal destiny!',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Powerful Testimonies
          </h2>
          <p className="text-xl text-gray-600">
            Lives transformed by the power of God
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full border-4 border-accent-gold"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <i className="ri-double-quotes-l text-5xl text-accent-gold/30 mb-4 block"></i>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    {testimonials[currentIndex].text}
                  </p>
                  <div>
                    <h4 className="font-display font-bold text-xl text-primary-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 flex items-center justify-center md:justify-start">
                      <i className="ri-map-pin-line mr-1"></i>
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentIndex ? 'bg-accent-gold w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}