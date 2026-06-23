# 🐾 Help Betty — Spendensammlung für eine kranke Katze

<div align="center">

![Betty](https://img.shields.io/badge/Betty-12%20Jahre%20alt-pink?style=for-the-badge)
![Goal](https://img.shields.io/badge/Ziel-1.200%20€-brightgreen?style=for-the-badge)
![Status](https://img.shields.io/badge/Kampagne-In%20Vorbereitung-yellow?style=for-the-badge)
![Location](https://img.shields.io/badge/Ort-Offenbach%2C%20Hessen-blue?style=for-the-badge)
![Design](https://img.shields.io/badge/Design-UI--UX--Pro--Max%20v2.6-purple?style=for-the-badge)
![License](https://img.shields.io/badge/Lizenz-MIT-green?style=for-the-badge)

> **Betty ist 12 Jahre alt, leidet unter entzündeten Zähnen und einer Autoimmunerkrankung.**  
> Fressen ist für sie jeden Tag Schmerz. Wir sammeln 1.200 € für eine Zahnextraktion.

[🌐 Website](https://SergeiSmazal.github.io/betty-help) • [💛 GoFundMe](#) • [💚 Betterplace](#) • [📸 Instagram](#)

</div>

---

## 📋 Inhaltsverzeichnis

- [Über Betty](#-über-betty)
- [Infrastruktur](#-infrastruktur-des-projekts)
- [GitHub Pages Hosting](#-github-pages-hosting--deployment)
- [Design System](#-design-system--ui-spezifikation)
- [Animationen](#-animation-spezifikation)
- [Komponenten](#-komponenten-map)
- [Spendenintegration](#-spendenintegration--api)
- [Projektstruktur](#-projektstruktur)
- [Roadmap](#-roadmap)
- [Quick Start](#-quick-start)
- [Links](#-links)

---

## 🐱 Über Betty

Betty ist eine 12-jährige Katze aus Offenbach am Main, Deutschland. Sie leidet unter:

| Problem | Details |
|---------|---------|
| 🦷 Entzündete Zähne | Fressen verursacht starke Schmerzen — sie geht zur Schüssel und muss wieder weggehen |
| 🏥 Autoimmunerkrankung | Schwächt ihren Körper zusätzlich, verlangsamt die Heilung |

**Tierärztliche Empfehlung:** Zahnextraktion der entzündeten Zähne  
**Gesamtkosten:** ~1.200 € (Narkose + Operation + Nachsorge)

---

## 🏗️ Infrastruktur des Projekts

```
betty-help (GitHub Pages) ← Zentraler Hub
         │
         ├── 💛 GoFundMe          → Spenden (international, Kreditkarte)
         ├── 💚 Betterplace.org   → Spenden (Deutschland, steuerlich absetzbar)
         ├── 📸 Instagram         → @betty.the.cat.germany (Updates & Stories)
         └── 💳 PayPal / IBAN    → Direktüberweisung
```

### Datenfluss — Spendenfortschrittsbalken

```
Betterplace API  ──(automatisch)──► donations.js ──► Fortschrittsbalken
GoFundMe         ──(manuell 1x/Tag)► data/donations.json ──► Fortschrittsbalken
PayPal / direkt  ──(manuell 1x/Tag)► data/donations.json ──► Fortschrittsbalken
```

| Plattform | Sync-Typ | Frequenz | Methode |
|-----------|----------|----------|---------|
| Betterplace.org | ✅ Automatisch | Echtzeit | `GET api.betterplace.org/de/api_v4/fundraising_events/{ID}.json` |
| GoFundMe | 🔄 Manuell | 1x täglich | `data/donations.json` bearbeiten + git push |
| PayPal / IBAN direkt | 🔄 Manuell | 1x täglich | `data/donations.json` bearbeiten + git push |

---

## 🌐 GitHub Pages Hosting & Deployment

> **Repository:** https://github.com/SergeiSmazal/betty-help  
> **Live-URL:** https://sergeismazal.github.io/betty-help  
> **Status:** ⬜ Pages noch nicht aktiviert — Anleitung unten

---

### Schritt 1 — Repository vorbereiten

Das Repo `betty-help` existiert bereits. Stelle sicher, dass folgendes vorhanden ist:

```
betty-help/
├── index.html   ← PFLICHT: GitHub Pages sucht genau diese Datei
└── README.md    ← bereits vorhanden ✅
```

> ⚠️ Ohne `index.html` zeigt GitHub Pages nur den README an — kein Design, kein Fortschrittsbalken.

---

### Schritt 2 — GitHub Pages aktivieren

**Option A: Über die GitHub-Website (empfohlen)**

1. Öffne: https://github.com/SergeiSmazal/betty-help
2. Klicke oben auf **„Settings"** (Zahnrad-Icon)
3. Im linken Menü: **„Pages"** (unter „Code and automation")
4. Unter **„Build and deployment"**:
   - Source: **„Deploy from a branch"**
   - Branch: **`main`** (oder `master` falls so benannt)
   - Folder: **`/ (root)`**
5. Klicke **„Save"**
6. Warte 1–3 Minuten
7. Oben erscheint: **„Your site is live at https://sergeismazal.github.io/betty-help"** ✅

**Option B: Über die Kommandozeile**

```bash
# Ins Repo-Verzeichnis wechseln
cd betty-help

# GitHub Pages Branch konfigurieren (falls nötig)
git checkout -b main
git push -u origin main

# Dann trotzdem Schritt 2 Option A ausführen —
# die Aktivierung selbst geht nur über die Website
```

---

### Schritt 3 — Erste Datei hochladen (index.html)

**Option A: Über GitHub-Website (ohne Terminal)**

1. Öffne https://github.com/SergeiSmazal/betty-help
2. Klicke **„Add file"** → **„Upload files"**
3. Ziehe `index.html` + Ordner `assets/` + `data/` hinein
4. Unten: Commit-Nachricht eintragen: `🚀 Initial deploy: Betty website`
5. Klicke **„Commit changes"**
6. GitHub Pages deployed automatisch in ~30 Sekunden

**Option B: Über Terminal (Git)**

```bash
# Lokales Repo klonen
git clone https://github.com/SergeiSmazal/betty-help.git
cd betty-help

# Dateien hinzufügen (index.html, assets/, data/)
cp ~/Downloads/index.html .
cp ~/Downloads/betty1.jpg assets/img/
cp ~/Downloads/betty2.jpg assets/img/

# Hochladen
git add .
git commit -m "🚀 Initial deploy: Betty fundraising website"
git push origin main

# → Live in ~30 Sekunden unter https://sergeismazal.github.io/betty-help
```

---

### Schritt 4 — Deployment überprüfen

```bash
# Deployment-Status prüfen (GitHub CLI — optional)
gh run list --repo SergeiSmazal/betty-help
```

**Oder über die Website:**
1. Öffne das Repo → Tab **„Actions"**
2. Du siehst einen Workflow: **„pages build and deployment"**
3. Grüner Haken ✅ = live, Gelbes Rad 🔄 = noch am Deployen, Rotes X ❌ = Fehler

**Direkter Test:**
```bash
curl -I https://sergeismazal.github.io/betty-help
# Erwartet: HTTP/2 200
# Aktuell:  HTTP/2 404  ← index.html fehlt noch
```

---

### Auto-Deployment — wie es funktioniert

```
Du pushst Änderungen
        │
        ▼
GitHub erkennt Push auf branch: main
        │
        ▼
GitHub Actions startet automatisch
"pages build and deployment" Workflow
        │
        ▼
~30 Sekunden später: Website live ✅
        │
        ▼
https://sergeismazal.github.io/betty-help
```

> Jedes `git push` = automatisches Update der Website.  
> Kein manueller Deploy nötig. Kein Server. Komplett kostenlos.

---

### Spendenstand täglich aktualisieren (Workflow)

```bash
# 1. Datei öffnen und Beträge eintragen
nano data/donations.json

# Beispiel nach erstem Spendentag:
# {
#   "gofundme": 120,
#   "direct":   30,
#   "goal":     1200,
#   "updated":  "2026-06-24"
# }

# 2. Speichern + Deploy (ein Befehl):
git add data/donations.json && \
git commit -m "💰 Update: GoFundMe 120€ + Direkt 30€ = 150€ gesamt" && \
git push

# → Fortschrittsbalken auf der Website zeigt 12.5% in ~30 Sekunden
```

---

### Custom Domain (optional — später)

Falls du irgendwann eine eigene Domain möchtest (z.B. `help-betty.de`):

```bash
# 1. Domain kaufen (z.B. bei IONOS, Strato, Namecheap — ~10€/Jahr)

# 2. CNAME-Eintrag beim Domain-Anbieter setzen:
#    CNAME  www  →  sergeismazal.github.io

# 3. Datei CNAME im Repo anlegen:
echo "www.help-betty.de" > CNAME
git add CNAME && git commit -m "Add custom domain" && git push

# 4. In GitHub Settings → Pages → Custom domain: www.help-betty.de eintragen
# 5. "Enforce HTTPS" aktivieren ✅

# → https://www.help-betty.de zeigt deine GitHub Pages Website
```

> Für die Betty-Kampagne ist Custom Domain **nicht nötig** —  
> `sergeismazal.github.io/betty-help` funktioniert perfekt und ist kostenlos.

---

### Häufige Fehler & Lösungen

| Problem | Ursache | Lösung |
|---------|---------|--------|
| 404 auf `sergeismazal.github.io/betty-help` | Pages nicht aktiviert oder `index.html` fehlt | Schritt 2 + 3 ausführen |
| Bilder werden nicht angezeigt | Pfade falsch (Groß-/Kleinschreibung!) | `assets/img/betty1.jpg` — exakt so im HTML |
| Betterplace API funktioniert nicht | CORS-Fehler im Browser | Betterplace erlaubt Cross-Origin — prüfe die ID |
| Alte Version noch sichtbar | Browser-Cache | `Ctrl+Shift+R` (Hard Refresh) |
| Änderungen nicht live | Push vergessen oder Actions-Fehler | Tab „Actions" prüfen → Fehlermeldung lesen |
| `index.html` zeigt nur Text | Datei als `.txt` hochgeladen | Dateiendung muss exakt `.html` sein |

---

### Wichtige GitHub Pages Limits

| Limit | Wert | Für Betty relevant? |
|-------|------|---------------------|
| Repo-Größe | 1 GB | ✅ Kein Problem (nur HTML/CSS/JS/2 Fotos) |
| Monatliche Bandwidth | 100 GB | ✅ Kein Problem |
| Build-Zeit | max. 10 Min | ✅ Kein Problem (statische Seite) |
| Kosten | **0 €** | ✅ Dauerhaft kostenlos |
| HTTPS | Automatisch | ✅ Immer aktiv |

---

## 🎨 Design System & UI-Spezifikation

> Basiert auf **[UI UX Pro Max v2.6](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** — 95.3k ⭐  
> Kategorie: **Veterinary / Wellness** → Empfohlener Stil: **Soft UI Evolution (#19)**  
> Landing Page Pattern: **Storytelling-Driven (#8)** — ideal für Charity, Nonprofits, Marken

---

### 🎨 Farbpalette

Direkt aus dem UI-UX-Pro-Max Design System für Veterinary / Wellness generiert:

```css
:root {
  /* Primärfarben */
  --color-primary:     #E8B4B8;   /* Soft Pink — Emotionen, Wärme, Mitgefühl */
  --color-secondary:   #A8D5BA;   /* Sage Green — Vertrauen, Natur, Heilung */
  --color-cta:         #D4AF37;   /* Gold — Aufruf zur Aktion, Premium */

  /* Hintergründe */
  --color-bg:          #FFF8F5;   /* Warm White — weich, einladend */
  --color-bg-card:     #FFFFFF;   /* Card Background */
  --color-bg-accent:   #FFF0F7;   /* Light Pink Tint — für Boxen, Highlights */

  /* Text */
  --color-text:        #2C2C2C;   /* Charcoal — Haupttext, 4.5:1 Kontrast */
  --color-text-muted:  #666666;   /* Muted Gray — Nebentext, Captions */
  --color-text-light:  #999999;   /* Light Gray — Placeholder, Disabled */

  /* Status & Feedback */
  --color-success:     #4CAF50;   /* Green — Erfolgsmeldungen */
  --color-warning:     #FF9800;   /* Orange — Hinweise */
  --color-error:       #F44336;   /* Red — Fehler */

  /* Schatten (Soft UI Evolution) */
  --shadow-sm:  0 2px 8px rgba(232, 180, 184, 0.15);
  --shadow-md:  0 4px 20px rgba(232, 180, 184, 0.25);
  --shadow-lg:  0 8px 40px rgba(232, 180, 184, 0.35);
  --shadow-cta: 0 4px 15px rgba(212, 175, 55, 0.4);
}
```

> **Anti-Patterns (aus UI-UX-Pro-Max Veterinary-Regeln):**
> ❌ Neon-Farben / grelle Kontraste  
> ❌ Dunkles Design (Dark Mode)  
> ❌ KI-typische Lila/Pink-Verläufe  
> ❌ Harte, abrupte Animationen

---

### 🔤 Typografie

Aus UI-UX-Pro-Max: **Cormorant Garamond / Montserrat** — Mood: elegant, beruhigend, vertrauenswürdig

```html
<!-- Google Fonts Import -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
```

```css
/* Typografie-Skala */
--font-heading:  'Cormorant Garamond', Georgia, serif;
--font-body:     'Montserrat', system-ui, sans-serif;

/* Größen (Fluid Typography) */
--text-hero:     clamp(2.5rem, 5vw, 4rem);      /* H1 Hero */
--text-h2:       clamp(1.8rem, 3vw, 2.5rem);    /* Sektions-Titel */
--text-h3:       clamp(1.3rem, 2vw, 1.7rem);    /* Karten-Titel */
--text-body:     clamp(1rem, 1.5vw, 1.125rem);  /* Fließtext */
--text-small:    0.875rem;                       /* Captions, Labels */
--text-tiny:     0.75rem;                        /* Badges, Tags */

/* Zeilenhöhen */
--leading-tight:  1.2;
--leading-normal: 1.6;
--leading-loose:  1.8;

/* Buchstabenabstand */
--tracking-wide:  0.05em;   /* Headings */
--tracking-wider: 0.1em;    /* Labels, Caps */
```

---

### 📐 Spacing & Layout

```css
/* Spacing-System (8px Grid) */
--space-1:   0.25rem;   /*  4px */
--space-2:   0.5rem;    /*  8px */
--space-3:   0.75rem;   /* 12px */
--space-4:   1rem;      /* 16px */
--space-6:   1.5rem;    /* 24px */
--space-8:   2rem;      /* 32px */
--space-12:  3rem;      /* 48px */
--space-16:  4rem;      /* 64px */
--space-24:  6rem;      /* 96px */

/* Border Radius */
--radius-sm:   8px;
--radius-md:   16px;
--radius-lg:   24px;
--radius-xl:   32px;
--radius-full: 9999px;  /* Pillen-Buttons, Tags */

/* Container */
--container-max:    1140px;
--container-narrow: 720px;
--container-pad:    clamp(1rem, 5vw, 2rem);

/* Breakpoints */
--bp-mobile:  375px;
--bp-tablet:  768px;
--bp-desktop: 1024px;
--bp-wide:    1440px;
```

---

## 🎬 Animation Spezifikation

> Prinzip: **Soft UI Evolution** — sanft, organisch, nie aggressiv  
> Regel aus ui-ux-pro-max: `prefers-reduced-motion` immer respektieren

### Globale Timing-Variablen

```css
/* Durations */
--duration-fast:    150ms;   /* Hover-States, Micro-Interactions */
--duration-normal:  300ms;   /* Übergänge, Ein/Ausblenden */
--duration-slow:    600ms;   /* Seiten-Elemente, Scroll-Trigger */
--duration-crawl:   1200ms;  /* Fortschrittsbalken, Zähler */

/* Easing */
--ease-out:     cubic-bezier(0.0, 0.0, 0.2, 1);   /* Elemente erscheinen */
--ease-in-out:  cubic-bezier(0.4, 0.0, 0.2, 1);   /* Übergänge */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce-Effekt (sparsam) */
--ease-smooth:  cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Reduced Motion Fallback */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Animationen nach Element

#### 1. Hero-Sektion — Einblenden beim Laden
```css
/* Betty-Foto: sanftes Erscheinen von unten */
.hero-photo {
  animation: fadeSlideUp 0.8s var(--ease-out) 0.2s both;
}

/* Headline: verzögertes Erscheinen */
.hero-headline {
  animation: fadeSlideUp 0.8s var(--ease-out) 0.4s both;
}

/* Subtext */
.hero-subtext {
  animation: fadeSlideUp 0.6s var(--ease-out) 0.6s both;
}

/* CTA-Button */
.hero-cta {
  animation: fadeSlideUp 0.6s var(--ease-out) 0.8s both;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

#### 2. Fortschrittsbalken — animiertes Füllen
```css
/* Trigger: wenn Sektion in den Viewport scrollt (IntersectionObserver) */
.progress-bar-fill {
  width: 0%;
  transition: width var(--duration-crawl) var(--ease-out);
}

.progress-bar-fill.is-visible {
  width: var(--target-percent); /* z.B. 35% */
}

/* Zähler-Animation: 0 → aktueller Betrag */
/* JS: countUp(0, 420, 1200ms) */
.donation-counter {
  transition: color var(--duration-fast);
}

/* Puls-Effekt auf dem Betrag wenn neu geladen */
@keyframes pulsePink {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.04); color: var(--color-primary); }
  100% { transform: scale(1); }
}
```

#### 3. Spenden-Buttons — Hover & Click
```css
.btn-primary {
  background: var(--color-cta);
  transition:
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out),
    background var(--duration-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-cta);
}

.btn-primary:active {
  transform: translateY(0px) scale(0.98);
}

/* Ripple-Effekt beim Klick (JS-Klasse) */
.btn-primary.ripple::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  animation: ripple 0.6s var(--ease-out);
}

@keyframes ripple {
  from { width: 0; height: 0; opacity: 1; }
  to   { width: 200px; height: 200px; opacity: 0; }
}
```

#### 4. Foto-Karten — Hover
```css
.photo-card {
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.photo-card:hover {
  transform: scale(1.02) translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.photo-card img {
  transition: transform var(--duration-slow) var(--ease-out);
}

.photo-card:hover img {
  transform: scale(1.05);
}
```

#### 5. Sektionen — Scroll-Reveal
```css
/* Jede Sektion erscheint beim Scrollen */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity var(--duration-slow) var(--ease-out),
    transform var(--duration-slow) var(--ease-out);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Gestaffelt für Listen-Elemente */
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.reveal-stagger.is-visible > *:nth-child(1) { transition-delay: 0ms;   opacity: 1; transform: none; }
.reveal-stagger.is-visible > *:nth-child(2) { transition-delay: 100ms; opacity: 1; transform: none; }
.reveal-stagger.is-visible > *:nth-child(3) { transition-delay: 200ms; opacity: 1; transform: none; }
.reveal-stagger.is-visible > *:nth-child(4) { transition-delay: 300ms; opacity: 1; transform: none; }
```

#### 6. Herz-Icon — Puls (Dekorativ)
```css
.heart-icon {
  display: inline-block;
  animation: heartbeat 2.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14%       { transform: scale(1.15); }
  28%       { transform: scale(1); }
  42%       { transform: scale(1.1); }
  70%       { transform: scale(1); }
}
```

---

## 🧩 Komponenten-Map

Vollständige Liste aller Seitenblöcke mit Beschreibung, Verhalten und Datenquelle:

### Seitenstruktur (Storytelling-Driven Pattern)

```
index.html
│
├── <header>          Navigation + Social Links
├── <section#hero>    Foto + Headline + CTA
├── <section#story>   Geschichte von Betty
├── <section#donate>  Fortschrittsbalken + Spenden-Buttons
├── <section#gallery> Foto-Galerie
├── <section#updates> Instagram-Feed / Neuigkeiten
├── <section#thanks>  Danksagungen
└── <footer>          Links + Impressum
```

---

### Komponente 1: Hero

| Eigenschaft | Details |
|-------------|---------|
| Layout | 2-spaltig (Foto links, Text rechts) → 1-spaltig auf Mobile |
| Foto | `assets/img/betty2.jpg` — Betty mit Person (emotional) |
| Headline | `font: var(--font-heading)`, `size: var(--text-hero)`, `color: var(--color-text)` |
| Subtext | Kurze Zusammenfassung (2 Sätze), `color: var(--color-text-muted)` |
| CTA-Button | „Jetzt helfen" → scrollt zu `#donate`, Gold-Farbe `var(--color-cta)` |
| Animation | `fadeSlideUp` gestaffelt (Foto → Headline → Text → Button) |
| Mobile | Foto zuerst, dann Text, Button full-width |

---

### Komponente 2: Fortschrittsbalken

| Eigenschaft | Details |
|-------------|---------|
| Ziel | 1.200 € |
| Datenquellen | Betterplace API (auto) + `data/donations.json` (manuell) |
| Balken-Style | `height: 16px`, `border-radius: var(--radius-full)`, Gradient: `var(--color-primary)` → `var(--color-cta)` |
| Zähler | Animiertes Hochzählen: `0 → aktueller Betrag` beim Scroll-Reveal |
| Labels | Links: „Gesammelt: X €", Rechts: „Ziel: 1.200 €" |
| Prozent | Badge über dem Balken: „35% erreicht" |
| Animation | Trigger: `IntersectionObserver` — füllt sich wenn in Viewport |
| Letztes Update | Timestamp: „Zuletzt aktualisiert: DD.MM.YYYY HH:MM" |

```javascript
// data/donations.json — manuell täglich aktualisieren
{
  "gofundme": 0,
  "direct":   0,
  "goal":     1200,
  "updated":  "2026-06-23T12:00:00Z"
}

// Betterplace API — automatisch
const BP_ID = "DEINE_BETTERPLACE_ID";
const url = `https://api.betterplace.org/de/api_v4/fundraising_events/${BP_ID}.json`;
// Response: { donated_amount_in_cents: 45000 } → 450 €
```

---

### Komponente 3: Spenden-Buttons

| Button | Farbe | Icon | Link | Verhalten |
|--------|-------|------|------|-----------|
| GoFundMe | `#00B964` | 💛 | gofundme.com/... | Öffnet neuen Tab |
| Betterplace | `#00A550` | 💚 | betterplace.org/... | Öffnet neuen Tab |
| PayPal | `#003087` | 💳 | paypal.me/... | Öffnet neuen Tab |
| IBAN kopieren | `var(--color-primary)` | 📋 | — | Kopiert IBAN in Clipboard + Toast |

---

### Komponente 4: Geschichte

| Eigenschaft | Details |
|-------------|---------|
| Sprache | Deutsch (primär) |
| Perspektive | Erste Person von Betty — erhöht Empathie |
| Länge | 3–4 Absätze |
| Bild | `betty1.jpg` — Nahaufnahme Gesicht, rechts floated |
| Highlight-Box | Rosa Box: „Betty braucht deine Hilfe" mit Paw-Icon |

---

### Komponente 5: Foto-Galerie

| Eigenschaft | Details |
|-------------|---------|
| Layout | CSS Grid, 2–3 Spalten, `gap: var(--space-4)` |
| Fotos | `betty1.jpg`, `betty2.jpg` + zukünftige Fotos |
| Hover | `scale(1.02) + shadow-lg` (sanft) |
| Lightbox | Optional: Klick öffnet Vollbild (vanilla JS) |

---

### Komponente 6: Navigation (Sticky Header)

| Eigenschaft | Details |
|-------------|---------|
| Position | `position: sticky; top: 0; z-index: 100` |
| Hintergrund | `background: rgba(255,248,245, 0.92); backdrop-filter: blur(12px)` |
| Links | Anker-Links zu allen Sektionen |
| Social | Instagram-Icon rechts |
| Mobile | Hamburger-Menü |
| Scroll-Effekt | `box-shadow` erscheint nach 50px Scroll |

---

### Komponente 7: Footer

| Eigenschaft | Details |
|-------------|---------|
| Inhalt | Alle Links + „Danke von Betty 🐾" + GitHub-Link |
| Hintergrund | `var(--color-text)` — dunkel für Kontrast |
| Text | `var(--color-bg)` |

---

## 🔌 Spendenintegration & API

### Betterplace.org API

```javascript
// assets/js/donations.js

const BETTERPLACE_ID = "HIER_DEINE_ID_EINTRAGEN";
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
  countUp(0, total, 1200, '.donation-total');
  document.querySelector('.donation-percent').textContent = percent + '%';
}
```

### GoFundMe (manuell)

```json
// data/donations.json — jeden Tag aktualisieren:
{
  "gofundme": 150,
  "direct":   50,
  "goal":     1200,
  "updated":  "2026-06-23"
}
```

```bash
# Update + Deploy in einem Befehl:
echo '{"gofundme":150,"direct":50,"goal":1200,"updated":"'$(date +%Y-%m-%d)'"}' > data/donations.json
git add data/donations.json && git commit -m "💰 Spendenstand aktualisiert" && git push
# → GitHub Pages deployed automatisch in ~30 Sekunden
```

---

## 📁 Projektstruktur

```
betty-help/
│
├── index.html                  # Haupt-Website (GitHub Pages Entry Point)
│
├── data/
│   └── donations.json          # 🔄 Manuell täglich aktualisieren (GoFundMe + direkt)
│
├── assets/
│   ├── img/
│   │   ├── betty1.jpg          # Nahaufnahme — für Hero/Geschichte
│   │   ├── betty2.jpg          # Betty mit Person — für Hero
│   │   ├── betty-og.jpg        # Open Graph Bild (1200x630px) für Social Sharing
│   │   └── favicon.png         # Pfoten-Icon 32x32px
│   │
│   ├── css/
│   │   ├── variables.css       # Alle CSS Custom Properties (Design Tokens)
│   │   ├── base.css            # Reset, Typography, Global Styles
│   │   ├── components.css      # Buttons, Cards, Progress Bar, Nav
│   │   ├── animations.css      # Alle Keyframes & Transitions
│   │   └── responsive.css      # Media Queries (375/768/1024/1440px)
│   │
│   └── js/
│       ├── donations.js        # Betterplace API + Manual Fetch + Progress Bar
│       ├── animations.js       # IntersectionObserver, Scroll-Reveal, CountUp
│       └── ui.js               # Nav, Clipboard, Toast Notifications, Lightbox
│
├── flyer/
│   ├── betty_flyer.docx        # Druckfertiger A4-Flyer (DE)
│   └── qr_betty.png            # QR-Code (wird nach Go-Live aktualisiert)
│
└── README.md                   # Diese Datei
```

---

## 🗺️ Roadmap

### Legende
| Symbol | Bedeutung |
|--------|-----------|
| ✅ | Fertig |
| 🔄 | In Bearbeitung |
| ⬜ | Offen |
| 🔴 | Hohe Priorität |
| 🟡 | Mittlere Priorität |
| 🟢 | Niedrige Priorität |

---

### Phase 0 — Vorbereitung & Planung ✅

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 0.1 | Fundraising-Strategie entwickeln | ✅ Fertig | 🔴 | GoFundMe + Betterplace + Instagram + GitHub Pages |
| 0.2 | Texte auf Russisch schreiben | ✅ Fertig | 🔴 | Erste-Person-Perspektive von Betty |
| 0.3 | Texte auf Deutsch schreiben | ✅ Fertig | 🔴 | Volltext + Kurzversion für Facebook |
| 0.4 | A4-Flyer (DOCX) mit Fotos erstellen | ✅ Fertig | 🔴 | QR-Code ist Placeholder |
| 0.5 | Design System aus ui-ux-pro-max auswählen | ✅ Fertig | 🔴 | Soft UI Evolution + Storytelling-Driven |
| 0.6 | README + Roadmap erstellen | ✅ Fertig | 🔴 | Dieses Dokument |

---

### Phase 1 — Plattformen live schalten ⬜

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 1.1 | GitHub Repo `betty-help` erstellen (public) | ⬜ Offen | 🔴 | Bei: github.com/SergeiSmazal |
| 1.2 | README.md ins Repo hochladen | ⬜ Offen | 🔴 | Diese Datei |
| 1.3 | GitHub Pages aktivieren | ⬜ Offen | 🔴 | Settings → Pages → Branch: main → /root |
| 1.4 | **GoFundMe**-Kampagne erstellen | ⬜ Offen | 🔴 | gofundme.com → Ziel: 1.200 € |
| 1.5 | GoFundMe: Fotos + deutschen Text hochladen | ⬜ Offen | 🔴 | betty1.jpg + betty2.jpg |
| 1.6 | **Betterplace.org**-Kampagne erstellen | ⬜ Offen | 🔴 | betterplace.org → Spendenformular |
| 1.7 | Betterplace: Fundraising-Event-ID notieren | ⬜ Offen | 🔴 | Wird für API-Integration benötigt |
| 1.8 | Instagram `@betty.the.cat.germany` erstellen | ⬜ Offen | 🔴 | Business-Profil, Website-Link in Bio |
| 1.9 | Erstes Instagram-Foto + Caption posten | ⬜ Offen | 🔴 | betty2.jpg + voller Text |
| 1.10 | Claude bitten: Website-Code mit echten Links zu erstellen | ⬜ Offen | 🔴 | Nach 1.4–1.8 |
| 1.11 | QR-Code auf finale GitHub-Pages-URL aktualisieren | ⬜ Offen | 🔴 | Nach 1.3 |
| 1.12 | Flyer mit finalem QR-Code neu drucken | ⬜ Offen | 🔴 | Mind. 20 Exemplare |

---

### Phase 2 — Website entwickeln & deployen ⬜

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 2.1 | `index.html` Grundstruktur (alle Sektionen) | ⬜ Offen | 🔴 | Semantic HTML5 |
| 2.2 | `assets/css/variables.css` — Design Tokens | ⬜ Offen | 🔴 | Alle CSS-Variablen aus diesem README |
| 2.3 | `assets/css/base.css` — Reset + Typografie | ⬜ Offen | 🔴 | Google Fonts einbinden |
| 2.4 | Hero-Sektion mit Fotos | ⬜ Offen | 🔴 | 2-spaltig Desktop, 1-spaltig Mobile |
| 2.5 | Geschichte-Sektion mit Text | ⬜ Offen | 🔴 | Deutscher Text + rosa Highlight-Box |
| 2.6 | `assets/css/components.css` — Buttons, Cards | ⬜ Offen | 🔴 | Alle Komponenten aus Komponenten-Map |
| 2.7 | `assets/css/animations.css` — Keyframes | ⬜ Offen | 🔴 | Alle Animationen aus Animation-Spec |
| 2.8 | `data/donations.json` anlegen (Nullwerte) | ⬜ Offen | 🔴 | Grundstruktur |
| 2.9 | `assets/js/donations.js` — API + Fetch | ⬜ Offen | 🔴 | Betterplace ID eintragen nach Phase 1 |
| 2.10 | Fortschrittsbalken implementieren | ⬜ Offen | 🔴 | Inkl. CountUp-Animation |
| 2.11 | `assets/js/animations.js` — Scroll-Reveal | ⬜ Offen | 🔴 | IntersectionObserver |
| 2.12 | Spenden-Buttons (GoFundMe, Betterplace, PayPal, IBAN) | ⬜ Offen | 🔴 | Echte Links nach Phase 1 |
| 2.13 | Sticky Navigation + Hamburger-Menü | ⬜ Offen | 🟡 | Blur-Hintergrund |
| 2.14 | Foto-Galerie | ⬜ Offen | 🟡 | CSS Grid + Hover-Effekte |
| 2.15 | `assets/css/responsive.css` — 4 Breakpoints | ⬜ Offen | 🔴 | 375/768/1024/1440px |
| 2.16 | Open Graph Meta-Tags (für Social Sharing) | ⬜ Offen | 🔴 | og:image = betty-og.jpg (1200x630) |
| 2.17 | `prefers-reduced-motion` implementieren | ⬜ Offen | 🔴 | Accessibility-Pflicht |
| 2.18 | WCAG AA Kontrast prüfen (4.5:1 Minimum) | ⬜ Offen | 🔴 | Tool: webaim.org/resources/contrastchecker |
| 2.19 | `cursor-pointer` auf alle klickbaren Elemente | ⬜ Offen | 🟡 | UI-UX-Pro-Max Checklist |
| 2.20 | Focus-States für Tastaturnavigation | ⬜ Offen | 🟡 | Accessibility |
| 2.21 | Lokaler Test (alle Browser + Mobile) | ⬜ Offen | 🔴 | Chrome, Safari, Firefox, iOS Safari |
| 2.22 | Auf GitHub pushen → GitHub Pages live | ⬜ Offen | 🔴 | URL: SergeiSmazal.github.io/betty-help |
| 2.23 | Instagram Bio-Link auf Website aktualisieren | ⬜ Offen | 🔴 | Nach 2.22 |

---

### Phase 3 — Verbreitung in Deutschland 📣

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 3.1 | Facebook-Gruppe `Tierhilfe Deutschland` | ⬜ Offen | 🔴 | Deutscher Text + Fotos + Link |
| 3.2 | Facebook-Gruppe `Katzen in Not` | ⬜ Offen | 🔴 | — |
| 3.3 | Facebook-Gruppe `Tierliebhaber Hessen` | ⬜ Offen | 🔴 | Regional — Offenbach/Frankfurt |
| 3.4 | Facebook-Gruppe `Katzen Deutschland` | ⬜ Offen | 🟡 | Größere Reichweite |
| 3.5 | Tierschutzverein Frankfurt/Offenbach kontaktieren | ⬜ Offen | 🟡 | Ggf. Teilen oder Unterstützung |
| 3.6 | Flyer in mind. 5 Tierarztpraxen in Offenbach | ⬜ Offen | 🔴 | Mit Erlaubnis aushängen |
| 3.7 | Flyer in Supermärkten (REWE, EDEKA) | ⬜ Offen | 🟡 | Schwarzes Brett nutzen |
| 3.8 | Flyer in Apotheken und dm | ⬜ Offen | 🟡 | Tierliebendes Publikum |
| 3.9 | Reddit r/germany posten | ⬜ Offen | 🟢 | Englischer Kurztext |
| 3.10 | Reddit r/frankfurt posten | ⬜ Offen | 🟢 | Lokale Community |
| 3.11 | Freunde und Familie bitten zu teilen | ⬜ Offen | 🔴 | Jede Weiterleitung zählt |
| 3.12 | Instagram Hashtags nutzen | ⬜ Offen | 🔴 | #katze #katzenhilfe #tierrettung #katzendeutschland #offenbach |

---

### Phase 4 — Updates & Transparenz 🔄

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 4.1 | `data/donations.json` täglich aktualisieren | ⬜ Offen | 🔴 | GoFundMe-Betrag ablesen + eintragen |
| 4.2 | Wöchentliche Updates auf Instagram | ⬜ Offen | 🔴 | Wie geht es Betty? Fotos! |
| 4.3 | Meilenstein-Posts (25% / 50% / 75% / 100%) | ⬜ Offen | 🔴 | Motiviert zum Weiterspenden |
| 4.4 | Updates auf GoFundMe und Betterplace posten | ⬜ Offen | 🔴 | Plattformen belohnen aktive Kampagnen |
| 4.5 | Individuelle Danksagungen an größere Spender | ⬜ Offen | 🟡 | Per DM oder öffentlich (mit Erlaubnis) |
| 4.6 | Nach OP: Fotos von Betty veröffentlichen | ⬜ Offen | 🔴 | Das ist der emotionale Abschluss |
| 4.7 | Abschlusskampagne: „Betty ist schmerzfrei!" | ⬜ Offen | 🔴 | Auf allen Kanälen |
| 4.8 | Öffentliche Abrechnung: wie wurde das Geld verwendet | ⬜ Offen | 🟡 | Vertrauen für zukünftige Spender |

---

## 📊 Aktueller Spendenstand

> ⚠️ Manuell aktualisieren — Datum der letzten Aktualisierung eintragen

| Plattform | Betrag | Link |
|-----------|--------|------|
| 💚 Betterplace.org | 0 € | *(nach Erstellung eintragen)* |
| 💛 GoFundMe | 0 € | *(nach Erstellung eintragen)* |
| 💳 Direkt (PayPal/IBAN) | 0 € | — |
| **🎯 Gesamt** | **0 € / 1.200 €** | **0% erreicht** |

---

## 🚀 Quick Start

```bash
# 1. Repo klonen (nach Erstellung)
git clone https://github.com/SergeiSmazal/betty-help.git
cd betty-help

# 2. Spendenstand täglich aktualisieren
nano data/donations.json
# {"gofundme": 150, "direct": 50, "goal": 1200, "updated": "2026-06-24"}

# 3. Deploy (30 Sekunden bis live)
git add data/donations.json
git commit -m "💰 Spendenstand: GoFundMe 150€ + Direkt 50€"
git push
```

---

## 🔗 Links

| Ressource | URL | Status |
|-----------|-----|--------|
| 🌐 Website | https://SergeiSmazal.github.io/betty-help | ⬜ Noch nicht live |
| 💛 GoFundMe | *(nach Erstellung eintragen)* | ⬜ |
| 💚 Betterplace | *(nach Erstellung eintragen)* | ⬜ |
| 📸 Instagram | @betty.the.cat.germany | ⬜ |
| 👤 GitHub | https://github.com/SergeiSmazal | ✅ |
| 🎨 Design System | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | ✅ |

---

## 📋 Pre-Delivery Checklist (UI-UX-Pro-Max Standard)

Vor dem Go-Live zu prüfen:

- [ ] Keine Emojis als Icons (SVG: Heroicons/Lucide verwenden)
- [ ] `cursor: pointer` auf allen klickbaren Elementen
- [ ] Hover-States mit Transitionen (150–300ms)
- [ ] Kontrast Text/Hintergrund ≥ 4.5:1 (WCAG AA)
- [ ] Focus-States für Tastaturnavigation sichtbar
- [ ] `prefers-reduced-motion` implementiert
- [ ] Responsiv getestet: 375px / 768px / 1024px / 1440px
- [ ] Open Graph Tags für Social Sharing
- [ ] Alle Links öffnen in neuem Tab (`target="_blank" rel="noopener"`)
- [ ] Betterplace API ID eingetragen
- [ ] GoFundMe-Link eingetragen
- [ ] Instagram-Link eingetragen
- [ ] `data/donations.json` mit aktuellen Werten

---

<div align="center">

**Danke von ganzem Herzen — von Betty und Sergei 🐾💗**

*Jeder Euro zählt. Jedes Teilen hilft.*

---

*Design: [UI UX Pro Max v2.6](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — Soft UI Evolution + Storytelling-Driven*

</div>
