import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserList from "../RecentlyJoined/UserList/UserList";
import styles from "./CustomersSection.module.css";

const CustomersSection = () => {
  return (
    <Row className={`py-5`}>
      <Col md={6} className={`${styles.order_1} pt-5`}>
        <Container className="d-flex justify-content-center align-items-center flex-coulmn h-100">
          <Row>
            <Col xs={12}>
              <span
                className={`${styles.title} ${styles.text__primary} text-center d-block h3`}
              >
                Recently Joined Members
              </span>
            </Col>
            {UserList.map((user) => (
              <Col xs={3} className="pt-3" key={user.id}>
                <div
                  className={`rounded-circle overflow-hidden ${styles.img__wrapper}`}
                >
                  <img src={user.image} alt="" className="img-fluid" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
      <Col
        md={6}
        className={`${styles.wrapper} ${styles.order_2} pt-md-5 pt-0 overflow-hidden bg-white`}
      >
        <span
          className={`${styles.title} ${styles.text__primary} pt-md-4 pt-0 d-block h3`}
        >
          More than 150 members in 14 various counties joined the alumni program
        </span>
        <span
          className={`${styles.text__primary} ${styles.subheading} pt-3 d-block pb-4`}
        >
          What are you waiting for then ? Click join and get started with alumni
          events and programs
        </span>
        <div className={`${styles.counts__wrapper} py-3`}>
          <div className={styles.counts__item}>
            <span
              className={`${styles.title} ${styles.text__primary}  d-block h3`}
            >
              150
            </span>
            <span
              className={`${styles.title} ${styles.text__primary}  d-block h3`}
            >
              Members
            </span>
          </div>
          <div className={`${styles.counts__item} ${styles.border__left}`}>
            <span
              className={`${styles.title} ${styles.text__primary}  d-block h3`}
            >
              14
            </span>
            <span
              className={`${styles.title} ${styles.text__primary}  d-block h3`}
            >
              Countries
            </span>
          </div>
        </div>
        <Link
          to="/register"
          className={`${styles.btn} btn btn-danger btn-block mt-4`}
        >
          JOIN OUR ALUMNI NETWORK NOW
        </Link>
      </Col>
    </Row>
  );
};

export default CustomersSection;
