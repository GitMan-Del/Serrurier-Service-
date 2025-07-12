declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
  }
  
  export const handlePhoneClickConversion = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();
    const phoneHref = 'tel:+33659514692';
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-1003293596/wzxmCL-uoO8aEJyXtN4D',
        value: 75.0,
        currency: 'EUR',
        event_callback: () => {
          window.location.href = phoneHref;
        }
      });
      setTimeout(() => {
        window.location.href = phoneHref;
      }, 500);
    } else {
      window.location.href = phoneHref;
    }
  };
  