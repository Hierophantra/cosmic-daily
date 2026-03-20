// Ginseng cycle tracker — 6 weeks on, 2 weeks off

const CYCLE_KEY = "ginseng-cycle-start";

export function getGinsengCycleWeek() {
  let startStr;
  try { startStr = localStorage.getItem(CYCLE_KEY); } catch (e) {}

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  if (!startStr) {
    try { localStorage.setItem(CYCLE_KEY, now.toISOString()); } catch (e) {}
    return { week: 1, phase: "on", display: "Week 1 of 6 — ON" };
  }

  const start = new Date(startStr);
  start.setHours(0, 0, 0, 0);
  const daysSinceStart = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const totalCycleDays = 8 * 7;
  const dayInCycle = daysSinceStart % totalCycleDays;
  const weekInCycle = Math.floor(dayInCycle / 7) + 1;

  if (daysSinceStart >= totalCycleDays) {
    const cyclesCompleted = Math.floor(daysSinceStart / totalCycleDays);
    const newStart = new Date(start.getTime() + cyclesCompleted * totalCycleDays * 24 * 60 * 60 * 1000);
    try { localStorage.setItem(CYCLE_KEY, newStart.toISOString()); } catch (e) {}
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
  now.setHours(0, 0, 0, 0);
  try { localStorage.setItem(CYCLE_KEY, now.toISOString()); } catch (e) {}
}
