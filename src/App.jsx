import { useState, useEffect } from "react";
import { getDayIndex } from "./utils/dateHelpers";
import { PLANETARY_DAYS } from "./data/planetary_days";
import CosmicHeader from "./components/CosmicHeader";
import PageNav from "./components/PageNav";
import PracticePage from "./components/practice/PracticePage";
import NourishPage from "./components/nourish/NourishPage";
import TrainingPage from "./components/training/TrainingPage";

export default function App() {
  const [activePage, setActivePage] = useState("practice");

  // Set planetary CSS variables on mount
  useEffect(() => {
    const dayIndex = getDayIndex();
    const dayInfo = PLANETARY_DAYS[dayIndex];
    const root = document.documentElement;
    root.style.setProperty("--planet-color", dayInfo.color);
    root.style.setProperty("--planet-bg", dayInfo.bgColor);
    root.style.setProperty("--planet-accent", dayInfo.accentBg);
  }, []);

  return (
    <div className="cosmic-app">
      <CosmicHeader />
      <PageNav activePage={activePage} onNavigate={setActivePage} />
      <main className="cosmic-main">
        {activePage === "practice" && <PracticePage />}
        {activePage === "nourish" && <NourishPage />}
        {activePage === "training" && <TrainingPage />}
      </main>
    </div>
  );
}
