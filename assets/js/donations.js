// assets/js/donations.js

// TODO: HIER DEINE ID EINTRAGEN
const BETTERPLACE_ID = "BETTERPLACE_EVENT_ID_HERE";
const GOFUNDME_URL = "https://gofund.me/141621b98";
const BETTERPLACE_URL = "https://betterplace.org/de/projects/BETTERPLACE_PROJECT_ID";
const GOAL = 1200;

async function fetchBetterplace() {
  try {
    const res = await fetch(
      `https://api.betterplace.org/de/api_v4/fundraising_events/${BETTERPLACE_ID}.json`
    );
    const data = await res.json();
    return data.donated_amount_in_cents / 100; // → Euro
  } catch (e) {
    console.warn("Betterplace API nicht erreichbar:", e);
    return 0;
  }
}

async function fetchManual() {
  const res = await fetch('./data/donations.json?t=' + Date.now());
  const data = await res.json();
  return (data.gofundme || 0) + (data.direct || 0);
}

async function updateProgress() {
  const [bp, manual] = await Promise.all([fetchBetterplace(), fetchManual()]);
  const total = bp + manual;
  const percent = Math.min((total / GOAL) * 100, 100).toFixed(1);

  // Fortschrittsbalken
  document.querySelector('.progress-bar-fill').style.setProperty('--target-percent', percent + '%');

  // Zähler (animated countUp)
  // countUp(0, total, 1200, '.donation-total');
  // document.querySelector('.donation-percent').textContent = percent + '%';
  console.log(`Gesamt gesammelt: ${total}€ (${percent}%)`);
}
