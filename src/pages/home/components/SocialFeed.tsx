import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SocialFeed() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const socialPosts = [
    {
      platform: 'facebook',
      icon: 'ri-facebook-fill',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      caption: 'Powerful worship service last Sunday! The presence of God was overwhelming. #Revival #JRFAN',
      likes: 234,
      comments: 45,
    },
    {
      platform: 'instagram',
      icon: 'ri-instagram-fill',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
      caption: 'Souls saved, lives transformed! Another amazing crusade night. Glory to God! 🔥',
      likes: 567,
      comments: 89,
    },
    {
      platform: 'youtube',
      icon: 'ri-youtube-fill',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0009-1024x768.jpg',
      caption: 'New sermon series: "Walking in Victory" - Watch now on our YouTube channel!',
      likes: 892,
      comments: 156,
    },
    {
      platform: 'tiktok',
      icon: 'ri-tiktok-fill',
      image: 'https://jesusrevivalforallnations.com/wp-content/uploads/2024/12/IMG-20241216-WA0010-1024x768.jpg',
      caption: 'Short powerful message: Faith moves mountains! 🙏 #ChristianTikTok #Faith',
      likes: 1234,
      comments: 234,
    },
  ];

  const socialLinks = [
    { icon: 'ri-facebook-fill', url: 'https://www.facebook.com/profile.php?id=61570726168326', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: 'ri-youtube-fill', url: 'https://www.youtube.com/@JesusRevivalForAllNations', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: 'ri-instagram-fill', url: 'https://www.instagram.com/jesusrevivalforallnations/', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: 'ri-tiktok-fill', url: 'https://www.tiktok.com/@jesusrevivalforallnations', label: 'TikTok', color: 'hover:bg-black' },
    { icon: 'ri-twitter-x-fill', url: 'https://x.com/jrfan_official', label: 'X', color: 'hover:bg-gray-800' },
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
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Follow us on social media for daily inspiration and updates
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 flex items-center justify-center bg-primary-600 text-white rounded-xl transition-all hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <i className={`${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative aspect-square">
                <img src={post.image} alt="Social post" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg">
                  <i className={`${post.icon} text-xl text-primary-600`}></i>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">{post.caption}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <span className="flex items-center">
                    <i className="ri-heart-fill text-accent-fire mr-1"></i>
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <i className="ri-chat-3-fill mr-1"></i>
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}