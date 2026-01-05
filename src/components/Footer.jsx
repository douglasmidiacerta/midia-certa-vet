import React from 'react';
import Reveal from './Reveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white py-12 md:py-16 px-5 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <Reveal>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
          {/* Coluna 1 - Informações da Empresa */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                <span className="text-white text-xl">🐾</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Mídias Certa Vet</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Solução completa de marketing digital para clínicas veterinárias aumentarem agendamentos.
            </p>
            {/* Social Links (opcional) */}
            <div className="flex gap-3">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#hero'); }}
                  className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  → Início
                </a>
              </li>
              <li>
                <a 
                  href="#funciona" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#funciona'); }}
                  className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  → Como Funciona
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#portfolio'); }}
                  className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  → Portfólio
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contato'); }}
                  className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  → Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+55 31 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contato@midiacertavet.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Belo Horizonte, MG</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-white/70 mb-4">
              Receba dicas de marketing para sua clínica
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-primary text-white rounded-lg text-sm font-semibold hover:shadow-glow-primary transition-all">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-white/10 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} Mídias Certa Vet. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
