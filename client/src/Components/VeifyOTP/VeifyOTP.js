import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import LoginForm from "./VeifyOTPForm/VeifyOTPForm";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col md={6}></Col>
          <Col md={6} className={styles.form}>
            <span className={`${styles.title} pb-5 d-block text-center`}>
              LOGIN
            </span>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
