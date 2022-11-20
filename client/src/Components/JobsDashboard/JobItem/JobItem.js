import React from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import styles from "./JobItem.module.css";

const JobItem = ({ id, title, company, type, date, location }) => {
  return (
    <div className={styles.wrapper}>
      <Row className={styles.card}>
        <Col md={9} className="p-4 ">
          <span className={`${styles.title} d-block pb-1`}>{title}</span>
          <span className={`${styles.company} d-block pb-1`}>{company}</span>
          <span className={`${styles.location} d-block pb-1`}>{location}</span>
          <span className={`${styles.date} d-block pb-2`}>
            <Moment format="MMM DD, YYYY">{date}</Moment>{" "}
          </span>
          <span className={`${styles.type}`}>{type}</span>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-between align-items-end flex-md-column py-4"
        >
          <Link
            to={`/apply/${id}`}
            className={`${styles.btn_apply} btn btn-dark`}
          >
            Apply
          </Link>
          <Link to={`/job/${id}`} className={styles.link}>
            Read More <BsFillCaretRightFill />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default JobItem;
