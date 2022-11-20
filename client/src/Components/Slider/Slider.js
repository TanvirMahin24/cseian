import React from "react";
import { Carousel } from "react-bootstrap";
import data from "./stub/data";
import styles from "./Slider.module.css";
import SliderItem from "./SliderItem/SliderItem";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Carousel
        className="text-dark"
        interval={null}
        slide
        indicators={false}
        prevIcon={
          <svg
            id="Group_5"
            data-name="Group 5"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M22,0l4,4L10.857,19.143H44v5.714H10.857L26,40l-4,4L0,22Z"
              fill="#2699fb"
            />
          </svg>
        }
        nextIcon={
          <svg
            id="Group_1"
            data-name="Group 1"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M22,0,18,4,33.143,19.143H0v5.714H33.143L18,40l4,4L44,22Z"
              fill="#2699fb"
            />
          </svg>
        }
      >
        {data.map((el) => (
          <Carousel.Item
            key={el.id}
            className={`p-md-4 px-md-5  ${styles.carousel__item}`}
          >
            <div className={styles.inner}>
              <SliderItem data={el} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
