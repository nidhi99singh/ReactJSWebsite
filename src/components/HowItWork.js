import React from "react";
import "./HowItWork.css";
import { FaRegCheckCircle, FaAngleRight, FaRegEnvelope } from "react-icons/fa";
import { FiUser, FiKey } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function HowItWork({ theme }) {
  return (
    <div
      className={`container ${
        theme === "dark" ? "container-dark" : "container-light"
      }`}
    >
      <div className="heading-section">
        <h4 className="title"> how it work ?</h4>
        <p className="para">
          {" "}
          Strat working with
          <span className="heading-section-span"> Landrick </span>
          that can provide everything you need to generate awareness, drive
          traffic, connect.
        </p>
      </div>
      <div className="section-two">
        <div>
          <img
            src="http://landrick.react.themesbrand.com/static/media/SEO_SVG.27915bc4.svg"
            alt=""
            className="image"
          />
        </div>
        <div>
          <h4 className="title" style={{ fontSize: 28, marginTop: 145 }}>
            Change the way you build websites
          </h4>
          <p className="para">
            You can combine all the Landrick templates into a single one, you
            can take a component from the Application theme and use it in the
            Website.
          </p>
          <ul className="work-list para">
            <li className="list-item">
              <FaRegCheckCircle className="tickcircle-icon" />
              Digital Marketing Solutions for Tomorrow
            </li>
            <li className="list-item">
              <FaRegCheckCircle className="tickcircle-icon" />
              Our Talented & Experienced Marketing Agency
            </li>
            <li className="list-item">
              <span>
                <FaRegCheckCircle className="tickcircle-icon" />
              </span>
              Create your own skin to match your brand
            </li>
          </ul>
          <Link to="">
            <p className="morelink">
              Find out more <FaAngleRight className="arrowright-icon" />
            </p>
          </Link>
        </div>
      </div>
      <div className="section-two">
        <div>
          <h4
            className="title"
            style={{ fontSize: 28, marginTop: 160, maxWidth: 475 }}
          >
            Speed up your development with
            <span className="landrick-word"> Landrick.</span>
          </h4>
          <p className="para">
            Using Landrick to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </p>
          <ul className="work-list para">
            <li className="list-item">
              <FaRegCheckCircle className="tickcircle-icon" />
              Digital Marketing Solutions for Tomorrow
            </li>
            <li className="list-item">
              <FaRegCheckCircle className="tickcircle-icon" />
              Our Talented & Experienced Marketing Agency
            </li>
            <li className="list-item">
              <span>
                <FaRegCheckCircle className="tickcircle-icon" />
              </span>
              Create your own skin to match your brand
            </li>
          </ul>
          <Link to="">
            <p className="morelink">
              Find out more <FaAngleRight className="arrowright-icon" />
            </p>
          </Link>
        </div>
        <div>
          <div
            // className="form-container"
            className={`form-container ${
              theme === "dark" ? "form-container-dark" : "form-container-light"
            }`}
          >
            <img
              src="http://landrick.react.themesbrand.com/static/media/Mobile_notification_SVG.03a47a07.svg"
              alt=""
              className="form-image"
            />
            <form className="login-form">
              <div>
                {" "}
                <label className="input-label">
                  {" "}
                  Name : <span style={{ color: "red" }}>*</span>
                </label>{" "}
                <div className="input-section">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className={`input-field ${
                      theme === "dark"
                        ? "input-field-dark"
                        : "input-field-light"
                    }`}
                  />
                </div>
              </div>
              <div>
                {" "}
                <label className="input-label">
                  {" "}
                  Email : <span style={{ color: "red" }}>*</span>
                </label>
                <div className="input-section">
                  <FaRegEnvelope className="input-icon" />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`input-field ${
                      theme === "dark"
                        ? "input-field-dark"
                        : "input-field-light"
                    }`}
                  />
                </div>
              </div>
              <div>
                {" "}
                <label className="input-label">
                  {" "}
                  Password : <span style={{ color: "red" }}>*</span>
                </label>
                <div className="input-section">
                  <FiKey className="input-icon" />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className={`input-field ${
                      theme === "dark"
                        ? "input-field-dark"
                        : "input-field-light"
                    }`}
                  />
                </div>
              </div>
              <Link to="/">
                <button className="download-btn btn-hover">download</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
