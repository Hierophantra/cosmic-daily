export default function WorkoutHeader({ day }) {
  return (
    <div className="workout-header">
      <div className="workout-header__name">{day.name}</div>
      <div className="workout-header__theme">{day.theme}</div>
      {day.focus && (
        <div className="workout-header__focus">Focus: {day.focus}</div>
      )}
    </div>
  );
}
