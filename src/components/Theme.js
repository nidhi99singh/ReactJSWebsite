import React, { useState } from "react";
import "./Theme.css";

import { MdSettings } from "react-icons/md";

export default function Theme(props) {
  const [themeMenu, setThemeMenu] = useState(false);
  console.log("props", props.theme);
  const themeChange = () => {
    setThemeMenu(!themeMenu);
  };
  return (
    <div className={themeMenu ? "show-theme-section" : "theme-section"}>
      <div
        className={`theme-switcher-section
        ${
          props.theme === "dark"
            ? "settings-icon-left-dark"
            : "settings-icon-left-light"
        }`}
      >
        <h3 className="theme-option">Theme Option</h3>
        <div>
          <form>
            <button
              className="themebtn lightbtn btn-hover"
              onClick={props.themeFunction}
            >
              Light
            </button>
            <button
              className="themebtn darkbtn btn-hover"
              onClick={props.themeFunction}
            >
              Dark
            </button>
            <button className="themebtn lightbtn btn-hover">RTL</button>
            <button className="themebtn darkbtn btn-hover">Dark-RTL</button>
          </form>
        </div>
      </div>
      <div>
        <div
          className={`settings-icon-left ${
            props.theme === "dark"
              ? "settings-icon-left-dark"
              : "settings-icon-left-light"
          }`}
          onClick={themeChange}
        >
          <MdSettings className="theme-icon" />
        </div>{" "}
      </div>
    </div>
  );
}
