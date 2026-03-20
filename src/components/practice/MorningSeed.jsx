import { EXERCISES } from "../../data/practice_exercises";

export default function MorningSeed({ dayIndex, weekNumber }) {
  const day = EXERCISES?.[dayIndex];
  if (!day?.morningSeed?.length) return null;

  const seed = day.morningSeed[weekNumber % day.morningSeed.length];

  return (
    <div className="practice-section">
      <div className="practice-section__label">Morning Seed</div>
      <div className="practice-section__text">"{seed.text}"</div>
      <div className="practice-section__source">— {seed.source}</div>
    </div>
  );
}
