import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../../../components/feature/Navigation';
import Footer from '../../../components/feature/Footer';
import StickyActionBar from '../../../components/feature/StickyActionBar';

export default function ItemsDonationPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const donationItems = [
    {
      title: 'Visitor Airport Buses',
      description: 'Help us transport visitors and members to and from the airport for special events and crusades.',
      image: 'https://readdy.ai/api/search-image?query=modern%20comfortable%20passenger%20bus%20for%20church%20transportation%20with%20welcoming%20atmosphere%20clean%20exterior%20design&width=800&height=600&seq=bus001&orientation=landscape',
      icon: 'ri-bus-fill',
    },
    {
      title: 'Industrial Air Conditioner',
      description: 'Provide comfort for our congregation with industrial heating and cooling systems for our worship center.',
      image: 'https://readdy.ai/api/search-image?query=industrial%20portable%20air%20conditioner%20unit%20modern%20hvac%20system%20for%20large%20building%20climate%20control%20equipment&width=800&height=600&seq=ac001&orientation=landscape',
      icon: 'ri-temp-cold-fill',
    },
    {
      title: '100 Inches TV',
      description: 'Enhance worship experience with large display screens for lyrics, sermons, and announcements.',
      image: 'https://readdy.ai/api/search-image?query=large%20100%20inch%20television%20screen%20modern%20display%20technology%20for%20church%20sanctuary%20presentation%20system&width=800&height=600&seq=tv001&orientation=landscape',
      icon: 'ri-tv-fill',
    },
    {
      title: 'Church Chairs',
      description: 'Comfortable seating for our growing congregation to worship in comfort and dignity.',
      image: 'https://readdy.ai/api/search-image?query=comfortable%20church%20pew%20chairs%20modern%20sanctuary%20seating%20padded%20worship%20chairs%20rows%20in%20beautiful%20church%20interior&width=800&height=600&seq=chairs001&orientation=landscape',
      icon: 'ri-layout-row-fill',
    },
    {
      title: 'Editing Computers',
      description: 'Professional computers for video editing, graphic design, and media production for ministry content.',
      image: 'https://readdy.ai/api/search-image?query=professional%20video%20editing%20computer%20workstation%20modern%20desktop%20setup%20dual%20monitors%20for%20media%20production%20creative%20workspace&width=800&height=600&seq=computer001&orientation=landscape',
      icon: 'ri-computer-fill',
    },
    {
      title: 'Panasonic AG-DVX200 4K Camcorder',
      description: 'Professional 4K handheld camcorder for recording sermons, events, and ministry activities.',
      image: 'https://readdy.ai/api/search-image?query=professional%204K%20video%20camcorder%20Panasonic%20handheld%20camera%20for%20filming%20church%20services%20broadcast%20quality%20equipment&width=800&height=600&seq=camcorder001&orientation=landscape',
      icon: 'ri-video-fill',
    },
    {
      title: 'Canon 5D Mark III',
      description: 'Professional DSLR camera for high-quality photography of events, portraits, and ministry documentation.',
      image: 'https://readdy.ai/api/search-image?query=Canon%205D%20Mark%20III%20professional%20DSLR%20camera%20with%20lens%20photography%20equipment%20for%20church%20events%20high%20quality%20imaging&width=800&height=600&seq=camera001&orientation=landscape',
      icon: 'ri-camera-fill',
    },
    {
      title: 'DSTV Broadcasting Package',
      description: 'Support our vision to broadcast JRFAN TV globally, reaching millions with the gospel message.',
      image: 'https://readdy.ai/api/search-image?query=satellite%20television%20broadcasting%20equipment%20DSTV%20dish%20antenna%20for%20church%20TV%20ministry%20global%20reach%20technology&width=800&height=600&seq=dstv001&orientation=landscape',
      icon: 'ri-broadcast-fill',
    },
    {
      title: 'DJI Mavic Pro Drone',
      description: 'Aerial drone for capturing stunning footage of crusades, outdoor events, and community outreach.',
      image: 'https://readdy.ai/api/search-image?query=DJI%20Mavic%20Pro%20drone%20flying%20in%20sky%20professional%20aerial%20photography%20equipment%20for%20filming%20church%20events%20outdoor%20ministry&width=800&height=600&seq=drone001&orientation=landscape',
      icon: 'ri-flight-takeoff-fill',
    },
    {
      title: 'Event Canopies',
      description: 'Large outdoor canopies for crusades, community events, and food bank distribution in all weather.',
      image: 'https://readdy.ai/api/search-image?query=large%20white%20event%20canopy%20tent%20outdoor%20church%20gathering%20community%20service%20shelter%20people%20gathering%20under%20tent&width=800&height=600&seq=canopy001&orientation=landscape',
      icon: 'ri-tent-fill',
    },
  ];

  const handleDonation = (itemTitle: string, type: 'one-time' | 'wire') => {
    const subject = `Item Donation: ${itemTitle} - ${type === 'one-time' ? 'One Time' : 'Wire Transfer'}`;
    const body = `I would like to donate: ${itemTitle}\n\nDonation Type: ${type === 'one-time' ? 'One Time Donation' : 'Bank Wire Transfer'}\n\nPlease provide me with the necessary details to complete this donation.\n\nThank you!`;
    window.location.href = `mailto:jrfanscommunity@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=church%20volunteers%20organizing%20donated%20items%20community%20service%20warehouse%20people%20sorting%20donations%20helping%20hands%20ministry%20equipment&width=1920&height=1080&seq=itemshero001&orientation=landscape"
            alt="Items Donation"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6">
              Donate Items for Ministry
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
              Help us equip the ministry with essential items to reach more souls and serve our community better
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-6">
              Ways to Give Items
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Your donation of equipment and resources helps us expand our ministry reach, improve worship experiences, 
              and serve our community more effectively. Every item contributes to the Kingdom work we do together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <i className="ri-hand-coin-fill text-4xl text-accent-gold mb-3 block"></i>
                <h3 className="font-bold text-lg text-primary-900 mb-2">One-Time Donation</h3>
                <p className="text-gray-600 text-sm">Make a direct one-time contribution for any item</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <i className="ri-bank-fill text-4xl text-primary-600 mb-3 block"></i>
                <h3 className="font-bold text-lg text-primary-900 mb-2">Bank Wire Transfer</h3>
                <p className="text-gray-600 text-sm">Transfer funds directly to our bank account</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Items Grid */}
      <section ref={ref} className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
              Ministry Needs
            </h2>
            <p className="text-xl text-gray-600">
              Choose an item to donate and help us fulfill our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top" />
                  <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-primary-600 rounded-full">
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-primary-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {item.description}
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleDonation(item.title, 'one-time')}
                      className="w-full bg-accent-gold hover:bg-accent-gold/90 text-white px-4 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-hand-coin-fill mr-2"></i>
                      One-Time Donation
                    </button>
                    <button
                      onClick={() => handleDonation(item.title, 'wire')}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-bank-fill mr-2"></i>
                      Wire Transfer
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <i className="ri-question-line text-5xl text-accent-gold mb-4 block"></i>
            <h2 className="font-display font-bold text-3xl mb-4">
              Have Questions About Item Donations?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to assist you with any questions about donating items to the ministry. 
              Contact us today to discuss how your contribution can make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jrfanscommunity@gmail.com"
                className="inline-flex items-center justify-center bg-accent-gold hover:bg-accent-gold/90 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-fill mr-2"></i>
                Email Us
              </a>
              <a
                href="tel:+16478035901"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary-900 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <StickyActionBar />
      <Footer />
    </div>
  );
}