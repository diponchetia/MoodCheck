import React, { useState, useEffect } from "react";
import MoodSelector from "./components/MoodSelector";
import JournalInput from "./components/JournalInput";
import EntryList from "./components/EntryList";

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);
  const [dark, setDark] = useState(false);
  const [filterMood, setFilterMood] = useState("All");

  // Load saved entries
  useEffect(() => {
    const stored = localStorage.getItem("moodboard-entries");
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  // Save entries to localStorage
  useEffect(() => {
    localStorage.setItem("moodboard-entries", JSON.stringify(entries));
  }, [entries]);

  // Apply or remove full dark mode on body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  const handleSave = () => {
    if (!selectedMood || !note.trim()) return;

    const newEntry = {
      mood: selectedMood,
      note,
      date: new Date().toLocaleDateString(),
    };

    setEntries([newEntry, ...entries]);
    setNote("");
    setSelectedMood(null);
  };

  const handleDelete = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  const handleEdit = (index, newNote) => {
    const updated = [...entries];
    updated[index].note = newNote;
    setEntries(updated);
  };

  const filteredEntries =
    filterMood === "All"
      ? entries
      : entries.filter((entry) => entry.mood === filterMood);

  return (
    <div className={`container py-5 ${dark ? "text-light" : ""}`}>
      <div className="text-end mb-3">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setDark(!dark)}
        >
          {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1 className="text-center mb-3">🧠 MoodBoard</h1>
      <p className="text-center text-muted mb-4">
        Track your daily mood and thoughts
      </p>

      <MoodSelector
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />
      <JournalInput note={note} setNote={setNote} onSave={handleSave} />

      <div className="mb-4">
        <label className="form-label fw-bold">Filter by Mood:</label>
        <select
          className="form-select"
          value={filterMood}
          onChange={(e) => setFilterMood(e.target.value)}
        >
          <option>All</option>
          <option>Happy</option>
          <option>Tired</option>
          <option>Sad</option>
          <option>Angry</option>
          <option>Anxious</option>
          <option>Excited</option>
        </select>
      </div>

      <EntryList
        entries={filteredEntries}
        onDelete={handleDelete}
        onEdit={handleEdit}
        dark={dark}
      />
    </div>
  );
}

export default App;
