import React from "react";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "🤩", label: "Excited" },
];

function MoodSelector({ selectedMood, setSelectedMood }) {
  return (
    <div className="mb-4 d-flex flex-wrap justify-content-center gap-2">
      {moods.map((mood) => (
        <button
          key={mood.label}
          className={`btn btn-light border ${
            selectedMood === mood.label ? "border-primary" : ""
          }`}
          onClick={() => setSelectedMood(mood.label)}
        >
          <span className="fs-4">{mood.emoji}</span>
          <div className="small">{mood.label}</div>
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;
