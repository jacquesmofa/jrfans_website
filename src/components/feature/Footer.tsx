import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://readdy.ai/api/search-image?query=volunteers%20at%20community%20food%20bank%20in%20Brampton%20distributing%20fresh%20groceries%20vegetables%20and%20food%20packages%20to%20diverse%20families%2C%20warm%20welcoming%20atmosphere%2C%20people%20helping%20neighbors%20with%20compassion%2C%20community%20members%20receiving%20assistance%20with%20gratitude%2C%20heartwarming%20service%20scene%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=600&seq=footer-foodbank-service&orientation=landscape',
    'https://readdy.ai/api/search-image?query=volunteers%20serving%20hot%20meals%20at%20outdoor%20community%20event%20in%20Brampton%20Ontario%2C%20diverse%20team%20distributing%20food%20to%20families%20and%20homeless%2C%20compassionate%20volunteers%20helping%20serve%20plates%20of%20nutritious%20food%2C%20warm%20welcoming%20food%20service%20atmosphere%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=600&seq=footer-community-meals&orientation=landscape',
    'https://readdy.ai/api/search-image?query=volunteers%20organizing%20donated%20clothing%20and%20essential%20items%20at%20community%20center%20in%20Brampton%2C%20people%20sorting%20through%20boxes%20of%20donations%20helping%20families%2C%20volunteers%20assisting%20community%20members%20select%20supplies%2C%20warm%20caring%20atmosphere%2C%20community%20support%20programs%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=600&seq=footer-donations-service&orientation=landscape',
    'https://readdy.ai/api/search-image?query=three%20wooden%20crosses%20on%20hill%20silhouetted%20against%20beautiful%20orange%20and%20purple%20sunset%20sky%20with%20dramatic%20clouds%2C%20spiritual%20peaceful%20scene%2C%20golden%20hour%20lighting%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=600&seq=footer-crosses&orientation=landscape',
    'https://readdy.ai/api/search-image?query=volunteers%20helping%20seniors%20and%20families%20at%20community%20center%20in%20Brampton%20Ontario%2C%20compassionate%20care%20and%20assistance%2C%20people%20serving%20with%20love%20and%20kindness%2C%20community%20support%20programs%20in%20action%2C%20warm%20caring%20atmosphere%2C%20ultra%20high%20definition%208K%20photography&width=1920&height=600&seq=footer-community-care&orientation=landscape',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: 'ri-facebook-fill', url: 'https://www.facebook.com/profile.php?id=61570726168326', label: 'Facebook' },
    { icon: 'ri-youtube-fill', url: 'https://www.youtube.com/@JesusRevivalForAllNationsc-g5u', label: 'YouTube' },
    { icon: 'ri-instagram-fill', url: 'https://www.instagram.com/jesusrevivalforallnations/', label: 'Instagram' },
    { icon: 'ri-tiktok-fill', url: 'https://www.tiktok.com/@jesusrevivalforallnations', label: 'TikTok' },
    { icon: 'ri-twitter-x-fill', url: 'https://x.com/jrfan_official', label: 'X (Twitter)' },
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/media', label: 'Media Center' },
    { path: '/events', label: 'Events' },
    { path: '/giving', label: 'Give' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-primary-900 text-white overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Footer background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/35 via-primary-900/35 to-primary-900/35"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Inspirational Quote Section */}
        <div className="text-center mb-12 pb-12 border-b border-primary-700">
          <p className="text-2xl sm:text-3xl font-bold text-accent-gold mb-4 italic">
            "You are loved. You are not alone. You have a family in Christ."
          </p>
          <p className="text-lg text-primary-200">
            "So in Christ we, though many, form one body, and each member belongs to all the others." - Romans 12:5
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/8f7258f06892c63084060380978ec353.png"
                alt="JRFAN Logo"
                className="h-16 w-auto"
              />
            </Link>
            <h3 className="font-display font-bold text-xl mb-3">Jesus Revival for All Nations</h3>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              A Home for Love, Freedom, Mercy, Rest, Restoration, Worship and Fellowship. Spreading the fire of revival, God's love, and the message of salvation across all nations.
            </p>
            <p className="text-accent-gold font-bold text-lg">
              HE LOVES YOU NO MATTER WHAT
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-accent-gold transition-colors text-sm flex items-center group cursor-pointer"
                  >
                    <i className="ri-arrow-right-s-line text-accent-gold group-hover:translate-x-1 transition-transform"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <i className="ri-map-pin-fill text-accent-gold mt-1 mr-2"></i>
                <span className="text-primary-200">101 West Dr Unit C2<br />Brampton, ON L6T 2J6<br />Canada</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-fill text-accent-gold mr-2"></i>
                <a href="tel:+16478035901" className="text-primary-200 hover:text-accent-gold transition-colors cursor-pointer">
                  +1 (647) 803-5901
                </a>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-fill text-accent-gold mr-2"></i>
                <a href="mailto:jrfanscommunity@gmail.com" className="text-primary-200 hover:text-accent-gold transition-colors cursor-pointer">
                  jrfanscommunity@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-primary-800/50 p-4 rounded-lg">
              <p className="text-primary-200 text-xs italic">
                "Cast all your anxiety on him because he cares for you." - 1 Peter 5:7
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-accent-gold rounded-lg transition-all hover:scale-110 cursor-pointer"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
            <p className="text-primary-200 text-sm mb-4">
              Follow us for daily inspiration, live services, and ministry updates.
            </p>
            <div className="bg-accent-gold/20 p-4 rounded-lg border-l-4 border-accent-gold">
              <p className="text-white text-sm font-bold">
                Join our online community and experience God's love today!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Jesus Revival for All Nations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}