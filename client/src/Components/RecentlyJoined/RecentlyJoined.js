import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./RecentlyJoined.module.css";
import UserList from "./UserList/UserList";

const RecentlyJoined = () => {
  return (
    <Row className="py-5">
      <Col md={6} className="my-auto">
        <span className={`${styles.title} ${styles.text__primary}  d-block h3`}>
          LOREM IPSUM DOLOR AMET CONSECTETUER LOREM IPSUM{" "}
        </span>
        <span
          className={`${styles.text__primary} ${styles.subheading} pt-3 d-block`}
        >
          LOREM IPSUM DOLOR AMET CONSECTETUER LOREM IPSUM DOLOR AMET
          CONSECTETUER
        </span>
        <Link
          to="/register"
          className={`${styles.btn} btn btn-outline-primary mt-4`}
        >
          SIGN UP
        </Link>
      </Col>
      <Col md={6}>
        <Container>
          <Row>
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
    </Row>
  );
};

export default RecentlyJoined;
