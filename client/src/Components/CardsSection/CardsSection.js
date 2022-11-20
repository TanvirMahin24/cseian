import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./CardsSection.module.css";
import CardData from "./CardData/CardData";

const CardsSection = () => {
  return (
    <Row className="py-5">
      <Col xs={12}>
        <span className={`d-block text-center ${styles.heading}`}>
          Why RUET Alumni Association?
        </span>
      </Col>
      {CardData.map((crd) => (
        <Col key={crd.id} className="pt-5">
          <div className={`${styles.card} p-4 h-100`}>
            <div>
              <span className={`${styles.top__text} d-block text-center`}>
                {crd.title}
              </span>
            </div>
            <div className="text-center py-4">
              <img src={crd.image} alt="" className="img-fluid" />
            </div>
            <div className="">
              <span className={styles.desc}>{crd.description}</span>

              {/* <ul>
                {crd.points.map((point) => (
                  <li key={point.id}>{point.text}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CardsSection;
