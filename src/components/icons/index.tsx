import React from 'react';

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

export const Menu: React.FC<IconProps> = ({ className = 'h-5 w-5', strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: '20px', height: '20px', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

export const Search: React.FC<IconProps> = ({ className = 'h-5 w-5', strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: '20px', height: '20px', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ className = 'h-4 w-4', strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const Plus: React.FC<IconProps> = ({ className = 'h-5 w-5', strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: '20px', height: '20px', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);
