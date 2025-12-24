import React from 'react';
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
  return (
    <section className="bg-neutral py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-3">O Que Donos de Clínicas Dizem do Serviço</h2>
        <p className="text-lg text-textSecondary text-center mb-10 md:mb-12 max-w-3xl mx-auto">Histórias reais de quem tirou o marketing do improviso e passou a acompanhar com olhar de gestor.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80} className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="text-sm font-semibold text-textPrimary">{t.name}</div>
              </div>
              <p className="text-[15px] text-[#555] leading-relaxed">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
