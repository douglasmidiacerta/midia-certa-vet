import React from 'react';
import Reveal from './Reveal';

const Sobre = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Reveal className="order-last md:order-none">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Sua Clínica Continua nas Suas Mãos. O Marketing, Você Pode Delegar.</h2>
          <p className="text-[15px] text-[#555] leading-relaxed mb-4">Se você sente que a clínica tem potencial para atender mais, mas não tem tempo nem interesse em virar especialista em marketing, esse serviço foi pensado exatamente para o seu caso. Uma conversa rápida já mostra se faz sentido começarmos algo juntos.</p>
          <ul className="text-[15px] text-[#555] leading-[1.8] space-y-2 mb-6 list-disc pl-5">
            <li>Especialização em clínicas veterinárias de BH e região</li>
            <li>Foco em resultado concreto: novos contatos e agendamentos</li>
            <li>Relação de parceria e comunicação contínua</li>
          </ul>
          <a href="#contato" className="inline-block bg-cta text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#ff5252]">Quero marcar a conversa inicial gratuita</a>
        </Reveal>
        <Reveal>
          <div className="bg-neutral rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-center">
            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1080&auto=format&fit=crop" alt="Especialista" className="w-full h-[320px] object-cover rounded-md mb-4" />
            <div className="text-textPrimary font-semibold">Responsável pelo serviço</div>
            <div className="text-textSecondary text-sm">Marketing para clínicas veterinárias em BH</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Sobre;
