import { EXERCISES } from "../../data/practice_exercises";

export default function MiddayCheckpoint({ dayIndex, dateOfMonth }) {
  const day = EXERCISES?.[dayIndex];
  if (!day?.middayCheckpoint?.length) return null;

  const question = day.middayCheckpoint[dateOfMonth % day.middayCheckpoint.length];

  return (
    <div className="practice-section">
      <div className="practice-section__label">Midday Checkpoint</div>
      <div className="practice-section__text">{question}</div>
    </div>
  );
}
