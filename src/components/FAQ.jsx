import React, { useState } from 'react';
import Reveal from './Reveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Quanto custa?',
      answer: 'Você investe em Google Ads (recomendado: R$ 800-1.500/mês) e paga uma taxa fixa de gestão. Cada agendamento sai a média de R$ 15. Se ganhar 30 agendamentos/mês, o ROI é de 4-5x.',
    },
    {
      question: 'Quanto tempo leva para ver resultado?',
      answer: 'Primeiros resultados em 7-14 dias. Estabilizando em 30 dias. Para métricas completas e otimização, recomendamos 90 dias de acompanhamento.',
    },
    {
      question: 'Vocês gerenciam Google Ads ou só fazem site?',
      answer: 'A gente faz TUDO: site, Google Ads, acompanhamento mensal, otimização contínua de campanhas, relatórios de ROI. É um serviço completo e integrado.',
    },
    {
      question: 'E se não funcionar?',
      answer: 'Funcionou em +95% dos casos. Se não houver resultado satisfatório em 30 dias, a gente faz revisão estratégica SEM custo extra.',
    },
    {
      question: 'Vocês trabalham em [sua cidade]?',
      answer: 'Sim, trabalhamos em Belo Horizonte e região metropolitana com forte expertise. Outras cidades analisamos caso a caso.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-12 md:py-16 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-10 md:mb-12">
          Dúvidas Frequentes
        </h2>

        {/* Acordeão */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Reveal delay={index * 80}
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-neutral px-5 py-5 cursor-pointer flex justify-between items-center font-semibold text-textPrimary text-base transition-all duration-300 hover:bg-[#f0f1ff] text-left"
              >
                <span>{faq.question}</span>
                <span className="text-2xl text-primary ml-4 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div 
                className={`bg-white px-5 text-[#555] text-[15px] leading-relaxed border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 py-5 opacity-100' 
                    : 'max-h-0 py-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
