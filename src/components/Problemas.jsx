import React from 'react';
import Reveal from './Reveal';
import { AlertTriangleIcon, ClockIcon, CurrencyIcon } from './Icons';

const Problemas = () => {
  const problems = [
    {
      icon: <AlertTriangleIcon className="w-7 h-7 text-cta" />,
      title: 'Você tenta cuidar de tudo',
      description: 'Atendimento, equipe, financeiro e ainda o tal do “marketing”.',
    },
    {
      icon: <ClockIcon className="w-7 h-7 text-cta" />,
      title: 'Postagens e redes não trouxeram novos clientes',
      description: 'Você investiu tempo/dinheiro em posts e quase não viu diferença no número de agendamentos.',
    },
    {
      icon: <AlertTriangleIcon className="w-7 h-7 text-cta" />,
      title: 'Dependência de indicação e agenda oscilando',
      description: 'A agenda varia muito durante o mês e você sente falta de previsibilidade de novos pacientes.',
    },
    {
      icon: <CurrencyIcon className="w-7 h-7 text-cta" />,
      title: 'Sem clareza sobre custo por cliente',
      description: 'Não sabe se está pagando caro ou barato pelos clientes que chegam do digital.',
    },
  ];

  return (
    <section id="problemas" className="bg-neutral-50 py-16 md:py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            Desafios Comuns
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Você Enfrenta Esses <span className="text-gradient-warm">Problemas?</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Reconheça os sinais de que sua clínica precisa de uma estratégia de marketing estruturada
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Reveal delay={index * 80} key={index}>
              <div className="card-hover group bg-gradient-to-br from-white to-neutral-50 border-l-4 border-accent relative overflow-hidden">
                {/* Efeito shimmer no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                
                <div className="relative">
                  <div className="mb-4 p-3 bg-accent/10 rounded-xl inline-block transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-bold text-textPrimary mb-3 group-hover:text-accent transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

       {/* Fechamento + CTA inline */}
       <div className="text-center mt-16">
         <div className="max-w-3xl mx-auto glass backdrop-blur-xl rounded-3xl p-8 shadow-medium border border-white/40">
           <p className="text-lg text-textPrimary mb-6 font-medium">
             É exatamente esse buraco entre <span className="text-gradient-primary font-bold">clínica cheia</span> e <span className="text-gradient-primary font-bold">marketing bem feito</span> que o nosso serviço vem preencher.
           </p>
           <a href="#contato" className="btn-cta inline-flex">
             Quero Entender Como Esse Serviço Pode Funcionar Para Minha Clínica
           </a>
         </div>
       </div>
     </div>
   </section>
  );
};

export default Problemas;
