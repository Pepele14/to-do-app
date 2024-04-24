import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //installed 4 packages in total to use icons from fontawesome
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList({ task, todos, setTodos }) {
  //   console.log("Task: ", task); //some debugging dhyarrea
  //   console.log("Task description: ", task.task);

  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task.task);
  const [editDetails, setEditDetails] = useState(task.details);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (taskId) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id === taskId) {
        return { ...todo, task: editTask, details: editDetails };
      }
      return todo;
    });
    setTodos(updatedTasks);
    setIsEditing(false);
  };

  const handleDelete = (taskId) => {
    const filteredTasks = todos.filter((todo) => {
      return todo.id !== taskId;
    });

    console.log("Delete clicked for task:", task.task);
    setTodos(filteredTasks);
  }; //hmm naming may be a bit confusing here

  if (isEditing) {
    return (
      <div className="todolist-task-box">
        <input
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
        <input
          type="text"
          value={editDetails}
          onChange={(e) => setEditDetails(e.target.value)}
        />
        <FontAwesomeIcon icon={faSave} onClick={() => handleSave(task.id)} />
      </div>
    );
  }

  return (
    <div className="todolist-task-box">
      <div className="task-content">
        <Link to={`/task/${task.id}`}>
          <p className="task-text">{task.task}</p>
        </Link>
      </div>
      <div className="task-icons">
        <FontAwesomeIcon icon={faPenSquare} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task.id)} />
      </div>
    </div>
  );
}

export default ToDoList;
