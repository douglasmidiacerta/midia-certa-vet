import React from 'react';

const iconProps = 'w-6 h-6';

export const MonitorIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="2" ry="2"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

export const MegaphoneIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11v2a4 4 0 0 0 4 4h1"/>
    <path d="M21 8a4 4 0 0 1 0 8"/>
    <path d="M3 8v8l14-4V12L3 8z"/>
  </svg>
);

export const ChartBarIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="21" x2="21" y2="21"/>
    <rect x="7" y="10" width="3" height="7"/>
    <rect x="12" y="6" width="3" height="11"/>
    <rect x="17" y="3" width="3" height="14"/>
  </svg>
);

export const ChatBubbleIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z"/>
  </svg>
);

export const AlertTriangleIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

export const ClockIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const CurrencyIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 1v22"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

export const PawIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="5" cy="8" r="2"/>
    <circle cx="9" cy="5" r="2"/>
    <circle cx="15" cy="5" r="2"/>
    <circle cx="19" cy="8" r="2"/>
    <path d="M12 9c-3 0-6 1.5-6 5 0 2 2 4 6 4s6-2 6-4c0-3.5-3-5-6-5z"/>
  </svg>
);

export const BoneIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 8a3 3 0 1 1 4-4l10 10a3 3 0 1 1-4 4L5 8z"/>
  </svg>
);

export const StethoscopeIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2v6a6 6 0 0 0 12 0V2"/>
    <circle cx="20" cy="16" r="2"/>
    <path d="M20 18v2a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4v-5"/>
  </svg>
);

export const WhatsIcon = ({ className = iconProps }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.001C.122 5.281 5.403 0 12.057 0c3.17 0 6.167 1.237 8.413 3.484A11.82 11.82 0 0124 11.943c-.003 6.654-5.284 11.935-11.938 11.935-2.002 0-3.955-.492-5.688-1.425L.057 24z"/>
  </svg>
);

export default {
  MonitorIcon,
  MegaphoneIcon,
  ChartBarIcon,
  ChatBubbleIcon,
  AlertTriangleIcon,
  ClockIcon,
  CurrencyIcon,
  PawIcon,
  BoneIcon,
  StethoscopeIcon,
  WhatsIcon,
};
