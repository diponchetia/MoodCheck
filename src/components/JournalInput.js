import React from "react";

function JournalInput({ note, setNote, onSave }) {
  return (
    <div className="mb-4">
      <textarea
        className="form-control mb-2"
        rows="4"
        placeholder="Write your thoughts..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button className="btn btn-primary w-100" onClick={onSave}>
        Save Entry
      </button>
    </div>
  );
}

export default JournalInput;
