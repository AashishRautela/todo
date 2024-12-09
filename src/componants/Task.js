import React, { useState } from "react";
import "../styles/Task.css";

const Task = ({ title, description, deleteTask, index, editTask }) => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const toggleEditMode = () => {
    setIsTitleEditing(!isTitleEditing);
  };

  const saveTitle = () => {
    editTask(index, editedTitle);
    toggleEditMode();
  };

  return (
    <div className="task">
      <div>
        {isTitleEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={saveTitle}
            autoFocus
            className="editInput"
          />
        ) : (
          <p onClick={toggleEditMode}>{editedTitle}</p>
        )}
        <span>{description}</span>
      </div>
      {!isTitleEditing && <button onClick={() => deleteTask(index)}>-</button>}
    </div>
  );
};

export default Task;
