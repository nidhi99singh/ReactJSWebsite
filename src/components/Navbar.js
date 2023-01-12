import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaAngleDown } from "react-icons/fa";
import { CiSettings, CiShoppingCart } from "react-icons/ci";
import headerData from "../json-data/data.json";
import Burger from "./Burger";
function Navbar({ theme }) {
  const [data, setData] = useState(headerData.Header);
  const headings = Object.keys(data);
  // console.log(data);
  // console.log(headings);
  Object.values(data).map((k, i) => {
    // console.log(Object.keys(k));

    Object.values(k).map((item) => {
      item.map((x) => {
        console.log(x);
      });
    });
  });
  return (
    <header>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <Link to={{ pathname: "/" }}>
              <h1>landrick</h1>
            </Link>
          </div>
          <div className="navigation-menu">
            <ul className="navlist">
              {headings.map((item) => {
                return (
                  <Link
                    to={{ pathname: item }}
                    className={`navlist-item ${
                      theme === "dark" ? "dark" : "light"
                    }`}
                  >
                    <li>
                      {item}
                      <span>
                        <FaAngleDown />
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="icons-extra">
            <div className="icons">
              <Link to="/">
                <CiSettings
                  className={`settings-icons ${
                    theme === "dark" ? "dark" : "settings-icons-light"
                  }`}
                />
              </Link>
            </div>
            <div className="icons">
              <Link to="/">
                <CiShoppingCart className="cart-icons btn-hover" />
              </Link>
            </div>
          </div>
          <div className="hamburger-menu">
            <Burger />
          </div>
        </div>
        {/* <div className="subnav-manu">
          {Object.values(data).map((k, i) => {
            return (
              <div className={Object.keys(k)}>
                <ul className="submenu-list">
                  <h1>{Object.keys(k)}</h1>
                  {Object.values(k).map((item, i) => {
                    return item.map((it) => {
                      // return   {it=== FullDemo? <li>{it}</li>; :""}
                      return <li>{it}</li>;
                    });
                  })}
                </ul>
              </div>
            );
          })}
        </div> */}
      </div>
      {/* <Burger /> */}
    </header>
  );
}
export default Navbar;
