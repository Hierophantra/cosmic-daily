import { CALENDAR_OF_THE_SOUL, getCalendarWeek } from "../../data/calendar_of_the_soul";

export default function CalendarVerse() {
  const week = getCalendarWeek();
  const entry = CALENDAR_OF_THE_SOUL.find((v) => v.week === week);
  if (!entry) return null;

  return (
    <div className="verse-card">
      <div className="verse-card__label">Calendar of the Soul — Week {week}</div>
      <div className="verse-card__text">{entry.verse}</div>
      {entry.corresponding && (
        <div className="verse-card__week">Corresponding verse: Week {entry.corresponding}</div>
      )}
    </div>
  );
}
