import { useState, useCallback } from "react";
import { getDayIndex, getDateKey, getWeekNumber, getDateOfMonth } from "../../utils/dateHelpers";
import { getTrackerData, saveTrackerData } from "../../utils/storageHelpers";
import CalendarVerse from "./CalendarVerse";
import ExerciseCard from "./ExerciseCard";
import MorningSeed from "./MorningSeed";
import StudyFragment from "./StudyFragment";
import MiddayCheckpoint from "./MiddayCheckpoint";
import EveningDeepening from "./EveningDeepening";
import DailyChecklist from "./DailyChecklist";

export default function PracticePage() {
  const dayIndex = getDayIndex();
  const dateKey = getDateKey();
  const weekNumber = getWeekNumber();
  const dateOfMonth = getDateOfMonth();

  const [tracker, setTracker] = useState(() => getTrackerData());
  const todayData = tracker[dateKey] || {};

  const toggle = useCallback((key) => {
    setTracker((prev) => {
      const dayData = prev[dateKey] || {};
      const checks = dayData.practiceChecks || {};
      const updated = {
        ...prev,
        [dateKey]: {
          ...dayData,
          practiceChecks: { ...checks, [key]: !checks[key] },
        },
      };
      saveTrackerData(updated);
      return updated;
    });
  }, [dateKey]);

  const checks = todayData.practiceChecks || {};

  return (
    <div className="practice-page">
      <CalendarVerse />
      <ExerciseCard dayIndex={dayIndex} />
      <MorningSeed dayIndex={dayIndex} weekNumber={weekNumber} />
      <StudyFragment dayIndex={dayIndex} weekNumber={weekNumber} />
      <MiddayCheckpoint dayIndex={dayIndex} dateOfMonth={dateOfMonth} />
      <EveningDeepening dayIndex={dayIndex} dateOfMonth={dateOfMonth} />
      <DailyChecklist checks={checks} onToggle={toggle} />
    </div>
  );
}
