import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link className="sidebar-item" to="/">
        Home
      </Link>
      <Link className="sidebar-item" to="/about">
        About
      </Link>
    </div>
  );
}

export default Sidebar;
