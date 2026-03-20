// THE TEMPLE PRACTICE — Training Domain Data Model
// PPL × 2 | Ring-Focused | Garage Gym Phase
// Source: Temple_Practice_Training_Plan.pdf — March 2026

export const TRAINING_DAYS = {
  1: { // MONDAY — PULL A
    name: "PULL A",
    planet: "Moon",
    symbol: "☽",
    theme: "Receptivity, rhythm, inner listening",
    focus: "Front Lever Progression",
    warmup: [
      { name: "Passive Dead Hang", sets: 2, reps: "30–45 sec", notes: "Shoulder decompression. Relax into it." },
      { name: "Active Hang (scapular pulls)", sets: 2, reps: "8–10", notes: "Depress and retract scapulae from dead hang." },
      { name: "Skin the Cat (slow)", sets: 2, reps: "3–4", notes: "Full range if possible. Mobility, not workout." },
      { name: "False Grip Ring Hang", sets: 2, reps: "15–20 sec", notes: "Muscle-up grip endurance." },
      { name: "Band Pull-Aparts", sets: 2, reps: "15", notes: "Light, slow, squeeze at contraction." }
    ],
    skill: [
      { name: "Tuck Front Lever Hold", sets: 4, reps: "8–12 sec", rest: "90 sec", notes: "Progress: tuck → adv tuck → single leg → full." },
      { name: "Front Lever Raises (tuck)", sets: 3, reps: "4–6", rest: "90 sec", notes: "Inverted hang to tuck FL. Control eccentric." }
    ],
    main: [
      { num: 1, name: "Weighted Ring Chinups", sets: 4, reps: "5–8", rest: "2.5–3 min", notes: "Vest or backpack. Full dead hang to chin over." },
      { num: 2, name: "Single-Arm DB Row (bench)", sets: 3, reps: "8–10/arm", rest: "90 sec", notes: "Spares lower back vs barbell rows." },
      { num: 3, name: "Weighted Ring Rows (feet elev.)", sets: 3, reps: "8–12", rest: "90 sec", notes: "Vest/backpack. Progress toward archer rows." },
      { num: 4, name: "Ring Face Pulls", sets: 3, reps: "12–15", rest: "60 sec", notes: "Lean back, pull to face, ext. rotate at top." },
      { num: 5, name: "Barbell Curls", sets: 3, reps: "8–10", rest: "60–90 sec", notes: "Controlled. No ego swinging." },
      { num: 6, name: "EZ Bar Reverse Curls", sets: 2, reps: "12–15", rest: "60 sec", notes: "Forearm/brachioradialis. Ring grip health." },
      { num: 7, name: "Hanging Leg Raises", sets: 3, reps: "8–12", rest: "60 sec", notes: "Bar or rings. Slow the negative." }
    ],
    cardio: { name: "Weighted Vest Walk", duration: "45–60 min", zone: "Zone 2 (HR 110–128)", notes: "Moon day: receptive, rhythmic, meditative pace." }
  },

  2: { // TUESDAY — PUSH A (Chest Emphasis)
    name: "PUSH A (Chest)",
    planet: "Mars",
    symbol: "♂",
    theme: "Will-forces, courage, directed action",
    focus: "RTO + Muscle-Up Negatives",
    warmup: [
      { name: "Passive Dead Hang", sets: 2, reps: "30–45 sec", notes: "Even on push days. Daily shoulder decompression." },
      { name: "RTO Support Hold", sets: "3–4", reps: "10–15 sec", notes: "Arms straight, turn rings out. Build toward 30 sec." },
      { name: "False Grip Ring Hang", sets: 2, reps: "15–20 sec", notes: "Muscle-up prep. Every upper body day." },
      { name: "Arm Circles", sets: 2, reps: "10 each dir", notes: "" },
      { name: "Band Dislocates", sets: 2, reps: "10", notes: "" }
    ],
    skill: [
      { name: "Slow Muscle-Up Negatives", sets: 3, reps: "2–3", rest: "2 min", notes: "From support, lower SLOWLY through transition. 5-sec negative min." }
    ],
    main: [
      { num: 1, name: "Weighted Ring Dips (chest lean)", sets: 4, reps: "6–10", rest: "2.5–3 min", notes: "Lean fwd. DEEP — below parallel. Vest/backpack." },
      { num: 2, name: "Ring Flyes", sets: 2, reps: "4–6", rest: "90 sec", notes: "START CONSERVATIVE. Partial ROM. Build over 8 wks." },
      { num: 3, name: "Ring Pushups (feet on bench)", sets: 3, reps: "8–12", rest: "90 sec", notes: "RTO at top of each rep if possible." },
      { num: 4, name: "DB Lateral Raises", sets: 3, reps: "12–15", rest: "60 sec", notes: "Light, controlled, slight lean forward." },
      { num: 5, name: "Ring Tricep Extensions", sets: 3, reps: "8–12", rest: "60 sec", notes: "Face away, arms overhead, extend." },
      { num: 6, name: "Band Pallof Press", sets: 3, reps: "10/side", rest: "60 sec", notes: "Anti-rotation core. Band on rig post." }
    ],
    cardio: { name: "Bike Ride", duration: "30–45 min", zone: "Zone 2", notes: "Or moderate neighborhood walk. Hill sprints moved to Saturday or standalone." }
  },

  3: { // WEDNESDAY — LEGS A
    name: "LEGS A",
    planet: "Mercury",
    symbol: "☿",
    theme: "Movement, coordination, adaptability",
    focus: "Pistol Squat Progression",
    warmup: [
      { name: "Bodyweight Squats", sets: 2, reps: "10", notes: "Full depth." },
      { name: "Leg Swings (front + lateral)", sets: 1, reps: "10 each direction", notes: "" },
      { name: "Ankle Circles", sets: 1, reps: "10 each", notes: "" },
      { name: "TKE Band Work", sets: "2–3", reps: "15–20/leg", notes: "PATELLAR HEALTH. VMO activation before squatting." },
      { name: "90/90 Hip Switches", sets: 2, reps: "8", notes: "Hip mobility." }
    ],
    skill: [
      { name: "Pistol Squat Progression", sets: 3, reps: "3–5/leg", rest: "90 sec", notes: "Phase-appropriate. Assisted → negatives → full → weighted." }
    ],
    main: [
      { num: 1, name: "Zercher Squat", sets: 4, reps: "6–10", rest: "2.5–3 min", notes: "Barbell in elbow crooks. No spinal compression." },
      { num: 2, name: "Bulgarian Split Squats", sets: 3, reps: "8–10/leg", rest: "90 sec/leg", notes: "EVERY LEG DAY. DBs or vest for load." },
      { num: 3, name: "Nordic Curl (band-assisted)", sets: 3, reps: "4–8", rest: "90 sec", notes: "Slow eccentric: 4–5 sec down. Tendon builder." },
      { num: 4, name: "Weighted Glute Bridge", sets: 3, reps: "12–15", rest: "60 sec", notes: "Barbell across hips." },
      { num: 5, name: "Calf Raises (weighted)", sets: 3, reps: "15–20", rest: "45–60 sec", notes: "Slow eccentric, full stretch at bottom." },
      { num: 6, name: "Dead Bugs", sets: 3, reps: "12/side", rest: "45 sec", notes: "Opposite arm/leg. Low back pressed to floor." },
      { num: 7, name: "Ring Fallouts", sets: 3, reps: "6–10", rest: "60 sec", notes: "Anti-extension core. Start short ROM." }
    ],
    cardio: { name: "Bike Ride", duration: "30–45 min", zone: "Zone 2", notes: "Mercury day: fluid, adaptive, rhythmic." }
  },

  4: { // THURSDAY — PULL B
    name: "PULL B",
    planet: "Jupiter",
    symbol: "♃",
    theme: "Expansion, generosity, higher purpose",
    focus: "Front Lever + MU Transition",
    warmup: [
      { name: "Passive Dead Hang", sets: 2, reps: "30–45 sec", notes: "" },
      { name: "Active Hang (scapular pulls)", sets: 2, reps: "8–10", notes: "" },
      { name: "Skin the Cat (slow)", sets: 2, reps: "3–4", notes: "" },
      { name: "False Grip Ring Hang", sets: 2, reps: "15–20 sec", notes: "" },
      { name: "Band Pull-Aparts", sets: 2, reps: "15", notes: "" }
    ],
    skill: [
      { name: "Adv Tuck FL Hold (or Tuck)", sets: 4, reps: "6–10 sec", rest: "90 sec", notes: "Thursday pushes progression. Attempt adv tuck when ready." },
      { name: "Muscle-Up High Pulls (rings)", sets: 3, reps: "3–5", rest: "2 min", notes: "False grip. Pull chest to rings. Don't go through transition yet." }
    ],
    main: [
      { num: 1, name: "Weighted Ring Chinups (vary grip)", sets: 4, reps: "5–8", rest: "2.5–3 min", notes: "Wider or neutral grip vs Monday." },
      { num: 2, name: "Seal Rows (DB, chest on bench)", sets: 3, reps: "10–12", rest: "90 sec", notes: "Face-down on bench. Pure upper back." },
      { num: 3, name: "Weighted Ring Rows (wide)", sets: 3, reps: "8–12", rest: "90 sec", notes: "Wide hand pos, elbows flared. Rear delts/mid-traps." },
      { num: 4, name: "Ring Face Pulls", sets: 3, reps: "12–15", rest: "60 sec", notes: "" },
      { num: 5, name: "Barbell Curls", sets: 3, reps: "10–12", rest: "60–90 sec", notes: "Lighter than Mon. 3-sec eccentric." },
      { num: 6, name: "EZ Bar Reverse Curls", sets: 2, reps: "12–15", rest: "60 sec", notes: "" },
      { num: 7, name: "Hanging Leg Raises", sets: 3, reps: "10–15", rest: "60 sec", notes: "Progress toward toes-to-bar." }
    ],
    cardio: { name: "Hike or Weighted Vest Walk", duration: "45–60 min", zone: "Zone 2", notes: "Jupiter day: expansive. Get into nature." }
  },

  5: { // FRIDAY — PUSH B (Shoulder Emphasis)
    name: "PUSH B (Shoulder)",
    planet: "Venus",
    symbol: "♀",
    theme: "Harmony, beauty, form-building",
    focus: "HSPU Progression",
    warmup: [
      { name: "Passive Dead Hang", sets: 2, reps: "30–45 sec", notes: "" },
      { name: "RTO Support Hold", sets: "3–4", reps: "10–15 sec", notes: "Building toward 30 sec holds." },
      { name: "False Grip Ring Hang", sets: 2, reps: "15–20 sec", notes: "" },
      { name: "Arm Circles", sets: 2, reps: "10 each dir", notes: "" },
      { name: "Band Dislocates", sets: 2, reps: "10", notes: "" }
    ],
    skill: [
      { name: "Wall HSPU — Heel Pulls", sets: 3, reps: "3–5", rest: "2 min", notes: "Pull heels off wall, find balance. Bridge to freestanding." },
      { name: "Freestanding HS Hold (wall bail)", sets: 3, reps: "max hold", rest: "90 sec", notes: "Kick up, find balance, bail to wall. Track time." }
    ],
    main: [
      { num: 1, name: "Wall HSPU (full ROM)", sets: 4, reps: "5–8", rest: "2.5–3 min", notes: "Maintain current strength." },
      { num: 2, name: "DB Upright Rows", sets: 3, reps: "10–12", rest: "90 sec", notes: "DBs reduce wrist stress. Pull to mid-chest." },
      { num: 3, name: "DB Lateral Raises", sets: 3, reps: "12–15", rest: "60 sec", notes: "" },
      { num: 4, name: "Weighted Ring Dips (moderate)", sets: 3, reps: "8–10", rest: "2–2.5 min", notes: "More vertical than Tue = more tricep/shoulder." },
      { num: 5, name: "Ring Pushups (RTO at top)", sets: 3, reps: "8–12", rest: "60–90 sec", notes: "Every rep finishes RTO." },
      { num: 6, name: "DB Overhead Tricep Extension", sets: 3, reps: "10–12", rest: "60 sec", notes: "" },
      { num: 7, name: "Ring L-Sit Hold", sets: 3, reps: "max hold", rest: "60 sec", notes: "Start where you are. Even 5 sec. Track weekly." }
    ],
    cardio: { name: "Bike Ride", duration: "30–45 min", zone: "Zone 2", notes: "Venus day: rhythmic, flowing. Or neighborhood jog if body is ready." }
  },

  6: { // SATURDAY — LEGS B
    name: "LEGS B",
    planet: "Saturn",
    symbol: "♄",
    theme: "Structure, discipline, endurance, bone-building",
    focus: null,
    warmup: [
      { name: "Bodyweight Squats", sets: 2, reps: "10", notes: "" },
      { name: "Leg Swings (front + lateral)", sets: 1, reps: "10 each direction", notes: "" },
      { name: "Hip Circles", sets: 1, reps: "10 each", notes: "" },
      { name: "TKE Band Work", sets: "2–3", reps: "15–20/leg", notes: "PATELLAR HEALTH. Non-negotiable." },
      { name: "Deep Lunge Hold", sets: 2, reps: "20 sec/side", notes: "Hip flexor opening. Saturn demands patience." }
    ],
    skill: [],
    main: [
      { num: 1, name: "Goblet Squat (DB, slow tempo)", sets: 4, reps: "8–12", rest: "2.5–3 min", notes: "3-sec ecc, 2-sec pause at bottom. Tendon loading." },
      { num: 2, name: "Bulgarian Split Squats", sets: 3, reps: "10–12/leg", rest: "90 sec/leg", notes: "EVERY LEG DAY." },
      { num: 3, name: "Romanian Deadlift (barbell)", sets: 3, reps: "8–10", rest: "90–120 sec", notes: "Hinge pattern. Control the descent." },
      { num: 4, name: "Single-Leg Glute Bridge (wtd)", sets: 3, reps: "10–12/leg", rest: "60 sec", notes: "Unilateral. Corrects imbalances." },
      { num: 5, name: "Calf Raises (weighted)", sets: 3, reps: "15–20", rest: "45–60 sec", notes: "" },
      { num: 6, name: "Dead Bugs", sets: 3, reps: "12/side", rest: "45 sec", notes: "" },
      { num: 7, name: "Band Pallof Press", sets: 3, reps: "10/side", rest: "60 sec", notes: "Anti-rotation core." }
    ],
    cardio: { name: "Weighted Vest Walk OR Hill Sprints OR Farmer's Walks", duration: "50–60 min (walk) / 20–30 min (sprints) / 15–20 min (farmer's)", zone: "Zone 2 (walk) / Max effort (sprints)", notes: "Saturn day: endurance, structure, the long haul. Farmer's Walks: once per week minimum." }
  },

  0: { // SUNDAY — REST
    name: "REST",
    planet: "Sun",
    symbol: "☉",
    theme: "The heart center, integration, renewal",
    focus: null,
    warmup: [],
    skill: [],
    main: [],
    cardio: { name: "Light Walk", duration: "20–30 min", zone: "Easy", notes: "No vest. No resistance training. Full evening stretching routine. Breathwork. Rückschau." }
  }
};

// CONDENSED ROUTINES — 20, 30, 45 minute tiers
export const CONDENSED = {
  pull: {
    20: {
      label: "20 Minutes — The Essentials",
      exercises: [
        { num: 1, name: "Dead Hang + Scapular Pulls", sets: 1, reps: "30s + 8 reps", rest: "—", why: "Shoulder protection. Always." },
        { num: 2, name: "Tuck Front Lever Hold", sets: 3, reps: "8–12 sec", rest: "60 sec", why: "Skill progression cannot stall." },
        { num: 3, name: "Weighted Ring Chinups", sets: 3, reps: "5–8", rest: "2 min", why: "Primary compound pull." },
        { num: 4, name: "Hanging Leg Raises", sets: 2, reps: "10–12", rest: "45 sec", why: "Core." }
      ]
    },
    30: { label: "30 Minutes", notes: "Adds ring rows, face pulls, full warm-up with skin the cat. Curls cut." },
    45: { label: "45 Minutes", notes: "Full session, reduce accessory sets by one. Warm-up condensed to one set each. 90% stimulus." }
  },
  push: {
    20: {
      label: "20 Minutes — The Essentials",
      exercises: [
        { num: 1, name: "Dead Hang + RTO Hold", sets: 1, reps: "30s + 2×10s", rest: "—", why: "Shoulder health + RTO development." },
        { num: 2, name: "Weighted Ring Dips (deep)", sets: 3, reps: "6–10", rest: "2 min", why: "Primary compound push + MU transition." },
        { num: 3, name: "Wall HSPU or Ring Pushups", sets: 2, reps: "6–10", rest: "90 sec", why: "Alternate based on A or B day." },
        { num: 4, name: "Band Pallof Press", sets: 2, reps: "8/side", rest: "45 sec", why: "Core." }
      ]
    },
    30: { label: "30 Minutes", notes: "Adds skill work (MU negatives or HSPU heel pulls), ring flyes/laterals, ring pushups. Tricep isolation cut." },
    45: { label: "45 Minutes", notes: "Full skill block intact. Reduce main sets by one where at 3 sets. 90% stimulus." }
  },
  legs: {
    20: {
      label: "20 Minutes — The Essentials",
      exercises: [
        { num: 1, name: "TKE Band Work", sets: 2, reps: "15/leg", rest: "—", why: "Patellar health. Non-negotiable." },
        { num: 2, name: "Pistol Progression (Wed) or BW Squat", sets: 2, reps: "3–5/leg or 1×10", rest: "60 sec", why: "Skill or activation." },
        { num: 3, name: "Bulgarian Split Squats (wtd)", sets: 3, reps: "8–10/leg", rest: "75 sec/leg", why: "THE non-negotiable. One exercise to rule them all." },
        { num: 4, name: "Dead Bugs", sets: 2, reps: "10/side", rest: "30 sec", why: "Core." }
      ]
    },
    30: { label: "30 Minutes", notes: "Adds Zercher/Goblet squat, Nordic curl or RDL. Calves and glute bridges cut." },
    45: { label: "45 Minutes", notes: "Full warm-up with TKEs. Pistol skill intact. All main lifts, one fewer set on accessories. 90% stimulus." }
  }
};

// TRAVEL / NO EQUIPMENT PROTOCOL
export const TRAVEL_PROTOCOL = {
  label: "Travel / No Equipment — 30 min bodyweight",
  note: "Maintains patterns, not strength. Return to garage without lost ground.",
  exercises: [
    { num: 1, name: "Deep Squat Hold", sets: 1, reps: "60 sec", rest: "—", notes: "Hip and ankle mobility." },
    { num: 2, name: "Pistol Squat (supported)", sets: 3, reps: "3–5/leg", rest: "60 sec", notes: "Doorframe or chair." },
    { num: 3, name: "Handstand Hold (wall)", sets: 3, reps: "20–30 sec", rest: "60 sec", notes: "HSPU maintenance. Any wall." },
    { num: 4, name: "Pike Pushups (feet elevated)", sets: 3, reps: "8–12", rest: "60 sec", notes: "Shoulder pressing." },
    { num: 5, name: "BSS (rear foot on bed)", sets: 3, reps: "10–12/leg", rest: "60 sec/leg", notes: "Bodyweight — higher reps compensate." },
    { num: 6, name: "Pushup Variation", sets: 3, reps: "10–15", rest: "45 sec", notes: "Decline, diamond, or staggered." },
    { num: 7, name: "Towel Rows (door) or Table Rows", sets: 3, reps: "8–12", rest: "45 sec", notes: "Improvise. Sturdy surface." },
    { num: 8, name: "Dead Bugs or Hollow Hold", sets: 3, reps: "12/side or 20s", rest: "30 sec", notes: "Core." },
    { num: 9, name: "Deep Lunge + Pigeon Pose", sets: 1, reps: "30 sec/side each", rest: "—", notes: "Hip maintenance." }
  ]
};

// STRETCHING PROTOCOLS
export const STRETCHING = {
  postTraining: {
    pull: {
      label: "After PULL Days (Mon/Thu) — 15 min",
      exercises: [
        { name: "Passive Dead Hang", duration: "30–45 sec", target: "Shoulder decompression, lat stretch" },
        { name: "Doorway/Ring Chest Stretch", duration: "30 sec/side", target: "Pec and anterior delt (counterbalance pulling)" },
        { name: "Cross-Body Shoulder Stretch", duration: "20 sec/side", target: "Posterior delt and infraspinatus" },
        { name: "Wrist Flexor/Extensor Stretch", duration: "20 sec each dir", target: "False grip recovery" },
        { name: "Seated Forward Fold", duration: "45–60 sec", target: "Hamstrings and lower back" },
        { name: "Deep Squat Hold (unweighted)", duration: "45–60 sec", target: "Hip, ankle, knee mobility" },
        { name: "Supine Spinal Twist", duration: "30 sec/side", target: "Thoracic rotation and decompression" }
      ]
    },
    push: {
      label: "After PUSH Days (Tue/Fri) — 15 min",
      exercises: [
        { name: "Passive Dead Hang", duration: "30–45 sec", target: "Overhead decompression — essential after pressing" },
        { name: "German Hang (controlled)", duration: "15–20 sec", target: "Shoulder extension. Work up carefully." },
        { name: "Doorway/Ring Chest Stretch", duration: "30 sec/side", target: "Pec release" },
        { name: "Tricep Overhead Stretch", duration: "20 sec/side", target: "Long head of tricep" },
        { name: "Wrist Flexor/Extensor Stretch", duration: "20 sec each dir", target: "Ring grip recovery" },
        { name: "Cat-Cow", duration: "8–10 reps", target: "Spinal mobilization" },
        { name: "Deep Squat Hold", duration: "45–60 sec", target: "General hip and ankle maintenance" },
        { name: "Child's Pose (wide knee)", duration: "45–60 sec", target: "Lat, thoracic, hip opening" }
      ]
    },
    legs: {
      label: "After LEG Days (Wed/Sat) — 15 min",
      exercises: [
        { name: "Standing Quad Stretch", duration: "30 sec/side", target: "Rectus femoris and knee health" },
        { name: "Half-Kneeling Hip Flexor Stretch", duration: "30 sec/side", target: "Psoas and iliacus — attend to this" },
        { name: "Seated Figure-4 (Pigeon var.)", duration: "30 sec/side", target: "Piriformis and deep hip ext. rotators" },
        { name: "Hamstring Stretch (foot on bench)", duration: "30 sec/side", target: "Hamstrings" },
        { name: "Deep Squat Hold", duration: "45–60 sec", target: "Hip, ankle, knee" },
        { name: "Supine Spinal Twist", duration: "30 sec/side", target: "Thoracic, lower back" },
        { name: "Calf Stretch (wall lean)", duration: "20 sec/side", target: "Gastrocnemius and soleus" }
      ]
    }
  },
  evening: {
    label: "Evening Stretch — 20–25 min (min 4×/week)",
    note: "Pairs with Rückschau. This is where structural change happens.",
    exercises: [
      { name: "Passive Dead Hang", duration: "60 sec (or 2×30)", target: "Shoulders, spine", notes: "Day's compression releases here." },
      { name: "90/90 Hip Transitions", duration: "2 × 8 reps", target: "Hips", notes: "Int. and ext. rotation. Slow, deliberate." },
      { name: "Deep Lunge Hold (knee down)", duration: "60 sec/side", target: "Hip flexors", notes: "Weak point. Breathe into hip. Let psoas release." },
      { name: "Pigeon Pose", duration: "60 sec/side", target: "Deep hip ext. rotators", notes: "If too intense, use supine figure-4." },
      { name: "Seated Straddle Fold", duration: "60–90 sec", target: "Adductors, hamstrings", notes: "Hinge from hips, don't round spine." },
      { name: "Supine Hamstring (band)", duration: "30–45 sec/side", target: "Hamstrings", notes: "Band around foot. Leg straight." },
      { name: "Thoracic Extension (roller)", duration: "60 sec", target: "Thoracic spine", notes: "Lie over roller mid-back. Arms overhead." },
      { name: "Cat-Cow", duration: "10 reps", target: "Spinal mobility", notes: "Slow. One vertebra at a time." },
      { name: "Supine Spinal Twist", duration: "45–60 sec/side", target: "Thoracic, low back", notes: "Let knees fall. Don't force shoulder." },
      { name: "Child's Pose (wide, extended)", duration: "60–90 sec", target: "Lats, thoracic, hips", notes: "Closing posture. Let everything settle." }
    ]
  }
};

// SKILL PROGRESSION TIMELINES
export const SKILL_PROGRESSIONS = {
  frontLever: {
    name: "Front Lever",
    current: "Tuck FL hold 10+ sec",
    phases: [
      { period: "Months 1–3", target: "Build tuck holds to 4×15 sec. Begin advanced tuck attempts (straighten hips slightly)." },
      { period: "Months 3–6", target: "Advanced tuck hold 4×10 sec. Introduce single-leg FL (one leg extended)." },
      { period: "Months 6–12", target: "Single-leg FL to 10+ sec. Begin full FL negatives (5-sec lowering)." },
      { period: "12+ months", target: "Full front lever hold." }
    ]
  },
  muscleUp: {
    name: "Muscle-Up",
    current: "High pull to chest, transition is bottleneck, no recent attempts",
    phases: [
      { period: "Months 1–2", target: "False grip hangs daily. Slow MU negatives 3×2–3 (Tue). High pulls 3×3–5 (Thu). Deep ring dips below parallel." },
      { period: "Months 2–4", target: "Attempt first controlled muscle-up. May be ugly." },
      { period: "Months 4–8", target: "Clean kipping MU for reps. Begin slowing the kip." },
      { period: "8–12 months", target: "Strict ring muscle-up." }
    ]
  },
  freestandingHSPU: {
    name: "Freestanding HSPU",
    current: "Wall HSPU 3×7–10 near full ROM",
    phases: [
      { period: "Months 1–3", target: "Wall heel pulls every Friday. Freestanding HS hold practice. Build balance." },
      { period: "Months 3–6", target: "Eccentric freestanding HSPU — kick up, lower slowly, bail to wall. 3–5 sec negatives." },
      { period: "Months 6–12", target: "First freestanding HSPU. Then reps." }
    ]
  },
  backLever: {
    name: "Back Lever",
    current: "Skin the cats somewhat comfortable. No back lever training.",
    phases: [
      { period: "Months 1–3", target: "Skin the cats in every pull warm-up. German hangs held 15–20 sec. Tissue preparation." },
      { period: "Months 3–6", target: "Tuck back lever holds 4×8–12 sec. Add to Thursday skill when front lever adv tuck is solid." },
      { period: "Months 6–12", target: "Advanced tuck BL. Single-leg progressions." },
      { period: "12+ months", target: "Full back lever." }
    ]
  },
  pistolSquat: {
    name: "Pistol Squat",
    current: "Supported pistols with near full ROM",
    phases: [
      { period: "Weeks 1–4", target: "Assisted pistols (ring/band support). 3×3–5/leg. Full depth, controlled." },
      { period: "Weeks 5–12", target: "Negative-only pistols. 4–5 sec eccentric. Patellar tendon adapts here. Do not rush." },
      { period: "Months 3–6", target: "Unassisted pistol squats. 3×1–3/leg, build to 3×5." },
      { period: "Months 6+", target: "Weighted pistols (DB at chest or vest)." }
    ]
  },
  rtoSupport: {
    name: "RTO Support Hold",
    current: "Not yet trained",
    phases: [
      { period: "Weeks 1–4", target: "3–4×10–15 sec, rings turned out ~30°." },
      { period: "Weeks 5–8", target: "3–4×15–20 sec, rings turned out ~45°." },
      { period: "Months 3–6", target: "3×20–30 sec at full 90° RTO. All ring dips finish with RTO at top." }
    ]
  },
  ringLSit: {
    name: "Ring L-Sit",
    current: "Not tested on rings",
    phases: [
      { period: "Weeks 1–4", target: "Establish baseline. Even 3–5 sec. Bent-knee L-sit if needed." },
      { period: "Months 1–3", target: "Build to 3×10–15 sec." },
      { period: "Months 3–6", target: "Full ring L-sit 3×15–20 sec. Begin V-sit attempts." }
    ]
  }
};

// FOUNDATIONAL PRINCIPLES (for display)
export const TRAINING_PRINCIPLES = [
  { name: "Tendon Adaptation Law", text: "Muscle adapts in 4–6 weeks. Tendons adapt in 12–16 weeks. Bone remodels over months to years. Every progression respects this hierarchy. When in doubt, stay longer." },
  { name: "Skill Before Strength", text: "Gymnastic skill work always comes first in the session, when the CNS is freshest. Fatigued skill work builds bad patterns." },
  { name: "The Ring Principle", text: "Rings demand stabilization that fixed bars cannot. Lower the reps, slow the tempo, earn the progression." },
  { name: "Longevity Architecture", text: "No exercise creates unnecessary spinal compression under max load. Every movement builds the joints rather than merely tolerating them." },
  { name: "Distributed Core", text: "Core work spread across all six training days. Never piled into one session." },
  { name: "Zone 2 Cardio", text: "HR 110–128 bpm. Conversational pace. Fat oxidation, mitochondrial density, cardiovascular resilience without cortisol spikes." },
  { name: "Deload Every Fourth Week", text: "Same exercises, same structure, drop volume by 40–50%, remove skill progressions. The body builds during the deload, not during the assault." },
  { name: "BSS Every Leg Day", text: "Bulgarian Split Squats appear on both Wednesday and Saturday. Non-negotiable for knee longevity, hip stability, and symmetry." },
  { name: "Breathing", text: "Inhale on eccentric, exhale on concentric. On isometric holds, breathe steadily. Never hold breath on sustained holds. The vagus nerve responds to rhythmic breathing under tension." }
];

// HELPER: Get today's training type category for post-training stretch selection
export function getStretchCategory(dayIndex) {
  if (dayIndex === 1 || dayIndex === 4) return "pull";
  if (dayIndex === 2 || dayIndex === 5) return "push";
  if (dayIndex === 3 || dayIndex === 6) return "legs";
  return null; // Sunday — no post-training stretch, evening only
}

// HELPER: Map dayIndex to training type for condensed routine selection
export function getTrainingType(dayIndex) {
  if (dayIndex === 1 || dayIndex === 4) return "pull";
  if (dayIndex === 2 || dayIndex === 5) return "push";
  if (dayIndex === 3 || dayIndex === 6) return "legs";
  return null; // Sunday rest
}
