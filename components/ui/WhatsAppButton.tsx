"use client";

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hola, me gustaría obtener más información sobre sus servicios."
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Controlar la visibilidad basada en el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    // Formatear el número de teléfono (eliminar espacios y caracteres especiales)
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    // Abrir en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="bg-white text-gray-800 rounded-lg shadow-lg py-2 px-4 text-sm whitespace-nowrap">
            Chatea con nosotros
          </div>
          {/* Flecha del tooltip */}
          <div className="absolute bottom-0 right-6 transform translate-y-full">
            <div className="border-8 border-transparent border-t-white"/>
          </div>
        </div>

        {/* Botón principal */}
        <div className="bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Efecto de pulso */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </button>
    </div>
  );
}