import React from 'react';
import Reveal from './Reveal';
import FormLead from './FormLead';

const Hero = () => {
  const handleCTAClick = () => {
    document.querySelector('#funciona')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden min-h-[600px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-5 py-20 md:px-20 md:py-24"
      style={{ paddingTop: '100px' }}
    >
      {/* Decorações sutis */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 bg-black/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-5 inline-block">
          <span className="inline-block bg-white/15 text-white text-[13px] px-5 py-2.5 rounded-[20px]">
            ✨ Este é um site real • Tudo funciona de verdade
          </span>
        </div>

        {/* Título */}
        <h1 className="text-white font-bold leading-tight mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[900px] mx-auto">
          Mais Agendamentos Para Sua Clínica Veterinária em BH – Através de um Serviço Especializado de Marketing
        </h1>

        {/* Subtítulo */}
        <p className="text-white/95 text-base md:text-lg mb-4 max-w-[900px] mx-auto">
          Serviço contínuo de marketing digital feito sob medida para clínicas veterinárias em BH e região, focado em trazer novos tutores todos os meses por meio de anúncios online e páginas preparadas para conversão.
        </p>

        {/* Parágrafo de conexão */}
        <p className="text-white/90 text-[15px] md:text-base mb-6 max-w-[900px] mx-auto">
          Você não precisa virar especialista em anúncios ou redes sociais para ter uma clínica cheia. Enquanto você cuida dos animais e da equipe, um parceiro cuida do marketing digital da sua clínica: criando campanhas, ajustando a página e acompanhando os resultados para atrair novos clientes de forma previsível.
        </p>

        {/* Bullets */}
        <div className="max-w-3xl mx-auto text-left text-white/95 mb-6">
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
            className="bg-cta text-white px-8 md:px-10 py-4 rounded-lg text-base md:text-lg font-semibold cursor-pointer border-none transition-all duration-300 hover:bg-[#ff5252] hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(255,107,107,0.3)]"
          >
            Quero atrair novos clientes para minha clínica
          </button>
          <div className="text-white/85 text-xs mt-2">
            Conversa rápida e gratuita de 15 minutos pelo WhatsApp para avaliar se o serviço faz sentido para a sua realidade.
          </div>
        </div>

        {/* Formulário Lead */}
        <Reveal>
          <FormLead className="max-w-4xl mx-auto" />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
