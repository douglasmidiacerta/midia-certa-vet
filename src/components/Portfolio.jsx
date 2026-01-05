import React from 'react';
import Reveal from './Reveal';

const Portfolio = () => {
  const clients = [
    {
      title: 'Clínica Veterinária BH',
      url: 'clinicaveterinariabh.com.br',
      badge: '24h | Equipe Treinada',
      link: 'https://clinicaveterinariabh.com.br/',
      highlight: false,
    },
    {
      title: 'Clínica Veterinária BH 24h',
      url: 'clinicaveterinariabh24h.com.br',
      badge: 'Atendimento 24/7',
      link: 'https://clinicaveterinariabh24h.com.br/',
      highlight: false,
    },
    {
      title: 'CliniVet Veterinária',
      url: 'clinivetveterinaria.com.br',
      badge: 'Serviços Completos',
      link: 'https://clinivetveterinaria.com.br/',
      highlight: false,
    },
    {
      title: 'CliniVet 24 Horas',
      url: 'clinivet24horas.com.br',
      badge: 'Emergências 24h',
      link: 'https://clinivet24horas.com.br/',
      highlight: false,
    },
    {
      title: 'UPA Clínica Veterinária',
      url: 'upaclinicaveterinaria.com.br',
      badge: 'Hospital Equipado',
      link: 'https://upaclinicaveterinaria.com.br/',
      highlight: false,
    },
    {
      title: 'UPA Pet 24h',
      url: 'upapet24h.com.br',
      badge: 'Cuidado 24/7',
      link: 'https://upapet24h.com.br/',
      highlight: false,
    },
    {
      title: 'UPA Veterinária 24h',
      url: 'upaveterinaria24h.com.br',
      badge: '🏆 Referência em BH',
      link: 'https://upaveterinaria24h.com.br/',
      highlight: true,
    },
  ];

  const regularClients = clients.filter(c => !c.highlight);
  const highlightClient = clients.find(c => c.highlight);

  return (
    <section id="portfolio" className="bg-white py-12 md:py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-3">
          Veja Clínicas que Já Aumentaram Seus Agendamentos
        </h2>
        
        {/* Subtítulo */}
        <p className="text-lg text-textSecondary text-center mb-10 md:mb-12">
          Sites e campanhas que a gente desenvolveu em BH
        </p>

        {/* Grid de Clientes Regulares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {regularClients.map((client, index) => (
            <Reveal delay={index * 60}
              key={index}
              className="bg-white rounded-lg p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.12)] hover:bg-[#f9f9f9] group cursor-pointer"
            >
              {/* Placeholder para Logo/Screenshot */}
              <div className="h-[120px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-md mb-4 flex items-center justify-center text-primary text-2xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                🐾
              </div>
              
              <h3 className="text-base font-semibold text-textPrimary mb-2">
                {client.title}
              </h3>
              
              <div className="text-[13px] text-primary mb-3">
                {client.url}
              </div>
              
              <div className="inline-block bg-gray-100 text-textPrimary px-3 py-1.5 rounded-2xl text-xs mb-4">
                {client.badge}
              </div>
              
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent text-primary border-2 border-primary px-5 py-2.5 rounded-md text-[13px] font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Ver Site
              </a>
            </Reveal>
          ))}
        </div>

        {/* Cliente Destaque */}
        {highlightClient && (
          <div className="max-w-md mx-auto">
            <Reveal className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-center">
              {/* Placeholder para Logo/Screenshot */}
              <div className="h-[120px] bg-white/10 rounded-md mb-4 flex items-center justify-center text-white text-3xl font-bold">
                🐾
              </div>
              
              <h3 className="text-lg font-semibold mb-2">
                {highlightClient.title}
              </h3>
              
              <div className="text-sm text-white/80 mb-3">
                {highlightClient.url}
              </div>
              
              <div className="inline-block bg-white/20 text-white px-3 py-1.5 rounded-2xl text-xs mb-5">
                {highlightClient.badge}
              </div>
              
              <a
                href={highlightClient.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-8 py-3 rounded-md text-[15px] font-semibold transition-all duration-300 hover:bg-gray-100"
              >
                Ver Site
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
