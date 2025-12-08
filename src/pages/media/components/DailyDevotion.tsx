
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Devotion {
  date: string;
  topic: string;
  verse: string;
  reference: string;
  message: string;
  prayer: string;
  confession: string;
}

export default function DailyDevotion() {
  const [currentDevotion, setCurrentDevotion] = useState<Devotion | null>(null);

  useEffect(() => {
    updateDailyDevotion();
    
    // Check for new day at midnight
    const checkMidnight = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        updateDailyDevotion();
      }
    }, 60000); // Check every minute

    return () => clearInterval(checkMidnight);
  }, []);

  const updateDailyDevotion = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    
    const devotions: Devotion[] = [
      {
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        topic: 'God\'s Unfailing Love',
        verse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
        reference: 'John 3:16',
        message: 'God\'s love for you is unconditional and eternal. No matter what you\'ve done or where you\'ve been, His love remains constant. Today, receive His gift of salvation and walk in the assurance that you are deeply loved by the Creator of the universe. His love transforms, heals, and restores everything it touches.',
        prayer: 'Heavenly Father, thank You for Your amazing love that sent Jesus to die for me. Help me to fully comprehend the depth of Your love and to share it with others. Fill my heart with Your love today. In Jesus\' name, Amen.',
        confession: 'I am deeply loved by God. His love transforms my life. I walk in the confidence of His eternal love for me. I am a child of God, accepted and cherished.'
      },
      {
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        topic: 'Trust in the Lord',
        verse: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
        reference: 'Proverbs 3:5-6',
        message: 'When you surrender your plans to God and trust Him completely, He directs your steps toward His perfect will. Stop trying to figure everything out on your own. Instead, acknowledge God in every decision, every challenge, and every opportunity. His wisdom far exceeds our understanding, and His plans for you are good.',
        prayer: 'Lord, I surrender my plans and my understanding to You. Help me to trust You completely, even when I don\'t understand. Guide my steps and direct my path according to Your perfect will. In Jesus\' name, Amen.',
        confession: 'I trust in the Lord with all my heart. God is directing my steps. His plans for me are good. I walk in divine guidance and wisdom every day.'
      },
      {
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        topic: 'Strength in Christ',
        verse: 'I can do all this through him who gives me strength.',
        reference: 'Philippians 4:13',
        message: 'Christ empowers you to overcome every challenge you face. His strength is made perfect in your weakness. Whatever mountain stands before you today, remember that you have divine strength within you. You are not limited by your own abilities but empowered by the unlimited power of Christ living in you.',
        prayer: 'Father, I thank You that Your strength is made perfect in my weakness. Empower me today to face every challenge with confidence, knowing that Christ strengthens me. Help me to rely on Your power, not my own. In Jesus\' name, Amen.',
        confession: 'I can do all things through Christ who strengthens me. I am empowered by God\'s unlimited strength. No challenge is too great for me because Christ lives in me.'
      },
      {
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        topic: 'The Good Shepherd',
        verse: 'The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.',
        reference: 'Psalm 23:1-3',
        message: 'God provides for all your needs and gives you rest. As your loving shepherd, He leads you to places of peace and refreshment. Trust Him to care for you today. He knows exactly what you need and when you need it. Rest in His provision and guidance.',
        prayer: 'Lord, thank You for being my shepherd. I trust You to provide for all my needs. Lead me to places of rest and refreshment. Restore my soul and guide me in Your paths. In Jesus\' name, Amen.',
        confession: 'The Lord is my shepherd, I lack nothing. God provides for all my needs. I am led by the Good Shepherd to places of peace and rest.'
      },
      {
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        topic: 'All Things Work Together',
        verse: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
        reference: 'Romans 8:28',
        message: 'Even in difficult times, God is working everything together for your good. What the enemy meant for harm, God will turn around for your benefit. Trust His plan even when you can\'t see the full picture. Your current situation is not your final destination.',
        prayer: 'Father, I trust that You are working all things together for my good. Help me to see Your hand in every situation. Give me patience to wait for Your perfect timing and faith to believe in Your promises. In Jesus\' name, Amen.',
        confession: 'God is working all things together for my good. Every situation is an opportunity for God\'s glory. I trust His perfect plan for my life.'
      },
      {
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        topic: 'Cast Your Cares',
        verse: 'Cast all your anxiety on him because he cares for you.',
        reference: '1 Peter 5:7',
        message: 'You don\'t have to carry your burdens alone. God cares deeply about everything that concerns you. Whatever is weighing you down today, give it to Him. He is strong enough to carry it all. Release your worries and receive His peace.',
        prayer: 'Heavenly Father, I cast all my anxieties and worries on You. Thank You for caring about every detail of my life. Help me to release my burdens and trust in Your care. Fill me with Your peace. In Jesus\' name, Amen.',
        confession: 'I cast all my cares on the Lord because He cares for me. I am free from anxiety and worry. God\'s peace guards my heart and mind.'
      },
      {
        date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        topic: 'Renewed Strength',
        verse: 'But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
        reference: 'Isaiah 40:31',
        message: 'When you wait on God, He renews your strength and gives you supernatural endurance. If you\'re feeling tired or overwhelmed today, pause and wait on the Lord. He will lift you up and give you the strength to soar above your circumstances.',
        prayer: 'Lord, I wait on You today. Renew my strength and help me to soar above my circumstances. Give me supernatural endurance to run this race without growing weary. In Jesus\' name, Amen.',
        confession: 'My strength is renewed by the Lord. I soar on wings like eagles. I run and do not grow weary. I walk and do not faint.'
      }
    ];

    // Select devotion based on day of year to ensure daily rotation
    const selectedDevotion = devotions[dayOfYear % devotions.length];
    setCurrentDevotion(selectedDevotion);
  };

  if (!currentDevotion) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-2">
            Daily <span className="text-accent-gold">Inspiration</span>
          </h2>
          <p className="text-primary-200 text-sm">
            Let God's Word encourage and strengthen you today
          </p>
          <p className="text-accent-gold font-semibold mt-2">
            {currentDevotion.date}
          </p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20"
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-accent-gold rounded-full mr-4 flex-shrink-0">
                <i className="ri-book-open-fill text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-accent-gold font-bold text-2xl mb-4">
                  {currentDevotion.topic}
                </h3>
                <p className="text-white text-xl sm:text-2xl font-serif italic leading-relaxed mb-4">
                  "{currentDevotion.verse}"
                </p>
                <p className="text-accent-gold font-bold text-lg mb-4">
                  - {currentDevotion.reference}
                </p>
                <div className="h-px bg-white/20 my-6"></div>
                <p className="text-primary-100 text-base sm:text-lg leading-relaxed mb-6">
                  {currentDevotion.message}
                </p>
                
                {/* Prayer Section */}
                <div className="bg-white/5 rounded-xl p-6 mb-4">
                  <h4 className="text-accent-gold font-bold text-lg mb-3 flex items-center">
                    <i className="ri-hand-heart-fill mr-2"></i>
                    Prayer
                  </h4>
                  <p className="text-primary-100 italic leading-relaxed">
                    {currentDevotion.prayer}
                  </p>
                </div>

                {/* Confession Section */}
                <div className="bg-accent-gold/10 rounded-xl p-6 border border-accent-gold/30">
                  <h4 className="text-accent-gold font-bold text-lg mb-3 flex items-center">
                    <i className="ri-chat-quote-fill mr-2"></i>
                    Daily Confession
                  </h4>
                  <p className="text-white font-semibold leading-relaxed">
                    {currentDevotion.confession}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-fire/10 rounded-full blur-3xl"></div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-primary-200 text-sm mb-4">
            Want to receive daily devotions in your inbox?
          </p>
          <a
            href="mailto:jrfanscommunity@gmail.com?subject=Subscribe to Daily Devotions"
            className="inline-flex items-center bg-accent-gold hover:bg-yellow-500 text-primary-900 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            <i className="ri-mail-send-fill mr-2"></i>
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
