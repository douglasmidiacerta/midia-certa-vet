import React from 'react';
import Reveal from './Reveal';
import FormLead from './FormLead';
import { WhatsIcon } from './Icons';

const CTA = () => {
  // Substitua com seu número real
  const phoneNumber = '5531999999999'; // Formato: 55 + DDD + número
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre como aumentar agendamentos da minha clínica.');

  return (
    <section id="contato" className="relative py-20 md:py-28 px-5 overflow-hidden">
      {/* Fundo com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-primary"></div>
      
      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <Reveal className="max-w-5xl mx-auto relative z-10">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="glass backdrop-blur-xl inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full font-medium text-white border border-white/30">
              <span className="text-lg">🚀</span>
              Dê o Próximo Passo
            </span>
          </div>
          
          {/* Título */}
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pronto Para Mais <br className="hidden md:block" />
            Agendamentos?
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
            Agende uma consultoria gratuita de 15 minutos para conhecer sua situação e descobrir como podemos ajudar
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {/* Botão WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass backdrop-blur-xl bg-white/20 hover:bg-white text-white hover:text-primary px-10 py-5 rounded-2xl text-lg font-bold border-2 border-white/40 hover:border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-strong inline-flex items-center justify-center gap-3 animate-pulse-subtle"
            >
              <WhatsIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Conversar no WhatsApp</span>
            </a>

            {/* Botão Telefone */}
            <a
              href={`tel:+${phoneNumber}`}
              className="glass backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white px-10 py-5 border-2 border-white/40 hover:border-white/60 rounded-2xl text-lg font-semibold transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Me Ligar Agora</span>
            </a>
          </div>

          {/* Features rápidas */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Consultoria Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Resposta em 24h</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTA;
