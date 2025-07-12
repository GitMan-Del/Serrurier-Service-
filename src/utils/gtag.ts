declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
  }
  
  export const handlePhoneClickConversion = () => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-1003293596/wzxmCL-uoO8aEJyXtN4D',
        value: 75.0,
        currency: 'EUR'
      });
    }
  };
  