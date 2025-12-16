import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LeadershipSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const leaders = [
    {
      name: 'Pastor John Doe',
      title: 'Lead Pastor & Lead Pastor',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      bio: 'Pastor John Doe is a man of God with a burning passion for souls and revival. Called by God at a young age, he has dedicated his life to spreading the gospel across nations. With over 20 years of ministry experience, Pastor John has witnessed countless miracles, healings, and salvations. His powerful preaching and prophetic ministry have touched thousands of lives across Africa and beyond. He holds a degree in Theology and is known for his deep understanding of Scripture and his unwavering faith in the finished work of Christ.',
    },
    {
      name: 'Pastor Jane Doe',
      title: 'Co-Pastor & Worship Leader',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
      bio: 'Pastor Jane Doe is a gifted worship leader and teacher with a heart for intercession and spiritual warfare. She leads the worship team with excellence and has a unique anointing to usher people into the presence of God. Her ministry focuses on women empowerment, prayer, and discipleship. Together with Pastor John, she has built a strong foundation for JRFAN, emphasizing the importance of family, holiness, and passionate worship. Her teachings on faith and the love of God have transformed many lives.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Anointed servants of God leading with vision, integrity, and passion for revival
          </p>
        </motion.div>

        <div className="space-y-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="font-display font-bold text-3xl mb-2">{leader.name}</h3>
                    <p className="text-accent-gold font-semibold text-lg">{leader.title}</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-lg">
                  <i className="ri-double-quotes-l text-5xl text-accent-gold/30 mb-4 block"></i>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{leader.bio}</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-600 rounded-lg">
                      <i className="ri-user-heart-fill text-2xl text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900">Servant Leader</p>
                      <p className="text-sm text-gray-500">Dedicated to God's Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}