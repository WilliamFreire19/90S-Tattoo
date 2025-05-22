import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ 
  icon, 
  title, 
  children 
}) => {
  return (
    <div className="flex mb-6">
      <div className="mr-4 mt-1 text-gray-400">
        {icon}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <div className="text-gray-300">{children}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem formatada para WhatsApp
    const whatsappMessage = `*Novo agendamento - 90s Tattoo*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message}`;

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Criar link do WhatsApp
    const whatsappUrl = `https://wa.me/5591984494962?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-gray">
      <div className="container">
        <SectionTitle>Contato</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="subtitle">AGENDE SEU HORÁRIO</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Seu Nome" 
                  className="input-field" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Seu Email" 
                  className="input-field" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <select 
                  name="service"
                  className="input-field" 
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione o Serviço</option>
                  <option value="Tatuagem">Tatuagem</option>
                  <option value="Piercing">Piercing</option>
                  <option value="Consulta">Consulta</option>
                </select>
              </div>
              
              <div>
                <textarea 
                  name="message"
                  placeholder="Conte-nos sobre sua ideia de tatuagem ou piercing" 
                  className="input-field min-h-[120px]" 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn">
                ENVIAR MENSAGEM
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="subtitle">LOCALIZAÇÃO</h3>
            
            <div className="mb-8">
              <ContactInfo icon={<MapPin size={20} />} title="Endereço">
                <p>Av. Governador José Malcher, 1234</p>
                <p>Nazaré, Belém - PA, 66055-260</p>
              </ContactInfo>
              
              <ContactInfo icon={<Phone size={20} />} title="Telefone">
                <p>(91) 98449-4962</p>
              </ContactInfo>
              
              <ContactInfo icon={<Mail size={20} />} title="Email">
                <p>contato@90stattoo.com.br</p>
              </ContactInfo>
              
              <ContactInfo icon={<Clock size={20} />} title="Horário">
                <p>Segunda - Sexta: 11h - 21h</p>
                <p>Sábado: 10h - 22h</p>
                <p>Domingo: 12h - 18h</p>
              </ContactInfo>
            </div>
            
            {/* Map */}
            <div className="aspect-video w-full h-64 bg-gray-800 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.601297079243!2d-48.48349892426666!3d-1.453889236316027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e908e4303f7%3A0xe36e9b6d415a048!2sAv.%20Gov.%20Jos%C3%A9%20Malcher%2C%20Bel%C3%A9m%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1699200017899!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do estúdio"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;