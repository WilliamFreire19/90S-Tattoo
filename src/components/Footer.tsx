import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray pt-16 text-gray-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-medium mb-4">90s Tattoo & Piercing</h3>
            <p className="mb-6 leading-relaxed text-sm">
              Serviços premium de tatuagem e piercing em um ambiente limpo e profissional. 
              Nossos artistas especialistas são dedicados a dar vida à sua visão.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white uppercase text-sm font-medium mb-4 tracking-wider">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Estúdio', 'Galeria', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase() === 'início' ? 'hero' : link.toLowerCase() === 'sobre' ? 'history' : link.toLowerCase()}`} 
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white uppercase text-sm font-medium mb-4 tracking-wider">Conecte-se Conosco</h3>
            <p className="mb-4 text-sm">
              Inscreva-se em nossa newsletter para receber novidades e ofertas especiais.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-black border border-gray-800 p-2 text-white flex-grow focus:border-white transition-colors text-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-black px-4 py-2 uppercase text-xs font-medium tracking-wider hover:bg-gray-200 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2025 90s Tattoo Studio. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['01', '02', '03', '04', '05'].map((num) => (
              <span key={num} className="section-number text-xs text-gray-500">{num}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;