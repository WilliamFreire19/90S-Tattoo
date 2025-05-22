import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen min-h-screen flex items-center justify-center"
      style={{                backgroundImage:'url("https://i.pinimg.com/736x/47/f1/86/47f186db17a6fff11553a442e6c73043.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <motion.div 
        className="container text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl md:text-9xl mb-4 font-display tracking-wider">ARTE EM PELE</h1>
        <h2 className="text-xl md:text-2xl mb-6 font-light tracking-wider">Tatuagem & Piercing</h2>
        <p className="max-w-lg mx-auto text-lg mb-10 leading-relaxed">
          Transforme suas ideias em arte única e duradoura. Ambiente premium, artistas premiados e designs exclusivos.
        </p>
        <Link
          to="studio"
          smooth={true}
          duration={800}
          className="inline-block uppercase tracking-wider text-sm cursor-pointer hover:text-gray-300 transition-colors"
        >
          <span className="block mb-2">DESCUBRA</span>
          <ChevronDown className="mx-auto animate-bounce" size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero