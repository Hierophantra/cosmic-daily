import { useState, useCallback } from "react";
import { getDayIndex, getDateKey } from "../../utils/dateHelpers";
import { getTrackerData, saveTrackerData } from "../../utils/storageHelpers";
import { PLANETARY_DAYS, SUPPLEMENTS as SUPPLEMENT_LIST } from "../../data/planetary_days";
import PlanetaryFoodCard from "./PlanetaryFoodCard";
import InterventionFlow from "./InterventionFlow";
import TeaProtocol from "./TeaProtocol";
import SupplementChecklist from "./SupplementChecklist";
import NourishLog from "./NourishLog";

export default function NourishPage() {
  const dayIndex = getDayIndex();
  const dateKey = getDateKey();
  const dayInfo = PLANETARY_DAYS[dayIndex];

  const [tracker, setTracker] = useState(() => getTrackerData());
  const [showFlow, setShowFlow] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const todayData = tracker[dateKey] || { supplements: [], teas: [] };

  const toggle = useCallback((cat, item) => {
    setTracker((prev) => {
      const dayData = prev[dateKey] || { supplements: [], teas: [] };
      const list = dayData[cat] || [];
      const updated = {
        ...prev,
        [dateKey]: {
          ...dayData,
          [cat]: list.includes(item) ? list.filter((i) => i !== item) : [...list, item],
        },
      };
      saveTrackerData(updated);
      return updated;
    });
  }, [dateKey]);

  if (showFlow) {
    return (
      <div className="nourish-page">
        <PlanetaryFoodCard dayInfo={dayInfo} />
        <InterventionFlow
          dayIndex={dayIndex}
          dateKey={dateKey}
          onClose={() => setShowFlow(false)}
        />
      </div>
    );
  }

  return (
    <div className="nourish-page">
      <PlanetaryFoodCard dayInfo={dayInfo} />

      <button className="nourish-btn" onClick={() => setShowFlow(true)}>
        Nourish
      </button>

      <TeaProtocol
        dayInfo={dayInfo}
        todayData={todayData}
        onToggle={(item) => toggle("teas", item)}
      />

      <SupplementChecklist
        dayInfo={dayInfo}
        supplements={SUPPLEMENT_LIST}
        todayData={todayData}
        onToggle={(item) => toggle("supplements", item)}
      />

      <button
        className="nourish-btn nourish-btn--outline"
        onClick={() => setShowLog(!showLog)}
      >
        {showLog ? "Hide Log" : "View Log"}
      </button>

      {showLog && <NourishLog dayIndex={dayIndex} />}
    </div>
  );
}
