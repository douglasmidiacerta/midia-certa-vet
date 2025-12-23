import React from 'react';

const Problemas = () => {
  const problems = [
    {
      icon: '❌',
      title: 'Agenda com Horários Vazios',
      description: 'Muitas vagas livres, especialmente tarde/noite. Você depende 100% de indicação e acaso.',
    },
    {
      icon: '❌',
      title: 'Clientes Não Encontram Você',
      description: 'Quando pesquisam "clínica veterinária perto de mim" no Google, seus concorrentes aparecem primeiro.',
    },
    {
      icon: '❌',
      title: 'Sem Estratégia Digital Real',
      description: 'Tem Instagram mas não converte. Investe em rede social sem ROI. Não sabe quanto custa cada cliente.',
    },
    {
      icon: '❌',
      title: 'Publicidade Cara e Sem Controle',
      description: 'Já tentou anunciar e gastou muito. Não viu resultado. Não sabe para onde vai o dinheiro.',
    },
  ];

  return (
    <section id="problemas" className="bg-white py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-10 md:mb-12">
          Você enfrenta esses problemas?
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#fff3cd] border-l-4 border-cta rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              <div className="text-2xl mb-3">{problem.icon}</div>
              <h3 className="text-lg font-semibold text-[#c92a2a] mb-2.5">
                {problem.title}
              </h3>
              <p className="text-[15px] text-[#555] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problemas;
