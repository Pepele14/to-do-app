import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //installed 4 packages in total to use icons from fontawesome
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./ToDoList.css";

function ToDoList({ task, todos, setTodos }) {
  //   console.log("Task: ", task); //some debugging dhyarrea
  //   console.log("Task description: ", task.task);

  const handleEdit = () => {
    console.log("Edit clicked for task:", task.task);
  };

  const handleDelete = (taskId) => {
    const filteredTasks = todos.filter((todo) => {
      return todo.id !== taskId;
    });
    console.log("Delete clicked for task:", task.task);
    setTodos(filteredTasks);
  }; //hmm naming may be a bit confusing here

  return (
    <div className="todolist-task-box">
      <div className="task-content">
        <Link to={`/task/${task.id}`}>
          <p className="task-text">{task.task}</p>
        </Link>
      </div>
      <div className="task-icons">
        <FontAwesomeIcon
          icon={faPenSquare}
          onClick={() => console.log("Edit task:", task.task)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task.id)} />
      </div>
    </div>
  );
}

export default ToDoList;
