import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArtistCardProps {
  image: string;
  name: string;
  experience: string;
  specialty: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ image, name, experience, specialty }) => {
  return (
    <div className="relative aspect-square group overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
        <h4 className="text-lg font-medium mb-2">{name}</h4>
        <p className="text-sm mb-1">{experience}</p>
        <p className="text-sm mb-4">{specialty}</p>
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label={`Instagram de ${name}`}
        >
          <Instagram size={24} />
        </a>
      </div>
    </div>
  );
};

const Studio: React.FC = () => {
  const artists = [
    {
      image: "https://i.pinimg.com/736x/a5/3a/ab/a53aab17831a0364da8841de99c7afd9.jpg",
      name: "Victor Silva",
      experience: "12 anos de experiência",
      specialty: "Especialista em Realismo"
    },
    {
      image: "https://i.pinimg.com/736x/6e/2a/45/6e2a45e1404ee0f4d24b2660e8211ad2.jpg",
      name: "Marina Santos",
      experience: "8 anos de experiência",
      specialty: "Foco em Old School"
    },
    {
      image: "https://i.pinimg.com/736x/7b/ad/3f/7bad3fd53097e8fab2d1b20d1632d482.jpg",
      name: "Pedro Costa",
      experience: "5 anos de experiência",
      specialty: "Especialista em Oriental"
    },
    {
      image: "https://i.pinimg.com/736x/17/21/3e/17213e29d6f61d5e6bc4edfece75ec89.jpg",
      name: "Laura Mendes",
      experience: "6 anos de experiência",
      specialty: "Foco em Fineline"
    }
  ];

  return (
    <section id="studio" className="py-20 bg-black">
      <div className="container">
        <SectionTitle>Nosso Estúdio</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* First Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="subtitle">ARTISTAS ESPECIALIZADOS</h3>
            <p className="mb-8 leading-relaxed">
              Nossa equipe de artistas é especializada em diversos estilos, do tradicional ao contemporâneo, 
              realismo à aquarela. Cada artista traz sua visão artística única e expertise técnica para cada trabalho.
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {artists.map((artist, index) => (
                <ArtistCard key={index} {...artist} />
              ))}
            </div>
          </motion.div>
          
          {/* Second Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="subtitle">AMBIENTE PROFISSIONAL</h3>
            <p className="mb-8 leading-relaxed">
              Nosso estúdio mantém os mais altos padrões de limpeza e segurança. Utilizamos apenas equipamentos 
              e materiais premium para garantir que cada tatuagem e piercing seja executado com precisão e cuidado 
              em um ambiente confortável.
            </p>
            
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/48/73/69/487369b561b0bfd5e1c5e5bc585168f7.jpg" 
                alt="Ambiente profissional" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Studio;