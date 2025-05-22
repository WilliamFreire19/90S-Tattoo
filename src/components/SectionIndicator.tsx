import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const SectionIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'studio', label: 'Estúdio' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'history', label: 'Sobre' },
    { id: 'contact', label: 'Contato' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer group relative"
          >
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id ? 'bg-white scale-150' : 'bg-gray-500 hover:bg-gray-300'
              }`}
            ></div>
            <span className="absolute right-full mr-4 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {section.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionIndicator;