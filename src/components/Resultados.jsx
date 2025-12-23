import React from 'react';
import Reveal from './Reveal';

const Resultados = () => {
  const results = [
    {
      number: '+28',
      description: 'Em média, agendamentos a mais por mês por clínica atendida',
      subtitle: '',
    },
    {
      number: '4,8x',
      description: 'Retorno sobre o investimento em anúncios, medido ao longo dos meses',
      subtitle: '',
    },
    {
      number: 'R$ 15',
      description: 'Em média por novo agendamento gerado via anúncios',
      subtitle: '',
    },
    {
      number: '92%',
      description: 'Mensagens respondidas no WhatsApp dentro do prazo recomendado (com roteiro sugerido)',
      subtitle: '',
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
            <Reveal delay={index * 80}
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

       {/* CTA secundário */}
       <div className="text-center mt-10">
         <a href="#contato" className="inline-block bg-transparent text-primary border-2 border-primary px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-primary hover:text-white">
           Quero saber o que podemos gerar para a minha clínica
         </a>
       </div>
     </div>
   </section>
  );
};

export default Resultados;
