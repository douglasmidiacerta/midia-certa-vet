import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Como Funciona', href: '#funciona' },
    { name: 'Clínicas', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleMenuClick = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass backdrop-blur-xl shadow-medium py-2 border-b border-white/20' 
          : 'bg-white/95 backdrop-blur-sm shadow-soft border-b border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[75px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="flex items-center gap-2 group"
              onClick={(e) => { e.preventDefault(); handleMenuClick('#hero'); }}
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow-primary transition-all">
                <span className="text-white text-xl">🐾</span>
              </div>
              <span className="font-heading text-xl font-bold text-gradient-primary group-hover:opacity-80 transition-opacity">
                Mídias Certa Vet
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                className="px-4 py-2 text-sm font-medium text-textSecondary hover:text-primary hover:bg-neutral-100 rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleMenuClick('#contato'); }}
              className="ml-2 px-6 py-2.5 bg-gradient-primary text-white text-sm font-semibold rounded-lg shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200"
            >
              Falar com Especialista
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-textPrimary hover:text-primary hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden glass backdrop-blur-xl border-t border-white/20 shadow-strong animate-slide-up">
          <nav className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                className="block px-4 py-3 text-base font-medium text-textPrimary hover:text-primary hover:bg-neutral-100 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleMenuClick('#contato'); }}
              className="block px-4 py-3 text-base font-semibold text-center bg-gradient-primary text-white rounded-lg shadow-medium mt-4"
            >
              Falar com Especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
