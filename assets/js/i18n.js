const i18n = {
  currentLang: 'de',
  translations: {},

  async load(lang) {
    try {
      const response = await fetch(`./locales/${lang}.json`);
      if (!response.ok) throw new Error('Failed to load');
      this.translations = await response.json();
      this.currentLang = lang;
      this.apply();
    } catch (e) {
      console.error("I18n load error:", e);
    }
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
