// CALENDAR OF THE SOUL — GA 40
// Ruth & Hans Pusch Translation
// Source: rsarchive.org/Articles/GA040/English/AP1982/COTS_Pusch.html
// Corresponding verse formula: 53 - N
// Week 1 begins at Easter (Northern Hemisphere)

export const EASTER_DATES = [
  new Date(2025, 3, 20), // April 20, 2025
  new Date(2026, 3, 5),  // April 5, 2026
  new Date(2027, 2, 28), // March 28, 2027
  new Date(2028, 3, 16), // April 16, 2028
  new Date(2029, 3, 1),  // April 1, 2029
  new Date(2030, 3, 13), // April 13, 2030
];

export function getCalendarWeek() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Find the most recent past Easter
  let pastEaster = null;
  let nextEaster = null;

  for (let i = 0; i < EASTER_DATES.length; i++) {
    const e = new Date(EASTER_DATES[i]);
    e.setHours(0, 0, 0, 0);
    if (e <= today) {
      pastEaster = e;
      if (i + 1 < EASTER_DATES.length) {
        nextEaster = new Date(EASTER_DATES[i + 1]);
        nextEaster.setHours(0, 0, 0, 0);
      }
    }
  }

  if (!pastEaster || !nextEaster) return 1; // fallback

  const daysSinceEaster = Math.floor((today - pastEaster) / (1000 * 60 * 60 * 24));
  const daysBetweenEasters = Math.floor((nextEaster - pastEaster) / (1000 * 60 * 60 * 24));
  const periodLength = daysBetweenEasters / 52;
  const week = Math.floor(daysSinceEaster / periodLength) + 1;

  return Math.max(1, Math.min(52, week));
}

export const CALENDAR_OF_THE_SOUL = [
  {
    week: 1,
    verse: "When out of world-wide spaces\nThe sun speaks to the human mind,\nAnd gladness from the depths of soul\nBecomes, in seeing, one with light,\nThen rising from the sheath of self,\nThoughts soar to distances of space\nAnd dimly bind\nThe human being to the spirit's life.",
    corresponding: 52
  },
  {
    week: 2,
    verse: "Out in the sense-world's glory\nThe power of thought gives up its separate being,\nAnd spirit worlds discover\nAgain their human offspring,\nWho germinates in them\nBut in itself must find\nThe fruit of soul.",
    corresponding: 51
  },
  {
    week: 3,
    verse: "Thus to the World-All speaks,\nIn self-forgetfulness\nAnd mindful of its primal state,\nThe growing human I:\nIn you, if I can free myself\nFrom fetters of my selfhood,\nI fathom my essential being.",
    corresponding: 50
  },
  {
    week: 4,
    verse: "I sense a kindred nature to my own:\nThus speaks perceptive feeling\nAs in the sun-illuminated world\nIt merges with the floods of light;\nTo thinking's clarity\nMy feeling would give warmth\nAnd firmly bind as one\nThe human being and the world.",
    corresponding: 49
  },
  {
    week: 5,
    verse: "Within the light that out of spirit depths\nWeaves germinating power into space\nAnd manifests the gods' creative work:\nWithin its shine, the soul's true being\nIs widened into worldwide life\nAnd resurrected\nFrom narrow selfhood's inner power.",
    corresponding: 48
  },
  {
    week: 6,
    verse: "There has arisen from its narrow limits\nMy self and finds itself\nAs revelation of all worlds\nWithin the sway of time and space;\nThe world, as archetype divine,\nDisplays to me at every turn\nThe truth of my own likeness.",
    corresponding: 47
  },
  {
    week: 7,
    verse: "My self is threatening to fly forth,\nLured strongly by the world's enticing light.\nCome forth, prophetic feeling,\nTake up with strength your rightful task:\nReplace in me the power of thought\nWhich in the senses' glory\nWould gladly lose itself.",
    corresponding: 46
  },
  {
    week: 8,
    verse: "The senses' might grows strong\nUnited with the gods' creative work;\nIt presses down my power of thinking\nInto a dreamlike dullness.\nWhen godly being\nDesires union with my soul,\nMust human thinking\nIn quiet dream-life rest content.",
    corresponding: 45
  },
  {
    week: 9,
    verse: "When I forget the narrow will of self,\nThe cosmic warmth that heralds summer's glory\nFills all my soul and spirit;\nTo lose myself in light\nIs the command of spirit vision\nAnd intuition tells me strongly:\nO lose yourself to find yourself.",
    corresponding: 44
  },
  {
    week: 10,
    verse: "To summer's radiant heights\nThe sun in shining majesty ascends;\nIt takes my human feeling\nInto its own wide realms of space.\nWithin my inner being stirs\nPresentiment which heralds dimly,\nYou shall in future know:\nA godly being now has touched you.",
    corresponding: 43
  },
  {
    week: 11,
    verse: "In this the sun's high hour it rests\nWith you to understand these words of wisdom:\nSurrender to the beauty of the world,\nBe stirred with new-enlivened feeling;\nThe human I can lose itself\nAnd find itself within the cosmic I.",
    corresponding: 42
  },
  {
    week: 12,
    verse: "The radiant beauty of the world\nCompels my inmost soul to free\nGod-given powers of my nature\nThat they may soar into the cosmos,\nTo take wing from myself\nAnd trustingly to seek myself\nIn cosmic light and cosmic warmth.",
    corresponding: 41
  },
  {
    week: 13,
    verse: "And when I live in senses' heights,\nThere flames up deep within my soul\nOut of the spirit's fiery worlds\nThe gods' own word of truth:\nIn spirit sources seek expectantly\nTo find your spirit kinship.",
    corresponding: 40
  },
  {
    week: 14,
    verse: "Surrendering to senses' revelation\nI lost the drive of my own being,\nAnd dreamlike thinking seemed\nTo daze and rob me of myself.\nYet quickening there draws near\nIn sense appearance cosmic thinking.",
    corresponding: 39
  },
  {
    week: 15,
    verse: "I feel enchanted weaving\nOf spirit within outer glory.\nIn dullness of the senses\nIt has enwrapt my being\nIn order to bestow the strength\nWhich in its narrow bounds my I\nIs powerless to give itself.",
    corresponding: 38
  },
  {
    week: 16,
    verse: "To bear in inward keeping spirit bounty\nIs stern command of my prophetic feeling,\nThat ripened gifts divine\nMaturing in the depths of soul\nTo selfhood bring their fruits.",
    corresponding: 37
  },
  {
    week: 17,
    verse: "Thus speaks the cosmic Word\nThat I by grace through senses' portals\nHave led into my innermost soul:\nImbue your spirit depths\nWith my wide world horizons\nTo find in future time myself in you.",
    corresponding: 36
  },
  {
    week: 18,
    verse: "Can I expand my soul\nThat it unites itself\nWith cosmic Word received as seed?\nI sense that I must find the strength\nTo fashion worthily my soul\nAs fitting raiment for the spirit.",
    corresponding: 35
  },
  {
    week: 19,
    verse: "In secret to encompass now\nWith memory what I've newly got\nShall be my striving's further aim:\nThus, ever strengthening, selfhood's forces\nShall be awakened from within\nAnd growing, give me to myself.",
    corresponding: 34
  },
  {
    week: 20,
    verse: "I feel at last my life's reality\nWhich, severed from the world's existence,\nWould in itself obliterate itself,\nAnd building only on its own foundation,\nWould in itself bring death upon itself.",
    corresponding: 33
  },
  {
    week: 21,
    verse: "I feel strange power, bearing fruit\nAnd gaining strength to give myself to me.\nI sense the seed maturing\nAnd expectation, light-filled, weaving\nWithin me on my selfhood's power.",
    corresponding: 32
  },
  {
    week: 22,
    verse: "The light from world-wide spaces\nWorks on within with living power;\nTransformed to light of soul\nIt shines into the spirit depths\nTo bring to birth the fruits\nWhereby out of the self of worlds\nThe human self in course of time shall ripen.",
    corresponding: 31
  },
  {
    week: 23,
    verse: "There dims in damp autumnal air\nThe senses' luring magic;\nThe light's revealing radiance\nIs dulled by hazy veils of mist.\nIn distances around me I can see\nThe autumn's winter sleep;\nThe summer's life has yielded\nItself into my keeping.",
    corresponding: 30
  },
  {
    week: 24,
    verse: "Unceasingly itself creating\nSoul life becomes aware of self;\nThe cosmic spirit, striving on,\nRenews itself by self-cognition,\nAnd from the darkness of the soul\nCreates the fruit of self-engendered will.",
    corresponding: 29
  },
  {
    week: 25,
    verse: "I can belong now to myself\nAnd shining spread my inner light\nInto the dark of space and time.\nToward sleep is urging all creation,\nBut inmost soul must stay awake\nAnd carry wakefully sun's glowing\nInto the winter's icy flowing.",
    corresponding: 28
  },
  {
    week: 26,
    verse: "O Nature, your maternal life\nI bear within the essence of my will.\nAnd my will's fiery energy\nShall steel my spirit striving,\nThat sense of self springs forth from it\nTo hold me in myself.",
    corresponding: 27
  },
  {
    week: 27,
    verse: "When to my being's depths I penetrate,\nThere stirs expectant longing\nThat self-observing, I may find myself\nAs gift of summer sun, a seed\nThat warming lives in autumn mood\nAs germinating force of soul.",
    corresponding: 26
  },
  {
    week: 28,
    verse: "I can, in newly quickened inner life,\nSense wide horizons in myself.\nThe force and radiance of my thought —\nComing from soul's sun power —\nCan solve the mysteries of life,\nAnd grant fulfillment now to wishes\nWhose wings have long been lamed by hope.",
    corresponding: 25
  },
  {
    week: 29,
    verse: "To fan the spark of thinking into flame\nBy my own strong endeavor,\nTo read life's inner meaning\nOut of the cosmic spirit's fount of strength:\nThis is my summer heritage,\nMy autumn solace, and my winter hope.",
    corresponding: 24
  },
  {
    week: 30,
    verse: "There flourish in the sunlight of my soul\nThe ripened fruits of thinking;\nTo conscious self-assurance\nThe flow of feeling is transformed.\nI can perceive now joyfully\nThe autumn's spirit-waking:\nThe winter will arouse in me\nThe summer of the soul.",
    corresponding: 23
  },
  {
    week: 31,
    verse: "The light from spirit depths\nStrives to ray outwards, sun-imbued;\nTransformed to forceful will of life\nIt shines into the senses' dullness\nTo bring to birth the powers\nWhereby creative forces, soul-impelled,\nShall ripen into human deeds.",
    corresponding: 22
  },
  {
    week: 32,
    verse: "I feel my own force, bearing fruit\nAnd gaining strength to give me to the world.\nMy inmost being I feel charged with power\nTo turn with clearer insight\nToward the weaving of life's destiny.",
    corresponding: 21
  },
  {
    week: 33,
    verse: "I feel at last the world's reality\nWhich, lacking the communion of my soul,\nWould in itself be frosty, empty life,\nAnd showing itself powerless\nTo recreate itself in souls,\nWould in itself find only death.",
    corresponding: 20
  },
  {
    week: 34,
    verse: "In secret inwardly to feel\nHow all that I've preserved of old\nIs quickened by new-risen sense of self:\nThis shall, awakening, pour forth cosmic forces\nInto the outer actions of my life\nAnd growing, mould me into true existence.",
    corresponding: 19
  },
  {
    week: 35,
    verse: "Can I know life's reality\nSo that it's found again\nWithin my soul's creative urge?\nI feel that I am granted power\nTo make my self, as humble part,\nAt home within the cosmic self.",
    corresponding: 18
  },
  {
    week: 36,
    verse: "Within my being's depths there speaks,\nIntent on revelation,\nThe cosmic Word mysteriously:\nImbue your labor's aims\nWith my bright spirit light\nTo sacrifice yourself through me.",
    corresponding: 17
  },
  {
    week: 37,
    verse: "To carry spirit light into world-winter-night\nMy heart is ardently impelled,\nThat shining seeds of soul\nTake root in grounds of worlds\nAnd Word Divine through senses' darkness\nResounds, transfiguring all life.",
    corresponding: 16
  },
  {
    week: 38,
    verse: "The spirit child within my soul\nI feel freed of enchantment.\nIn heart-high gladness has\nThe holy cosmic Word engendered\nThe heavenly fruit of hope,\nWhich grows rejoicing into worlds afar\nOut of my being's godly roots.",
    corresponding: 15
  },
  {
    week: 39,
    verse: "Surrendering to spirit revelation\nI gain the light of cosmic being;\nThe power of thinking, growing clearer,\nGains strength to give myself to me,\nAnd quickening there frees itself\nFrom thinker's energy my sense of self.",
    corresponding: 14
  },
  {
    week: 40,
    verse: "And when I live in spirit depths\nAnd dwell within my soul's foundations,\nThere streams from love-worlds of the heart,\nTo fill the vain delusion of the self,\nThe fiery power of the cosmic Word.",
    corresponding: 13
  },
  {
    week: 41,
    verse: "The soul's creative might\nStrives outward from the heart's own core\nTo kindle and inflame god-given powers\nIn human life to right activity;\nThe soul thus shapes itself\nIn human loving and in human working.",
    corresponding: 12
  },
  {
    week: 42,
    verse: "In this the shrouding gloom of winter\nThe soul feels ardently impelled\nTo manifest its innate strength,\nTo guide itself to realms of darkness,\nAnticipating thus\nThrough warmth of heart the sense-world's revelation.",
    corresponding: 11
  },
  {
    week: 43,
    verse: "In winter's depths is kindled\nTrue spirit life with glowing warmth;\nIt gives to world appearance,\nThrough forces of the heart, the power to be.\nGrown strong, the human soul defies\nWith inner fire the coldness of the world.",
    corresponding: 10
  },
  {
    week: 44,
    verse: "In reaching for new sense attractions,\nSoul-clarity would fill,\nMindful of spirit-birth attained,\nThe world's bewildering, sprouting growth\nWith the creative will of my own thinking.",
    corresponding: 9
  },
  {
    week: 45,
    verse: "My power of thought grows firm\nUnited with the spirit's birth.\nIt lifts the senses' dull attractions\nTo bright-lit clarity.\nWhen soul-abundance\nDesires union with the world's becoming,\nMust senses' revelation\nReceive the light of thinking.",
    corresponding: 8
  },
  {
    week: 46,
    verse: "The world is threatening to stun\nThe inborn forces of my soul;\nNow, memory, come forth\nFrom spirit depths, enkindling light;\nInvigorate my inward sight\nWhich only by the strength of will\nIs able to sustain itself.",
    corresponding: 7
  },
  {
    week: 47,
    verse: "There will arise out of the world's great womb,\nQuickening the senses' life, the joy of growth.\nNow may it find my strength of thought\nWell armed by powers divine\nWhich strongly live within my being.",
    corresponding: 6
  },
  {
    week: 48,
    verse: "Within the light that out of world-wide heights\nWould stream with power toward the soul,\nMay certainty of cosmic thinking\nArise to solve the soul's enigmas —\nAnd focusing its mighty rays,\nAwaken love in human hearts.",
    corresponding: 5
  },
  {
    week: 49,
    verse: "I feel the force of cosmic life:\nThus speaks my clarity of thought,\nRecalling its own spirit growth\nThrough nights of cosmic darkness,\nAnd to the new approach of cosmic day\nIt turns its inward rays of hope.",
    corresponding: 4
  },
  {
    week: 50,
    verse: "Thus to the human ego speaks\nIn mighty revelation,\nUnfolding its inherent powers,\nThe joy of growth throughout the world:\nI carry into you my life\nFrom its enchanted bondage\nAnd so attain my truest goal.",
    corresponding: 3
  },
  {
    week: 51,
    verse: "Into our inner being\nThe riches of the senses pour.\nThe Cosmic Spirit finds itself\nReflected in the human eye,\nWhich ever must renew its strength\nFrom out that spirit source.",
    corresponding: 2
  },
  {
    week: 52,
    verse: "When from the depths of soul\nThe spirit turns to the life of worlds\nAnd beauty wells from wide expanses,\nThen out of heaven's distances\nStreams life-strength into human bodies,\nUniting by its mighty energy\nThe spirit's being with our human life.",
    corresponding: 1
  }
];
