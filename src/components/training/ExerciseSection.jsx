import Collapsible from "../Collapsible";

export default function ExerciseSection({ title, exercises, defaultOpen = false }) {
  return (
    <Collapsible title={title} count={exercises.length} defaultOpen={defaultOpen}>
      {exercises.map((ex, i) => (
        <div key={i} className="exercise-row">
          <div className="exercise-row__name">
            {ex.num ? `${ex.num}. ` : ""}{ex.name}
          </div>
          <div className="exercise-row__detail">
            {ex.sets && `${ex.sets} × ${ex.reps}`}
            {ex.rest && ex.rest !== "—" && ` · Rest ${ex.rest}`}
            {ex.duration && ex.duration}
            {ex.why && ` — ${ex.why}`}
          </div>
          {ex.notes && <div className="exercise-row__notes">{ex.notes}</div>}
        </div>
      ))}
    </Collapsible>
  );
}
