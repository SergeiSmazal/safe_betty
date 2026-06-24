# Operational Guide for Help Betty (betty-help)

This document contains operational instructions, deployment workflows, and troubleshooting information.

---

## 🏗️ Infrastructure & Data Flow

```
betty-help (GitHub Pages) ← Central Hub
         │
         ├── 💛 GoFundMe          → Donations (International, Credit Card)
         ├── 💚 Betterplace.org   → Donations (Germany, tax-deductible)
         ├── 📸 Instagram         → @betty.the.cat.germany (Updates & Stories)
         └── 💳 PayPal / IBAN    → Direct Transfer
```

### Donation Progress Bar Data Flow
```
Betterplace API  ──(automatic)──► donations.js ──► Progress Bar
GoFundMe         ──(manual 1x/day)► data/donations.json ──► Progress Bar
PayPal / Direct  ──(manual 1x/day)► data/donations.json ──► Progress Bar
```

| Platform | Sync Type | Frequency | Method |
|-----------|----------|----------|---------|
| Betterplace.org | ✅ Automatic | Real-time | `GET api.betterplace.org/...` |
| GoFundMe | 🔄 Manual | 1x/day | Update `data/donations.json` + git push |
| PayPal / Direct | 🔄 Manual | 1x/day | Update `data/donations.json` + git push |

---

## 🌐 GitHub Pages Hosting & Deployment

> **Repository:** https://github.com/SergeiSmazal/betty-help  
> **Live-URL:** https://sergeismazal.github.io/betty-help

### Automatic Deployment
Every `git push` triggers the "pages build and deployment" workflow. The site goes live in ~30 seconds.

### Custom Domain (Optional)
1. Purchase domain (e.g., IONOS, Strato, Namecheap).
2. Set CNAME record to `sergeismazal.github.io`.
3. Create a `CNAME` file in the repo: `echo "www.your-domain.de" > CNAME`.
4. Configure in GitHub Settings → Pages → Custom domain.

---

## ⚠️ Troubleshooting

| Problem | Cause | Solution |
|---------|---------|--------|
| 404 on site URL | Pages not enabled or index.html missing | Check Settings → Pages |
| Images not showing | Wrong paths (case-sensitive!) | Check `assets/img/` paths |
| Betterplace API fails | CORS error | Check API ID configuration |
| Changes not live | Push missing or Action error | Check "Actions" tab in repo |

---

## 📊 GitHub Pages Limits

| Limit | Value |
|-------|------|
| Repo Size | 1 GB |
| Bandwidth | 100 GB/month |
| Build Time | max. 10 min |
