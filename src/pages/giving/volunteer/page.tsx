import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../../../components/feature/Navigation';
import Footer from '../../../components/feature/Footer';
import StickyActionBar from '../../../components/feature/StickyActionBar';

export default function VolunteerPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    interests: [] as string[],
    availability: [] as string[],
    experience: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const volunteerAreas = [
    { id: 'worship', label: 'Worship Team', icon: 'ri-music-fill' },
    { id: 'children', label: 'Children\'s Ministry', icon: 'ri-parent-fill' },
    { id: 'youth', label: 'Youth Ministry', icon: 'ri-team-fill' },
    { id: 'foodbank', label: 'Food Bank', icon: 'ri-restaurant-fill' },
    { id: 'media', label: 'Media & Technology', icon: 'ri-camera-fill' },
    { id: 'hospitality', label: 'Hospitality', icon: 'ri-hand-heart-fill' },
    { id: 'outreach', label: 'Community Outreach', icon: 'ri-community-fill' },
    { id: 'prayer', label: 'Prayer Ministry', icon: 'ri-hands-pray-fill' },
  ];

  const availabilityOptions = [
    { id: 'sunday-morning', label: 'Sunday Morning' },
    { id: 'sunday-evening', label: 'Sunday Evening' },
    { id: 'wednesday', label: 'Wednesday Service' },
    { id: 'weekdays', label: 'Weekdays' },
    { id: 'special-events', label: 'Special Events' },
  ];

  const handleCheckboxChange = (field: 'interests' | 'availability', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append('firstName', formData.firstName);
      formBody.append('lastName', formData.lastName);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('address', formData.address);
      formBody.append('city', formData.city);
      formBody.append('province', formData.province);
      formBody.append('postalCode', formData.postalCode);
      formBody.append('interests', formData.interests.join(', '));
      formBody.append('availability', formData.availability.join(', '));
      formBody.append('experience', formData.experience);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4rhmupab95mriqdis9g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          province: '',
          postalCode: '',
          interests: [],
          availability: [],
          experience: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20happy%20church%20volunteers%20serving%20community%20smiling%20people%20helping%20at%20food%20bank%20teamwork%20ministry%20service%20joyful%20atmosphere&width=1920&height=1080&seq=volhero001&orientation=landscape"
            alt="Volunteer with Us"
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
              Volunteer With Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
              Use your gifts and talents to serve God and make a difference in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-6">
              Join Our Ministry Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At JRFAN, we believe every member has unique gifts to contribute to the body of Christ. 
              Whether you're passionate about worship, serving families, working with youth, or helping in our 
              community food bank, there's a place for you to serve and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Areas */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
              Where You Can Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {volunteerAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-primary-600 rounded-full mb-4 mx-auto">
                  <i className={`${area.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-bold text-lg text-primary-900 text-center">
                  {area.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section ref={ref} className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-900 mb-4">
              Volunteer Application
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll be in touch soon
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-4xl text-green-600"></i>
                </div>
                <h3 className="font-display font-bold text-3xl text-primary-900 mb-4">
                  Thank You for Volunteering!
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We've received your application and will contact you soon to discuss next steps.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form id="volunteer-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-primary-900 mb-6">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Province</label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Areas of Interest */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-4">
                    Areas of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {volunteerAreas.map((area) => (
                      <label key={area.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="interests"
                          value={area.label}
                          checked={formData.interests.includes(area.label)}
                          onChange={() => handleCheckboxChange('interests', area.label)}
                          className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-600 cursor-pointer"
                        />
                        <span className="text-gray-700">{area.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-4">
                    Availability <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availabilityOptions.map((option) => (
                      <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="availability"
                          value={option.label}
                          checked={formData.availability.includes(option.label)}
                          onChange={() => handleCheckboxChange('availability', option.label)}
                          className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-600 cursor-pointer"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm resize-none"
                    placeholder="Tell us about any previous volunteer or ministry experience..."
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">Maximum 500 characters</p>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-sm resize-none"
                    placeholder="Is there anything else you'd like us to know?"
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">Maximum 500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill mr-2"></i>
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <StickyActionBar />
      <Footer />
    </div>
  );
}