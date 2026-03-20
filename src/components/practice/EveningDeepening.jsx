import { EXERCISES } from "../../data/practice_exercises";

export default function EveningDeepening({ dayIndex, dateOfMonth }) {
  const day = EXERCISES?.[dayIndex];
  if (!day?.eveningDeepening?.length) return null;

  const prompt = day.eveningDeepening[dateOfMonth % day.eveningDeepening.length];

  return (
    <div className="practice-section">
      <div className="practice-section__label">Evening Deepening</div>
      <div className="practice-section__text">{prompt}</div>
    </div>
  );
}
