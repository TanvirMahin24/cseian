import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ThesisDashboard.module.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import ThesisList from "./ThesisList/ThesisList";
import SliderCard from "../Shared/SliderCard/SliderCard";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const ThesisDashboard = () => {
  const [slideCount, setSlideCount] = useState(3);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlideCount(1);
    }
  }, [slideCount]);
  return (
    <Container fluid>
      <span className={`${styles.text} d-block dashboard__title pt-5 pb-4`}>
        Latest Thesis
      </span>
      <Swiper
        breakpoints={{
          200: {
            width: 300,
            slidesPerView: 1,
          },
          767: {
            width: 600,
            slidesPerView: 2,
          },
          1000: {
            width: 900,
            slidesPerView: 3,
          },
        }}
        spaceBetween={50}
        navigation
        pagination={{
          clickable: true,
        }}
        className="d-block pb-5 px-5"
      >
        {ThesisList.map((research) => (
          <SwiperSlide key={research.id}>
            <SliderCard data={research} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ThesisDashboard;
