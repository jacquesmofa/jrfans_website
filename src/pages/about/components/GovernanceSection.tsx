
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function GovernanceSection() {
  const navigate = useNavigate();

  const boardMembers = [
    {
      name: 'Rev Dr. Irine Ashu',
      role: 'Lead Pastor',
      image: 'https://i.imgur.com/rpnEKiQ.png',
      slug: 'rev-dr-irine-ashu'
    },
    {
      name: 'Brittley Mokube',
      role: 'Executive Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20executive%20director%2C%20confident%20business%20attire%2C%20leadership%20presence%2C%20warm%20and%20approachable%2C%20office%20background%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board2&orientation=portrait',
      slug: 'brittley-mokube'
    },
    {
      name: 'Pastor Kevin Eemeka',
      role: 'Board Member',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20male%20pastor%2C%20kind%20expression%2C%20pastoral%20attire%2C%20spiritual%20leader%2C%20church%20setting%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board3&orientation=portrait',
      slug: 'pastor-kevin-eemeka'
    },
    {
      name: 'Pastor Collette Tanyi',
      role: 'Board Member',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20woman%20pastor%2C%20joyful%20smile%2C%20ministry%20leader%2C%20elegant%20attire%2C%20church%20background%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board4&orientation=portrait',
      slug: 'pastor-collette-tanyi'
    },
    {
      name: 'Pastor Bill Jay The Psalmist',
      role: 'Worship Leader & Board Member',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20worship%20leader%20and%20psalmist%2C%20passionate%20expression%2C%20musical%20ministry%2C%20church%20worship%20setting%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board5&orientation=portrait',
      slug: 'pastor-bill-jay'
    },
    {
      name: 'Nicole Ashu',
      role: 'Board Member',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20African%20woman%20leader%2C%20bright%20smile%2C%20modern%20professional%20attire%2C%20confident%20and%20inspiring%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board6&orientation=portrait',
      slug: 'nicole-ashu'
    },
    {
      name: 'Serah Achi',
      role: 'Board Member',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20woman%20board%20member%2C%20warm%20expression%2C%20professional%20attire%2C%20leadership%20presence%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board7&orientation=portrait',
      slug: 'serah-achi'
    },
    {
      name: 'Jude Anoma',
      role: 'Board Member',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20male%20board%20member%2C%20distinguished%20appearance%2C%20business%20attire%2C%20trustworthy%20expression%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board8&orientation=portrait',
      slug: 'jude-anoma'
    },
    {
      name: 'Minister Marie',
      role: 'Board Member',
      image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20woman%20minister%2C%20gentle%20smile%2C%20ministry%20attire%2C%20compassionate%20leader%2C%20church%20setting%2C%20ultra%20high%20definition%20photography&width=400&height=500&seq=board9&orientation=portrait',
      slug: 'minister-marie'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-fire font-bold text-lg mb-2">LEADERSHIP & GOVERNANCE</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Board of Directors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The governing body of JRFANS consists of distinguished professionals, activists and entrepreneurs of excellent repute who bring their diversified skills and experiences to the governance of the Organization.
          </p>
          <p className="text-lg text-gray-600 italic mt-4">
            "Where there is no guidance, a people falls, but in an abundance of counselors there is safety" - Proverbs 11:14
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display font-bold text-xl text-primary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-fire font-medium mb-4">{member.role}</p>
                  <button
                    onClick={() => navigate(`/leadership/${member.slug}`)}
                    className="inline-flex items-center px-6 py-2 bg-primary-900 text-white font-bold rounded-lg hover:bg-primary-800 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                  >
                    Read More
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-900 to-primary-700 text-white p-8 rounded-2xl shadow-xl text-center"
        >
          <p className="text-2xl font-bold mb-4">
            "For where two or three gather in my name, there am I with them."
          </p>
          <p className="text-lg opacity-90">- Matthew 18:20</p>
        </motion.div>
      </div>
    </section>
  );
}