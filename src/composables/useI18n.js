import { ref, computed, inject, provide } from 'vue';
import messages from '../locales';

const I18N_SYMBOL = Symbol('i18n');

export function createI18n(options) {
  const locale = ref(options.locale || 'en');
  const fallbackLocale = options.fallbackLocale || 'en';
  const allMessages = options.messages || {};

  function t(key) {
    const keys = key.split('.');
    let value = allMessages[locale.value];
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    if (value === undefined) {
      // fallback
      value = keys.reduce((acc, k) => (acc && acc[k] ? acc[k] : undefined), allMessages[fallbackLocale]);
    }
    return value || key;
  }

  function setLocale(newLocale) {
    locale.value = newLocale;
  }

  function install(app) {
    app.provide(I18N_SYMBOL, { locale, t, setLocale });
    app.config.globalProperties.$t = t;
    app.config.globalProperties.$locale = locale;
    app.config.globalProperties.$setLocale = setLocale;
  }

  return { locale, t, setLocale, install };
}

export function useI18n() {
  return inject(I18N_SYMBOL);
} 