import { useState } from "react";
import {
  INTERVENTION_MESSAGES,
  PATTERN_LABELS,
  CHOICE_LABELS,
  getInterventionVerse,
} from "../../data/nourishment_data_model";
import { appendNourishLog } from "../../utils/storageHelpers";

export default function InterventionFlow({ dayIndex, dateKey, onClose }) {
  const [step, setStep] = useState("entry");
  const [entryType, setEntryType] = useState(null);
  const [pattern, setPattern] = useState(null);
  const [verse, setVerse] = useState(null);

  const handleEntry = (type) => {
    setEntryType(type);
    if (type === "struggle") {
      setStep("pattern");
    } else {
      const msg = INTERVENTION_MESSAGES[type];
      appendNourishLog({ entryType: msg.logType });
      setStep("confirm");
    }
  };

  const handlePattern = (pat) => {
    setPattern(pat);
    const v = getInterventionVerse(pat, dateKey);
    setVerse(v);
    setStep("verse");
  };

  const handleChoice = (choice) => {
    appendNourishLog({
      entryType: "struggle",
      pattern,
      choice: CHOICE_LABELS[choice].logChoice,
      verseIndex: verse?.index,
    });
    setStep("confirm");
  };

  // Entry screen
  if (step === "entry") {
    return (
      <div className="intervention">
        <div className="intervention__title">What's happening?</div>
        {Object.entries(INTERVENTION_MESSAGES).map(([key, msg]) => (
          <button
            key={key}
            className={`intervention__option${key === "struggle" ? " intervention__option--struggle" : ""}`}
            onClick={() => handleEntry(key)}
          >
            {msg.label}
          </button>
        ))}
        <button className="nourish-btn nourish-btn--ghost" onClick={onClose}>
          Cancel
        </button>
      </div>
    );
  }

  // Pattern selection (struggle path)
  if (step === "pattern") {
    return (
      <div className="intervention">
        <div className="intervention__title">What's the pull?</div>
        {Object.entries(PATTERN_LABELS).map(([key, pat]) => (
          <button
            key={key}
            className="intervention__option"
            onClick={() => handlePattern(key)}
          >
            <div>{pat.label}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
              {pat.subtitle}
            </div>
          </button>
        ))}
        <button className="nourish-btn nourish-btn--ghost" onClick={() => setStep("entry")}>
          Back
        </button>
      </div>
    );
  }

  // Verse display (struggle path)
  if (step === "verse") {
    return (
      <div className="intervention">
        {verse && (
          <>
            <div className="intervention__verse">"{verse.text}"</div>
            <div className="intervention__verse-source">— {verse.source}</div>
          </>
        )}
        <div style={{ marginTop: 24 }}>
          {Object.entries(CHOICE_LABELS).map(([key, ch]) => (
            <button
              key={key}
              className="intervention__option"
              onClick={() => handleChoice(key)}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Confirmation
  if (step === "confirm") {
    const msg = entryType && entryType !== "struggle"
      ? INTERVENTION_MESSAGES[entryType]?.message
      : "Logged. The awareness itself is the practice.";

    return (
      <div className="intervention">
        <div className="intervention__verse">{msg}</div>
        <button className="nourish-btn" onClick={onClose}>
          Done
        </button>
      </div>
    );
  }

  return null;
}
