import { useMemo } from "react";
import { getNourishLog } from "../../utils/storageHelpers";

export default function NourishLog() {
  const log = useMemo(() => getNourishLog(), []);

  if (!log.length) {
    return (
      <div className="nourish-log">
        <div className="nourish-log__title">Nourish Log</div>
        <div className="nourish-log__stat">No entries yet. Use the Nourish button to start logging.</div>
      </div>
    );
  }

  // Last 30 days
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recent = log.filter((e) => new Date(e.date) >= thirtyDaysAgo);

  // Pattern frequency
  const patterns = {};
  recent.forEach((e) => {
    if (e.pattern) {
      patterns[e.pattern] = (patterns[e.pattern] || 0) + 1;
    }
  });

  // Entry type counts
  const types = {};
  recent.forEach((e) => {
    if (e.entryType) {
      types[e.entryType] = (types[e.entryType] || 0) + 1;
    }
  });

  // Planetary correlation (struggles by day)
  const dayStruggles = {};
  const PLANETS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
  recent.forEach((e) => {
    if (e.entryType === "struggle" && e.planet) {
      dayStruggles[e.planet] = (dayStruggles[e.planet] || 0) + 1;
    }
  });

  // This week
  const startOfWeek = new Date(now);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const thisWeek = log.filter((e) => new Date(e.date) >= startOfWeek);

  return (
    <div className="nourish-log">
      <div className="nourish-log__title">Nourish Log</div>

      <div className="nourish-log__stat">
        This week: <span className="nourish-log__stat-value">{thisWeek.length}</span> entries
      </div>
      <div className="nourish-log__stat">
        Last 30 days: <span className="nourish-log__stat-value">{recent.length}</span> entries
      </div>

      {Object.keys(types).length > 0 && (
        <>
          <div className="nourish-log__title" style={{ marginTop: 16 }}>Entry Types (30 days)</div>
          {Object.entries(types).sort((a, b) => b[1] - a[1]).map(([type, count]) => (
            <div key={type} className="nourish-log__stat">
              {type}: <span className="nourish-log__stat-value">{count}</span>
            </div>
          ))}
        </>
      )}

      {Object.keys(patterns).length > 0 && (
        <>
          <div className="nourish-log__title" style={{ marginTop: 16 }}>Struggle Patterns (30 days)</div>
          {Object.entries(patterns).sort((a, b) => b[1] - a[1]).map(([pat, count]) => (
            <div key={pat} className="nourish-log__stat">
              {pat}: <span className="nourish-log__stat-value">{count}</span>
            </div>
          ))}
        </>
      )}

      {Object.keys(dayStruggles).length > 0 && (
        <>
          <div className="nourish-log__title" style={{ marginTop: 16 }}>Planetary Correlation</div>
          {PLANETS.filter((p) => dayStruggles[p]).map((p) => (
            <div key={p} className="nourish-log__stat">
              {p}: <span className="nourish-log__stat-value">{dayStruggles[p]}</span> struggles
            </div>
          ))}
        </>
      )}
    </div>
  );
}
