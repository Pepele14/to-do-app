import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-child">
        <Link className="sidebar-item" to="/">
          Home
        </Link>
        <Link className="sidebar-item" to="/about">
          About
        </Link>
        <Link className="sidebar-item" to="/task/:taskId">
          Item Details
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

//change a tag with other more relevant
