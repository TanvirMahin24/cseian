import React from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import styles from "./JobItem.module.css";

const JobItem = ({
  id,
  postTitle,
  companyName,
  durationType,
  placementType,
  postDate,
  location,
  deadline,
  applicationlink,
}) => {
  return (
    <div className={styles.wrapper}>
      <Row
        className={`${styles.card} ${
          new Date() > new Date(deadline) ? styles.over : ""
        } `}
      >
        <Col md={9} className="p-4 ">
          <div className="d-flex align-items-center justify-content-between">
            <span className={`${styles.title} d-block pb-1`}>{postTitle}</span>
            <span className={`${styles.date} d-block pb-2`}>
              <Moment format="MMM DD, YYYY">{postDate}</Moment>{" "}
            </span>
          </div>
          <span className={`${styles.company} d-block pb-1`}>
            {companyName}
          </span>
          <span className={`${styles.location} d-block pb-1`}>{location}</span>
          {new Date() > new Date(deadline) ? (
            <span className={`${styles.date}  d-block pb-2`}>
              Application Deadline Has Ended!
            </span>
          ) : (
            <span className={`${styles.date}  d-block pb-2`}>
              Application Deadline ends{" "}
              <u className="text-primary">
                <Moment fromNow>{deadline}</Moment>{" "}
              </u>
            </span>
          )}

          <div className="d-flex align-items-center">
            <span className={`${styles.type} mr-2`}>{durationType}</span>
            <span className={`${styles.type}`}>{placementType}</span>
          </div>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-between align-items-end flex-md-column py-4"
        >
          {applicationlink && new Date() < new Date(deadline) ? (
            <a
              href={applicationlink}
              className={`${styles.btn_apply} btn btn-dark`}
            >
              Apply
            </a>
          ) : (
            <></>
          )}

          <Link to={`/job/${id}`} className={styles.link}>
            Read More <BsFillCaretRightFill />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default JobItem;
