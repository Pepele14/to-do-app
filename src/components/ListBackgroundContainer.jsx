import "./ListBackgroundContainer.css";
import ToDoForm from "./ToDoForm";
import { useState } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid"; //installed the package with npm i uuid

//this is basically the parent element of the todoform
function ListBackgroundContainer() {
  const [todos, setTodos] = useState([]); // state initialised as an empty array that will then get hold of all the cool things we
  //enter such as complimenting pepe for being always cool
  // console.log("Todos: ", todos);

  const addTodo = (todoDescription) => {
    const newTodo = {
      id: uuidv4(),
      task: todoDescription,
      completed: false,
      isEditing: false,
    };
    const updatedTodos = [...todos, newTodo];
    // console.log("Updated Todos:", updatedTodos);
    setTodos(updatedTodos);
  };
  return (
    <div className="list-container">
      <div className="form-container">
        <ToDoForm addTodo={addTodo} />
      </div>

      <div className="todos-container">
        {todos.map((todo) => (
          <ToDoList
            task={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
}

export default ListBackgroundContainer;

// uuidv4() is a function that generates a universally unique identifier (UUID) using version 4 of the UUID specification.
//UUIDs are 128-bit numbers used to uniquely identify information without requiring central coordination.
//They are commonly used in various scenarios where a unique identifier is needed.
