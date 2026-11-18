/* =====================================================================
   SHOP SETTINGS — this is the ONLY file the shop owner needs to edit.
   ---------------------------------------------------------------------
   • Every text has an English (en) and Arabic (ar) version.
   • To use a real photo, put it in the /images folder and write its
     path in "image", e.g.  image: "images/red-roses.jpg"
     Leave image empty ("") to show a soft illustrated placeholder.
   • Prices are in Jordanian Dinars. Use price: null for "Ask us".
   ===================================================================== */

window.SHOP = {
  // ---- Basic info --------------------------------------------------
  name:    { en: "Zahra Flowers", ar: "زهرة للورود" },   // ← shop name
  tagline: { en: "Fresh flowers & wedding styling in Amman",
             ar: "ورود طازجة وتنسيق أعراس في عمّان" },

  // WhatsApp number in international format, digits only, no + or 00
  // Example for 079 123 4567  →  "962791234567"
  whatsapp: "962790000000",

  phone: "+962 79 000 0000",
  instagram: "https://instagram.com/",          // ← full Instagram link, or "" to hide
  mapsUrl: "https://maps.app.goo.gl/sfwVofPZr5ktSmUL7",
  address: { en: "Amman, Jordan", ar: "عمّان، الأردن" },
  hours: [
    { en: "Saturday – Thursday: 9:00 am – 10:00 pm", ar: "السبت – الخميس: ٩ صباحاً – ١٠ مساءً" },
    { en: "Friday: 2:00 pm – 10:00 pm",             ar: "الجمعة: ٢ ظهراً – ١٠ مساءً" }
  ],

  currency: { en: "JD", ar: "د.أ" },
  deliveryNote: { en: "Same-day delivery across Amman for orders before 6 pm.",
                  ar: "توصيل في نفس اليوم داخل عمّان للطلبات قبل الساعة ٦ مساءً." },

  // Areas shown in the delivery form
  areas: [
    { en: "Abdoun", ar: "عبدون" }, { en: "Dabouq", ar: "دابوق" },
    { en: "Khalda", ar: "خلدا" }, { en: "Sweifieh", ar: "الصويفية" },
    { en: "Jabal Amman", ar: "جبل عمّان" }, { en: "Shmeisani", ar: "الشميساني" },
    { en: "Tla' Al-Ali", ar: "تلاع العلي" }, { en: "Um Uthaina", ar: "أم أذينة" },
    { en: "Marj Al-Hamam", ar: "مرج الحمام" }, { en: "Jubeiha", ar: "الجبيهة" },
    { en: "Other area", ar: "منطقة أخرى" }
  ],

  // ---- Shop catalogue ---------------------------------------------
  categories: [
    { id: "bouquets",     en: "Bouquets",       ar: "بوكيهات" },
    { id: "boxes",        en: "Flower Boxes",   ar: "بوكسات ورد" },
    { id: "occasions",    en: "Occasions",      ar: "مناسبات" },
    { id: "plants",       en: "Plants",         ar: "نباتات" }
  ],

  products: [
    { id: "p1", category: "bouquets", price: 25, image: "", palette: "blush", tag: { en: "Best seller", ar: "الأكثر طلباً" },
      name: { en: "Blush Whisper", ar: "همسة وردية" },
      desc: { en: "Soft pink roses, spray roses and eucalyptus.", ar: "ورد جوري زهري مع ورد سبراي وأوكالبتوس." } },
    { id: "p2", category: "bouquets", price: 35, image: "", palette: "red",
      name: { en: "Classic Red Roses", ar: "ورد أحمر كلاسيك" },
      desc: { en: "Twenty premium red roses, hand-tied.", ar: "عشرون وردة حمراء فاخرة، مربوطة يدوياً." } },
    { id: "p3", category: "bouquets", price: 30, image: "", palette: "lavender",
      name: { en: "Lavender Dream", ar: "حلم اللافندر" },
      desc: { en: "Lilac roses, lisianthus and wax flower.", ar: "ورد ليلكي مع ليزيانثوس وورد الشمع." } },
    { id: "p4", category: "boxes", price: 40, image: "", palette: "ivory", tag: { en: "New", ar: "جديد" },
      name: { en: "Ivory Box", ar: "بوكس العاجي" },
      desc: { en: "White roses and hydrangea in a signature round box.", ar: "ورد أبيض وهيدرانجيا في بوكس دائري مميز." } },
    { id: "p5", category: "boxes", price: 45, image: "", palette: "peach",
      name: { en: "Peach Garden Box", ar: "بوكس حديقة الخوخ" },
      desc: { en: "Peach roses, carnations and seasonal blooms.", ar: "ورد خوخي مع قرنفل وزهور موسمية." } },
    { id: "p6", category: "occasions", price: 55, image: "", palette: "blush",
      name: { en: "New Baby Basket", ar: "سلة مولود جديد" },
      desc: { en: "A gentle basket to welcome the little one.", ar: "سلة ناعمة للترحيب بالمولود الجديد." } },
    { id: "p7", category: "occasions", price: 60, image: "", palette: "sunset",
      name: { en: "Graduation Bouquet", ar: "بوكيه تخرج" },
      desc: { en: "Bright sunflowers and roses with a ribbon of your choice.", ar: "دوار الشمس وورد مع شريطة من اختيارك." } },
    { id: "p8", category: "plants", price: 18, image: "", palette: "sage",
      name: { en: "Orchid Pot", ar: "أوركيد في أصيص" },
      desc: { en: "A white phalaenopsis orchid in a ceramic pot.", ar: "أوركيد أبيض في أصيص سيراميك." } }
  ],

  // ---- Weddings -----------------------------------------------------
  weddingServices: [
    { icon: "bouquet", en: "Bridal bouquet",            ar: "بوكيه العروس" },
    { icon: "arch",    en: "Kosha & stage décor",       ar: "تنسيق الكوشة والمسرح" },
    { icon: "table",   en: "Table centrepieces",        ar: "تنسيق الطاولات" },
    { icon: "car",     en: "Wedding car flowers",       ar: "تزيين سيارة الزفاف" },
    { icon: "ring",    en: "Engagement & katb kitab",   ar: "خطبة وكتب كتاب" },
    { icon: "henna",   en: "Henna night setup",         ar: "تجهيز ليلة الحنّاء" }
  ],

  weddingPackages: [
    { id: "w1", palette: "ivory", price: { en: "From 350 JD", ar: "تبدأ من ٣٥٠ د.أ" },
      name: { en: "Essential", ar: "الأساسية" },
      items: [
        { en: "Bridal bouquet & groom boutonnière", ar: "بوكيه العروس وبوتونيير العريس" },
        { en: "Wedding car decoration",             ar: "تزيين سيارة الزفاف" },
        { en: "Entrance flower arrangement",        ar: "تنسيق ورد للمدخل" }
      ] },
    { id: "w2", palette: "blush", featured: true, price: { en: "From 1,200 JD", ar: "تبدأ من ١٢٠٠ د.أ" },
      name: { en: "Signature", ar: "المميزة" },
      items: [
        { en: "Everything in Essential",            ar: "كل ما في الباقة الأساسية" },
        { en: "Full kosha / stage design",          ar: "تصميم كامل للكوشة والمسرح" },
        { en: "Centrepieces for up to 20 tables",   ar: "تنسيق حتى ٢٠ طاولة" },
        { en: "Bridesmaids' bouquets",              ar: "بوكيهات للإشبينات" }
      ] },
    { id: "w3", palette: "lavender", price: { en: "Tailored quote", ar: "سعر حسب الطلب" },
      name: { en: "Luxe", ar: "الفاخرة" },
      items: [
        { en: "Complete venue styling",             ar: "تنسيق كامل للقاعة" },
        { en: "Ceiling & aisle installations",      ar: "تعليقات السقف والممر" },
        { en: "Henna night & engagement setups",    ar: "تجهيز الحنّاء والخطبة" },
        { en: "Dedicated planner on the day",       ar: "منسقة خاصة يوم العرس" }
      ] }
  ],

  // ---- Gallery ------------------------------------------------------
  galleryFilters: [
    { id: "bouquets", en: "Bouquets", ar: "بوكيهات" },
    { id: "weddings", en: "Weddings", ar: "أعراس" },
    { id: "events",   en: "Events",   ar: "مناسبات" }
  ],
  // shape: "tall" | "wide" | "square"  (only affects placeholder art)
  gallery: [
    { image: "", category: "weddings", palette: "ivory",    shape: "tall",   caption: { en: "Ivory kosha, Dead Sea wedding", ar: "كوشة عاجية، عرس البحر الميت" } },
    { image: "", category: "bouquets", palette: "blush",    shape: "square", caption: { en: "Garden-style blush bouquet",  ar: "بوكيه وردي بأسلوب الحدائق" } },
    { image: "", category: "events",   palette: "sunset",   shape: "wide",   caption: { en: "Graduation party table",      ar: "طاولة حفل تخرج" } },
    { image: "", category: "bouquets", palette: "red",      shape: "tall",   caption: { en: "Fifty red roses",             ar: "خمسون وردة حمراء" } },
    { image: "", category: "weddings", palette: "blush",    shape: "square", caption: { en: "Bridal bouquet with peonies", ar: "بوكيه عروس بالفاوانيا" } },
    { image: "", category: "weddings", palette: "sage",     shape: "wide",   caption: { en: "Greenery aisle, Abdoun",      ar: "ممر أخضر، عبدون" } },
    { image: "", category: "events",   palette: "lavender", shape: "square", caption: { en: "Engagement backdrop",         ar: "خلفية خطبة" } },
    { image: "", category: "bouquets", palette: "peach",    shape: "tall",   caption: { en: "Peach & cream box",           ar: "بوكس خوخي وكريمي" } },
    { image: "", category: "weddings", palette: "lavender", shape: "tall",   caption: { en: "Henna night florals",         ar: "ورد ليلة الحنّاء" } },
    { image: "", category: "events",   palette: "ivory",    shape: "square", caption: { en: "Baby shower welcome",         ar: "استقبال مولود" } },
    { image: "", category: "bouquets", palette: "sage",     shape: "square", caption: { en: "White & green classic",       ar: "أبيض وأخضر كلاسيك" } },
    { image: "", category: "weddings", palette: "red",      shape: "wide",   caption: { en: "Red rose reception tables",   ar: "طاولات استقبال بالورد الأحمر" } }
  ],

  heroImage: "",   // optional big photo for the top of the page
  weddingImage: "", // optional photo for the weddings section
  aboutImage: ""   // optional photo of the shop / team
};
