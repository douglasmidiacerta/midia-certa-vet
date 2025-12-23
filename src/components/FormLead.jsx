import React, { useState } from 'react';

/**
 * FormLead: formulário simples para captação de leads.
 * - Campos: Nome da clínica, Seu nome, WhatsApp
 * - onSubmit?: callback({ clinicName, name, whatsapp })
 * - fallback: abre conversa no WhatsApp com mensagem estruturada
 */
const FormLead = ({ id, className = '', onSubmit, phoneNumber = '5531999999999' }) => {
  const [clinicName, setClinicName] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const payload = { clinicName, name, whatsapp };

    try {
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        const msg = `Olá! Sou ${name} da clínica ${clinicName}. Meu WhatsApp é ${whatsapp}. Gostaria de conversar sobre o serviço de marketing para atrair novos clientes.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form id={id} onSubmit={handleSubmit} className={`bg-white rounded-lg p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)] ${className}`}>
      <h3 className="text-lg font-semibold text-textPrimary mb-3">Vamos conversar sobre sua clínica?</h3>
      <p className="text-sm text-textSecondary mb-5">Preencha em menos de 30 segundos e receba um contato ainda hoje.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          type="text"
          required
          placeholder="Nome da clínica"
          value={clinicName}
          onChange={(e) => setClinicName(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Nome da clínica"
        />
        <input
          type="text"
          required
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Seu nome"
        />
        <input
          type="tel"
          required
          placeholder="WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="WhatsApp"
        />
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-[#5a6fe6] disabled:opacity-60"
        >
          {submitting ? 'Enviando...' : 'Enviar e falar no WhatsApp'}
        </button>
      </div>
    </form>
  );
};

export default FormLead;
