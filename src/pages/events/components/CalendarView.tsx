
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CalendarView() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentMonth, setCurrentMonth] = useState('December 2025');
  const [monthIndex, setMonthIndex] = useState(11); // December is month 11 (0-indexed)

  const monthsData = {
    11: { // December 2025
      name: 'December 2025',
      daysInMonth: 31,
      firstDayOfWeek: 1, // Monday
      events: [
        { date: 7, title: 'Sunday Service', type: 'regular' },
        { date: 10, title: 'Midweek Service', type: 'regular' },
        { date: 14, title: 'Sunday Service', type: 'regular' },
        { date: 17, title: 'Midweek Service', type: 'regular' },
        { date: 20, title: 'Christmas Celebration', type: 'special' },
        { date: 21, title: 'Sunday Service', type: 'regular' },
        { date: 24, title: 'Christmas Eve Service', type: 'special' },
        { date: 25, title: 'Christmas Day Service', type: 'special' },
        { date: 28, title: 'Sunday Service', type: 'regular' },
        { date: 31, title: 'New Year\'s Eve Service', type: 'special' },
      ]
    },
    0: { // January 2026
      name: 'January 2026',
      daysInMonth: 31,
      firstDayOfWeek: 4, // Thursday
      events: [
        { date: 4, title: 'Sunday Service', type: 'regular' },
        { date: 7, title: 'Midweek Service', type: 'regular' },
        { date: 11, title: 'Sunday Service', type: 'regular' },
        { date: 14, title: 'Midweek Service', type: 'regular' },
        { date: 18, title: 'Sunday Service', type: 'regular' },
        { date: 21, title: 'Midweek Service', type: 'regular' },
        { date: 25, title: 'Sunday Service', type: 'regular' },
        { date: 28, title: 'Midweek Service', type: 'regular' },
      ]
    }
  };

  const currentMonthData = monthsData[monthIndex as keyof typeof monthsData];

  const handlePrevMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(11); // Stay at December
    }
  };

  const handleNextMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0); // Go to January
      setCurrentMonth('January 2026');
    } else if (monthIndex === 0) {
      setMonthIndex(0); // Stay at January
    }
  };

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
            Event Calendar
          </h2>
          <p className="text-xl text-gray-600">
            View all our events at a glance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-bold text-3xl text-primary-900">{currentMonth}</h3>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevMonth}
                className="w-10 h-10 flex items-center justify-center bg-primary-100 hover:bg-primary-200 rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-xl text-primary-600"></i>
              </button>
              <button 
                onClick={handleNextMonth}
                className="w-10 h-10 flex items-center justify-center bg-primary-100 hover:bg-primary-200 rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-xl text-primary-600"></i>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-bold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: currentMonthData.firstDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square"></div>
            ))}
            {Array.from({ length: currentMonthData.daysInMonth }).map((_, index) => {
              const date = index + 1;
              const event = currentMonthData.events.find((e) => e.date === date);
              return (
                <div
                  key={date}
                  className={`aspect-square rounded-lg p-2 transition-all cursor-pointer ${
                    event
                      ? event.type === 'special'
                        ? 'bg-accent-fire text-white hover:bg-accent-fire/90'
                        : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-bold text-sm mb-1">{date}</div>
                  {event && (
                    <div className="text-xs leading-tight line-clamp-2">{event.title}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-primary-100 rounded mr-2"></div>
              <span className="text-sm text-gray-600">Regular Service</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-accent-fire rounded mr-2"></div>
              <span className="text-sm text-gray-600">Special Event</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
