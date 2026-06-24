# Help Betty (betty-help) Implementation Plan

This document contains the project implementation plan.

## Roadmap & Phases (Bilingual Support)

### Phase 0 — Preparation & Planning ✅
- [x] Fundraising strategy development.
- [x] Writing texts in English.
- [x] Writing texts in German.
- [x] Create A4 printable flyer (DOCX) with photos.
- [x] Select design system from UI-UX-Pro-Max.
- [x] Create README + Roadmap.

### Phase 1 — Platform Launch ⬜
- [x] Create GitHub repository `betty-help` (public).
- [x] Upload README.md to the repository.
- [ ] Activate GitHub Pages.
- [x] Create **GoFundMe** campaign.
- [ ] Create **Betterplace.org** project.
- [x] Create Instagram `@bettyhomecat`.
- [x] Post first photo on Instagram + caption.
- [x] Write website code with real links (base ready, links need to be inserted).
- [ ] Update QR code to final GitHub Pages URL.
- [ ] Reprint flyers with the final QR code.

### Phase 2 — Website Development & Deployment ⬜
- [ ] Implement architecture for two languages (DE/EN) + language switcher.
- [ ] `index.html` base structure (all sections).
- [ ] `assets/css/variables.css` — Design Tokens ([see TECHNICAL_SPEC.md](TECHNICAL_SPEC.md#design-system--ui-specification)).
- [ ] `assets/css/base.css` — CSS reset + typography ([see TECHNICAL_SPEC.md](TECHNICAL_SPEC.md#typography)).
- [ ] Hero section with photos.
- [ ] Story section: add details about FORL, age (11 years), and financial difficulties.
- [ ] `assets/css/components.css` — Buttons, cards ([see TECHNICAL_SPEC.md](TECHNICAL_SPEC.md#component-map)).
- [ ] `assets/css/animations.css` — Keyframes ([see TECHNICAL_SPEC.md](TECHNICAL_SPEC.md#animation-specification)).
- [ ] Create `data/donations.json` (zero values).
- [ ] `assets/js/donations.js` — API + Fetch ([see TECHNICAL_SPEC.md](TECHNICAL_SPEC.md#donation-integration--api)).
- [ ] Implement progress bar.
- [ ] `assets/js/animations.js` — Scroll-Reveal.
- [ ] Donation buttons (GoFundMe, Betterplace, PayPal, IBAN).
- [ ] Sticky navigation + burger menu.
- [ ] Photo gallery.
- [ ] `assets/css/responsive.css` — 4 breakpoints.
- [ ] Local testing (all browsers + mobile).
- [ ] Push to GitHub → Activate GitHub Pages.
- [ ] Update Instagram Bio link to the website.

### Phase 3 — Dissemination in Germany & Globally 📣
- [ ] Facebook groups (animal aid, cats in need, Hessen).
- [ ] Contact animal welfare society of Frankfurt/Offenbach.
- [ ] Place flyers (veterinarians, supermarkets, pharmacies, dm).
- [ ] Reddit (r/germany, r/frankfurt).
- [ ] Ask friends and family to share.
- [ ] Use Instagram hashtags.

### Phase 4 — Updates & Transparency 🔄
- [ ] Daily update of `data/donations.json`.
- [ ] Weekly updates on Instagram.
- [ ] Milestone posts (25% / 50% / 75% / 100%).
- [ ] Updates on GoFundMe and Betterplace.
- [ ] Individual thank-you messages to major donors.
- [ ] After surgery: post photos of Betty.
- [ ] Final campaign: "Betty is pain-free!".
- [ ] Public expense report.
