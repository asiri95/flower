# Flower shop website

A simple, elegant, bilingual (English / العربية) website for a flower shop in Amman.
There is **no checkout, no backend and no database**. Every order, wedding inquiry and
question goes straight to the shop's **WhatsApp** as a ready-written message.

## What's inside

| Section | What the customer does |
|---|---|
| **Shop** | Browses bouquets by category, adds them to a basket, fills in delivery or pick-up details, and taps **Send order on WhatsApp** |
| **Custom order** | Opens WhatsApp to describe or send a photo of a special request |
| **Weddings** | Sees services and packages, then fills a short form that goes to WhatsApp as an inquiry |
| **Gallery** | Filters photos (bouquets, weddings, events), opens them full screen, and taps **Order something like this** |
| **Visit us** | Sees the address, opening hours, phone, Google Maps link and a WhatsApp chat button |

A floating WhatsApp button is always visible. The basket is saved on the visitor's phone,
and the language choice is remembered.

## How the shop edits it

Everything is in **one file: `assets/js/config.js`**.

1. Set `whatsapp` to the shop's number in international format, digits only (`9627XXXXXXXX`).
2. Set `name`, `phone`, `address`, `hours` and `instagram`.
3. Add, remove or edit products, wedding packages and gallery items. Every text has `en` and `ar`.
4. Put photos in `images/` and set `image: "images/your-photo.jpg"`. Items without a photo
   show a soft illustrated placeholder, so the site never looks broken.

## Preview locally

Open `index.html` in a browser. No build step is needed.

## Publish (free)

- **GitHub Pages:** repo **Settings → Pages → Deploy from branch**, then pick the branch and `/ (root)`.
- **Netlify / Cloudflare Pages:** drag and drop the folder.

Then put the website link in the shop's Google Maps profile and Instagram bio.
