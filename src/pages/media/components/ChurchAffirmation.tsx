import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ChurchAffirmation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Our <span className="text-accent-gold">Affirmation</span>
          </h2>
          <p className="text-xl text-gray-600">
            Declaring God's promises over JRFANS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Scroll Design Container */}
          <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-3xl shadow-2xl overflow-hidden">
            {/* Scroll Top Curl */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-200 to-transparent"></div>
            
            {/* Scroll Bottom Curl */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-200 to-transparent"></div>

            {/* Left Scroll Edge */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-amber-300/50 to-transparent"></div>
            
            {/* Right Scroll Edge */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-amber-300/50 to-transparent"></div>

            {/* Decorative Corner Ornaments */}
            <div className="absolute top-6 left-6 w-8 h-8 flex items-center justify-center">
              <i className="ri-star-fill text-accent-gold text-2xl opacity-40"></i>
            </div>
            <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center">
              <i className="ri-star-fill text-accent-gold text-2xl opacity-40"></i>
            </div>
            <div className="absolute bottom-6 left-6 w-8 h-8 flex items-center justify-center">
              <i className="ri-star-fill text-accent-gold text-2xl opacity-40"></i>
            </div>
            <div className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center">
              <i className="ri-star-fill text-accent-gold text-2xl opacity-40"></i>
            </div>

            {/* Main Content */}
            <div className="relative px-12 sm:px-16 lg:px-20 py-16">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mb-10"
              >
                <h3 className="font-display font-black text-3xl sm:text-4xl text-primary-900 mb-2">
                  Affirmation for JRFANS
                </h3>
                <div className="w-32 h-1 bg-accent-gold mx-auto rounded-full"></div>
              </motion.div>

              {/* Affirmation Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6 text-center"
              >
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-serif italic">
                  I am Christ, the seed of Abraham, an heir according to the promise of God.
                </p>
                
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-serif italic">
                  I have been redeemed to Reign over all forces of darkness.
                </p>
                
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-serif italic">
                  I have the right to govern the kingdom of God as His join heir.
                </p>
                
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-serif italic">
                  I was created to be a channel, so I must flourish in all I do,
                </p>
                
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-serif italic">
                  I am blessed to be a blessing,
                </p>
                
                <p className="text-xl sm:text-2xl text-primary-900 leading-relaxed font-serif font-bold italic mt-8">
                  Blessed assurance Jesus is mine.
                </p>
              </motion.div>

              {/* Decorative Bottom Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex justify-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-0.5 bg-accent-gold rounded-full"></div>
                  <i className="ri-heart-fill text-accent-gold text-2xl"></i>
                  <div className="w-16 h-0.5 bg-accent-gold rounded-full"></div>
                </div>
              </motion.div>
            </div>

            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
          </div>

          {/* Shadow Effect */}
          <div className="absolute -bottom-4 left-8 right-8 h-8 bg-gradient-to-b from-black/20 to-transparent blur-xl rounded-full"></div>
        </motion.div>

        {/* Scripture Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 italic">
            "And if you are Christ's, then you are Abraham's seed, and heirs according to the promise."
          </p>
          <p className="text-primary-600 font-bold mt-2">
            - Galatians 3:29
          </p>
        </motion.div>
      </div>
    </section>
  );
}
