import React from 'react';
import Reveal from './Reveal';

const Problemas = () => {
  const problems = [
    {
      icon: '❌',
      title: 'Você tenta cuidar de tudo',
      description: 'Atendimento, equipe, financeiro e ainda o tal do “marketing”.',
    },
    {
      icon: '❌',
      title: 'Postagens e redes não trouxeram novos clientes',
      description: 'Você investiu tempo/dinheiro em posts e quase não viu diferença no número de agendamentos.',
    },
    {
      icon: '❌',
      title: 'Dependência de indicação e agenda oscilando',
      description: 'A agenda varia muito durante o mês e você sente falta de previsibilidade de novos pacientes.',
    },
    {
      icon: '❌',
      title: 'Sem clareza sobre custo por cliente',
      description: 'Não sabe se está pagando caro ou barato pelos clientes que chegam do digital.',
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
            <Reveal delay={index * 80}
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
            </Reveal>
          ))}
        </div>

       {/* Fechamento + CTA inline */}
       <div className="text-center mt-8">
         <p className="text-[15px] text-[#555] mb-4">É exatamente esse buraco entre clínica cheia e marketing bem feito que o nosso serviço vem preencher.</p>
         <a href="#contato" className="inline-block bg-cta text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#ff5252]">
           Quero entender como esse serviço pode funcionar para minha clínica
         </a>
       </div>
     </div>
   </section>
  );
};

export default Problemas;
