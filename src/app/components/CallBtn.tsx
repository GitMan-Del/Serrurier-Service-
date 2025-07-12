'use client';

import { handlePhoneClickConversion } from '@/utils/gtag';
import { ReactNode } from 'react';

interface CallBtnProps {
  variant?: 'Call-Btn' | 'Call-Link';
  text?: string;
  className?: string;
}

const CallBtn = ({
  variant = 'Call-Btn',
  text = '06 59 51 46 92',
  className = '',
}: CallBtnProps) => {
  if (variant === 'Call-Link') {
    return (
      <a
        href="tel:+33659514692"
        onClick={handlePhoneClickConversion}
        className={`inline-flex items-center gap-1 text-blue-700 font-medium relative group ${className}`}
        style={{ textDecoration: 'none' }}
      >
        <span className="text-lg" role="img" aria-label="phone">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="#e53935"/></svg>
        </span>
        <span className="relative">
          {text}
          <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded" />
        </span>
      </a>
    );
  }
  // Default: Call-Btn
  return (
    <a
      href="tel:+33659514692"
      onClick={handlePhoneClickConversion}
      className={`btn-sec hover:scale-105 transition-all duration-200 border hover:cursor-pointer btn-fade-in px-6 py-3 text-base md:text-lg rounded-lg min-w-[48px] min-h-[48px] flex items-center justify-center ${className}`}
    >
      <span className="mr-2" role="img" aria-label="phone">📞</span> {text}
    </a>
  );
};

export default CallBtn; 