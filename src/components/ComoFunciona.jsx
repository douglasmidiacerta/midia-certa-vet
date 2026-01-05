import React from 'react';

const ComoFunciona = () => {
  const steps = [
    {
      number: '1',
      title: 'Conversa inicial gratuita',
      description: 'Entendemos sua clínica, serviços principais, região e capacidade de atendimento. Sem tecnicês, focado na sua realidade.',
    },
    {
      number: '2',
      title: 'Proposta de serviço',
      description: 'Você recebe uma proposta clara de serviço mensal: o que será feito, investimento sugerido em anúncios e acompanhamento.',
    },
    {
      number: '3',
      title: 'Início dos trabalhos',
      description: 'Criamos ou ajustamos a página e configuramos as campanhas. Em poucos dias você já começa a aparecer para quem está buscando.',
    },
    {
      number: '4',
      title: 'Otimização contínua',
      description: 'Todo mês analisamos os resultados, ajustamos campanhas e alinhamos próximos passos para manter/accelerar o ritmo.',
    },
  ];

  return (
    <section id="funciona" className="bg-neutral py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-10 md:mb-12">
          Como Vamos Trabalhar Juntos
        </h2>

        {/* Grid de Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white border-t-4 border-primary rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center h-full transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-2">
                {/* Number Circle */}
                <div className="w-[50px] h-[50px] bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
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
