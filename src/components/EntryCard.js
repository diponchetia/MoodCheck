import React, { useState } from "react";

function EntryCard({ entry, onDelete, onEdit, dark }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(entry.note);

  const handleSave = () => {
    onEdit(editedNote);
    setIsEditing(false);
  };

  return (
    <div className={`card mb-3 ${dark ? "bg-secondary text-white" : ""}`}>
      <div className="card-body">
        <div className="d-flex justify-content-end gap-2">
          {!isEditing ? (
            <>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={onDelete}
              >
                ❌
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-sm btn-success" onClick={handleSave}>
                💾 Save
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  setEditedNote(entry.note);
                  setIsEditing(false);
                }}
              >
                ❌ Cancel
              </button>
            </>
          )}
        </div>

        <h5 className="card-title mt-2">{entry.mood}</h5>

        {isEditing ? (
          <textarea
            className="form-control"
            rows="3"
            value={editedNote}
            onChange={(e) => setEditedNote(e.target.value)}
          ></textarea>
        ) : (
          <p className="card-text">{entry.note}</p>
        )}

        <p className="card-text">
          <small className={dark ? "text-light" : "text-muted"}>
            {entry.date}
          </small>
        </p>
      </div>
    </div>
  );
}

export default EntryCard;
