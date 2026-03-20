export default function TravelMode({ active, onToggle }) {
  return (
    <div className="travel-toggle" onClick={onToggle}>
      <div className="travel-toggle__label">Travel Mode (No Equipment)</div>
      <div className={`travel-toggle__switch${active ? " travel-toggle__switch--on" : ""}`}>
        <div className="travel-toggle__switch-knob" />
      </div>
    </div>
  );
}
