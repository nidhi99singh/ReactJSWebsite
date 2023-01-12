import React from "react";
import "./SliderSection.css";
import Slider from "./Slider";
import { FaRegCheckCircle } from "react-icons/fa";
export default function SliderSection({ theme }) {
  return (
    <div>
      <div className="sliderSection-container">
        <div className="sliderSection-content">
          <h6 className="sliderSection-head4">
            We believe in building each other and hence
          </h6>
          <div className="SliderSection-heading">
            <h4 className="title" style={{ fontSize: 28 }}>
              Work with some amazing partners
            </h4>
            <p className="para">
              Start working with
              <span className="heading-section-span"> Landrick </span>
              that can provide everything you need to generate awareness, drive
              traffic, connect.
            </p>
          </div>
        </div>
        <div>
          <Slider theme={theme} />
        </div>
      </div>
      <section className="cards-section">
        <div className="cards-container">
          <div className="buynow-content">
            <h4 className="title" style={{ fontSize: 28 }}>
              Our Comfortable Rates
            </h4>
            <p className="para">
              Start working with
              <span className="heading-section-span"> Landrick </span>
              that can provide everything you need to generate awareness, drive
              traffic, connect.
            </p>
            <button className="buynowbtn btn-hover">
              buy now <span className="version-span">v4.2</span>
            </button>
          </div>
          <div className="cards-area">
            <div
              // className="card-1"
              className={`card-1 ${
                theme === "dark" ? "card-1-dark" : "card-1-light"
              }`}
            >
              <h6 className="card-area-title">starter</h6>
              <div className="subscription-charge">
                <span className="pricing">
                  <sup className="dollar-symbol">$</sup>
                  39
                </span>
                <span className="duration">/mo</span>
              </div>
              <ul className="work-list para">
                <li className="list-item">
                  <FaRegCheckCircle className="tickcircle-icon" />
                  Full Access
                </li>
                <li className="list-item">
                  <FaRegCheckCircle className="tickcircle-icon" />
                  Source Files
                </li>
                <li className="list-item">
                  <span>
                    <FaRegCheckCircle className="tickcircle-icon" />
                  </span>
                  Free Appointments
                </li>
                <li className="list-item">
                  <span>
                    <FaRegCheckCircle className="tickcircle-icon" />
                  </span>
                  Enhanced Security
                </li>
              </ul>
              <button className="buynowbtn btn-hover">Try it now</button>
            </div>
            <div
              className={`card-2 ${
                theme === "dark" ? "card-2-dark" : "card-2-light"
              }`}
            >
              <h6 className="card-area-title">professional</h6>
              <div
                // className="subscription-charge"
                className={`subscription-charge ${
                  theme === "dark" ? "charge-dark" : "charge-light"
                }`}
              >
                <span className="pricing">
                  <sup className="dollar-symbol">$</sup>
                  59
                </span>
                <span className="duration">/mo</span>
              </div>
              <ul className="work-list para">
                <li className="list-item">
                  <FaRegCheckCircle className="tickcircle-icon" />
                  Full Access
                </li>
                <li className="list-item">
                  <FaRegCheckCircle className="tickcircle-icon" />
                  Source Files
                </li>
                <li className="list-item">
                  <span>
                    <FaRegCheckCircle className="tickcircle-icon" />
                  </span>
                  Free Appointments
                </li>
                <li className="list-item">
                  <span>
                    <FaRegCheckCircle className="tickcircle-icon" />
                  </span>
                  Enhanced Security
                </li>
              </ul>
              <button className="buynowbtn btn-hover">get started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
