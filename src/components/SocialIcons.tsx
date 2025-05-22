import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialIcons: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com/', label: 'Twitter' },
    { icon: Youtube, url: 'https://youtube.com/', label: 'YouTube' }
  ];

  const iconVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  return (
    <div className="fixed left-6 bottom-6 z-40 hidden md:block">
      <motion.div 
        className="flex flex-col space-y-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {socialLinks.map(({ icon: Icon, url, label }) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            whileHover="hover"
            variants={iconVariants}
            aria-label={label}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialIcons;