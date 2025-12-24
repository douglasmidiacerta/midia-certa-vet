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
    <section id="solucao" className="bg-neutral py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-3">
          O Que Fazemos Por Você, Todo Mês
        </h2>
        <p className="text-lg text-textSecondary text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          Serviço completo de atração de novos clientes: planejamento, criação, gestão e otimização das ações digitais que trazem pacientes para a sua clínica.
        </p>

        {/* Grid de Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <Reveal delay={index * 100}
              key={index}
              className="bg-white rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-4 text-primary">
                {solution.icon}
              </div>
              <h3 className="text-lg font-semibold text-textPrimary mb-3">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucao;
