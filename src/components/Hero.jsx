import React from 'react';

const Hero = () => {
  const handleCTAClick = () => {
    document.querySelector('#funciona')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-[600px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-5 py-20 md:px-20 md:py-24"
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-5 inline-block">
          <span className="inline-block bg-white/15 text-white text-[13px] px-5 py-2.5 rounded-[20px]">
            ✨ Este é um site real • Tudo funciona de verdade
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-white font-bold leading-tight mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[600px] mx-auto">
          Mais Agendamentos Para Sua Clínica Veterinária
        </h1>

        {/* Subheadline */}
        <p className="text-white/95 text-base md:text-lg mb-8 max-w-[600px] mx-auto">
          Site profissional + Google Ads focado em gerar ligações e mensagens WhatsApp TODOS OS DIAS
        </p>

        {/* Stats Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 mb-8 max-w-[700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-1">+28</div>
              <div className="text-sm opacity-90">Agendamentos/mês</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-1">4.8x</div>
              <div className="text-sm opacity-90">Retorno do Investimento</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-1">R$ 15</div>
              <div className="text-sm opacity-90">Custo por Agendamento</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="bg-cta text-white px-8 md:px-10 py-4 rounded-lg text-base md:text-lg font-semibold cursor-pointer border-none transition-all duration-300 hover:bg-[#ff5252] hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(255,107,107,0.3)]"
        >
          QUERO VER COMO FUNCIONA
        </button>
      </div>
    </section>
  );
};

export default Hero;
