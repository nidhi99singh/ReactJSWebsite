import React, { useState } from "react";
import "./Brands.css";
import sliderData from "../json-data/slider-data.json";
export default function Brands() {
  const [imageUrl] = useState(sliderData.Brands);
  // Object.values(imageUrl).map((k, i) => {
  //   console.log(k["image url"]);
  // });
  return (
    <div className="brands-container">
      <div className="brand-content-box">
        {Object.values(imageUrl).map((k, i) => {
          return (
            <div className="brand">
              <img src={k["image url"]} alt="" className="brand-img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
