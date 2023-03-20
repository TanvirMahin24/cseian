import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Verify.module.css";
import VerifyForm from "./VerifyForm/VerifyForm";

const Verify = ({ id }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col md={6}></Col>
          <Col md={6} className={styles.form}>
            <span className={`${styles.title} pb-5 d-block text-center`}>
              Enter Verification Code
            </span>
            <VerifyForm id={id} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Verify;
