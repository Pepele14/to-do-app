import "./ListBackgroundContainer.css";
import ToDoForm from "./ToDoForm";
import { useState } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid"; //installed the package with npm i uuid

uuidv4();

//this is basically the parent element of the todoform
function ListBackgroundContainer() {
  const [todos, setTodos] = useState([]); // state initialised as an empty array that will then get hold of all the cool things we
  //enter such as complimenting pepe for being always cool

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
      console.log(todos),
    ]);
  };
  return (
    <div>
      {/* <h1>Get shit done!</h1> */}
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <ToDoList task={todo} key={index} />
      ))}
    </div>
  );
}

export default ListBackgroundContainer;

// uuidv4() is a function that generates a universally unique identifier (UUID) using version 4 of the UUID specification.
//UUIDs are 128-bit numbers used to uniquely identify information without requiring central coordination.
//They are commonly used in various scenarios where a unique identifier is needed.
