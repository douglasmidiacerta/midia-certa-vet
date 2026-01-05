import React from 'react';
import Reveal from './Reveal';
import { MonitorIcon, MegaphoneIcon, ChartBarIcon, ChatBubbleIcon } from './Icons';

const Solucao = () => {
  const solutions = [
    {
      icon: <MonitorIcon className="w-8 h-8" />,
      title: 'Criação ou ajuste da página da clínica',
      items: [
        'Desenvolvimento ou otimização de página focada em conversão (ligações e WhatsApp)',
        'Textos e estrutura para destacar serviços, diferenciais e localização',
        'Configuração de rastreamento para entender o que está funcionando',
      ],
    },
    {
      icon: <MegaphoneIcon className="w-8 h-8" />,
      title: 'Gestão profissional de anúncios (Google e redes)',
      items: [
        'Planejamento e criação de campanhas para sua região e tipos de serviço',
        'Ajustes constantes de segmentação, palavras-chave e criativos',
        'Pausa, ampliação ou mudança de foco conforme resultados e necessidade',
      ],
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Acompanhamento e comunicação contínua',
      items: [
        'Relatórios mensais simples com ligações, mensagens e custo por agendamento',
        'Reuniões ou áudios periódicos para alinhar melhorias',
      ],
    },
    {
      icon: <ChatBubbleIcon className="w-8 h-8" />,
      title: 'Suporte ao atendimento (bônus de serviço)',
      items: [
        'Roteiro para WhatsApp focado em transformar contatos em agendamentos',
        'Orientações pontuais para equipe sobre respostas e horários',
      ],
    },
  ];

  return (
    <section id="solucao" className="bg-white py-16 md:py-24 px-5 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
            Nossa Solução
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            O Que Fazemos Por Você, <span className="text-gradient-primary">Todo Mês</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Serviço completo de atração de novos clientes: planejamento, criação, gestão e otimização das ações digitais que trazem pacientes para a sua clínica.
          </p>
        </div>

        {/* Grid de Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Reveal delay={index * 100} key={index}>
              <div className="card-hover group bg-white relative overflow-hidden border-t-4 border-secondary">
                {/* Gradiente de hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
                
                <div className="relative text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-soft group-hover:shadow-glow-primary">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-bold text-textPrimary mb-4 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <ul className="text-sm text-textSecondary leading-relaxed text-left space-y-3">
                    {solution.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucao;
