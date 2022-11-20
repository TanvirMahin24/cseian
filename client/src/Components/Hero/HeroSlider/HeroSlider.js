import React from "react";
import SliderData from "./SliderData/SliderData";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const HeroSlider = () => {
  return (
    <div id="hero__slider">
      <Swiper
        slidesPerView={1}
        navigation
        className=""
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {SliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              style={{ height: "400px", minWidth: "100%" }}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
