import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul className="TaskList">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
