import React from 'react';
import Reveal from './Reveal';
import { WhatsIcon } from './Icons';

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.7 3l5.7-5.7C33.9 6.4 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.1 16 18.7 12 24 12c3 0 5.7 1.1 7.7 3l5.7-5.7C33.9 6.4 29.2 4 24 4 16.1 4 9.2 8.6 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.1 0 9.8-1.9 13.3-5.1l-6.1-5.2C29.2 36 26.7 37 24 37c-5.2 0-9.6-3.2-11.3-7.6l-6.5 5C9 39.5 16 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.5 5.5-6.5 6.7l6.1 5.2C37.8 42.2 44 37 44 24c0-1.3-.1-2.3-.4-3.5z"/>
  </svg>
);

const GoogleAdsIcon = () => (
  <svg viewBox="0 0 256 256" className="w-8 h-8" aria-hidden="true">
    <path fill="#34A853" d="M154.3 34.1L63.5 192.2c-9.9 17.1-4 38.9 13.1 48.8 17.1 10 39 4 48.9-13.1l90.7-158.1c9.9-17.1 4-39-13.1-48.9-17.1-9.9-39-4-48.8 13.2z"/>
    <circle cx="64" cy="208" r="40" fill="#FBBC04"/>
    <path fill="#4285F4" d="M214.2 207.8c0 22.1-17.9 40-40 40-22.1 0-39.9-17.9-39.9-40 0-22.1 17.8-39.9 39.9-39.9 22.1 0 40 17.8 40 39.9z"/>
  </svg>
);

const Logos = () => {
  return (
    <section className="bg-white py-8 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-textSecondary text-sm">
            <GoogleIcon /> <span>Google</span>
          </div>
          <div className="flex items-center gap-2 text-textSecondary text-sm">
            <GoogleAdsIcon /> <span>Google Ads</span>
          </div>
          <div className="flex items-center gap-2 text-textSecondary text-sm">
            <WhatsIcon className="w-6 h-6 text-[#25D366]" /> <span>WhatsApp</span>
          </div>
          <div className="text-textSecondary text-sm opacity-80 text-center">
            Trabalho baseado nas principais plataformas que os tutores usam todos os dias
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Logos;
