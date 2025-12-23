import React from 'react';

const Resultados = () => {
  const results = [
    {
      number: '+28',
      description: 'Novos Agendamentos por Mês',
      subtitle: 'Clínica em Vila da Serra, BH',
    },
    {
      number: '4.8x',
      description: 'Retorno do Investimento (ROI)',
      subtitle: 'Média das campanhas',
    },
    {
      number: 'R$ 15',
      description: 'Custo por Agendamento (CPA)',
      subtitle: 'Sem desperdício',
    },
    {
      number: '92%',
      description: 'Taxa de Resposta WhatsApp',
      subtitle: 'Clientes engajados',
    },
  ];

  return (
    <section id="resultados" className="bg-white py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-10 md:mb-12">
          Resultados Reais de Clínicas (Casos de Sucesso)
        </h2>

        {/* Grid de Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <div className="text-5xl font-bold mb-3 leading-none">
                {result.number}
              </div>
              <div className="text-base opacity-95 mb-2">
                {result.description}
              </div>
              <div className="text-[13px] opacity-85">
                {result.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resultados;
