// NOURISHMENT DOMAIN — Data Constants
// Source: Nourishment_Domain_Specification.pdf — March 2026
// Intervention Verses, Tea Notes, Supplement Notes, Ginseng Tracker, Log Utilities

// ============================================================
// INTERVENTION VERSES — 48 total (4 patterns × 12 each)
// Displayed one per trigger, cycling by: dateKey hashcode % 12
// ============================================================

export const INTERVENTION_VERSES = {
  convenience: [
    { text: "Watch and pray, that ye enter not into temptation. The spirit indeed is willing, but the flesh is weak.", source: "Christ — Matthew 26:41" },
    { text: "Therefore I say unto you, take no thought for your life, what ye shall eat, or what ye shall drink. Is not the life more than meat, and the body more than raiment?", source: "Christ — Matthew 6:25" },
    { text: "Not as I will, but as you will.", source: "Christ — Matthew 26:39" },
    { text: "Pleasure must never stand higher than duty, as far as the student is concerned. For him pleasure can only be a means to health and to life.", source: "Rudolf Steiner — How to Know Higher Worlds, GA 10" },
    { text: "Many ascribe to their circumstances everything which apparently prevents them from making progress. They say they cannot develop themselves under their conditions of life.", source: "Rudolf Steiner — How to Know Higher Worlds, GA 10" },
    { text: "Every resolution is a force, and if this force does not produce an immediate effect, it works nevertheless on in its own way. All actions arising from desire are worthless in relation to the higher worlds. There, love for an action is alone the decisive factor.", source: "Rudolf Steiner — How to Know Higher Worlds, GA 10" },
    { text: "The deed is everything, the glory nothing.", source: "Goethe — Faust, Part II" },
    { text: "Knowing is not enough; we must apply. Willing is not enough; we must do.", source: "Goethe" },
    { text: "None are so hopelessly enslaved as those who falsely believe they are free.", source: "Goethe" },
    { text: "In limitations he first shows himself the master, and the law can only bring us freedom.", source: "Goethe" },
    { text: "The unexamined life is not worth living.", source: "Socrates — Apology" },
    { text: "He who is not contented with what he has, would not be contented with what he would like to have.", source: "Socrates" }
  ],

  time: [
    { text: "Which of you by taking thought can add one cubit unto his stature?", source: "Christ — Matthew 6:27" },
    { text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", source: "Christ — Matthew 6:34" },
    { text: "Martha, Martha, you are anxious and troubled about many things, but one thing is necessary.", source: "Christ — Luke 10:41–42" },
    { text: "No one, for the sake of the occult path, ought suddenly to change anything in the external conditions of his life. If one desires genuine results, one must have patience.", source: "Rudolf Steiner — How to Know Higher Worlds, GA 10" },
    { text: "He who consciously turns his mind, for one month, to the positive aspect of all his experiences will gradually notice a feeling creeping into him as if his skin were becoming porous on all sides.", source: "Rudolf Steiner — Guidance in Esoteric Training, GA 245" },
    { text: "Man is said to be free if he is only under the rule of his reason and not under that of animal desires.", source: "Rudolf Steiner — The Philosophy of Freedom, GA 4" },
    { text: "Of all thieves, fools are the worst; they rob you of time and temper.", source: "Goethe" },
    { text: "Hell begins the day that God grants you the vision to see all that you could have done, should have done, and would have done, but did not do.", source: "Goethe" },
    { text: "Waste not a day in vain digression; with resolute, courageous trust seek every possible impression and make it firmly your possession.", source: "Goethe" },
    { text: "Beware the barrenness of a busy life.", source: "Socrates" },
    { text: "I am not yet able, as the Delphic inscription has it, to know myself; so it seems to me ridiculous, when I do not yet know that, to investigate irrelevant things.", source: "Socrates — Phaedrus" },
    { text: "They are not only idle who do nothing, but they are idle also who might be better employed.", source: "Socrates" }
  ],

  proximity: [
    { text: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.", source: "Christ — Matthew 4:4" },
    { text: "What doth it profit a man to gain the whole world and lose his own soul?", source: "Christ — Mark 8:36" },
    { text: "Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it.", source: "Christ — Matthew 7:13" },
    { text: "What is absolutely fundamental to the will in ordinary life is that it arises out of desire. The crudest form of desire is hunger.", source: "Rudolf Steiner — Thinking and Willing as Two Poles, GA 205" },
    { text: "Man is impelled by desire when descending to earthly incarnation. The end and aim is that he shall learn. But in order that man may learn on the Earth, he must be allured by enjoyment.", source: "Rudolf Steiner — Esoteric Cosmology, GA 94" },
    { text: "Duty must in many cases stand higher than health, often, even, than life itself; but pleasure must never stand higher.", source: "Rudolf Steiner — How to Know Higher Worlds, GA 10" },
    { text: "Are we to say that some men, though thirsty, refuse to drink? We are indeed, many and often. There is something in the soul that bids them to drink and a something that forbids — a different something that masters that which bids.", source: "Plato — Republic, IV.439b" },
    { text: "The charioteer represents man's reason. The black horse represents man's appetites — from it stems our drive for pleasure, security, and comfort. Without the charioteer, the soul cannot ascend.", source: "Plato — Phaedrus, Allegory of the Chariot" },
    { text: "A man sees in the world what he carries in his heart.", source: "Goethe — Faust" },
    { text: "One that would have the fruit must climb the tree.", source: "Goethe" },
    { text: "In childhood be modest, in youth temperate, in adulthood just, and in old age prudent.", source: "Socrates" },
    { text: "Know thyself.", source: "The Delphic Oracle, carried by Socrates" }
  ],

  money: [
    { text: "No man can serve two masters: for either he will hate the one and love the other, or else he will hold to the one and despise the other. Ye cannot serve God and mammon.", source: "Christ — Matthew 6:24" },
    { text: "It is easier for a camel to go through the eye of a needle than for a rich man to enter the kingdom of God.", source: "Christ — Matthew 19:24" },
    { text: "For where your treasure is, there will your heart be also.", source: "Christ — Matthew 6:21" },
    { text: "Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal.", source: "Christ — Matthew 6:19" },
    { text: "The passage through the astral world after death is a purification whereby the soul learns to forego all taste for physical pleasures.", source: "Rudolf Steiner — Esoteric Cosmology, GA 94" },
    { text: "Ahriman works in such a way that he continually fills in what is hollowed out. He is the indefatigable refiller.", source: "Rudolf Steiner — Thinking and Willing, GA 205" },
    { text: "The appetitive part of the soul merely desires and has no external goal, plan, or limit. While it may be an effective servant for the whole soul, it makes the most dangerous master.", source: "Plato — Republic" },
    { text: "A soul ruled by the appetitive part is inconstant and dangerous because each desire dominates the entire soul without limit.", source: "Plato — Republic" },
    { text: "He who cannot command himself must obey.", source: "Goethe" },
    { text: "None are so hopelessly enslaved as those who falsely believe they are free.", source: "Goethe" },
    { text: "He who is not contented with what he has, would not be contented with what he would like to have.", source: "Socrates" },
    { text: "How many are the things I can do without!", source: "Socrates" }
  ]
};

// ============================================================
// TEA NOTES — One-line annotations per tea variety
// ============================================================

export const TEA_NOTES = {
  "Ginger Turmeric": "Warming. Ignites the digestive fire. Best on Mars, Sun, Saturn.",
  "Lemon Ginger": "Warming, stimulating. Mercury and Venus mornings.",
  "Fennel": "Digestive calm. Supports the lungs — Mercury's organ.",
  "Lemon Balm": "Cooling, reflective. Moon and Mercury days.",
  "Tulsi Trio": "Adaptogen. Balances cortisol. Every day.",
  "Calendula": "Gentle, solar. Heals the etheric. Sun and Moon evenings.",
  "Dandelion Root": "Liver detox. Jupiter and Saturn — the organs of expansion and structure.",
  "Dandelion Leaf": "Kidney support. Venus and Mars evenings.",
  "Nettle": "Iron and blood-building. Strongest on Mars.",
  "Chamomile": "Calming, solar warmth. Sunday evenings."
};

// ============================================================
// SUPPLEMENT NOTES — Annotations with timing
// ============================================================

export const SUPPLEMENT_NOTES = {
  ginseng: {
    name: "Asian Ginseng",
    timing: "With Meal 1 (noon)",
    annotation: "Adaptogen. Qi and vitality. Strongest on Mars. Cycle: 6 weeks on, 2 off.",
    cycle: { onWeeks: 6, offWeeks: 2 }
  },
  boswellia: {
    name: "Boswellia",
    timing: "Morning (empty stomach OK)",
    annotation: "Anti-inflammatory. Joint and tissue repair. Double on Saturn."
  },
  hawthorn: {
    name: "Hawthorn Berry",
    timing: "Morning (empty stomach OK)",
    annotation: "Heart tonic. Cardiovascular. Strongest on Sun and Jupiter."
  },
  milkThistle: {
    name: "Milk Thistle Dandelion",
    timing: "With Meal 1 (noon)",
    annotation: "Liver cleanse. 2–3x/week. Thursday and Saturday."
  },
  nettle: {
    name: "Nettle (Freeze-Dried)",
    timing: "With Meal 1 (noon)",
    annotation: "Iron, hormones, blood-building. Strongest on Mars."
  }
};

// ============================================================
// GINSENG CYCLE TRACKER
// 6 weeks on, 2 weeks off = 8-week cycle
// ============================================================

export function getGinsengCycleWeek() {
  const startKey = "ginseng-cycle-start";
  let startStr;
  try { startStr = localStorage.getItem(startKey); } catch(e) {}

  const now = new Date();
  now.setHours(0,0,0,0);

  if (!startStr) {
    // Initialize cycle start to today
    try { localStorage.setItem(startKey, now.toISOString()); } catch(e) {}
    return { week: 1, phase: "on", display: "Week 1 of 6 — ON" };
  }

  const start = new Date(startStr);
  start.setHours(0,0,0,0);
  const daysSinceStart = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const totalCycleDays = 8 * 7; // 56 days
  const dayInCycle = daysSinceStart % totalCycleDays;
  const weekInCycle = Math.floor(dayInCycle / 7) + 1; // 1–8

  // Auto-reset: if we've completed a full cycle, reset the start date
  if (daysSinceStart >= totalCycleDays) {
    const cyclesCompleted = Math.floor(daysSinceStart / totalCycleDays);
    const newStart = new Date(start.getTime() + cyclesCompleted * totalCycleDays * 24 * 60 * 60 * 1000);
    try { localStorage.setItem(startKey, newStart.toISOString()); } catch(e) {}
  }

  if (weekInCycle <= 6) {
    return { week: weekInCycle, phase: "on", display: `Week ${weekInCycle} of 6 — ON` };
  } else {
    const offWeek = weekInCycle - 6;
    return { week: offWeek, phase: "off", display: `Week ${offWeek} of 2 — OFF` };
  }
}

export function resetGinsengCycle() {
  const now = new Date();
  now.setHours(0,0,0,0);
  try { localStorage.setItem("ginseng-cycle-start", now.toISOString()); } catch(e) {}
}

// ============================================================
// NOURISH LOG — Accountability tracking
// ============================================================

export function getNourishLog() {
  try {
    const raw = localStorage.getItem("cosmic-nourish-log");
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

export function appendNourishLog(event) {
  const log = getNourishLog();
  const now = new Date();
  log.push({
    date: `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`,
    time: `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`,
    dayIndex: now.getDay(),
    planet: ["Sun","Moon","Mars","Mercury","Jupiter","Venus","Saturn"][now.getDay()],
    entryType: event.entryType || null,     // home | eating_out | quick | social | struggle
    pattern: event.pattern || null,          // convenience | time | proximity | money
    choice: event.choice || null,            // cook | compromise | gave_in
    verseIndex: event.verseIndex ?? null     // which verse was shown
  });
  try { localStorage.setItem("cosmic-nourish-log", JSON.stringify(log)); } catch(e) {}
}

// ============================================================
// INTERVENTION FLOW — Verse selection helper
// Cycles by date so the same day always shows the same verse
// ============================================================

export function getInterventionVerse(pattern, dateKey) {
  const verses = INTERVENTION_VERSES[pattern];
  if (!verses || !verses.length) return null;
  // Simple hash from dateKey string
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = ((hash << 5) - hash) + dateKey.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % verses.length;
  return { ...verses[index], index };
}

// ============================================================
// INTERVENTION FLOW — Entry type messages
// ============================================================

export const INTERVENTION_MESSAGES = {
  home: {
    label: "I'm cooking at home.",
    message: "You are doing the work. Let the planet guide your hands.",
    logType: "home"
  },
  eating_out: {
    label: "I'm about to eat out.",
    message: "Filter the menu through today's planetary lens. Seek what aligns.",
    logType: "eating_out"
  },
  quick: {
    label: "I'm grabbing something quick.",
    message: "A conscious compromise is not a failure. Let the planet guide your choice.",
    logType: "quick"
  },
  social: {
    label: "I'm at a gathering or with others.",
    message: "The shared meal carries etheric forces that eating alone does not. Be present. Choose the closest thing to today's alignment and release the rest.",
    logType: "social"
  },
  struggle: {
    label: "I'm struggling — the pull is strong.",
    message: null, // Deep path — goes to pattern selection
    logType: "struggle"
  }
};

// ============================================================
// PATTERN LABELS — For the struggle path
// ============================================================

export const PATTERN_LABELS = {
  convenience: { label: "I don't feel like cooking.", subtitle: "Convenience — The Will Asleep" },
  time: { label: "I'm telling myself I don't have time.", subtitle: "Time — The Self-Deception" },
  proximity: { label: "It's right here, why not.", subtitle: "Proximity — The Ahrimanic Pull" },
  money: { label: "I have the money, I'll just spend it.", subtitle: "Money — Desire Meeting Means" }
};

// ============================================================
// CHOICE LABELS — For the struggle path resolution
// ============================================================

export const CHOICE_LABELS = {
  cook: { label: "I'm going to cook.", logChoice: "cook" },
  compromise: { label: "I'm making a conscious compromise.", logChoice: "compromise" },
  gave_in: { label: "I'm giving in. I know it.", logChoice: "gave_in" }
};
