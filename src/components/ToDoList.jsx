import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //installed 4 packages in total to use icons from fontawesome
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ToDoList.css";

function ToDoList({ task }) {
  //   console.log("Task: ", task); //some debugging dhyarrea
  //   console.log("Task description: ", task.task);

  return (
    <div className="todolist-task-box">
      <div className="task-content">
        <p className="task-text">{task.task}</p>
      </div>
      <div className="task-icons">
        <FontAwesomeIcon icon={faPenSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default ToDoList;
