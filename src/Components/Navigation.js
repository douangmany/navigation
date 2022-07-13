import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaWindowClose } from "react-icons/fa";
import "./Navigation.css";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const ToggleMenu = () => setShowMenu(!showMenu);
  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={ToggleMenu} />
          </Link>
        </div>
      </div>

      <div className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <FaWindowClose onClick={ToggleMenu} />
            </Link>
          </li>
          <li className="nav-menu-text">
            <FaHome />
            <span>ໜ້າຫຼັກ</span>
          </li>
          <li className="nav-menu-text">
            <FaHome />
            <span>ໜ້າຫຼັກ</span>
          </li>
          <li className="nav-menu-text">
            <FaHome />
            <span>ໜ້າຫຼັກ</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
