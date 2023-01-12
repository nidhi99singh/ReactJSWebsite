import React, { useState } from "react";
import "./Burger.css";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { FaAngleDown } from "react-icons/fa";
import headerData from "../json-data/data.json";
export default function Burger() {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
    console.log(open);
  };
  const [data, setData] = useState(headerData.Header);
  const headings = Object.keys(data);
  return (
    <>
      {/* */}
      {/* // <div className="burger-style" open={open} onClick={() => setOpen(!open)}>
    //   <div style={{ backgroundColor: open ? "#ccc" : "#2648b9" }} />
    //   <div style={{ backgroundColor: open ? "#ccc" : "#2648b9" }} />
    //   <div style={{ backgroundColor: open ? "#ccc" : "#2648b9" }} />
    // </div> */}
      {/* <button onClick={openMenu}>ff</button> */}
      <Hamburger onToggle={openMenu} rounded />
      <div className={open ? "navlist-active" : "navlist-disabled"}>
        <nav>
          <ul className="nav-menu-active">
            {headings.map((item) => {
              return (
                <Link to={{ pathname: item }} className="navlist-item">
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
        </nav>
      </div>{" "}
    </>
  );
}
