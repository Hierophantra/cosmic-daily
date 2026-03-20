export default function TeaProtocol({ dayInfo, todayData, onToggle }) {
  const teas = todayData.teas || [];

  const renderTea = (prefix, label, teaList) => (
    <div className="tea-section">
      <div className="tea-section__label">{label}</div>
      {teaList.map((t) => {
        const key = `${prefix}-${t}`;
        const checked = teas.includes(key);
        return (
          <div key={key} className="checklist-row" onClick={() => onToggle(key)}>
            <div className={`checklist-box${checked ? " checklist-box--checked" : ""}`}>
              {checked && <span className="checklist-box__mark">✓</span>}
            </div>
            <span>{t}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {renderTea("m", "Morning Tea", dayInfo.morningTea)}
      {renderTea("a", "Afternoon Tea · 2-4 PM", dayInfo.afternoonTea)}
      {renderTea("e", "Evening Tea · Post-6 PM", dayInfo.eveningTea)}
    </>
  );
}
