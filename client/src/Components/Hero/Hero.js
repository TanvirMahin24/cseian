import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import HeroSlider from "./HeroSlider/HeroSlider";

const Hero = () => {
  return (
    <Row className="pt-md-5 pt-4">
      <Col md={6} className="my-auto">
        <span className={`${styles.title} ${styles.text__primary} d-block h3`}>
          The success of any school can be measured by the contribution the
          alumni make to our national life
        </span>
        <span
          className={`${styles.text__primary} ${styles.subheading} pt-3 d-block`}
        >
          -John F. Kennedy
        </span>
        <div className="pt-5">
          <Link
            to="/login"
            className={`${styles.btn} btn btn-outline-dark mr-3`}
          >
            LOG IN
          </Link>
          <Link
            to="/register"
            className={`${styles.btn__danger} btn btn-danger`}
          >
            SIGN UP
          </Link>
        </div>
      </Col>
      <Col md={6} className={styles.wrapper}>
        <div className={`${styles.slider__wrapper} mt-5 mt-md-0`}>
          <HeroSlider />
        </div>
        <div className={styles.quote_section}>
          <span className={styles.quote__text}>
            Rajshahi University of Engineering and Technology Entrance Gate
          </span>
          <span className={styles.quote__text}>- Muhtasim Dian</span>
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
