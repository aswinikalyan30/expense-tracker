/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

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
  IoPieChartOutline,
  IoPieChart,
} from "react-icons/io5";

const Navigation = (props) => {
  const { theme, handleThemeChange } = props;
  return (
    <div className={`navigation ${theme}`}>
      <nav>
        <li className="nav-items">
          <Link className="nav-links" to="/">
            {theme === "light" ? <IoPieChartOutline /> : <IoPieChart />}
          </Link>
        </li>
        <li className="nav-items">
          <button>
            {theme === "light" ? <IoCreateOutline /> : <IoCreate />}
          </button>
        </li>
        <li className="nav-items">
          <Link className="nav-links" to="settings">
            {theme === "light" ? <IoSettingsOutline /> : <IoSettings />}
          </Link>
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
    </div>
  );
};

export default Navigation;
