# Ethereal Properties

Marketing and leasing website for Ethereal Properties — a boutique, owner-operated property management company with residences in Chicago and the North Shore.

**Live site:** [etherealproperties.org](https://etherealproperties.org)

---

## Properties

| Property | Location | Type |
|---|---|---|
| 940 Private Rd | Winnetka, IL 60093 | Executive / Corporate Rental |
| 506 W Wisconsin St — Unit 1 | Chicago, IL 60614 | Residential Lease |
| 506 W Wisconsin St — Unit 2 | Chicago, IL 60614 | Residential Lease |

---

## Stack

- **Frontend:** HTML, CSS, vanilla JS — no frameworks or build tools
- **Hosting:** [Netlify](https://netlify.com) — auto-deploys on push to `main`
- **Forms:** Netlify Forms → email notification
- **Tenant portal:** [Avail](https://www.avail.co)

---

## Project Structure

```
/
├── index.html
├── css/
│   └── style.css
├── js/
├── assets/
│   ├── ethereal-properties.svg   # Wordmark logo
│   └── favicon.svg               # Icon mark
└── media/
    ├── hero.jpg                  # Hero background
    ├── winnetka/                 # 940 Private Rd photos
    ├── wisconsin-unit1/          # 506 W Wisconsin Unit 1 photos
    └── wisconsin-unit2/          # 506 W Wisconsin Unit 2 photos
```

---

## Development

No build step required. Open `index.html` directly in a browser or use any static file server:

```bash
npx serve .
```

### Deploying

Push to `main` — Netlify deploys automatically within ~30 seconds.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Contact

**Brian Pemble** — [brian@etherealproperties.org](mailto:brian@etherealproperties.org)
# etherealgroup
