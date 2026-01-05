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
    <section id="resultados" className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cta/10 text-cta font-semibold text-sm rounded-full mb-4">
            Casos de Sucesso
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Resultados <span className="text-gradient-primary">Reais de Clínicas</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Números comprovados de clínicas que transformaram seu marketing digital
          </p>
        </div>

        {/* Grid de Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <Reveal delay={index * 80} key={index}>
              <div className="card-hover group relative overflow-hidden">
                {/* Fundo com gradiente animado */}
                <div className="absolute inset-0 bg-gradient-primary opacity-100 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Padrão decorativo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -mr-12 -mt-12"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
                </div>
                
                <div className="relative text-center text-white p-8">
                  <CounterAnimation 
                    end={result.number} 
                    prefix={result.prefix} 
                    suffix={result.suffix}
                  />
                  <div className="text-base opacity-95 mb-2 font-medium">
                    {result.description}
                  </div>
                  {result.subtitle && (
                    <div className="text-sm opacity-85">
                      {result.subtitle}
                    </div>
                  )}
                </div>
                
                {/* Brilho no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer"></div>
              </div>
            </Reveal>
          ))}
        </div>

       {/* CTA secundário */}
       <div className="text-center mt-12">
         <a href="#contato" className="btn-secondary">
           Quero Saber O Que Podemos Gerar Para Minha Clínica
         </a>
       </div>
     </div>
   </section>
  );
};

export default Resultados;
