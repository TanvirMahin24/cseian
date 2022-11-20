import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./SliderItem.module.css";

const SliderItem = ({ data }) => {
  return (
    <Container className={`px-md-5 px-0 ${styles.item}`}>
      <Row className="px-md-4 ">
        <Col
          lg={5}
          md={6}
          xs={12}
          className="px-md-4 p-4 float-left pb-md-5 order__1"
        >
          <div className={` ${styles.card} p-3 pb-5`}>
            <span className={`d-block text-right ${styles.text__title}`}>
              {data.weeks} Weeks
            </span>
            <span className={`d-block pt-3 ${styles.text__title}`}>
              Includes
            </span>
            <span className={`d-block text-wrap  pb-4 ${styles.text__desc}`}>
              {data.includes}
            </span>
            <span className={`d-block ${styles.text__title}`}>Experience</span>
            <span className={`d-block pb-4 ${styles.text__desc}`}>
              {data.experience}
            </span>
            <span className={`d-block ${styles.text__title}`}>
              For those who want to
            </span>
            {data.objective.map((obj) => (
              <span key={obj.id} className={`d-block ${styles.text__desc}`}>
                - {obj.name}
              </span>
            ))}
            <span className={`d-block pt-4 ${styles.text__title}`}>
              Opportunities
            </span>
            {data.opportunities.map((opp) => (
              <span key={opp.id} className={`d-block ${styles.text__desc}`}>
                - {opp.name}
              </span>
            ))}
          </div>
        </Col>
        <Col lg={7} md={6} xs={12} className="pt-md-5 order__2 pb-4">
          <span className="d-block pb-4">Career Path</span>
          <span className={`d-block ${styles.course__title}`}>
            <span className={styles.bold__text}>{data.stack}</span>
            {data.category}
          </span>
          <span className={`d-block py-4  ${styles.text__desc}`}>
            {data.description}
          </span>
          <a href="#!" className={styles.enroll__btn}>
            ENROLL NOW
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default SliderItem;
