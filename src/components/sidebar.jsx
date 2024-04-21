import React from "react";
import "./Sidebar.css";

function Sidebar({ text }) {
  return (
    <div className="sidebar">
      <a href="#">{text}</a>
    </div>
  );
}

export default Sidebar;

//change a tag with other more relevant
