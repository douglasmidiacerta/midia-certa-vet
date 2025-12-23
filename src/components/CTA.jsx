import React from 'react';

const CTA = () => {
  // Substitua com seu número real
  const phoneNumber = '5531999999999'; // Formato: 55 + DDD + número
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre como aumentar agendamentos da minha clínica.');

  return (
    <section id="contato" className="bg-gradient-to-br from-primary to-secondary text-white py-12 md:py-16 px-5 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Ótimo! Você está pronto para mais agendamentos?
        </h2>

        {/* Subtítulo */}
        <p className="text-lg text-white/95 mb-8">
          Agende uma consultoria gratuita para conhecer sua situação
        </p>

        {/* Botões */}
        <div className="flex flex-wrap justify-center gap-4 mb-5">
          {/* Botão WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-lg text-base font-semibold border-none transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span>💬</span>
            <span>Conversar no WhatsApp</span>
          </a>

          {/* Botão Telefone */}
          <a
            href={`tel:+${phoneNumber}`}
            className="bg-transparent text-white px-8 py-4 border-2 border-white rounded-lg text-base font-semibold transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-2"
          >
            <span>☎️</span>
            <span>Me Ligar Agora</span>
          </a>
        </div>

        {/* Observação */}
        <p className="text-[13px] text-white/80 mt-5">
          Consultoria gratuita de 15 minutos | Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default CTA;
