const GOAL = 1200;
const GOFUNDME_LINK = 'https://gofund.me/d271bda22';

async function fetchManual() {
  const res = await fetch('./data/donations.json');
  const data = await res.json();
  return (data.gofundme || 0) + (data.direct || 0);
}

async function updateProgress() {
  const total = await fetchManual();
  const percent = Math.min((total / GOAL) * 100, 100).toFixed(1);

  const fill = document.querySelector('.progress-bar-fill');
  if (fill) {
    fill.style.width = percent + '%';
  }
}

// Update on load
updateProgress();
