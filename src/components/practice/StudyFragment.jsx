import { EXERCISES } from "../../data/practice_exercises";

export default function StudyFragment({ dayIndex, weekNumber }) {
  const day = EXERCISES?.[dayIndex];
  if (!day?.studyFragment?.length) return null;

  const frag = day.studyFragment[weekNumber % day.studyFragment.length];

  return (
    <div className="practice-section">
      <div className="practice-section__label">Study Fragment — 20 Minutes</div>
      <div className="practice-section__text">{frag.text}</div>
      <div className="practice-section__source">— {frag.source}</div>
    </div>
  );
}
