# Technical Specification for Help Betty (betty-help)

This document contains the detailed technical specifications, design system, and component architecture for the Help Betty project.

---

## 🎨 Design System & UI Specification

> Based on **[UI UX Pro Max v2.6](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** — 95.3k ⭐  
> Category: **Veterinary / Wellness** → Recommended style: **Soft UI Evolution (#19)**  
> Landing Page Pattern: **Storytelling-Driven (#8)**

### 🎨 Color Palette
```css
:root {
  /* Primary */
  --color-primary:     #E8B4B8;   /* Soft Pink */
  --color-secondary:   #A8D5BA;   /* Sage Green */
  --color-cta:         #D4AF37;   /* Gold */

  /* Backgrounds */
  --color-bg:          #FFF8F5;   /* Warm White */
  --color-bg-card:     #FFFFFF;
  --color-bg-accent:   #FFF0F7;

  /* Text */
  --color-text:        #2C2C2C;
  --color-text-muted:  #666666;
  --color-text-light:  #999999;

  /* Status */
  --color-success:     #4CAF50;
  --color-warning:     #FF9800;
  --color-error:       #F44336;

  /* Shadows */
  --shadow-sm:  0 2px 8px rgba(232, 180, 184, 0.15);
  --shadow-md:  0 4px 20px rgba(232, 180, 184, 0.25);
  --shadow-lg:  0 8px 40px rgba(232, 180, 184, 0.35);
  --shadow-cta: 0 4px 15px rgba(212, 175, 55, 0.4);
}
```

### 🔤 Typography
```css
/* Fonts */
--font-heading:  'Cormorant Garamond', Georgia, serif;
--font-body:     'Montserrat', system-ui, sans-serif;
```

---

## 🎬 Animation Specification

> Principle: **Soft UI Evolution** — gentle, organic, never aggressive.  
> Rule: Always respect `prefers-reduced-motion`.

*Details on keyframes (`fadeSlideUp`, `heartbeat`, `ripple`) and component animations are stored in `assets/css/animations.css`.*

---

## 🧩 Component Map

| Component | Description | Data Source |
|-----------|-------------|-------------|
| Hero | Photo + Headline + CTA | Static |
| Progress Bar | Visual fill + Counter | Betterplace API / JSON |
| Donate Buttons | GoFundMe, Betterplace, PayPal, IBAN | Static Links |
| Story | Betty's history (1st person) | Static |
| Gallery | Photo grid | Static |
| Nav | Sticky Header | Static |
| Footer | Links + Credits | Static |

---

## 🔌 Donation Integration & API

### Betterplace.org API
`assets/js/donations.js` fetches data from:
`https://api.betterplace.org/de/api_v4/fundraising_events/{ID}.json`

### Manual Data (`data/donations.json`)
```json
{
  "gofundme": 150,
  "direct":   50,
  "goal":     1200,
  "updated":  "2026-06-24"
}
```
