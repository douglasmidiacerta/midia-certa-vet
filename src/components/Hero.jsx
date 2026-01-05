import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import FormLead from './FormLead';
import { PawIcon, BoneIcon, StethoscopeIcon, WhatsIcon } from './Icons';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Mais Agendamentos Para Sua Clínica Veterinária em BH';
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const handleCTAClick = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden min-h-[650px] bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 animate-gradient flex items-center px-5 py-16 md:px-10 lg:px-16"
      style={{ paddingTop: '100px' }}
    >
      {/* Decorações sutis com SVGs com efeito parallax */}
      <div 
        className="pointer-events-none absolute -top-10 -right-10 opacity-10 transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <PawIcon className="w-28 h-28" />
      </div>
      <div 
        className="pointer-events-none absolute bottom-6 left-8 opacity-10 rotate-12 transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(12deg)` }}
      >
        <BoneIcon className="w-16 h-16" />
      </div>
      <div 
        className="pointer-events-none absolute top-24 right-1/4 opacity-10 -rotate-12 transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.4}px) rotate(-12deg)` }}
      >
        <StethoscopeIcon className="w-20 h-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Badge */}
        <div className="mb-5 inline-block">
          <span className="inline-block bg-white/15 text-white text-[13px] px-5 py-2.5 rounded-[20px]">
            ✨ Este é um site real • Tudo funciona de verdade
          </span>
        </div>

        {/* Coluna Esquerda */}
        <div className="text-center lg:text-left">
          {/* Título com efeito de digitação */}
          <h1 className="text-textPrimary font-bold leading-tight mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[900px] mx-auto lg:mx-0">
          <span className="inline-block min-h-[1.2em]">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
          <br />
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            – Através de um Serviço Especializado de Marketing
          </span>
        </h1>

        {/* Subtítulo */}
          <p className="text-textSecondary text-base md:text-lg mb-4 max-w-[900px] mx-auto lg:mx-0">
          Serviço contínuo de marketing digital feito sob medida para clínicas veterinárias em BH e região, focado em trazer novos tutores todos os meses por meio de anúncios online e páginas preparadas para conversão.
        </p>

        {/* Parágrafo de conexão */}
          <p className="text-[#4a4a4a] text-[15px] md:text-base mb-6 max-w-[900px] mx-auto lg:mx-0">
          Você não precisa virar especialista em anúncios ou redes sociais para ter uma clínica cheia. Enquanto você cuida dos animais e da equipe, um parceiro cuida do marketing digital da sua clínica: criando campanhas, ajustando a página e acompanhando os resultados para atrair novos clientes de forma previsível.
        </p>

        {/* Bullets */}
        <div className="max-w-3xl mx-auto lg:mx-0 text-left text-textPrimary mb-6">
          <ul className="list-disc pl-5 space-y-2">
            <li>Serviço de marketing digital exclusivamente focado em clínicas veterinárias em BH.</li>
            <li>Campanhas otimizadas para gerar ligações e mensagens de WhatsApp de tutores com real intenção de agendar.</li>
            <li>Acompanhamento contínuo: análise, ajustes e relatórios mensais em linguagem simples de gestor.</li>
          </ul>
        </div>

        {/* CTA principal + subtexto */}
        <div className="mb-6">
          <button
            onClick={handleCTAClick}
            className="bg-cta text-white px-8 md:px-10 py-4 rounded-lg text-base md:text-lg font-semibold cursor-pointer border-none transition-all duration-300 hover:bg-[#ff5252] hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(255,107,107,0.3)] hover:scale-105 animate-pulse-subtle"
          >
            <span className="inline-flex items-center gap-2">
              <WhatsIcon className="w-5 h-5 text-white" />
              Quero atrair novos clientes para minha clínica
            </span>
          </button>
          <div className="text-white/85 text-xs mt-2">
            Conversa rápida e gratuita de 15 minutos pelo WhatsApp para avaliar se o serviço faz sentido para a sua realidade.
          </div>
        </div>

        {/* Formulário Lead */}
          <Reveal>
            <FormLead className="max-w-4xl mx-auto lg:mx-0" />
          </Reveal>
        </div>
        {/* Coluna Direita: Imagem + Selo */}
        <div className="order-first lg:order-none">
          <Reveal>
            <div className="relative group">
              <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1551046600-64ec07ebdb0b?q=80&w=1080&auto=format&fit=crop"
                  alt="Atendimento veterinário"
                  className="w-full h-[320px] md:h-[380px] object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Selo/Card de resultado */}
              <div className="absolute -bottom-5 left-5 bg-white rounded-lg shadow-[0_6px_20px_rgba(0,0,0,0.12)] px-4 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)]">
                <span className="text-primary text-lg font-bold">+28</span>
                <span className="text-sm text-textPrimary">agendamentos/mês em BH</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
