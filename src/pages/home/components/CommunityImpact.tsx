import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CommunityImpact() {
  const impactStats = [
    {
      icon: 'ri-shopping-basket-2-fill',
      number: '500+',
      label: 'Families Fed Weekly',
      description: 'Through our food bank ministry',
      color: 'bg-emerald-500'
    },
    {
      icon: 'ri-heart-fill',
      number: '2000+',
      label: 'Community Members Served',
      description: 'Monthly outreach programs',
      color: 'bg-rose-500'
    },
    {
      icon: 'ri-hand-heart-fill',
      number: '150+',
      label: 'Active Volunteers',
      description: 'Serving with love and compassion',
      color: 'bg-amber-500'
    },
    {
      icon: 'ri-gift-fill',
      number: '10,000+',
      label: 'Items Donated',
      description: 'Clothing, food, and essentials',
      color: 'bg-blue-500'
    }
  ];

  const communityPrograms = [
    {
      title: 'Weekly Food Bank',
      description: 'Every Wednesday & Friday, we distribute fresh groceries, produce, and essential supplies to families in need across Brampton.',
      icon: 'ri-restaurant-fill',
      image: 'https://readdy.ai/api/search-image?query=volunteers%20at%20busy%20food%20bank%20in%20Brampton%20distributing%20fresh%20vegetables%20fruits%20and%20groceries%20to%20diverse%20families%2C%20organized%20food%20distribution%20with%20volunteers%20helping%20people%20select%20items%2C%20warm%20welcoming%20atmosphere%2C%20community%20members%20receiving%20food%20with%20gratitude%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=foodbank-program1&orientation=landscape',
      schedule: 'Wed & Fri, 6:00 PM - 8:00 PM'
    },
    {
      title: 'Community Meals',
      description: 'Hot, nutritious meals served to homeless individuals and families. No one should go hungry in our community.',
      icon: 'ri-bowl-fill',
      image: 'https://readdy.ai/api/search-image?query=volunteers%20serving%20hot%20nutritious%20meals%20at%20community%20kitchen%20in%20Brampton%2C%20people%20distributing%20plates%20of%20food%20to%20homeless%20and%20families%20in%20need%2C%20warm%20compassionate%20meal%20service%2C%20diverse%20volunteers%20helping%20serve%20dinner%2C%20heartwarming%20charity%20work%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=community-meals-program1&orientation=landscape',
      schedule: 'Sundays after service'
    },
    {
      title: 'Clothing & Essentials Drive',
      description: 'Providing winter coats, blankets, hygiene products, and essential items to those facing hardship.',
      icon: 'ri-shirt-fill',
      image: 'https://readdy.ai/api/search-image?query=volunteers%20organizing%20donated%20winter%20coats%20clothing%20and%20essential%20items%20at%20community%20center%20in%20Brampton%2C%20people%20sorting%20through%20boxes%20helping%20families%20select%20warm%20clothes%2C%20volunteers%20assisting%20community%20members%2C%20caring%20atmosphere%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=clothing-drive-program1&orientation=landscape',
      schedule: 'Monthly distributions'
    },
    {
      title: 'Senior Care Program',
      description: 'Supporting elderly members of our community with meals, companionship, and assistance with daily needs.',
      icon: 'ri-user-heart-fill',
      image: 'https://readdy.ai/api/search-image?query=volunteers%20helping%20elderly%20seniors%20at%20community%20center%20in%20Brampton%20Ontario%2C%20compassionate%20care%20and%20assistance%20to%20older%20adults%2C%20volunteers%20serving%20meals%20to%20seniors%20with%20warm%20smiles%2C%20intergenerational%20connection%2C%20heartwarming%20senior%20care%20program%2C%20ultra%20high%20definition%208K%20photography&width=800&height=600&seq=senior-care-program1&orientation=landscape',
      schedule: 'Ongoing support'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/10 rounded-full mb-4">
            <i className="ri-community-fill text-3xl text-accent-gold"></i>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Serving Our <span className="text-accent-gold">Community</span>
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Faith in action. We believe in showing God's love through practical service to our neighbors in Brampton and beyond.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-display font-black text-4xl text-primary-900 mb-2">
                {stat.number}
              </h3>
              <p className="font-bold text-primary-800 mb-1">{stat.label}</p>
              <p className="text-sm text-primary-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Community Programs */}
        <div className="space-y-8">
          {communityPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-80 lg:h-full">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-gold/10 rounded-xl mb-4">
                  <i className={`${program.icon} text-2xl text-accent-gold`}></i>
                </div>
                <h3 className="font-display font-bold text-3xl text-primary-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-lg text-primary-700 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center text-accent-gold font-bold mb-6">
                  <i className="ri-time-fill mr-2"></i>
                  <span>{program.schedule}</span>
                </div>
                <Link
                  to="/giving/volunteer"
                  className="inline-flex items-center text-accent-fire font-bold hover:text-accent-fire/80 transition-colors cursor-pointer"
                >
                  Join This Ministry
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-accent-fire to-accent-gold rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="font-display font-black text-3xl sm:text-4xl mb-4">
            Be Part of the Change
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donations, or prayer support, you can make a real difference in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/giving/volunteer"
              className="bg-white text-accent-fire px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all hover:scale-105 whitespace-nowrap flex items-center justify-center cursor-pointer"
            >
              <i className="ri-hand-heart-fill mr-2"></i>
              Volunteer Today
            </Link>
            <Link
              to="/giving"
              className="bg-primary-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition-all hover:scale-105 whitespace-nowrap flex items-center justify-center cursor-pointer"
            >
              <i className="ri-gift-fill mr-2"></i>
              Support Our Mission
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}