import React from "react";
import EntryCard from "./EntryCard";

function EntryList({ entries, onDelete, onEdit, dark }) {
  if (entries.length === 0) {
    return <p className="text-center text-muted">No entries yet.</p>;
  }

  return (
    <div>
      <h4 className="mb-3">🗓️ Mood Journal</h4>
      {entries.map((entry, index) => (
        <EntryCard
          key={index}
          entry={entry}
          onDelete={() => onDelete(index)}
          onEdit={(newNote) => onEdit(index, newNote)}
          dark={dark}
        />
      ))}
    </div>
  );
}

export default EntryList;
