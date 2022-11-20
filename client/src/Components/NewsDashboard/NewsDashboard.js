import React from "react";
import { Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./NewsDashboard.module.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import NewsList from "./NewsList/NewsList";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const NewsDashboard = () => {
  return (
    <Container fluid>
      <span className={`${styles.text} d-block dashboard__title pt-5 pb-4`}>
        Latest News
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
        {NewsList.map((news) => (
          <SwiperSlide key={news.id}>
            <Card className={styles.card} bg="white">
              <Card.Img
                variant="top"
                src={news.img}
                className={styles.crd__img}
              />
              <Card.Body>
                <Card.Title className={styles.crd__title}>
                  {news.title}
                </Card.Title>
                <Card.Link
                  as={Link}
                  to={news.link}
                  className={styles.crd__link}
                >
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default NewsDashboard;
