import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails({ todos }) {
  const { taskId } = useParams();
  const task = todos.find((t) => t.id === taskId);

  if (!task) {
    return <div>Task not found!</div>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      <p>
        <strong>Task:</strong> {task.task}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {task.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
}

export default ItemDetails;
