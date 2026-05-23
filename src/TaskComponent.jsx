import React, { useState } from "react";

function TaskComponent() {
  const [tasks, setTasks] = useState([
    "Go to a shop",
    "Walk with a dog",
    "Study",
  ]);

  const addTask = () => {
    const randomTask = "Go to sleep";
    setTasks((prevItems) => [...prevItems, randomTask]);
  };

  const removeLastTask = () => {
    setTasks((prev) => prev.filter((_, index) => index !== prev.length - 1));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button onClick={addTask}>Add Task</button>
        <button onClick={removeLastTask}>Remove last task</button>
      </div>
    </div>
  );
}

export default TaskComponent;
