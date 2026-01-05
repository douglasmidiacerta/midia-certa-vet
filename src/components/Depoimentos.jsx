import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Dra. Marina — UPA Pet BH',
    text: 'Depois que começamos o serviço de marketing, não precisei mais tentar cuidar dos anúncios por conta própria. Hoje sei quanto invisto, quantos clientes chegam disso e consigo planejar com muito mais tranquilidade.',
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Dr. Lucas — CliniVet 24h',
    text: 'Eu queria alguém que pegasse essa parte para mim. Agora recebo relatório pronto e acompanho com olhar de gestor, sem precisar aprender tudo de tráfego.',
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Dra. Paula — Vet Serra',
    text: 'O fluxo de novos pacientes ficou previsível. Mantemos o que funciona, ajustamos o que precisa e seguimos crescendo.',
    avatar: 'https://i.pravatar.cc/100?img=22'
  },
];

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-neutral py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-3">O Que Donos de Clínicas Dizem do Serviço</h2>
        <p className="text-lg text-textSecondary text-center mb-10 md:mb-12 max-w-3xl mx-auto">Histórias reais de quem tirou o marketing do improviso e passou a acompanhar com olhar de gestor.</p>
        
        {/* Desktop: Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80} className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="text-sm font-semibold text-textPrimary">{t.name}</div>
              </div>
              <p className="text-[15px] text-[#555] leading-relaxed">{t.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Mobile: Carousel View */}
        <div className="md:hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="text-sm font-semibold text-textPrimary">{t.name}</div>
                    </div>
                    <p className="text-[15px] text-[#555] leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
