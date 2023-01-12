import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import SliderData from "../json-data/slider-data.json";
import { Pagination, Navigation } from "swiper";
function Slider({ theme }) {
  const data = SliderData.Brands;

  // Object.values(data).map((k, i) => {
  //   console.log(k.author);
  // });
  console.log(theme);
  return (
    <div className="slider-section">
      <div className="slider-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              // spaceBetween: 20,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Object.values(data).map((k, i) => {
            return (
              <SwiperSlide
                //  className="slider-card"
                className={`slider-card ${
                  theme === "dark" ? "slider-card-dark" : "slider-card-light"
                }`}
              >
                <img
                  src={k["image url"]}
                  alt=""
                  className="brand-img"
                  style={{ marginBottom: 20 }}
                />
                <p className="slider-text">{k.text}</p>
                <h6 className="slider-author">{k.author}</h6>
                {/* {k["author"]} */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;