// localStorage persistence helpers

export function getTrackerData() {
  try {
    const raw = localStorage.getItem("tracker-data");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function saveTrackerData(data) {
  try {
    localStorage.setItem("tracker-data", JSON.stringify(data));
  } catch (e) {}
}

export function getNourishLog() {
  try {
    const raw = localStorage.getItem("cosmic-nourish-log");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function appendNourishLog(event) {
  const log = getNourishLog();
  const now = new Date();
  log.push({
    date: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`,
    time: `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`,
    dayIndex: now.getDay(),
    planet: ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"][now.getDay()],
    entryType: event.entryType || null,
    pattern: event.pattern || null,
    choice: event.choice || null,
    verseIndex: event.verseIndex ?? null,
  });
  try {
    localStorage.setItem("cosmic-nourish-log", JSON.stringify(log));
  } catch (e) {}
}
