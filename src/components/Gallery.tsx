import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import GalleryItem from './ui/GalleryItem';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems = [
    {
      id: 1,
      category: 'tattoo',
      image: 'https://i.pinimg.com/736x/66/f0/1a/66f01a7b73b5f82b71cf893b07202f10.jpg',
      title: 'Tatuagem Ornamental',
      subtitle: 'TATUAGEM'
    },
    {
      id: 2,
      category: 'tattoo',
      image: 'https://i.pinimg.com/736x/c3/83/87/c383872944e27614b69013a0ffda9e4d.jpg',
      title: 'Design Minimalista',
      subtitle: 'TATUAGEM'
    },
    {
      id: 3,
      category: 'piercing',
      image: 'https://i.pinimg.com/736x/63/06/a1/6306a15b699ce29aedaa0aa81ee19208.jpg',
      title: 'Piercing no Nariz',
      subtitle: 'PIERCING'
    },
    {
      id: 4,
      category: 'tattoo',
      image: 'https://i.pinimg.com/736x/5c/c7/b0/5cc7b084a2440af61c5575b4de23b5e9.jpg',
      title: 'Realismo em Preto e Cinza',
      subtitle: 'TATUAGEM'
    },
    {
      id: 5,
      category: 'piercing',
      image: 'https://i.pinimg.com/736x/14/d8/25/14d825474057635a7e233271b21a1922.jpg',
      title: 'Piercing na Orelha',
      subtitle: 'PIERCING'
    },
    {
      id: 6,
      category: 'tattoo',
      image: 'https://i.pinimg.com/736x/e4/63/59/e463592f939c77afbe739b2fdfeb4ee9.jpg',
      title: 'Estilo Tradicional',
      subtitle: 'TATUAGEM'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-dark-gray">
      <div className="container">
        <SectionTitle>Galeria</SectionTitle>
        
        <div className="flex justify-center mb-10 space-x-4">
          {['all', 'tattoo', 'piercing'].map((filter) => (
            <button
              key={filter}
              className={`px-6 py-2 uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter 
                ? 'bg-white text-black' 
                : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'TODOS' : filter === 'tattoo' ? 'TATUAGENS' : 'PIERCINGS'}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;