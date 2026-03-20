import { getGinsengCycleWeek } from "../../utils/ginsengCycle";

export default function SupplementChecklist({ dayInfo, supplements, todayData, onToggle }) {
  const checked = todayData.supplements || [];
  const ginseng = getGinsengCycleWeek();

  const activeSupplements = supplements.filter((s) => {
    const h = dayInfo.herbs[s.id];
    return h && h !== false;
  });

  return (
    <div className="supplement-section">
      <div className="tea-section__label">Herbs & Supplements</div>
      {activeSupplements.map((s) => {
        const strength = dayInfo.herbs[s.id];
        const isChecked = checked.includes(s.id);
        return (
          <div key={s.id} className="checklist-row" onClick={() => onToggle(s.id)}>
            <div className={`checklist-box${isChecked ? " checklist-box--checked" : ""}`}>
              {isChecked && <span className="checklist-box__mark">✓</span>}
            </div>
            <span>
              {s.name}
              {strength === "STRONGEST" && (
                <span className="supplement-badge supplement-badge--peak"> PEAK</span>
              )}
              {strength === "optional" && (
                <span className="supplement-badge supplement-badge--optional"> (optional)</span>
              )}
            </span>
          </div>
        );
      })}
      <div className="ginseng-badge">
        Ginseng: {ginseng.display}
      </div>
    </div>
  );
}
