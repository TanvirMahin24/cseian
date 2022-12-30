import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Directory.module.css";

const Directory = ({ data }) => {
  console.log(data);
  return (
    <Col lg={3} md={4} sm={6} className="p-3">
      <img
        src={data.alumniPicture}
        className={`${styles.img} rounded-circle`}
        alt={data.alumniName}
      />
      <span className={`d-block pb-1 pt-3 ${styles.name}`}>{`${
        data.alumniName
      } ('${parseInt(data.alumniStudentId / 100000)} Series)`}</span>
      <Link to={`/directory/${data.alumniStudentId}`} className={styles.link}>
        View Profile
      </Link>
    </Col>
  );
};

export default Directory;
