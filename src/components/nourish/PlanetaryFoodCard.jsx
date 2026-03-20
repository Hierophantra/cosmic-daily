export default function PlanetaryFoodCard({ dayInfo }) {
  return (
    <div className="food-card">
      <div className="food-card__planet">
        {dayInfo.symbol} {dayInfo.planet} — {dayInfo.element}
      </div>
      <div className="food-card__meta">
        Organ: {dayInfo.organ} · Metal: {dayInfo.metal}
      </div>
      <div className="food-card__note">{dayInfo.note}</div>
      <div className="food-card__foods">{dayInfo.keyFoods}</div>
    </div>
  );
}
