import { useState } from 'react';

export default function SermonFilters() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSpeaker, setSelectedSpeaker] = useState('all');
  const [selectedSeries, setSelectedSeries] = useState('all');

  const categories = [
    { id: 'all', label: 'All Messages', icon: 'ri-list-check' },
    { id: 'full', label: 'Full Messages', icon: 'ri-video-fill' },
    { id: 'excerpts', label: 'Excerpts', icon: 'ri-film-fill' },
    { id: 'worship', label: 'Worship', icon: 'ri-music-fill' },
    { id: 'testimonies', label: 'Testimonies', icon: 'ri-heart-fill' },
  ];

  const speakers = ['All Speakers', 'Pastor John Doe', 'Pastor Jane Doe', 'Guest Speakers'];
  const series = ['All Series', 'Walking in Victory', 'Faith That Moves Mountains', 'The Power of Prayer', 'Revival Fire'];

  return (
    <section className="py-12 bg-white sticky top-20 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all whitespace-nowrap flex items-center ${
                    activeFilter === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 cursor-pointer"
            >
              {speakers.map((speaker) => (
                <option key={speaker} value={speaker.toLowerCase().replace(/\s+/g, '-')}>
                  {speaker}
                </option>
              ))}
            </select>

            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 cursor-pointer"
            >
              {series.map((s) => (
                <option key={s} value={s.toLowerCase().replace(/\s+/g, '-')}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}