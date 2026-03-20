import Collapsible from "../Collapsible";

export default function StretchProtocol({ title, exercises, label, note }) {
  return (
    <Collapsible title={title} count={exercises.length}>
      {label && (
        <div className="exercise-row__notes" style={{ marginBottom: 8 }}>{label}</div>
      )}
      {note && (
        <div className="exercise-row__notes" style={{ marginBottom: 8 }}>{note}</div>
      )}
      {exercises.map((ex, i) => (
        <div key={i} className="stretch-row">
          <div>
            <div className="stretch-row__name">{ex.name}</div>
            <div className="stretch-row__target">{ex.target}</div>
            {ex.notes && <div className="exercise-row__notes">{ex.notes}</div>}
          </div>
          <div className="stretch-row__duration">{ex.duration}</div>
        </div>
      ))}
    </Collapsible>
  );
}
