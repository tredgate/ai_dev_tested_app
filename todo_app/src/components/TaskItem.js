import React from "react";

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.name}</span>
      <div className="button-group">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
