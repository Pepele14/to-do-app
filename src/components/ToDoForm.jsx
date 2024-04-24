import "./ToDoForm.css";
import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState(""); //using state hook to create state to manage input value - it basically
  //represents the current value of the input field > setValue is a function to update the value state
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // this function is called when the form is submitted - prevents a default form submission which would cause the page to reload
    if (!value.trim()) return; // not to adding empty tasks
    addTodo(value, details); //passed as a props >> is responsible for adding a new to-do item to the list.
    setValue(""); //function is called with an empty string clearing the input field for the next task entry.
    setDetails("");
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Enter a task!"
        onChange={(e) => handleChange(e, setValue)} //arrow function expression - inline
      />

      <input
        type="text"
        className="todo-input"
        value={details}
        placeholder="Enter task details"
        onChange={(e) => handleChange(e, setDetails)} //arrow function expression - inline
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;

// Notes: to test functionality of setValue you can substitute it with console.log and print out whatever you enter
// in the form such as Pepe is very very cool which is always true and good to read

// every time the user types something into the input field, the onChange event is triggered, capturing the new value of the input and updating the component's state with that value using setValue.
// This ensures that the component's state always reflects the current value of the input field.
