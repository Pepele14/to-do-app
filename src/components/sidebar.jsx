import React from "react";
import "./sidebar.css";

function Sidebar({ text }) {
  return (
    <div className="sidebar">
      <a href="">{text}</a>
    </div>
  );
}

export default Sidebar;
