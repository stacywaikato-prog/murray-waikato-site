// Everything here comes from Murray's own supplied material (his two flyers).
// Change values here; nothing is hard-coded elsewhere.
export const site = {
  name: "Murray Waikato",
  role: "Contemporary artist",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com", // TODO set real domain
  phone: "020 424 1602",
  phoneHref: "tel:+64204241602",
  email: "matewaikato@yahoo.com",
  place: "Te Teko",
  // Optional: set to a Web3Forms / Formspree endpoint to post the enquiry form. Otherwise it opens the visitor's email app.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  // The supplied verse needs Murray's (or a reo reviewer's) sign-off before launch. Flip to false to hide it.
  showVerse: true,
};

export const pepeha = [
  { reo: "Putauaki", label: "te Maunga", en: "Mountain", core: true },
  { reo: "Rangitaiki", label: "te Awa", en: "River", core: true },
  { reo: "Ngāti Awa", label: "te Iwi", en: "Tribe", core: true },
  { reo: "Mataatua", label: "te Waka", en: "Canoe", core: true },
  { reo: "Ruaihona", label: "te Wharetipuna", en: "Meeting house", core: false },
  { reo: "Mahanga i te Rangi", label: "te Wharekai", en: "Dining hall", core: false },
  { reo: "Ngāi Tamaoki", label: "te Hapū", en: "Subtribe", core: true },
  { reo: "Ruaihona", label: "te Marae", en: "Marae", core: true },
] as const;

// Murray's greeting, as he wrote it (his message, 19 Nov 2026).
export const greeting = [
  "He whakairo kōrero",
  "He whakairoiro rākau e",
  "Ko Murray Waikato tēnei.",
  "Tihei Mauri ora.",
];
// His own line. English translation to be confirmed by Murray before it is shown.
export const whakaritorito =
  "He whakaritorito tēnei o ngā tohunga whakairo o roto o Ngāti Awa ki Rangitaiki mō ngā tau 20 neke atu.";
export const signoff = "Ngā mihi nāku noa";

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/whakapapa/", label: "Whakapapa" },
  { href: "/works/", label: "Works" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/process/", label: "Process" },
  { href: "/commissioning/", label: "Commissioning" },
  { href: "/contact/", label: "Contact" },
];

// Murray's own words, verbatim from his introduction.
export const inHisWords = {
  learning:
    "I have been very humbled and privileged to be one of the many tauira who have learnt alongside some great master carvers of our region of Mataatua.",
  grounded:
    "These skills have been guided, embedded and grounded in my everyday life providing sacred ancestral cultural treasures locally, internationally and world wide.",
  place: "I come from a small rural settlement town called Te Teko, some say it’s the centre of the universe.",
  summaryReo:
    "He mahi toi e hono ana i ngā tikanga tuku iho ki te ao hou, mō te iwi taketake, ā-rohe, ā-motu, ā-ao hoki.",
  summaryEn:
    "Artwork that joins inherited tradition to the modern world — for Indigenous people, and for the region, the nation and the world.",
};

export const verse = [
  "I poua mai au i hea", "I poua mai au", "I te take o Putauaki he ngarara te kai",
  "I poua mai au i hea", "I poua mai au", "I te Awa o te Atua, i Rangitaiki, i Oriini, i Ohinemataroa",
  "I poua mai au I hea", "I poua mai au", "I te puawawatanga o Awanuiarangi", "Wananga rau",
  "He uri makoko ahau no Mataatua", "Kia whita ki te aka matua o Tawhakinui a Hema",
  "Ko Ngāti Awa te Toki tangatanga i te rā", "Ana te ihi ana te awhi ana te mataku.",
];

export const commissionAreas = [
  { title: "Marae & wharenui carving", reo: "" },
  { title: "Cultural commissions", reo: "" },
  { title: "Local & international projects", reo: "" },
  { title: "Collaborations & corporate partnerships", reo: "" },
];
