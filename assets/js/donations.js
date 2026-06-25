const GOAL = 1200;
const GOFUNDME_LINK = 'https://gofund.me/d271bda22';

async function fetchManual() {
  const res = await fetch('./data/donations.json');
  const data = await res.json();
  return (data.gofundme || 0) + (data.direct || 0);
}

async function updateProgress() {
  const res = await fetch('./data/donations.json');
  const data = await res.json();
  const total = (data.gofundme || 0) + (data.direct || 0);
  const percent = Math.min((total / GOAL) * 100, 100).toFixed(1);

  const fill = document.querySelector('.progress-bar-fill');
  if (fill) fill.style.width = percent + '%';

  const textEl = document.getElementById('progress-text');
  if (textEl && i18n.translations['progress_text']) {
    textEl.textContent = i18n.translations['progress_text']
      .replace('{collected}', total)
      .replace('{goal}', GOAL);
  }
}

// Update on load - wait for i18n to load
window.addEventListener('load', updateProgress);
