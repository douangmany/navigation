import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            link menu
          </Link>
        </div>
      </div>
    </aside>
  );
}
