import React from "react";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.text} ({task.category})
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
