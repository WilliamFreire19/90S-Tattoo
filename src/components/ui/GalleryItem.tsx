import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItemProps {
  image: string;
  title: string;
  subtitle: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, title, subtitle }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="group relative overflow-hidden aspect-square"
      variants={item}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 overlay flex flex-col justify-end p-6 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-sm tracking-wider">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default GalleryItem;