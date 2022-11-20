import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./SignUp.module.css";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <Container fluid>
        <Row className="">
          <Col md={12} lg={6}></Col>
          <Col
            md={12}
            lg={6}
            className={`${styles.form} ${styles.form__wrapper} pt-5 px-5 text-center`}
          >
            <span className={`${styles.title} d-block pt-5 text-center`}>
              SIGN UP
            </span>
            <span className={`${styles.signup__subheading} d-block`}>
              Fill This form to sign up for the Alumni Network
            </span>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
