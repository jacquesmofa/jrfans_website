import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the phone menu on every page change and with the Escape key.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  // While the phone menu is open the bar is solid, so the logo and close button stay readable.
  const solid = isScrolled || isMobileMenuOpen;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/media', label: 'Media Center' },
    { path: '/events', label: 'Events' },
    { path: '/giving', label: 'Give' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/8f7258f06892c63084060380978ec353.png"
              alt="JRFAN Logo"
              className="h-14 w-auto"
            />
            <div className="hidden lg:block">
              <h1 className={`font-display font-bold text-lg leading-tight ${solid ? 'text-primary-700' : 'text-white'}`}>
                JESUS REVIVAL FOR<br />ALL NATIONS
              </h1>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                  location.pathname === link.path
                    ? solid
                      ? 'bg-primary-600 text-white'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                    : solid
                    ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${solid ? 'text-gray-700' : 'text-white'}`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.button
            key="backdrop"
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-x-0 bottom-0 top-20 -z-10 bg-black/50 cursor-default"
          />
        )}
        {isMobileMenuOpen && (
          <motion.div
            key="panel"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/giving"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-4 py-3 font-semibold text-primary-900"
              >
                <i className="ri-heart-fill" aria-hidden="true"></i> Give to the ministry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}