import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function StickyActionBar() {
  const actions = [
    {
      icon: 'ri-live-fill',
      label: 'Watch Live',
      path: '/media',
      color: 'bg-accent-fire hover:bg-accent-fire/90',
    },
    {
      icon: 'ri-heart-fill',
      label: 'Give Online',
      path: '/giving',
      color: 'bg-accent-gold hover:bg-accent-gold/90 text-primary-900',
    },
    {
      icon: 'ri-mail-fill',
      label: 'Contact Us',
      path: '/contact',
      color: 'bg-primary-700 hover:bg-primary-600',
    },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white rounded-l-2xl shadow-2xl overflow-hidden border-l-4 border-accent-gold">
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white px-4 py-3 text-center">
          <p className="text-xs font-bold">YOU ARE LOVED</p>
        </div>
        {actions.map((action, index) => (
          <Link
            key={action.label}
            to={action.path}
            className={`flex items-center gap-3 px-6 py-4 ${action.color} text-white transition-all hover:pr-8 group cursor-pointer whitespace-nowrap`}
          >
            <i className={`${action.icon} text-xl`}></i>
            <span className="font-bold text-sm">{action.label}</span>
            <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 transition-opacity"></i>
          </Link>
        ))}
        <div className="bg-primary-50 px-4 py-3 text-center">
          <p className="text-xs text-primary-700 italic">
            "Come to me" - Matthew 11:28
          </p>
        </div>
      </div>
    </motion.div>
  );
}