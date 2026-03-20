import { useState } from "react";
import { getDayIndex } from "../../utils/dateHelpers";
import {
  TRAINING_DAYS,
  CONDENSED,
  STRETCHING,
  SKILL_PROGRESSIONS,
  TRAVEL_PROTOCOL,
  getStretchCategory,
  getTrainingType,
} from "../../data/training_data_model";
import WorkoutHeader from "./WorkoutHeader";
import ExerciseSection from "./ExerciseSection";
import TierSelector from "./TierSelector";
import StretchProtocol from "./StretchProtocol";
import SkillProgressions from "./SkillProgressions";
import TravelMode from "./TravelMode";

export default function TrainingPage() {
  const dayIndex = getDayIndex();
  const day = TRAINING_DAYS[dayIndex];
  const [tier, setTier] = useState("full");
  const [travelMode, setTravelMode] = useState(false);

  const trainingType = getTrainingType(dayIndex);
  const stretchCat = getStretchCategory(dayIndex);
  const isRestDay = dayIndex === 0;

  // Rest day
  if (isRestDay && !travelMode) {
    return (
      <div className="training-page">
        <WorkoutHeader day={day} />
        <div className="rest-day">
          <div className="rest-day__symbol">☉</div>
          <div className="rest-day__message">
            Rest day. No resistance training. Full evening stretching routine. Breathwork. Rückschau.
          </div>
        </div>
        <StretchProtocol
          title="Evening Stretch"
          exercises={STRETCHING.evening.exercises}
          label={STRETCHING.evening.label}
          note={STRETCHING.evening.note}
        />
        <SkillProgressions progressions={SKILL_PROGRESSIONS} />
        <TravelMode active={travelMode} onToggle={() => setTravelMode(!travelMode)} />
      </div>
    );
  }

  // Travel mode
  if (travelMode) {
    return (
      <div className="training-page">
        <WorkoutHeader day={{ ...day, name: "TRAVEL MODE" }} />
        <ExerciseSection
          title="Travel Protocol"
          exercises={TRAVEL_PROTOCOL.exercises}
          defaultOpen
        />
        <StretchProtocol
          title="Evening Stretch"
          exercises={STRETCHING.evening.exercises}
          label={STRETCHING.evening.label}
        />
        <TravelMode active={travelMode} onToggle={() => setTravelMode(!travelMode)} />
      </div>
    );
  }

  // Condensed tier exercises
  let mainExercises = day.main;
  let showCondensedNote = null;
  if (tier !== "full" && trainingType && CONDENSED[trainingType]) {
    const tierData = CONDENSED[trainingType][parseInt(tier)];
    if (tierData) {
      if (tierData.exercises) {
        mainExercises = tierData.exercises;
      } else {
        showCondensedNote = tierData.notes;
      }
    }
  }

  return (
    <div className="training-page">
      <WorkoutHeader day={day} />

      <TierSelector tier={tier} onSelect={setTier} />

      {showCondensedNote && (
        <div className="cardio-card">
          <div className="cardio-card__name">{tier} min — Adjusted</div>
          <div className="cardio-card__detail">{showCondensedNote}</div>
        </div>
      )}

      {day.warmup.length > 0 && (
        <ExerciseSection title="Warm-Up" exercises={day.warmup} />
      )}

      {day.skill.length > 0 && (
        <ExerciseSection title="Skill Work" exercises={day.skill} />
      )}

      <ExerciseSection title="Main Work" exercises={mainExercises} defaultOpen />

      {day.cardio && (
        <div className="cardio-card">
          <div className="cardio-card__name">{day.cardio.name}</div>
          <div className="cardio-card__detail">
            {day.cardio.duration} · {day.cardio.zone}
          </div>
          {day.cardio.notes && (
            <div className="exercise-row__notes">{day.cardio.notes}</div>
          )}
        </div>
      )}

      {stretchCat && STRETCHING.postTraining[stretchCat] && (
        <StretchProtocol
          title="Post-Training Stretch"
          exercises={STRETCHING.postTraining[stretchCat].exercises}
          label={STRETCHING.postTraining[stretchCat].label}
        />
      )}

      <StretchProtocol
        title="Evening Stretch"
        exercises={STRETCHING.evening.exercises}
        label={STRETCHING.evening.label}
        note={STRETCHING.evening.note}
      />

      <SkillProgressions progressions={SKILL_PROGRESSIONS} />

      <TravelMode active={travelMode} onToggle={() => setTravelMode(!travelMode)} />
    </div>
  );
}
