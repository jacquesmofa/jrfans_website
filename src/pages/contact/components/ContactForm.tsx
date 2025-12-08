import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    window.location.href = `mailto:jrfanscommunity@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`;
  };

  const contactInfo = [
    {
      icon: 'ri-map-pin-fill',
      title: 'Visit Us',
      details: ['101 West Dr Unit C2', 'Brampton, ON L6T 2J6', 'Canada'],
      color: 'from-primary-600 to-primary-800',
    },
    {
      icon: 'ri-phone-fill',
      title: 'Call Us',
      details: ['+1 (647) 803-5901'],
      color: 'from-accent-gold to-yellow-600',
    },
    {
      icon: 'ri-mail-fill',
      title: 'Email Us',
      details: ['jrfanscommunity@gmail.com'],
      color: 'from-accent-fire to-red-600',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll respond as soon as possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`bg-gradient-to-br ${info.color} p-6 text-white`}>
                <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-xl mb-3">
                  <i className={`${info.icon} text-3xl`}></i>
                </div>
                <h3 className="font-display font-bold text-xl">{info.title}</h3>
              </div>
              <div className="p-6">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-semibold">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none"
                  placeholder="+1 (XXX) XXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none cursor-pointer"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="event">Event Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-send-plane-fill mr-2"></i>
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}