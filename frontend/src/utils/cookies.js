import Cookies from 'js-cookie';

export const cookieConsent = {
  getConsent: () => Cookies.get('cookie_consent'),
  setConsent: (value = 'accepted') => {
    Cookies.set('cookie_consent', value, { 
      expires: 365,
      sameSite: 'lax'
    });
  },
  hasConsent: () => {
    return Cookies.get('cookie_consent') === 'accepted';
  }
};

export const userPreferences = {
  getTheme: () => Cookies.get('theme') || 'light',
  setTheme: (theme) => {
    Cookies.set('theme', theme, { 
      expires: 30,
      sameSite: 'lax'
    });
  },
  getLanguage: () => Cookies.get('language') || 'ru',
  setLanguage: (lang) => {
    Cookies.set('language', lang, { 
      expires: 30,
      sameSite: 'lax'
    });
  }
};