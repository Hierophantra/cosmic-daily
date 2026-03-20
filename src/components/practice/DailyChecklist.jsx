export default function DailyChecklist({ checks, onToggle }) {
  return (
    <div className="practice-checklist">
      <div className="practice-section__label">Daily Practice</div>
      <div className="checklist-row" onClick={() => onToggle("exercise")}>
        <div className={`checklist-box${checks.exercise ? " checklist-box--checked" : ""}`}>
          {checks.exercise && <span className="checklist-box__mark">✓</span>}
        </div>
        <span>Steiner Exercise — Practiced today</span>
      </div>
      <div className="checklist-row" onClick={() => onToggle("study")}>
        <div className={`checklist-box${checks.study ? " checklist-box--checked" : ""}`}>
          {checks.study && <span className="checklist-box__mark">✓</span>}
        </div>
        <span>20-Minute Study</span>
      </div>
      <div className="checklist-row" onClick={() => onToggle("ruckschau")}>
        <div className={`checklist-box${checks.ruckschau ? " checklist-box--checked" : ""}`}>
          {checks.ruckschau && <span className="checklist-box__mark">✓</span>}
        </div>
        <span>Rückschau (Backward Review)</span>
      </div>
    </div>
  );
}
