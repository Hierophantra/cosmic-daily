const TIERS = [
  { id: "full", label: "Full" },
  { id: "45", label: "45 min" },
  { id: "30", label: "30 min" },
  { id: "20", label: "20 min" },
];

export default function TierSelector({ tier, onSelect }) {
  return (
    <div className="tier-selector">
      {TIERS.map((t) => (
        <button
          key={t.id}
          className={`tier-btn${tier === t.id ? " tier-btn--active" : ""}`}
          onClick={() => onSelect(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
