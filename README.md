# 🐾 Help Betty — Fundraising Campaign

<div align="center">

![Betty](https://img.shields.io/badge/Betty-12%20Jahre%20alt-pink?style=for-the-badge)
![Goal](https://img.shields.io/badge/Ziel-1.200%20€-brightgreen?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Arbeit-yellow?style=for-the-badge)
![Location](https://img.shields.io/badge/Ort-Offenbach%2C%20Deutschland-blue?style=for-the-badge)

> **Betty ist 12 Jahre alt, leidet unter entzündeten Zähnen und einer Autoimmunerkrankung.**  
> Fressen ist für sie jeden Tag Schmerz. Wir sammeln 1.200 € für eine Zahnextraktion.

</div>

---

## 🐱 Über Betty

Betty ist eine 12-jährige Katze aus Offenbach am Main. Sie leidet unter:

- **Entzündete Zähne** — Fressen verursacht starke Schmerzen
- **Autoimmunerkrankung** — schwächt ihren Körper zusätzlich

Der Tierarzt empfiehlt eine **Zahnextraktion** (Narkose + Operation + Nachsorge = ca. **1.200 €**).

---

## 🏗️ Infrastruktur des Projekts

```
betty-cat.github.io  ← Zentraler Hub (diese Website)
        │
        ├── 💛 GoFundMe         → Spenden (international)
        ├── 💚 Betterplace.org  → Spenden (Deutschland, steuerlich absetzbar)
        ├── 📸 Instagram        → @betty.the.cat.germany (Updates & Stories)
        └── 💳 PayPal / IBAN    → Direktüberweisung
```

### Fortschrittsbalken — Datenquellen

| Plattform | Synchronisierung | Methode |
|-----------|-----------------|---------|
| Betterplace.org | ✅ Automatisch | Public API |
| GoFundMe | 🔄 Manuell (1x täglich) | `data/donations.json` updaten |
| PayPal / direkt | 🔄 Manuell | `data/donations.json` updaten |

---

## 🗺️ Roadmap

### Phase 1 — Fundament ✅ / 🔄

> Ziel: Alle Plattformen live, Leaflet verteilt

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 1.1 | Projektdokumentation (diese README) erstellen | ✅ Fertig | 🔴 Hoch | — |
| 1.2 | Flyer A4 (DOCX) mit Fotos von Betty erstellen | ✅ Fertig | 🔴 Hoch | QR-Code Placeholder |
| 1.3 | Text auf Russisch verfassen | ✅ Fertig | 🔴 Hoch | — |
| 1.4 | Text auf Deutsch verfassen | ✅ Fertig | 🔴 Hoch | — |
| 1.5 | GitHub Repository `betty-help` erstellen | ⬜ Offen | 🔴 Hoch | Repo: SergeiSmazal/betty-help |
| 1.6 | GitHub Pages aktivieren | ⬜ Offen | 🔴 Hoch | Settings → Pages → main branch |
| 1.7 | Konto auf **GoFundMe** erstellen & Kampagne starten | ⬜ Offen | 🔴 Hoch | gofundme.com |
| 1.8 | Konto auf **Betterplace.org** erstellen & Kampagne starten | ⬜ Offen | 🔴 Hoch | betterplace.org |
| 1.9 | Instagram-Profil `@betty.the.cat.germany` erstellen | ⬜ Offen | 🔴 Hoch | Bio-Link auf Website |
| 1.10 | QR-Code auf GoFundMe/Betterplace-Link aktualisieren | ⬜ Offen | 🔴 Hoch | Nach Schritt 1.7–1.8 |
| 1.11 | Flyer drucken und in Offenbach verteilen | ⬜ Offen | 🔴 Hoch | Tierarztpraxen, Supermärkte, Apotheken |

---

### Phase 2 — Website live 🔄

> Ziel: betty-cat.github.io online mit Spendenfortschrittsbalken

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 2.1 | Website HTML/CSS erstellen (Soft UI Design) | ⬜ Offen | 🔴 Hoch | Design: ui-ux-pro-max-skill |
| 2.2 | Fotos von Betty einbinden | ⬜ Offen | 🔴 Hoch | 2 Fotos vorhanden |
| 2.3 | Geschichte von Betty (DE + RU) einbauen | ⬜ Offen | 🔴 Hoch | Texte fertig |
| 2.4 | `data/donations.json` Struktur anlegen | ⬜ Offen | 🔴 Hoch | Manuell aktualisierbar |
| 2.5 | Betterplace API Integration | ⬜ Offen | 🟡 Mittel | Auto-fetch beim Laden |
| 2.6 | Fortschrittsbalken (animiert) implementieren | ⬜ Offen | 🔴 Hoch | GoFundMe + Betterplace zusammen |
| 2.7 | Spenden-Buttons (GoFundMe, Betterplace, PayPal) | ⬜ Offen | 🔴 Hoch | — |
| 2.8 | Instagram-Feed einbinden (letzte 3 Posts) | ⬜ Offen | 🟡 Mittel | Nach Instagram-Erstellung |
| 2.9 | Mobile-optimiertes Layout (375px, 768px) | ⬜ Offen | 🔴 Hoch | Meiste Besucher via Handy |
| 2.10 | Website auf GitHub pushen & testen | ⬜ Offen | 🔴 Hoch | — |
| 2.11 | QR-Code auf finale URL generieren | ⬜ Offen | 🔴 Hoch | betty-cat.github.io |
| 2.12 | Flyer mit finalem QR-Code neu drucken | ⬜ Offen | 🔴 Hoch | — |

---

### Phase 3 — Verbreitung 📣

> Ziel: Maximale Reichweite in Deutschland

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 3.1 | Erstes Instagram-Post veröffentlichen | ⬜ Offen | 🔴 Hoch | Foto + Geschichte + Link |
| 3.2 | Facebook-Gruppe `Tierhilfe Deutschland` posten | ⬜ Offen | 🔴 Hoch | Text auf Deutsch fertig |
| 3.3 | Facebook-Gruppe `Katzen in Not` posten | ⬜ Offen | 🔴 Hoch | — |
| 3.4 | Facebook-Gruppe `Tierliebhaber Hessen` posten | ⬜ Offen | 🟡 Mittel | Regional — Offenbach |
| 3.5 | Tierschutzverein Frankfurt/Offenbach kontaktieren | ⬜ Offen | 🟡 Mittel | Ggf. Unterstützung oder Teilen |
| 3.6 | Flyer in Tierarztpraxen in Offenbach aushängen | ⬜ Offen | 🔴 Hoch | Mind. 5 Praxen |
| 3.7 | Flyer in Supermärkten / Apotheken aushängen | ⬜ Offen | 🟡 Mittel | REWE, EDEKA, dm |
| 3.8 | Reddit r/germany und r/frankfurt posten | ⬜ Offen | 🟢 Niedrig | Englischer Text |
| 3.9 | Freunde und Familie bitten, zu teilen | ⬜ Offen | 🔴 Hoch | Multiplikator-Effekt |

---

### Phase 4 — Updates & Transparenz 🔄

> Ziel: Vertrauen aufbauen, Spender binden

| # | Aufgabe | Status | Priorität | Notizen |
|---|---------|--------|-----------|---------|
| 4.1 | Wöchentliche Updates auf Instagram posten | ⬜ Offen | 🔴 Hoch | Wie geht es Betty? |
| 4.2 | `data/donations.json` täglich aktualisieren | ⬜ Offen | 🔴 Hoch | GoFundMe + direkte Spenden |
| 4.3 | Spendermeldungen auf Website zeigen | ⬜ Offen | 🟡 Mittel | "Dankeschön an..." |
| 4.4 | Meilenstein-Posts (25%, 50%, 75%, 100%) | ⬜ Offen | 🔴 Hoch | Motiviert zum Weiterspenden |
| 4.5 | Nach OP: Fotos von Betty posten | ⬜ Offen | 🔴 Hoch | Abschluss der Kampagne |
| 4.6 | Dankespost an alle Spender | ⬜ Offen | 🔴 Hoch | Auf allen Kanälen |

---

## 📊 Aktueller Spendenstand

> Zuletzt aktualisiert: — (manuell pflegen)

| Plattform | Betrag |
|-----------|--------|
| Betterplace.org | 0 € |
| GoFundMe | 0 € |
| Direkt (PayPal/IBAN) | 0 € |
| **Gesamt** | **0 € / 1.200 €** |

---

## 📁 Projektstruktur

```
betty-help/
├── index.html          # Hauptwebsite (GitHub Pages)
├── data/
│   └── donations.json  # Manuell aktualisierbare Spendenbeträge
├── assets/
│   ├── img/
│   │   ├── betty1.jpg
│   │   └── betty2.jpg
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── donations.js  # Fortschrittsbalken + Betterplace API
├── flyer/
│   └── betty_flyer.docx  # Druckfertiger Flyer A4
└── README.md           # Diese Datei
```

---

## 🚀 Quick Start — So geht es los

```bash
# 1. Repository klonen (nach Erstellung auf GitHub)
git clone https://github.com/SergeiSmazal/betty-help.git
cd betty-help

# 2. Spendenstand manuell aktualisieren
# data/donations.json bearbeiten:
# { "gofundme": 150, "direct": 50 }

# 3. Änderungen pushen → Website wird automatisch aktualisiert
git add .
git commit -m "Update: Spendenstand aktualisiert"
git push
```

---

## 🔗 Links

| Ressource | URL |
|-----------|-----|
| 🌐 Website | https://sergeiSmazal.github.io/betty-help |
| 💛 GoFundMe | *(nach Erstellung eintragen)* |
| 💚 Betterplace | *(nach Erstellung eintragen)* |
| 📸 Instagram | @betty.the.cat.germany *(nach Erstellung)* |
| 👤 GitHub | https://github.com/SergeiSmazal |

---

## 💡 Nächste sofortige Schritte

1. **Jetzt:** Repository `betty-help` auf GitHub erstellen
2. **Jetzt:** Diese README hochladen
3. **Heute:** GoFundMe-Kampagne starten
4. **Heute:** Betterplace-Kampagne starten
5. **Danach:** Claude nach dem finalen Website-Code fragen (alle Links sind dann bekannt)

---

<div align="center">

**Danke von ganzem Herzen — von Betty und Sergei 🐾💗**

*Jeder Euro zählt. Jedes Teilen hilft.*

</div>
