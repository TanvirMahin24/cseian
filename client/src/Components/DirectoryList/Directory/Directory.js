import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Directory.module.css";

const Directory = ({ image, name, series, link }) => {
  return (
    <Col lg={3} md={4} sm={6} className="p-3">
      <img src={image} className={`${styles.img} rounded-circle`} alt={name} />
      <span
        className={`d-block pb-1 pt-3 ${styles.name}`}
      >{`${name} ('${series} Series)`}</span>
      <Link to={link} className={styles.link}>
        View Profile
      </Link>
    </Col>
  );
};

export default Directory;
