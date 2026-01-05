import React, { useState, useEffect } from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '5531999999999';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais.');
  const [showTooltip, setShowTooltip] = useState(false);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    // Mostrar tooltip após 3 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setBounce(true);
    }, 3000);

    // Esconder tooltip após 8 segundos
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed z-50 bottom-5 right-5 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden md:block bg-white text-textPrimary px-4 py-2 rounded-lg shadow-lg animate-fade-in-left">
          <p className="text-sm font-semibold whitespace-nowrap">
            💬 Precisa de ajuda? Fale conosco!
          </p>
        </div>
      )}
      
      {/* Botão WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className={`bg-[#25D366] text-white w-14 h-14 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] ${bounce ? 'animate-bounce-slow' : ''}`}
        onMouseEnter={() => setBounce(false)}
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.001C.122 5.281 5.403 0 12.057 0c3.17 0 6.167 1.237 8.413 3.484A11.82 11.82 0 0124 11.943c-.003 6.654-5.284 11.935-11.938 11.935-2.002 0-3.955-.492-5.688-1.425L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.448.003 9.886-4.431 9.889-9.878.002-5.462-4.415-9.89-9.881-9.893-5.452-.002-9.887 4.431-9.889 9.881-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.985zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
