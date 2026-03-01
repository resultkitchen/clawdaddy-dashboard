import { translations, type Lang } from './translations';

const STORAGE_KEY = 'clawdaddy-lang';

export function getCurrentLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  return (localStorage.getItem(STORAGE_KEY) as Lang) || 'en';
}

export function setLang(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.setAttribute('lang', lang);
  applyTranslations(lang);
  // Update all toggle buttons
  document.querySelectorAll<HTMLButtonElement>('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'en' ? 'Español' : 'English';
  });
}

export function applyTranslations(lang?: Lang): void {
  const currentLang = lang || getCurrentLang();

  // Translate textContent
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[key]) {
      const value = translations[key][currentLang];
      // Support HTML content (for <strong> tags, etc.)
      if (value.includes('<')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && translations[key]) {
      el.placeholder = translations[key][currentLang];
    }
  });

  // Remove FOEC loading class
  document.documentElement.classList.remove('i18n-loading');
}
