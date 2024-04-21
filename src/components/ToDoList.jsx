import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //installed 4 packages in total to use icons from fontawesome
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDoList({ task }) {
  return (
    <div className="todolist-task-box">
      <p>{task.task}</p>
      <FontAwesomeIcon icon={faPenSquare} />
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
}

export default ToDoList;
