import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const CounterAnimation = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const endValue = parseFloat(end);
          const increment = endValue / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const displayValue = end.toString().includes('.') 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <div ref={counterRef} className="text-5xl font-bold mb-3 leading-none">
      {prefix}{displayValue}{suffix}
    </div>
  );
};

const Resultados = () => {
  const results = [
    {
      number: 28,
      prefix: '+',
      suffix: '',
      description: 'Em média, agendamentos a mais por mês por clínica atendida',
      subtitle: '',
    },
    {
      number: 4.8,
      prefix: '',
      suffix: 'x',
      description: 'Retorno sobre o investimento em anúncios, medido ao longo dos meses',
      subtitle: '',
    },
    {
      number: 15,
      prefix: 'R$ ',
      suffix: '',
      description: 'Em média por novo agendamento gerado via anúncios',
      subtitle: '',
    },
    {
      number: 92,
      prefix: '',
      suffix: '%',
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
              className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] cursor-pointer"
            >
              <CounterAnimation 
                end={result.number} 
                prefix={result.prefix} 
                suffix={result.suffix}
              />
              <div className="text-base opacity-95 mb-2">
                {result.description}
              </div>
              <div className="text-[13px] opacity-85">
                {result.subtitle}
              </div>
            </Reveal>
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
