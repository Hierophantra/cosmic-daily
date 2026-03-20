# CLAUDE.md — Cosmic Daily PWA

## Overview
A Progressive Web App (PWA) serving as a cosmic/planetary-aligned daily companion. Five integrated life domains unified by planetary day alignment rooted in Anthroposophical (Rudolf Steiner) frameworks. Built with Vite + React.

## Tech Stack
- **Vite** — build tool and dev server
- **React** — component-based UI
- **JavaScript/JSX** — no TypeScript
- **localStorage** — persistence layer (tracker, logs, ginseng cycle)
- **Service Worker** — offline/PWA capability
- **Deployed to GitHub Pages** via `dist/` folder

### Common Commands
```bash
npm run dev        # Start local dev server with hot reload
npm run build      # Production build to dist/
npm run preview    # Preview the production build locally
```

## Architecture

### Hub Structure
- **Shared Cosmic Header** — persistent across all pages. Shows: current date, planetary ruler, planet symbol/color, Calendar of the Soul verse for the current week. Never re-renders on page swap.
- **Three Swappable Pages** — Practice, Nourish, Training. Navigation via three tab buttons below the header.
- **Review** — cross-cutting concern, not a fourth page. Log-as-you-go accountability within each domain.
- **State Management** — top-level state: `activePage` ("practice" | "nourish" | "training"). Each page manages its own sub-states internally via useState/useReducer.

### Proposed Component Tree
```
App.jsx
├── CosmicHeader.jsx          (persistent — date, planet, CotS verse)
├── PageNav.jsx                (three tab buttons)
├── PracticePage.jsx
│   ├── CalendarVerse.jsx      (weekly Calendar of the Soul)
│   ├── ExerciseCard.jsx       (today's six-exercise content)
│   ├── MorningSeed.jsx
│   ├── StudyFragment.jsx
│   ├── MiddayCheckpoint.jsx
│   ├── EveningDeepening.jsx
│   └── DailyChecklist.jsx     (study + Rückschau checkboxes)
├── NourishPage.jsx
│   ├── PlanetaryFoodCard.jsx  (persistent within nourish page)
│   ├── InterventionFlow.jsx   (5 sub-screens)
│   ├── TeaProtocol.jsx
│   ├── SupplementChecklist.jsx (with Ginseng badge)
│   └── NourishLog.jsx         (weekly summary, patterns, correlations)
└── TrainingPage.jsx
    ├── WorkoutHeader.jsx
    ├── ExerciseSection.jsx    (reusable: warmup, skill, main, cardio)
    ├── TierSelector.jsx       (Full / 45 / 30 / 20 min)
    ├── StretchProtocol.jsx    (post-training + evening)
    ├── SkillProgressions.jsx
    └── TravelMode.jsx
```

### File Structure
```
cosmic-daily-app/
├── CLAUDE.md
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
├── src/
│   ├── main.jsx               (entry point)
│   ├── App.jsx                 (hub: header + nav + page router)
│   ├── App.css                 (global styles + CSS variables)
│   ├── components/
│   │   ├── CosmicHeader.jsx
│   │   ├── PageNav.jsx
│   │   ├── practice/
│   │   │   ├── PracticePage.jsx
│   │   │   ├── CalendarVerse.jsx
│   │   │   ├── ExerciseCard.jsx
│   │   │   ├── MorningSeed.jsx
│   │   │   ├── StudyFragment.jsx
│   │   │   ├── MiddayCheckpoint.jsx
│   │   │   ├── EveningDeepening.jsx
│   │   │   └── DailyChecklist.jsx
│   │   ├── nourish/
│   │   │   ├── NourishPage.jsx
│   │   │   ├── PlanetaryFoodCard.jsx
│   │   │   ├── InterventionFlow.jsx
│   │   │   ├── TeaProtocol.jsx
│   │   │   ├── SupplementChecklist.jsx
│   │   │   └── NourishLog.jsx
│   │   └── training/
│   │       ├── TrainingPage.jsx
│   │       ├── WorkoutHeader.jsx
│   │       ├── ExerciseSection.jsx
│   │       ├── TierSelector.jsx
│   │       ├── StretchProtocol.jsx
│   │       ├── SkillProgressions.jsx
│   │       └── TravelMode.jsx
│   ├── data/
│   │   ├── calendar_of_the_soul.js
│   │   ├── practice_exercises.js       (transcribed from practice_domain_data.md)
│   │   ├── practice_domain_data.md     (reference — source text for practice_exercises.js)
│   │   ├── training_data_model.js
│   │   ├── nourishment_data_model.js
│   │   ├── planetary_days.js           (extracted from cosmic.html)
│   │   └── quotes.js                   (extracted from cosmic.html)
│   ├── utils/
│   │   ├── dateHelpers.js              (getCalendarWeek, getDayIndex, getDateKey, etc.)
│   │   ├── storageHelpers.js           (getNourishLog, appendNourishLog, tracker read/write)
│   │   └── ginsengCycle.js             (getGinsengCycleWeek, resetGinsengCycle)
│   └── styles/
│       ├── variables.css               (planetary colors, typography, spacing)
│       ├── header.css
│       ├── practice.css
│       ├── nourish.css
│       └── training.css
└── cosmic.html                         (reference only — old working app)
```

## Data Files

### `src/data/calendar_of_the_soul.js`
- `CALENDAR_OF_THE_SOUL` — array of 52 objects: `{ week, verse, corresponding }`
- `EASTER_DATES` — array of Date objects through 2030
- `getCalendarWeek()` — returns current week number (1-52) based on Easter

### `src/data/practice_domain_data.md`
- Reference document (not code). Contains all composed text for the Practice domain.
- Seven days, each with: `morningSeed[4]`, `middayCheckpoint[3]`, `eveningDeepening[3]`, `studyFragment[4]`
- Must be transcribed into `src/data/practice_exercises.js` as a JS constant `EXERCISES` keyed by dayIndex (0=Sunday through 6=Saturday)
- Cycling logic: morningSeed by `weekNumber % 4`, middayCheckpoint by `dateOfMonth % 3`, eveningDeepening by `dateOfMonth % 3`, studyFragment by `weekNumber % 4`

### `src/data/training_data_model.js`
- `TRAINING_DAYS` — keyed by dayIndex. Each day: warmup[], skill[], main[], cardio{}
- `CONDENSED` — 20/30/45 min tiers for pull, push, legs
- `TRAVEL_PROTOCOL` — bodyweight-only routine
- `STRETCHING` — postTraining (pull/push/legs) + evening
- `SKILL_PROGRESSIONS` — 7 gymnastic skills with phase timelines
- `TRAINING_PRINCIPLES` — 9 foundational rules
- Helper functions: `getStretchCategory()`, `getTrainingType()`

### `src/data/nourishment_data_model.js`
- `INTERVENTION_VERSES` — 4 patterns x 12 verses = 48 total
- `TEA_NOTES` — per-tea annotations
- `SUPPLEMENT_NOTES` — per-supplement with timing
- `INTERVENTION_MESSAGES` — entry type labels for the flow
- `PATTERN_LABELS` — struggle path labels
- `CHOICE_LABELS` — resolution labels
- `getInterventionVerse(pattern, dateKey)`

### `src/data/planetary_days.js` (extract from cosmic.html)
- `PLANETARY_DAYS` — existing data from the current app (morningTea, afternoonTea, eveningTea, herbs, keyFoods, supplements, note, etc.)
- `QUOTES` — motivational quotes array
- `SUPPLEMENTS` — supplement checklist array
- These are PRESERVED from the current cosmic.html — extract them exactly as-is.

### `cosmic.html` (reference only)
- The current working PWA. Contains the existing PLANETARY_DAYS, QUOTES, SUPPLEMENTS data and the old UI.
- Extract data constants from here into `src/data/planetary_days.js`. Do not preserve the old UI structure.

## Pages

### Practice Page
1. **Calendar of the Soul** — current week's verse displayed prominently at top
2. **Today's Exercise** — name, subtitle, icon, description, practice instructions
3. **Morning Seed** — Steiner quote cycling by week number
4. **Study Fragment** — longer Steiner passage with GA citation, cycling by week number
5. **Midday Checkpoint** — self-observation question, cycling by date
6. **Evening Deepening** — Ruckschau prompt, cycling by date
7. **20-minute Study Checkbox** — simple toggle, persisted by date key in localStorage
8. **Ruckschau Checkbox** — simple toggle, persisted by date key in localStorage

### Nourish Page
1. **Planetary Food Card** — persistent at top. Shows today's planet, element, organ, key foods, character. Persists across all Intervention Flow sub-screens.
2. **"Nourish" Button** — triggers Intervention Flow
3. **Intervention Flow** — 5 sub-screens: Entry, Pattern (struggle only), Verse (struggle only), Choice (struggle only), Confirmation. Light paths (home, eating_out, quick, social) skip from Entry directly to Confirmation.
4. **Tea Protocol** — consolidated view: morning, afternoon, evening teas for today. Evening group visually distinct as ritual closing.
5. **Herbs and Supplements** — checklist with timing annotations ("empty stomach" vs "with meal"). Ginseng cycle badge shows "Week X of 6 — ON" or "Week X of 2 — OFF".
6. **View Log** — weekly summary, pattern frequency (trailing 30 days), planetary correlation (which days trigger most struggles).

### Training Page
1. **Today's Workout Header** — day name (PULL A, PUSH B, etc.), planet, theme, focus
2. **Warm-Up** — expandable/collapsible list of warmup exercises with sets, reps, notes
3. **Skill Work** — expandable list (if applicable for the day; empty on Sat/Sun)
4. **Main Work** — full exercise list with sets, reps, rest, notes
5. **Cardio** — today's cardio prescription with duration and zone
6. **Condensed Tier Selector** — toggle between Full / 45 / 30 / 20 min. When a condensed tier is selected, show that tier's exercises instead of the full list.
7. **Post-Training Stretch** — targeted to today's training type (pull/push/legs)
8. **Evening Stretch** — the deep structural routine (shown on all training days, also accessible from Sunday)
9. **Skill Progressions** — collapsible view of all 7 gymnastic skill timelines with current level and phases
10. **Travel Mode Toggle** — switches entire page to the no-equipment protocol

## Design Intent
- Dark cosmic aesthetic. Deep navy/charcoal backgrounds (#0a0a1a base), gold/amber accents for Sun, silver for Moon, planetary colors per day.
- Typography: serif for spiritual content (verses, seeds, quotes) — use something like Cormorant Garamond or Crimson Text via Google Fonts. Clean sans-serif for data/exercises — use something like Outfit, Manrope, or Source Sans.
- Minimal ornamentation. The content IS the beauty. Dense information, presented with reverence.
- Mobile-first. This is a phone app used at 6am and 10pm. Touch targets minimum 44px.
- No emojis in spiritual content. Unicode planetary symbols only: ☉ ☽ ♂ ☿ ♃ ♀ ♄
- Sections should be collapsible/expandable to manage density on mobile.
- Smooth transitions between pages (no jarring re-renders).

## Planetary Color Palette (CSS Variables)
```css
:root {
  --bg-primary: #0a0a1a;
  --bg-card: #12122a;
  --bg-card-hover: #1a1a3a;
  --text-primary: #e8e8f0;
  --text-secondary: #a0a0b8;
  --text-muted: #6a6a80;
  --border: #2a2a4a;

  --color-sun: #FFD700;
  --color-moon: #C0C0C0;
  --color-mars: #DC3545;
  --color-mercury: #20B2AA;
  --color-jupiter: #6F42C1;
  --color-venus: #28A745;
  --color-saturn: #6C757D;
}
```

## Important Rules

### Technical
- NEVER use localStorage for React component state. Use useState/useReducer. localStorage is for persistence only.
- All planetary day calculations use `new Date().getDay()` where Sunday=0, Monday=1, etc.
- Planetary day mapping: 0=Sun, 1=Moon, 2=Mars, 3=Mercury, 4=Jupiter, 5=Venus, 6=Saturn
- Export all data constants and utility functions as ES modules (import/export).
- Keep components focused — one responsibility per file.
- No TypeScript. Plain JSX.

### Dietary Context (for Nourish domain accuracy)
- 18:6 intermittent fasting window: 12-6 PM. Meal 1 is noon, Meal 2 (or substantial snack) is around 5 PM.
- Pescatarian. Fish is wild-caught only, no bottom feeders, no shellfish. Source: Whole Foods exclusively.
- Fish varieties: salmon, grouper, haddock, cod, snapper, walleye, canned tuna.
- Avoid: soy (except soy sauce), olive oil, avocado, oats, Greek yogurt, lentils, bananas, bone broth.
- Cook with: butter, grapeseed oil.
- Eggs tolerated when fried or mixed into dishes (e.g., tuna salad), not eaten straight.
- Supplements are natural/herbal only. Brands: Oregon's Wild Harvest, Herb Pharm.
- Ginseng cycles: 6 weeks on, 2 weeks off.

### Training Context (for Training domain accuracy)
- 6-day Push/Pull/Legs split. Sunday rest.
- Mon=Pull A, Tue=Push A (chest), Wed=Legs A, Thu=Pull B, Fri=Push B (shoulder), Sat=Legs B
- Weighted calisthenics and bodyweight. Gymnastics rings and weight vest are primary tools.
- Garage gym is home base. Currently also using a rec center.
- Longevity over maximum performance. No exercises that create unnecessary joint/bone stress (no heavy back squats, no bench press).
- Deload every 4th week: same exercises, half volume, no skill progressions.

## Build Sequence
1. Extract existing data constants from `cosmic.html` into `src/data/planetary_days.js`
2. Transcribe `practice_domain_data.md` into `src/data/practice_exercises.js`
3. Hub skeleton: CosmicHeader + PageNav + App routing
4. Practice page with all sub-components
5. Nourish page with Intervention Flow
6. Training page with tier selection and stretching
7. CSS styling pass — planetary colors, typography, dark theme
8. Service worker + manifest update for PWA
9. Test build: `npm run build` and verify `dist/` output
10. Deploy to GitHub Pages

## Deployment
The `dist/` folder produced by `npm run build` is what gets deployed to GitHub Pages. Ensure `vite.config.js` has the correct `base` path for your GitHub Pages URL (e.g., `base: '/cosmic-daily-app/'` or `base: '/'` if using a custom domain).
