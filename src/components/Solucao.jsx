import React from 'react';

const Solucao = () => {
  const solutions = [
    {
      icon: '📱',
      title: 'Site Para Conversão',
      items: [
        'Mobile-first (funciona perfeito no celular)',
        'Otimizado para Google (SEO local)',
        'Botões grandes: Ligação | WhatsApp | Agendamento',
        'Design moderno e profissional',
        'Carrega rápido (instantâneo)',
      ],
    },
    {
      icon: '🎯',
      title: 'Google Ads Estratégico',
      items: [
        'Palavras-chave específicas: "clínica vet perto de mim"',
        'Segmentado por serviços (Consulta | Vacinação | Cirurgia | Banho/Tosa)',
        'Primeira página do Google garantido',
        'Atrair clientes certos no momento certo',
        'ROI positivo desde o primeiro mês',
      ],
    },
    {
      icon: '📊',
      title: 'Rastreamento 100% Transparente',
      items: [
        'Dashboard com métricas em tempo real',
        'Ve quantas ligações/msgs gera a cada real investido',
        'CPA (custo por agendamento) bem definido',
        'Sabe exatamente o ROI das campanhas',
        'Relatórios mensais claros',
      ],
    },
  ];

  return (
    <section id="solucao" className="bg-neutral py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-10 md:mb-12">
          Como a Gente Resolve Isso
        </h2>

        {/* Grid de Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              <div className="text-[40px] mb-4">{solution.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {solution.title}
              </h3>
              <ul className="text-[15px] text-[#555] leading-[1.8] text-left space-y-2">
                {solution.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-success">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucao;
