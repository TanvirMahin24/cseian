import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className="pb-5">
        <Row>
          <Col md={12} lg={9}>
            <Row>
              <Col md={5} lg={5} className="pt-5">
                <span
                  className={`${styles.link} d-block lead font-weight-bolder text-light`}
                >
                  ABOUT
                </span>
                <span className="d-block pt-3 text-light">
                  The Ruet CSE Alumni Association Represents The Interests Of
                  RUET Graduates Worldwide.
                </span>
              </Col>
              <Col md={4} lg={4} className="pt-5">
                <span
                  className={`${styles.link} d-block font-weight-bolder lead text-light`}
                >
                  Get in Touch
                </span>
                <span className="d-block pt-3 text-light">
                  ruetcsealumni123@gmail.com
                </span>
              </Col>
              <Col md={3} lg={3} className="pt-5">
                <span
                  className={`${styles.link} font-weight-bolder d-block lead text-light`}
                >
                  Our Location
                </span>
                <span className="d-block pt-3 text-light">
                  RUET,Talaimari,Rajshahi
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={3} className="pt-5">
            <div className={styles.social__section}>
              <div className="">
                <span
                  className={`${styles.link} font-weight-bolder d-block lead text-light`}
                >
                  Follow Us
                </span>

                {FooterLinks.map((socialLink) => (
                  <Link
                    to={socialLink.link}
                    key={socialLink.id}
                    className="mr-3"
                  >
                    <img
                      src={socialLink.image}
                      alt={socialLink.name}
                      className={styles.icon}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className="text-center font-weight-normal d-block lead  text-light pt-4">
              <span>
                Powered By :{" "}
                <span className={styles.company__name}> Tanvir Mahin</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
