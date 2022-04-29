/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

//importing stylesheets
import "./../scss/Navigation.scss";

//importing icons from react-icons
import {
  IoSunnyOutline,
  IoMoon,
  IoExitOutline,
  IoExit,
  IoSettingsOutline,
  IoSettings,
  IoCreateOutline,
  IoCreate,
  IoClipboard,
  IoClipboardOutline,
  IoPieChartOutline,
  IoPieChart,
} from "react-icons/io5";


const Navigation = (props) => {
  const { theme, handleThemeChange, setShowForm } = props;
  return (
    <nav className={`navigation ${theme}`}>
      <li className="nav-items">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "nav-links" + (isActive ? " active" : "")
          }
        >
          {theme === "light" ? <IoPieChartOutline /> : <IoPieChart />}
        </NavLink>
      </li>
      <li className="nav-items">
        <NavLink
          to="settings"
          className={({ isActive }) =>
            "nav-links" + (isActive ? " active" : "")
          }
        >
          {theme === "light" ? <IoSettingsOutline /> : <IoSettings />}
        </NavLink>
      </li>
      <li className="nav-items">
        <NavLink 
          to="transaction"
          className={({ isActive }) => 
            'nav-links' + (isActive ? ' active' : '')
        } 
        >
          {theme === 'light' ? <IoClipboardOutline /> : <IoClipboard />}
        </NavLink>
      </li>
      <li className="nav-items">
        <button>{theme === "light" ? <IoExitOutline /> : <IoExit />}</button>
      </li>
      <li className="nav-items">
        <button onClick={() => handleThemeChange()}>
          {theme === "light" ? <IoSunnyOutline /> : <IoMoon />}
        </button>
      </li>
    </nav>
  );
};

export default Navigation;
