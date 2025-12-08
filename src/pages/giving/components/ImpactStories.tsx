import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ImpactStories() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stories = [
    {
      title: 'Weekly Food Bank Ministry',
      description: 'Every week, we feed hundreds of people including seniors, youth, low-income families, and everyone who visits us. Your donations help us provide nutritious food and show God\'s love in action.',
      image: 'https://readdy.ai/api/search-image?query=happy%20elderly%20woman%20receiving%20food%20bag%20from%20food%20bank%20volunteers%20smiling%20grateful%20senior%20citizen%20holding%20groceries%20community%20service%20Brampton%20Canada&width=800&height=600&seq=foodbank001&orientation=landscape',
      impact: '500+ people fed weekly',
      link: '/about#food-bank',
      linkText: 'Learn More About Our Food Bank',
    },
    {
      title: 'Church Building Completed',
      description: 'Thanks to your generous giving, we completed the construction of our new sanctuary, providing a beautiful space for worship and community gatherings.',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      impact: '500+ people can now worship comfortably',
    },
    {
      title: 'Orphanage Established',
      description: 'Your donations helped us establish an orphanage that now provides shelter, food, education, and love to 50 orphaned children in Buea.',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
      impact: '50 children given hope and a future',
    },
    {
      title: 'Medical Outreach Success',
      description: 'Through your partnership, we conducted free medical camps in rural villages, providing healthcare to hundreds of people who had no access to medical services.',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      impact: '1,000+ people received free medical care',
    },
  ];

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
            Your Impact in Action
          </h2>
          <p className="text-xl text-gray-600">
            See how your generosity is transforming lives and communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="relative aspect-video">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{story.description}</p>
                <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-4 rounded mb-4">
                  <p className="text-primary-900 font-semibold text-sm">
                    <i className="ri-heart-fill text-accent-gold mr-2"></i>
                    {story.impact}
                  </p>
                </div>
                {story.link && (
                  <a
                    href={story.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-all cursor-pointer"
                  >
                    {story.linkText}
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20church%20volunteers%20serving%20food%20bank%20happy%20people%20helping%20community%20smiling%20volunteers%20distributing%20food%20bags%20teamwork%20ministry&width=800&height=600&seq=volunteer001&orientation=landscape"
                  alt="Volunteer with Us"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <i className="ri-team-fill text-5xl mb-4 block"></i>
                <h3 className="font-display font-bold text-3xl mb-4">
                  Volunteer With Us
                </h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Join our team of dedicated volunteers serving in worship, children's ministry, youth programs, 
                  food bank, media, and community outreach. Use your gifts to make a difference!
                </p>
                <div>
                  <a
                    href="/giving/volunteer"
                    className="inline-flex items-center bg-accent-gold hover:bg-accent-gold/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-hand-heart-fill mr-2"></i>
                    Apply to Volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}