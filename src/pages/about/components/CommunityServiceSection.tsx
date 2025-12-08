import { motion } from 'framer-motion';

export default function CommunityServiceSection() {
  const serviceStats = [
    { number: '500+', label: 'People Fed Weekly', icon: 'ri-restaurant-fill' },
    { number: '100+', label: 'Families Supported', icon: 'ri-home-heart-fill' },
    { number: '52', label: 'Weeks of Service', icon: 'ri-calendar-check-fill' },
    { number: '26,000+', label: 'Meals Distributed Yearly', icon: 'ri-gift-fill' }
  ];

  const serviceImages = [
    {
      url: 'https://readdy.ai/api/search-image?query=volunteers%20distributing%20food%20bags%20to%20elderly%20people%20at%20food%20bank%20in%20Brampton%20Canada%2C%20happy%20seniors%20receiving%20groceries%2C%20community%20service%2C%20warm%20atmosphere%2C%20people%20smiling%20with%20gratitude%2C%20bags%20of%20fresh%20produce%20and%20food%20items%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=foodbank1&orientation=landscape',
      caption: 'Serving Our Seniors with Love'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20volunteers%20packing%20food%20boxes%20at%20community%20food%20bank%2C%20young%20people%20helping%20families%2C%20bags%20of%20groceries%2C%20fresh%20vegetables%20and%20canned%20goods%2C%20joyful%20service%20atmosphere%2C%20Brampton%20community%20center%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=foodbank2&orientation=landscape',
      caption: 'Youth Serving the Community'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=elderly%20woman%20crying%20tears%20of%20joy%20holding%20bags%20of%20food%20from%20food%20bank%2C%20emotional%20moment%2C%20gratitude%20and%20blessing%2C%20community%20support%2C%20volunteers%20embracing%20senior%2C%20heartwarming%20scene%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=foodbank3&orientation=landscape',
      caption: 'Tears of Joy and Gratitude'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=low%20income%20families%20receiving%20food%20assistance%20at%20church%20food%20bank%2C%20parents%20with%20children%20getting%20grocery%20bags%2C%20volunteers%20helping%20with%20compassion%2C%20community%20outreach%2C%20diverse%20families%20being%20served%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=foodbank4&orientation=landscape',
      caption: 'Supporting Families in Need'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=food%20bank%20volunteers%20organizing%20fresh%20produce%20vegetables%20fruits%20and%20groceries%20on%20tables%2C%20abundance%20of%20food%20donations%2C%20community%20service%20preparation%2C%20organized%20food%20distribution%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=foodbank5&orientation=landscape',
      caption: 'Preparing Abundant Blessings'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=happy%20elderly%20people%20carrying%20bags%20of%20groceries%20from%20food%20bank%2C%20smiling%20seniors%20with%20food%20assistance%2C%20community%20support%2C%20volunteers%20waving%20goodbye%2C%20blessing%20and%20gratitude%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=foodbank6&orientation=landscape',
      caption: 'Blessed to Be a Blessing'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-fire font-bold text-lg mb-2">FEEDING BODY & SOUL</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-6">
            Community Food Bank Ministry
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            Every week, we open our doors to serve hundreds of people in Brampton and surrounding areas. 
            Our food bank ministry provides nutritious meals and groceries to seniors, youth, low-income families, 
            and everyone who visits us. As we feed people with the Word of God, we also nourish their physical bodies.
          </p>
          <p className="text-2xl font-bold text-primary-900 italic">
            "For I was hungry and you gave me something to eat..." - Matthew 25:35
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-accent-fire rounded-xl mx-auto mb-4">
                <i className={`${stat.icon} text-3xl text-white`}></i>
              </div>
              <div className="text-4xl font-display font-black text-primary-900 mb-2">{stat.number}</div>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl mb-16"
        >
          <h3 className="font-display font-bold text-3xl text-primary-900 mb-6">
            Making the World a Better Place, One Meal at a Time
          </h3>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              At Jesus Revival for All Nations, we believe that true ministry encompasses both spiritual and physical needs. 
              Our weekly food bank has become a beacon of hope for hundreds of families in Brampton, Ontario, and the Greater Toronto Area.
            </p>
            <p>
              Every week, our dedicated volunteers prepare and distribute nutritious food packages containing fresh produce, 
              canned goods, dairy products, bread, and essential groceries. We serve with joy and compassion, ensuring that 
              no one leaves empty-handed or hungry.
            </p>
            <p className="font-semibold text-primary-900">
              Who We Serve:
            </p>
            <ul className="list-none space-y-3 ml-6">
              <li className="flex items-start">
                <i className="ri-check-double-line text-2xl text-accent-fire mr-3 mt-1"></i>
                <span><strong>Seniors & Elderly:</strong> Our beloved seniors receive special care and attention, with volunteers helping them carry their bags and offering prayer and encouragement.</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-2xl text-accent-fire mr-3 mt-1"></i>
                <span><strong>Youth & Students:</strong> Young people facing financial challenges find support and mentorship through our food bank ministry.</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-2xl text-accent-fire mr-3 mt-1"></i>
                <span><strong>Low-Income Families:</strong> Parents struggling to make ends meet receive abundant groceries to feed their children and households.</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-2xl text-accent-fire mr-3 mt-1"></i>
                <span><strong>Everyone in Need:</strong> Our doors are open to all who visit us, regardless of background, faith, or circumstances.</span>
              </li>
            </ul>
            <p>
              The impact goes beyond food distribution. We've witnessed countless testimonies of lives transformed—elderly people 
              crying tears of joy as they receive their bags of groceries, families finding hope in their darkest moments, and 
              community members discovering the love of Christ through acts of service.
            </p>
            <p className="text-xl font-bold text-accent-fire italic">
              "As we feed people with the Word of God and make the world a better place, we also feed people with natural food, 
              nourishing their physical bodies."
            </p>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-3xl p-12 text-white text-center mb-16"
        >
          <h3 className="font-display font-bold text-3xl mb-6">
            Witness the Impact of Community Service
          </h3>
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/videoseries?list=PLxxx"
              title="JRFAN Community Service"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-lg opacity-90">
            Watch how God is using JRFAN to transform lives through community service and the gospel
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display font-bold text-3xl text-primary-900 mb-6">
            Join Us in Serving the Community
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether through volunteering, donations, or prayer support, you can be part of this life-changing ministry. 
            Together, we can feed more families and share God's love with our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-fire text-white font-bold rounded-lg hover:bg-accent-fire/90 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-hand-heart-fill text-2xl mr-3"></i>
              Volunteer With Us
            </a>
            <a
              href="/giving"
              className="inline-flex items-center px-8 py-4 bg-primary-900 text-white font-bold rounded-lg hover:bg-primary-800 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-gift-fill text-2xl mr-3"></i>
              Support Our Food Bank
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}