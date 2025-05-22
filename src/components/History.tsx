import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { motion } from 'framer-motion';

const History: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-black">
      <div className="container">
        <SectionTitle>Nossa História</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 leading-relaxed">
              Desde 2010, o 90s Tattoo Studio tem sido referência em arte corporal em Belém. 
              Nossa paixão pela excelência e compromisso com a qualidade nos tornaram um dos 
              estúdios mais respeitados da região.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Cada tatuagem e piercing é uma oportunidade de criar algo extraordinário. 
              Nossa equipe de artistas premiados combina técnica apurada com criatividade 
              única para transformar suas ideias em arte memorável.
            </p>
            
            <p className="mb-8 leading-relaxed">
              Priorizamos sua segurança e satisfação. Nosso ambiente é 100% esterilizado, 
              utilizamos materiais descartáveis de primeira linha e seguimos rigorosos 
              protocolos de biossegurança.
            </p>
            
            <a href="#contact" className="btn inline-block">
              AGENDE UMA VISITA
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img 
              src="https://i.pinimg.com/736x/04/77/b1/0477b1510051ac6ed4ca5209fdfdc39e.jpg" 
              alt="História do estúdio" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;