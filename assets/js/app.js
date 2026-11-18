/* Flower shop site — all logic. Content lives in config.js */
(() => {
  "use strict";
  const S = window.SHOP;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ------------------------------------------------------------------
     Interface texts
     ------------------------------------------------------------------ */
  const T = {
    en: {
      "nav.shop": "Shop", "nav.weddings": "Weddings", "nav.gallery": "Gallery", "nav.visit": "Visit us",
      "hero.eyebrow": "Florist · Amman",
      "hero.title": "Flowers that say it beautifully",
      "hero.shop": "Order flowers", "hero.weddings": "Plan your wedding",
      "hero.p1": "Same-day delivery", "hero.p2": "Order on WhatsApp", "hero.p3": "Hand-made with love",
      "steps.title": "How ordering works",
      "steps.s1": "Choose your flowers", "steps.s1d": "Add bouquets to your basket.",
      "steps.s2": "Add delivery details", "steps.s2d": "Date, area and a card message.",
      "steps.s3": "Send on WhatsApp", "steps.s3d": "We confirm & arrange payment with you.",
      "shop.eyebrow": "The collection", "shop.title": "Fresh bouquets & gifts",
      "shop.all": "All", "shop.add": "Add", "shop.added": "Added ✓", "shop.ask": "Ask for price",
      "custom.title": "Have something special in mind?",
      "custom.text": "Send us a photo or an idea and we'll create it for you.",
      "custom.btn": "Custom order on WhatsApp",
      "wed.eyebrow": "Weddings & events", "wed.title": "Your day, styled in flowers",
      "wed.text": "From the bridal bouquet to the kosha and every table, we design and set up the flowers for your wedding, engagement or henna night, so you can simply enjoy it.",
      "wed.cta": "Request a consultation",
      "wed.popular": "Most popular", "wed.choose": "Choose this package",
      "wf.title": "Tell us about your wedding",
      "wf.text": "Fill in what you know and send. We'll reply on WhatsApp to plan the details together.",
      "wf.names": "Your name(s)", "wf.date": "Wedding date", "wf.venue": "Venue / hall",
      "wf.guests": "Number of guests", "wf.package": "Package", "wf.budget": "Approximate budget (JD)",
      "wf.services": "What do you need?", "wf.notes": "Colours, theme or anything else",
      "wf.send": "Send inquiry on WhatsApp", "wf.notSure": "Not sure yet",
      "gal.eyebrow": "Our work", "gal.title": "Gallery", "gal.all": "All",
      "gal.order": "Order something like this",
      "visit.eyebrow": "Visit the shop", "visit.title": "Come smell the roses",
      "visit.address": "Address", "visit.hours": "Opening hours", "visit.phone": "Phone",
      "visit.chat": "Chat on WhatsApp", "visit.map": "Open in Google Maps",
      "basket.title": "Your basket", "basket.empty": "Your basket is empty. Add a bouquet to get started 🌷",
      "basket.total": "Total", "basket.send": "Send order on WhatsApp", "basket.view": "View basket",
      "basket.hint": "No online payment. We'll confirm availability and payment on WhatsApp.",
      "basket.items": n => `${n} item${n === 1 ? "" : "s"}`,
      "of.title": "Order details", "of.delivery": "Delivery", "of.pickup": "Pick-up",
      "of.name": "Your name", "of.date": "Date", "of.time": "Time",
      "of.recipient": "Recipient's name & phone", "of.area": "Area", "of.address": "Address details",
      "of.card": "Card message (optional)", "of.cardPh": "Happy birthday, with love…", "of.notes": "Notes (optional)",
      "time": ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–8)", "Night (8–10)"],
      "toast.added": name => `${name} added to your basket`,
      "toast.missing": "Please fill in the highlighted fields",
      "msg.hello": "Hello", "msg.order": "I'd like to order:", "msg.total": "Total", "msg.ask": "price to confirm",
      "msg.delivery": "Delivery", "msg.pickup": "Pick-up from the shop", "msg.name": "Name",
      "msg.recipient": "Recipient", "msg.area": "Area", "msg.address": "Address", "msg.date": "Date",
      "msg.time": "Time", "msg.card": "Card message", "msg.notes": "Notes",
      "msg.custom": "I'd like to order a custom arrangement. Here is my idea:",
      "msg.wedding": "I'm interested in your wedding services.",
      "msg.names": "Name(s)", "msg.wdate": "Wedding date", "msg.venue": "Venue", "msg.guests": "Guests",
      "msg.package": "Package", "msg.budget": "Budget", "msg.services": "Services",
      "msg.like": "I'd like something like this from your gallery:",
      "msg.general": "I have a question about your flowers."
    },
    ar: {
      "nav.shop": "المتجر", "nav.weddings": "الأعراس", "nav.gallery": "معرض الصور", "nav.visit": "زورونا",
      "hero.eyebrow": "محل ورد · عمّان",
      "hero.title": "ورود تعبّر عنك بأجمل طريقة",
      "hero.shop": "اطلب ورد", "hero.weddings": "خطّط لعرسك",
      "hero.p1": "توصيل في نفس اليوم", "hero.p2": "اطلب عبر واتساب", "hero.p3": "صُنع يدوياً بحب",
      "steps.title": "طريقة الطلب",
      "steps.s1": "اختر الورد", "steps.s1d": "أضف البوكيهات إلى السلة.",
      "steps.s2": "أدخل تفاصيل التوصيل", "steps.s2d": "التاريخ، المنطقة ورسالة الكرت.",
      "steps.s3": "أرسل على واتساب", "steps.s3d": "نؤكد الطلب ونتفق معك على الدفع.",
      "shop.eyebrow": "تشكيلتنا", "shop.title": "بوكيهات وهدايا طازجة",
      "shop.all": "الكل", "shop.add": "أضف", "shop.added": "تمت الإضافة ✓", "shop.ask": "اسأل عن السعر",
      "custom.title": "عندك فكرة خاصة؟",
      "custom.text": "أرسل لنا صورة أو فكرة ونصمّمها لك.",
      "custom.btn": "طلب خاص عبر واتساب",
      "wed.eyebrow": "الأعراس والمناسبات", "wed.title": "يومك، منسّق بالورد",
      "wed.text": "من بوكيه العروس إلى الكوشة وكل طاولة، نصمّم وننسّق ورد عرسك أو خطبتك أو ليلة الحنّاء، لتستمتعي بيومك براحة.",
      "wed.cta": "اطلب استشارة",
      "wed.popular": "الأكثر طلباً", "wed.choose": "اختر هذه الباقة",
      "wf.title": "أخبرونا عن عرسكم",
      "wf.text": "املأ ما تعرفه وأرسل، وسنرد عليك عبر واتساب لنخطط التفاصيل معاً.",
      "wf.names": "الاسم / الأسماء", "wf.date": "تاريخ العرس", "wf.venue": "القاعة / المكان",
      "wf.guests": "عدد المدعوين", "wf.package": "الباقة", "wf.budget": "الميزانية التقريبية (د.أ)",
      "wf.services": "ماذا تحتاج؟", "wf.notes": "الألوان، الثيم أو أي تفاصيل أخرى",
      "wf.send": "أرسل الاستفسار على واتساب", "wf.notSure": "لم أقرر بعد",
      "gal.eyebrow": "أعمالنا", "gal.title": "معرض الصور", "gal.all": "الكل",
      "gal.order": "أريد شيئاً مثل هذا",
      "visit.eyebrow": "زوروا المحل", "visit.title": "تعالوا شمّوا الورد",
      "visit.address": "العنوان", "visit.hours": "ساعات العمل", "visit.phone": "الهاتف",
      "visit.chat": "راسلنا على واتساب", "visit.map": "افتح في خرائط جوجل",
      "basket.title": "سلّتك", "basket.empty": "سلّتك فارغة. أضف بوكيه لتبدأ 🌷",
      "basket.total": "المجموع", "basket.send": "أرسل الطلب على واتساب", "basket.view": "عرض السلة",
      "basket.hint": "لا يوجد دفع إلكتروني. نؤكد التوفر والدفع معك عبر واتساب.",
      "basket.items": n => n === 1 ? "قطعة واحدة" : n === 2 ? "قطعتان" : `${n} قطع`,
      "of.title": "تفاصيل الطلب", "of.delivery": "توصيل", "of.pickup": "استلام من المحل",
      "of.name": "اسمك", "of.date": "التاريخ", "of.time": "الوقت",
      "of.recipient": "اسم المستلم ورقمه", "of.area": "المنطقة", "of.address": "تفاصيل العنوان",
      "of.card": "رسالة الكرت (اختياري)", "of.cardPh": "كل عام وأنت بخير، مع حبي…", "of.notes": "ملاحظات (اختياري)",
      "time": ["صباحاً (٩–١٢)", "ظهراً (١٢–٤)", "مساءً (٤–٨)", "ليلاً (٨–١٠)"],
      "toast.added": name => `تمت إضافة ${name} إلى السلة`,
      "toast.missing": "يرجى تعبئة الحقول المحددة",
      "msg.hello": "مرحباً", "msg.order": "أرغب بطلب:", "msg.total": "المجموع", "msg.ask": "السعر للتأكيد",
      "msg.delivery": "توصيل", "msg.pickup": "استلام من المحل", "msg.name": "الاسم",
      "msg.recipient": "المستلم", "msg.area": "المنطقة", "msg.address": "العنوان", "msg.date": "التاريخ",
      "msg.time": "الوقت", "msg.card": "رسالة الكرت", "msg.notes": "ملاحظات",
      "msg.custom": "أرغب بطلب تنسيق خاص، وهذه فكرتي:",
      "msg.wedding": "أرغب بالاستفسار عن خدمات الأعراس.",
      "msg.names": "الاسم", "msg.wdate": "تاريخ العرس", "msg.venue": "المكان", "msg.guests": "عدد المدعوين",
      "msg.package": "الباقة", "msg.budget": "الميزانية", "msg.services": "الخدمات",
      "msg.like": "أرغب بشيء مثل هذا من معرض الصور:",
      "msg.general": "عندي استفسار عن الورد."
    }
  };

  /* ------------------------------------------------------------------
     Language
     ------------------------------------------------------------------ */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } }
  };
  let lang = store.get("lang", (navigator.language || "en").toLowerCase().startsWith("ar") ? "ar" : "en");
  const t = (key, ...args) => { const v = T[lang][key] ?? T.en[key] ?? key; return typeof v === "function" ? v(...args) : v; };
  const L = obj => (obj && typeof obj === "object" ? (obj[lang] ?? obj.en ?? "") : (obj ?? ""));
  const num = n => lang === "ar" ? n.toLocaleString("ar-EG") : n.toLocaleString("en-US");
  const money = n => `${num(n)} ${L(S.currency)}`;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ------------------------------------------------------------------
     Placeholder floral art (used until real photos are added)
     ------------------------------------------------------------------ */
  const PALETTES = {
    blush:    { bg: ["#F8E9E6", "#EED5D1"], fl: ["#E7A3AB", "#F3C4C7", "#D47F8A", "#FAE0DE"], leaf: "#9DAD8D" },
    red:      { bg: ["#F7E7E2", "#ECD2CB"], fl: ["#B0263A", "#C73A4D", "#97202F", "#DD5F70"], leaf: "#7E9070" },
    lavender: { bg: ["#F0EBF5", "#E1D8EC"], fl: ["#B7A0D2", "#D5C6E7", "#9A82BF", "#EFE7F7"], leaf: "#94A487" },
    ivory:    { bg: ["#F7F2EA", "#EBE1D1"], fl: ["#FFFFFF", "#F5EDE0", "#E8D9C2", "#FBF6EE"], leaf: "#8C9B7E" },
    peach:    { bg: ["#FAECE2", "#F2D7C5"], fl: ["#F0B193", "#F6CAB0", "#E59675", "#FBE3D3"], leaf: "#93A383" },
    sunset:   { bg: ["#FBEEDB", "#F4DAB8"], fl: ["#F1BE4A", "#EC9857", "#E26A5A", "#F6D886"], leaf: "#86977A" },
    sage:     { bg: ["#ECF0E7", "#DCE4D3"], fl: ["#FFFFFF", "#F4F2EA", "#E6EBDD", "#FBFBF6"], leaf: "#768869" }
  };
  const SIZES = { tall: [600, 800], square: [700, 700], wide: [800, 560] };

  function rng(seedStr) {
    let h = 1779033703 ^ seedStr.length;
    for (let i = 0; i < seedStr.length; i++) { h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
    return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
  }
  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const c = [n >> 16, (n >> 8) & 255, n & 255].map(v => Math.max(0, Math.min(255, Math.round(v + amt))));
    return "#" + c.map(v => v.toString(16).padStart(2, "0")).join("");
  }
  const artCache = new Map();
  function floralArt(seed, paletteName = "blush", shape = "square") {
    const key = `${seed}|${paletteName}|${shape}`;
    if (artCache.has(key)) return artCache.get(key);
    const p = PALETTES[paletteName] || PALETTES.blush;
    const [W, H] = SIZES[shape] || SIZES.square;
    const r = rng(key);
    const cx = W / 2, cy = H * 0.52, rx = W * 0.36, ry = H * 0.32;
    const unit = Math.min(W, H);
    let leaves = "", blooms = [], fillers = "";

    for (let i = 0; i < 14; i++) {
      const a = r() * Math.PI * 2, d = 0.75 + r() * 0.45;
      const x = cx + Math.cos(a) * rx * d, y = cy + Math.sin(a) * ry * d;
      const len = unit * (0.07 + r() * 0.06), deg = (a * 180 / Math.PI) + 90;
      leaves += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(len * .38).toFixed(1)}" ry="${len.toFixed(1)}" transform="rotate(${deg.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${shade(p.leaf, (r() - .5) * 30)}" opacity=".9"/>`;
    }
    const count = 9 + Math.floor(r() * 5);
    for (let i = 0; i < count; i++) {
      const a = r() * Math.PI * 2, d = Math.sqrt(r()) * 0.92;
      blooms.push({ x: cx + Math.cos(a) * rx * d, y: cy + Math.sin(a) * ry * d, s: unit * (0.075 + r() * 0.05), c: p.fl[Math.floor(r() * p.fl.length)], type: r() < 0.55 ? "rose" : "petal", rot: r() * 360 });
    }
    blooms.sort((a, b) => a.y - b.y);
    const bloomSvg = blooms.map(b => {
      const t = `translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) rotate(${b.rot.toFixed(0)})`;
      const dark = shade(b.c, -38), mid = shade(b.c, -16), light = shade(b.c, 14);
      if (b.type === "rose") {
        const s = b.s;
        return `<g transform="${t}" filter="url(#sh)"><circle r="${s}" fill="${b.c}"/>` +
          `<path d="M${-s * .75} ${s * .1} A${s * .78} ${s * .78} 0 0 1 ${s * .6} ${-s * .5}" stroke="${mid}" stroke-width="${s * .07}" fill="none" stroke-linecap="round"/>` +
          `<circle r="${s * .62}" fill="${light}"/>` +
          `<path d="M${s * .5} ${s * .2} A${s * .5} ${s * .5} 0 0 1 ${-s * .35} ${s * .4}" stroke="${mid}" stroke-width="${s * .06}" fill="none" stroke-linecap="round"/>` +
          `<circle r="${s * .36}" fill="${b.c}"/>` +
          `<path d="M${-s * .22} ${-s * .05} A${s * .22} ${s * .22} 0 1 1 ${s * .1} ${s * .2}" stroke="${dark}" stroke-width="${s * .06}" fill="none" stroke-linecap="round"/></g>`;
      }
      const n = 6 + Math.floor(b.s % 3), s = b.s;
      let petals = "";
      for (let k = 0; k < n; k++) petals += `<ellipse cy="${-s * .55}" rx="${s * .36}" ry="${s * .58}" fill="${k % 2 ? b.c : light}" transform="rotate(${(360 / n) * k})"/>`;
      return `<g transform="${t}" filter="url(#sh)">${petals}<circle r="${s * .24}" fill="${shade(p.leaf, -10)}" opacity=".55"/><circle r="${s * .15}" fill="${dark}" opacity=".6"/></g>`;
    }).join("");
    for (let i = 0; i < 26; i++) {
      const a = r() * Math.PI * 2, d = 0.4 + r() * 0.75;
      fillers += `<circle cx="${(cx + Math.cos(a) * rx * d).toFixed(1)}" cy="${(cy + Math.sin(a) * ry * d).toFixed(1)}" r="${(unit * (0.006 + r() * 0.008)).toFixed(1)}" fill="#fff" opacity=".9"/>`;
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.bg[0]}"/><stop offset="1" stop-color="${p.bg[1]}"/></linearGradient>` +
      `<filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="${unit * .006}" stdDeviation="${unit * .008}" flood-color="#3a2a20" flood-opacity=".16"/></filter></defs>` +
      `<rect width="100%" height="100%" fill="url(#g)"/>` +
      `<circle cx="${W * .82}" cy="${H * .16}" r="${unit * .22}" fill="#fff" opacity=".25"/>` +
      leaves + fillers + bloomSvg + `</svg>`;
    const uri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    artCache.set(key, uri);
    return uri;
  }
  // Use real photo if provided, fall back to illustration if missing/broken
  function setImg(img, src, seed, palette, shape) {
    const art = floralArt(seed, palette, shape);
    if (src) { img.onerror = () => { img.onerror = null; img.src = art; }; img.src = src; }
    else img.src = art;
  }
  const imgHTML = (src, seed, palette, shape, alt, extra = "") => {
    const art = floralArt(seed, palette, shape);
    const [w, h] = SIZES[shape] || SIZES.square;
    return `<img src="${esc(src || art)}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy" ${extra}` +
      (src ? ` onerror="this.onerror=null;this.src='${art}'"` : "") + `>`;
  };

  /* ------------------------------------------------------------------
     WhatsApp
     ------------------------------------------------------------------ */
  const waLink = text => `https://wa.me/${String(S.whatsapp).replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
  const greeting = () => `${t("msg.hello")} ${L(S.name)} 🌸`;
  const line = (label, value) => (value ? `${label}: ${value}` : null);
  function openWA(text) {
    const a = document.createElement("a");
    a.href = waLink(text); a.target = "_blank"; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
  }

  /* ------------------------------------------------------------------
     Toast
     ------------------------------------------------------------------ */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.classList.add("is-shown");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("is-shown"), 2400);
  }

  /* ------------------------------------------------------------------
     Static texts & shop info
     ------------------------------------------------------------------ */
  function applyTexts() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${L(S.name)} · ${L(S.tagline)}`;
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    $$("[data-shop]").forEach(el => { el.textContent = L(S[el.dataset.shop]); });
    $("#langBtn").textContent = lang === "ar" ? "English" : "عربي";
    $("#hours").innerHTML = (S.hours || []).map(h => esc(L(h))).join("<br>");
    const phone = $("#phoneLink"); phone.textContent = S.phone; phone.href = `tel:${S.phone.replace(/[^\d+]/g, "")}`;
    $("#mapsLink").href = S.mapsUrl;
    const general = waLink(`${greeting()}\n${t("msg.general")}`);
    $("#waFloat").href = general; $("#visitWa").href = general;
    $("#customOrderBtn").href = waLink(`${greeting()}\n${t("msg.custom")}\n`);
    const insta = $("#instaLink");
    if (S.instagram) insta.href = S.instagram; else insta.hidden = true;
    $("#year").textContent = new Date().getFullYear();
    $("#heroImg").alt = L(S.name);
  }

  /* ------------------------------------------------------------------
     Shop
     ------------------------------------------------------------------ */
  let shopFilter = "all";
  function renderShopFilters() {
    const cats = [{ id: "all", en: T.en["shop.all"], ar: T.ar["shop.all"] }, ...S.categories];
    $("#shopFilters").innerHTML = cats.map(c =>
      `<button class="chip" role="tab" type="button" data-id="${c.id}" aria-selected="${c.id === shopFilter}">${esc(L(c))}</button>`).join("");
  }
  function renderProducts() {
    const list = S.products.filter(p => shopFilter === "all" || p.category === shopFilter);
    $("#products").innerHTML = list.map((p, i) => `
      <article class="product" style="animation-delay:${i * 40}ms">
        <div class="product__img">
          ${imgHTML(p.image, p.id, p.palette, "square", L(p.name))}
          ${p.tag ? `<span class="product__tag">${esc(L(p.tag))}</span>` : ""}
        </div>
        <div class="product__body">
          <h3>${esc(L(p.name))}</h3>
          <p>${esc(L(p.desc))}</p>
          <div class="product__foot">
            <span class="price">${p.price != null ? money(p.price) : t("shop.ask")}</span>
            <button class="add-btn" type="button" data-add="${p.id}">${t("shop.add")}</button>
          </div>
        </div>
      </article>`).join("");
  }

  /* ------------------------------------------------------------------
     Basket
     ------------------------------------------------------------------ */
  let basket = store.get("basket", {}); // { productId: qty }
  const product = id => S.products.find(p => p.id === id);
  Object.keys(basket).forEach(id => { if (!product(id) || basket[id] < 1) delete basket[id]; });

  const basketItems = () => Object.entries(basket).map(([id, qty]) => ({ p: product(id), qty }));
  const basketCount = () => Object.values(basket).reduce((a, b) => a + b, 0);
  const basketTotal = () => basketItems().reduce((sum, { p, qty }) => sum + (p.price || 0) * qty, 0);

  function addToBasket(id, btn) {
    basket[id] = (basket[id] || 0) + 1;
    saveBasket();
    toast(t("toast.added", L(product(id).name)));
    if (btn) { btn.textContent = t("shop.added"); btn.classList.add("is-added"); setTimeout(() => { btn.textContent = t("shop.add"); btn.classList.remove("is-added"); }, 1400); }
    const badge = $("#basketCount"); badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
  }
  function setQty(id, delta) {
    basket[id] = (basket[id] || 0) + delta;
    if (basket[id] < 1) delete basket[id];
    saveBasket();
  }
  function saveBasket() { store.set("basket", basket); renderBasket(); }

  function renderBasket() {
    const count = basketCount();
    const badge = $("#basketCount"); badge.hidden = !count; badge.textContent = num(count);
    document.body.classList.toggle("has-bar", count > 0);
    $("#basketBar").hidden = !count;
    $("#basketBarText").textContent = `${t("basket.items", count)} · ${money(basketTotal())}`;
    $("#drawer").classList.toggle("is-empty", !count);
    $("#basketList").innerHTML = basketItems().map(({ p, qty }) => `
      <li>
        ${imgHTML(p.image, p.id, p.palette, "square", "")}
        <div><h4>${esc(L(p.name))}</h4><span class="muted">${p.price != null ? money(p.price) : t("shop.ask")}</span></div>
        <div class="qty">
          <button type="button" data-qty="-1" data-id="${p.id}" aria-label="−">−</button>
          <span>${num(qty)}</span>
          <button type="button" data-qty="1" data-id="${p.id}" aria-label="+">+</button>
        </div>
      </li>`).join("");
    const hasUnpriced = basketItems().some(({ p }) => p.price == null);
    $("#basketTotal").textContent = money(basketTotal()) + (hasUnpriced ? " +" : "");
  }

  let lastFocus = null;
  function openDrawer() {
    lastFocus = document.activeElement;
    $("#drawer").classList.add("is-open"); $("#drawer").setAttribute("aria-hidden", "false");
    $("#overlay").hidden = false; document.body.classList.add("no-scroll");
    setTimeout(() => $("#drawerClose").focus(), 50);
  }
  function closeDrawer() {
    $("#drawer").classList.remove("is-open"); $("#drawer").setAttribute("aria-hidden", "true");
    $("#overlay").hidden = true; document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  function renderOrderFormOptions() {
    const time = $("#ofTime"), area = $("#ofArea");
    const tv = time.selectedIndex, av = area.selectedIndex;
    time.innerHTML = t("time").map(x => `<option>${esc(x)}</option>`).join("");
    area.innerHTML = `<option value="">—</option>` + S.areas.map(a => `<option>${esc(L(a))}</option>`).join("");
    if (tv >= 0) time.selectedIndex = tv;
    if (av >= 0) area.selectedIndex = av;
  }

  function validate(form, names) {
    let ok = true, first = null;
    names.forEach(n => {
      const el = form.elements[n];
      const bad = !el.value.trim();
      el.classList.toggle("is-invalid", bad);
      if (bad) { ok = false; first = first || el; }
    });
    if (!ok) { toast(t("toast.missing")); first.focus(); }
    return ok;
  }
  const fmtDate = v => {
    if (!v) return "";
    const d = new Date(v + "T12:00:00");
    return d.toLocaleDateString(lang === "ar" ? "ar-JO" : "en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  };

  function sendOrder() {
    const f = $("#orderForm");
    const pickup = f.elements.method.value === "pickup";
    if (!validate(f, pickup ? ["name", "date"] : ["name", "date", "area"])) return;
    const v = n => f.elements[n].value.trim();
    const items = basketItems().map(({ p, qty }) =>
      `• ${num(qty)} × ${L(p.name)} — ${p.price != null ? money(p.price * qty) : t("msg.ask")}`);
    const msg = [
      greeting(), "", t("msg.order"), ...items, "",
      `*${t("msg.total")}: ${money(basketTotal())}*`, "",
      `*${pickup ? t("msg.pickup") : t("msg.delivery")}*`,
      line(t("msg.name"), v("name")),
      !pickup && line(t("msg.recipient"), v("recipient")),
      !pickup && line(t("msg.area"), v("area")),
      !pickup && line(t("msg.address"), v("address")),
      line(t("msg.date"), fmtDate(v("date"))),
      line(t("msg.time"), v("time")),
      v("card") && `${t("msg.card")}: "${v("card")}"`,
      line(t("msg.notes"), v("notes"))
    ].filter(x => x !== null && x !== false).join("\n");
    openWA(msg);
  }

  /* ------------------------------------------------------------------
     Weddings
     ------------------------------------------------------------------ */
  const ICONS = {
    bouquet: '<circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/><circle cx="12" cy="11" r="3"/><path d="m10 14 2 7 2-7"/>',
    arch: '<path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M3 21h18"/><circle cx="12" cy="5" r="1.5"/>',
    table: '<circle cx="12" cy="6" r="3"/><path d="M12 9v4M4 13h16M7 13l-1 8M17 13l1 8"/>',
    car: '<path d="M3 16v-3l2.5-5h13L21 13v3z"/><circle cx="7.5" cy="17" r="1.8"/><circle cx="16.5" cy="17" r="1.8"/><circle cx="12" cy="5" r="1.5"/>',
    ring: '<circle cx="12" cy="15" r="6"/><path d="m9 5 3-2 3 2-3 4z"/>',
    henna: '<path d="M15 4a8 8 0 1 0 5 13A7 7 0 0 1 15 4z"/><path d="M18 5v3M16.5 6.5h3"/>'
  };
  let selectedPackage = "";
  function renderWeddings() {
    $("#weddingServices").innerHTML = S.weddingServices.map(s =>
      `<li><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[s.icon] || ICONS.bouquet}</svg>${esc(L(s))}</li>`).join("");

    $("#weddingPackages").innerHTML = S.weddingPackages.map(p => `
      <article class="package${p.featured ? " package--featured" : ""}">
        ${p.featured ? `<span class="package__ribbon">${t("wed.popular")}</span>` : ""}
        <h3>${esc(L(p.name))}</h3>
        <p class="package__price">${esc(L(p.price))}</p>
        <ul>${p.items.map(i => `<li>${esc(L(i))}</li>`).join("")}</ul>
        <button type="button" class="btn ${p.featured ? "btn--primary" : "btn--ghost"}" data-package="${p.id}">${t("wed.choose")}</button>
      </article>`).join("");

    $("#wfPackage").innerHTML = `<option value="">${t("wf.notSure")}</option>` +
      S.weddingPackages.map(p => `<option value="${p.id}">${esc(L(p.name))} — ${esc(L(p.price))}</option>`).join("");
    $("#wfPackage").value = selectedPackage;

    const checked = new Set($$("#wfServices input:checked").map(i => i.value));
    $("#wfServices").innerHTML = S.weddingServices.map((s, i) =>
      `<label class="check"><input type="checkbox" value="${i}" ${checked.has(String(i)) ? "checked" : ""}><span>${esc(L(s))}</span></label>`).join("");

    const wImg = $("#weddingImg");
    setImg(wImg, S.weddingImage || "", "wedding-hero", "ivory", "tall");
    wImg.alt = t("wed.title");
  }
  function sendWedding(e) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!validate(f, ["names", "date"])) return;
    const v = n => f.elements[n].value.trim();
    const pkg = S.weddingPackages.find(p => p.id === v("package"));
    const services = $$("#wfServices input:checked").map(i => L(S.weddingServices[+i.value]));
    const msg = [
      greeting(), t("msg.wedding"), "",
      line(t("msg.names"), v("names")),
      line(t("msg.wdate"), fmtDate(v("date"))),
      line(t("msg.venue"), v("venue")),
      line(t("msg.guests"), v("guests")),
      line(t("msg.package"), pkg ? L(pkg.name) : ""),
      line(t("msg.budget"), v("budget") && `${v("budget")} ${L(S.currency)}`),
      services.length ? `${t("msg.services")}: ${services.join(lang === "ar" ? "، " : ", ")}` : null,
      line(t("msg.notes"), v("notes"))
    ].filter(Boolean).join("\n");
    openWA(msg);
  }

  /* ------------------------------------------------------------------
     Gallery + lightbox
     ------------------------------------------------------------------ */
  let galFilter = "all", galVisible = [], lbIndex = 0;
  function renderGalleryFilters() {
    const f = [{ id: "all", en: T.en["gal.all"], ar: T.ar["gal.all"] }, ...S.galleryFilters];
    $("#galleryFilters").innerHTML = f.map(c =>
      `<button class="chip" role="tab" type="button" data-id="${c.id}" aria-selected="${c.id === galFilter}">${esc(L(c))}</button>`).join("");
  }
  function renderGallery() {
    galVisible = S.gallery.map((g, i) => ({ ...g, i })).filter(g => galFilter === "all" || g.category === galFilter);
    $("#galleryGrid").innerHTML = galVisible.map((g, k) => `
      <figure class="gallery__item" tabindex="0" role="button" data-k="${k}" style="animation-delay:${k * 35}ms" aria-label="${esc(L(g.caption))}">
        ${imgHTML(g.image, "g" + g.i, g.palette, g.shape, L(g.caption))}
        <figcaption>${esc(L(g.caption))}</figcaption>
      </figure>`).join("");
  }
  function showLightbox(k) {
    lbIndex = (k + galVisible.length) % galVisible.length;
    const g = galVisible[lbIndex];
    setImg($("#lbImg"), g.image, "g" + g.i, g.palette, g.shape);
    $("#lbImg").alt = L(g.caption);
    $("#lbCaption").textContent = L(g.caption);
    $("#lbOrder").href = waLink(`${greeting()}\n${t("msg.like")}\n"${L(g.caption)}"${g.image ? `\n${new URL(g.image, location.href).href}` : ""}`);
    const lb = $("#lightbox");
    if (lb.hidden) { lastFocus = document.activeElement; lb.hidden = false; document.body.classList.add("no-scroll"); $("#lbClose").focus(); }
  }
  function closeLightbox() {
    $("#lightbox").hidden = true; document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  /* ------------------------------------------------------------------
     Render everything
     ------------------------------------------------------------------ */
  function renderAll() {
    applyTexts();
    renderShopFilters(); renderProducts();
    renderOrderFormOptions(); renderBasket();
    renderWeddings();
    renderGalleryFilters(); renderGallery();
  }

  function init() {
    setImg($("#heroImg"), S.heroImage, "hero", "blush", "tall");
    setImg($("#aboutImg"), S.aboutImage, "about", "peach", "wide");

    const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    const iso = today.toISOString().slice(0, 10);
    $("#orderForm").elements.date.min = iso;
    $("#weddingForm").elements.date.min = iso;

    renderAll();

    // Language
    $("#langBtn").addEventListener("click", () => { lang = lang === "ar" ? "en" : "ar"; store.set("lang", lang); renderAll(); });

    // Header
    const header = $(".header");
    const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    const menuBtn = $("#menuBtn"), nav = $("#nav");
    menuBtn.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); menuBtn.setAttribute("aria-expanded", open); });
    nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); } });

    // Shop
    $("#shopFilters").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      shopFilter = b.dataset.id; renderShopFilters(); renderProducts();
    });
    $("#products").addEventListener("click", e => { const b = e.target.closest("[data-add]"); if (b) addToBasket(b.dataset.add, b); });

    // Basket
    $("#basketBtn").addEventListener("click", openDrawer);
    $("#basketBar").addEventListener("click", openDrawer);
    $("#drawerClose").addEventListener("click", closeDrawer);
    $("#overlay").addEventListener("click", closeDrawer);
    $("#basketList").addEventListener("click", e => { const b = e.target.closest("[data-qty]"); if (b) setQty(b.dataset.id, +b.dataset.qty); });
    $("#sendOrder").addEventListener("click", sendOrder);
    const of = $("#orderForm");
    of.addEventListener("change", e => { if (e.target.name === "method") of.classList.toggle("is-pickup", e.target.value === "pickup"); });
    of.addEventListener("input", e => e.target.classList.remove("is-invalid"));
    of.addEventListener("submit", e => { e.preventDefault(); sendOrder(); });

    // Weddings
    $("#weddingPackages").addEventListener("click", e => {
      const b = e.target.closest("[data-package]"); if (!b) return;
      selectedPackage = b.dataset.package; $("#wfPackage").value = selectedPackage;
      $("#weddingForm").scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => $("#weddingForm").elements.names.focus({ preventScroll: true }), 500);
    });
    $("#wfPackage").addEventListener("change", e => { selectedPackage = e.target.value; });
    $("#weddingForm").addEventListener("submit", sendWedding);
    $("#weddingForm").addEventListener("input", e => e.target.classList.remove("is-invalid"));

    // Gallery
    $("#galleryFilters").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      galFilter = b.dataset.id; renderGalleryFilters(); renderGallery();
    });
    const grid = $("#galleryGrid");
    grid.addEventListener("click", e => { const it = e.target.closest("[data-k]"); if (it) showLightbox(+it.dataset.k); });
    grid.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.dataset.k) { e.preventDefault(); showLightbox(+e.target.dataset.k); } });
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", () => showLightbox(lbIndex - 1));
    $("#lbNext").addEventListener("click", () => showLightbox(lbIndex + 1));
    $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
    let touchX = null;
    $("#lightbox").addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
    $("#lightbox").addEventListener("touchend", e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX; touchX = null;
      if (Math.abs(dx) > 50) showLightbox(lbIndex + ((dx < 0) !== (lang === "ar") ? 1 : -1));
    });

    // Keyboard
    document.addEventListener("keydown", e => {
      if (!$("#lightbox").hidden) {
        if (e.key === "Escape") closeLightbox();
        const fwd = lang === "ar" ? "ArrowLeft" : "ArrowRight", back = lang === "ar" ? "ArrowRight" : "ArrowLeft";
        if (e.key === fwd) showLightbox(lbIndex + 1);
        if (e.key === back) showLightbox(lbIndex - 1);
      } else if (e.key === "Escape" && $("#drawer").classList.contains("is-open")) closeDrawer();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
