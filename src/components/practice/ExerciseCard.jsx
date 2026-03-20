import { useState } from "react";

// Inline exercise basics — the full EXERCISES with morningSeed etc. is in practice_exercises.js
// but the card only needs name/subtitle/icon/description/practice
const EXERCISE_BASICS = {
  0: { name: "Contemplation / Review", subtitle: "Retrospective Meditation", icon: "☉", description: "Quietly review the week. Look at your actions as if watching another person. Observe without criticism.", practice: "Ask: What did I learn about my soul? Where did consciousness increase? Watch inwardly without condemnation." },
  1: { name: "Control of Thought", subtitle: "Directed Thinking", icon: "☾", description: "Choose a simple object — a pencil, a leaf, a spoon — and think about it for about 5 minutes with complete focus. Guide thinking deliberately.", practice: "What is it made of? Who made it? What purpose does it serve? What processes brought it into existence? If the mind wanders, gently return." },
  2: { name: "Control of Will", subtitle: "Intentional Action", icon: "♂", description: "Choose a small action you will perform at the same time each day. It must be freely chosen, not emotionally driven, and performed exactly when decided.", practice: "Examples: water a plant, move a book, write one sentence in a journal. The content is small; the sovereignty is large." },
  3: { name: "Equanimity", subtitle: "Emotional Balance", icon: "☿", description: "During the day observe emotional reactions. Do not suppress them. Do not indulge them. Practice inner steadiness.", practice: "Imagine standing like a mountain while emotions pass like weather. Return to center without commentary." },
  4: { name: "Positivity", subtitle: "Finding the Good", icon: "♃", description: "Consciously look for something positive in every situation or person. This is not naïve optimism—it is training perception to see potential and essence.", practice: "When difficulty arises ask: What seed of development exists here? What is trying to become?" },
  5: { name: "Openness / Impartiality", subtitle: "Unbiased Observation", icon: "♀", description: "Practice listening and observing without immediate judgment. Suspend prejudice, habitual opinions, and reactive emotion. Receive the experience as if for the first time.", practice: "Notice the reflex to label or dismiss. Release it. Let the new arrive as new." },
  6: { name: "Harmony", subtitle: "Integration", icon: "♄", description: "Reflect on the previous five exercises: where you practiced, where you failed, where you succeeded. Do not judge harshly. Bring them into harmony.", practice: "Name one place you drifted, one place you held steady, and one clear intention to carry into the next week." },
};

export default function ExerciseCard({ dayIndex }) {
  const [open, setOpen] = useState(false);
  const ex = EXERCISE_BASICS[dayIndex];
  if (!ex) return null;

  return (
    <div className="exercise-card" onClick={() => setOpen(!open)}>
      <div className="exercise-card__icon-label">{ex.icon} Steiner Exercise</div>
      <div className="exercise-card__name">{ex.name}</div>
      <div className="exercise-card__subtitle">{ex.subtitle}</div>
      {open ? (
        <>
          <div className="exercise-card__description">{ex.description}</div>
          <div className="exercise-card__practice">{ex.practice}</div>
        </>
      ) : (
        <div className="exercise-card__expand-hint">Tap to expand</div>
      )}
    </div>
  );
}
