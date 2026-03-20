import { memo } from "react";
import { PLANETARY_DAYS, QUOTES } from "../data/planetary_days";
import { CALENDAR_OF_THE_SOUL, getCalendarWeek } from "../data/calendar_of_the_soul";
import { getDayIndex, getDateKey } from "../utils/dateHelpers";

function CosmicHeader() {
  const dayIndex = getDayIndex();
  const dayInfo = PLANETARY_DAYS[dayIndex];
  const today = new Date();
  const dateKey = getDateKey(today);

  const todayQuotes = QUOTES[dayIndex];
  const quote = todayQuotes[Math.floor((today.getDate() + dayIndex) % todayQuotes.length)];

  const calWeek = getCalendarWeek();
  const verse = CALENDAR_OF_THE_SOUL.find((v) => v.week === calWeek);

  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="cosmic-header">
      <div className="cosmic-header__symbol">{dayInfo.symbol}</div>
      <h1 className="cosmic-header__day">{dayInfo.name}</h1>
      <div className="cosmic-header__meta">
        {dayInfo.planet} · {dayInfo.element} · {dayInfo.metal}
      </div>
      <div className="cosmic-header__date">{dateStr}</div>
      <div className="cosmic-header__quote">"{quote.text}"</div>
      <div className="cosmic-header__quote-source">— {quote.source}</div>
      {verse && (
        <div className="cosmic-header__verse">
          <div className="cosmic-header__verse-label">
            Calendar of the Soul — Week {calWeek}
          </div>
          {verse.verse}
        </div>
      )}
    </header>
  );
}

export default memo(CosmicHeader);
