import React from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../../../Actions/Directory.action";
import styles from "./Directory.module.css";

const Directory = ({ data, getProfile }) => {
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
      <span
        onClick={() => getProfile(data.alumniStudentId)}
        className={styles.link}
      >
        View Profile
      </span>
    </Col>
  );
};

export default connect(null, { getProfile })(Directory);
