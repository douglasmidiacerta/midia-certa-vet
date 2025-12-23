import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal: anima conteúdo quando entra na viewport, sem libs externas.
 * Props:
 * - as: tag wrapper (default 'div')
 * - className: classes adicionais
 * - delay: ms para atraso da animação
 * - threshold: porcentagem visível para considerar "visível"
 */
const Reveal = ({ as: Tag = 'div', className = '', delay = 0, threshold = 0.2, children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  const base = 'transition-all duration-700 ease-out transform';
  const hidden = 'opacity-0 translate-y-6';
  const shown = 'opacity-100 translate-y-0';

  return (
    <Tag ref={ref} className={`${base} ${visible ? shown : hidden} ${className}`}>
      {children}
    </Tag>
  );
};

export default Reveal;
