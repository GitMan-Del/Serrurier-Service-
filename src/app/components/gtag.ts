declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
  }
  
  export const handlePhoneClickConversion = () => {
    console.log('handlePhoneClickConversion apelat!');
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      console.log('window.gtag există, trimit conversie:', {
        send_to: 'AW-1003293596/Dt5-CJ_D0_AaEJyXtN4D',
        value: 75.0,
        currency: 'EUR'
      });
      window.gtag('event', 'conversion', {
        send_to: 'AW-1003293596/Dt5-CJ_D0_AaEJyXtN4D',
        value: 75.0,
        currency: 'EUR'
      });
    } else {
      console.log('window.gtag NU există!');
    }
  };
  