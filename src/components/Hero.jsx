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
      className="relative overflow-hidden min-h-[700px] bg-gradient-hero flex items-center px-5 py-16 md:px-10 lg:px-16"
      style={{ paddingTop: '100px' }}
    >
      {/* Decorações sutis com SVGs com efeito parallax - Cores vibrantes */}
      <div 
        className="pointer-events-none absolute -top-10 -right-10 opacity-[0.08] text-primary transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <PawIcon className="w-32 h-32" />
      </div>
      <div 
        className="pointer-events-none absolute bottom-6 left-8 opacity-[0.08] text-secondary rotate-12 transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(12deg)` }}
      >
        <BoneIcon className="w-20 h-20" />
      </div>
      <div 
        className="pointer-events-none absolute top-24 right-1/4 opacity-[0.08] text-accent -rotate-12 transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.4}px) rotate(-12deg)` }}
      >
        <StethoscopeIcon className="w-24 h-24" />
      </div>
      
      {/* Círculos decorativos gradiente */}
      <div className="pointer-events-none absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Coluna Esquerda */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="glass inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full font-medium text-primary shadow-soft">
              <span className="text-lg">✨</span>
              Site Real • Tudo Funciona de Verdade
            </span>
          </div>

          {/* Título com efeito de digitação */}
          <h1 className="font-heading text-textPrimary font-extrabold leading-[1.15] mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[900px] mx-auto lg:mx-0">
            <span className="inline-block min-h-[1.2em]">
              <span className="text-gradient-primary">{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-textSecondary font-semibold">
              Através de um Serviço Especializado de Marketing
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-textSecondary text-lg md:text-xl mb-6 max-w-[900px] mx-auto lg:mx-0 leading-relaxed">
            Serviço contínuo de marketing digital feito sob medida para clínicas veterinárias em BH e região, focado em trazer novos tutores todos os meses por meio de anúncios online e páginas preparadas para conversão.
          </p>

          {/* Bullets com ícones */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-left mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">✓</span>
                <span className="text-textPrimary text-base md:text-lg">Serviço de marketing digital exclusivamente focado em clínicas veterinárias em BH</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">✓</span>
                <span className="text-textPrimary text-base md:text-lg">Campanhas otimizadas para gerar ligações e mensagens de WhatsApp de tutores com real intenção de agendar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">✓</span>
                <span className="text-textPrimary text-base md:text-lg">Acompanhamento contínuo: análise, ajustes e relatórios mensais em linguagem simples de gestor</span>
              </li>
            </ul>
          </div>

          {/* CTA principal + subtexto */}
          <div className="mb-6 flex flex-col items-center lg:items-start gap-4">
            <button
              onClick={handleCTAClick}
              className="btn-cta group"
            >
              <WhatsIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              Quero Atrair Novos Clientes Para Minha Clínica
            </button>
            <p className="text-textTertiary text-sm max-w-md">
              💬 Conversa rápida e gratuita de 15 minutos pelo WhatsApp para avaliar se o serviço faz sentido para a sua realidade.
            </p>
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
              {/* Glow effect atrás da imagem */}
              <div className="absolute -inset-1 bg-gradient-primary opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative bg-white rounded-3xl shadow-strong overflow-hidden transition-all duration-300 group-hover:shadow-glow-primary">
                <img
                  src="https://images.unsplash.com/photo-1551046600-64ec07ebdb0b?q=80&w=1080&auto=format&fit=crop"
                  alt="Atendimento veterinário"
                  className="w-full h-[320px] md:h-[420px] object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Selo/Card de resultado - redesenhado */}
              <div className="absolute -bottom-6 -left-4 glass backdrop-blur-xl rounded-2xl shadow-strong px-6 py-4 border-2 border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">+28</span>
                  </div>
                  <div>
                    <p className="text-xs text-textTertiary font-medium uppercase tracking-wide">Resultados</p>
                    <p className="text-sm text-textPrimary font-bold">Agendamentos/mês</p>
                  </div>
                </div>
              </div>
              
              {/* Badge verificado */}
              <div className="absolute top-4 right-4 glass backdrop-blur-xl rounded-full px-4 py-2 shadow-medium border border-white/40">
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verificado
                </span>
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
