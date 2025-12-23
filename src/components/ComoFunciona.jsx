import React from 'react';

const ComoFunciona = () => {
  const steps = [
    {
      number: '1',
      title: 'Alguém Busca no Google',
      description: 'Quando digitam "clínica veterinária perto de mim" ou "vet em [sua cidade]"',
    },
    {
      number: '2',
      title: 'Seu Site/Anúncio Aparece',
      description: 'Na primeira página do Google, acima dos concorrentes. Com estrelas de avaliação.',
    },
    {
      number: '3',
      title: 'Ele Liga ou Manda WhatsApp',
      description: 'Cliente entra em contato direto. Você agenda a consulta. Negócio fechado!',
    },
  ];

  return (
    <section id="funciona" className="bg-neutral py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-10 md:mb-12">
          Como Funciona Na Prática (3 Passos Simples)
        </h2>

        {/* Grid de Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border-t-4 border-primary rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center h-full">
                {/* Number Circle */}
                <div className="w-[50px] h-[50px] bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                
                <h3 className="text-lg font-semibold text-textPrimary mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[15px] text-[#555] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl text-primary">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
