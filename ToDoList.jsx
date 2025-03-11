import { useState } from "react";
import "./todoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-wrapper">
      <h2 className="todo-heading">📝 My Tasks</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="input-box"
        />
        <button onClick={addTask} className="add-task-btn">
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="no-tasks-message">You have no pending tasks. Enjoy your day! 🎉</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-entry">
              <span>{task}</span>
              <button onClick={() => removeTask(index)} className="delete-btn">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
