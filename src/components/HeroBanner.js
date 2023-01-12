import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

import { FaBook, FaRegEnvelope } from "react-icons/fa";
export default function HeroBanner({ theme }) {
  return (
    <div className="main-container">
      <div>
        <div className="herobanner-content">
          <h1 className="title-heading">
            our creativity is your
            <span> success</span>{" "}
          </h1>
          <p className="title-paragraph">
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered bootstrap v5 html page.
          </p>
          <div className="buttons">
            <Link to="start">
              <button className="startbtn btn-hover">
                <FaRegEnvelope className="icon" />
                get started
              </button>
            </Link>
            <Link to="start">
              <button
                className={`documentationbtn ${
                  theme === "dark" ? "dark" : "documentationbtn-light"
                }`}
                // className={`documentationbtn ${
                //   theme === "dark" ? "dark" : "documentationbtn-light"
                // }`}
              >
                <FaBook className="icon" />
                documentation
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          src="http://landrick.react.themesbrand.com/static/media/Startup_SVG.d6335a12.svg"
          className="herobanner-image"
        />
      </div>
    </div>
  );
}
