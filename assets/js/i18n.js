const i18n = {
  currentLang: 'de',
  translations: {},

  async load(lang) {
    const response = await fetch(`./locales/${lang}.json`);
    this.translations = await response.json();
    this.currentLang = lang;
    this.apply();
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[key]) {
        el.textContent = this.translations[key];
      }
    });
  }
};

// Initial load
i18n.load('de');
