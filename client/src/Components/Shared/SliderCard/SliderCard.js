import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./SliderCard.module.css";

const SliderCard = ({ data }) => {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.title}>{data.title}</Card.Title>
        <div className="d-block py-1">
          <span className={styles.text}>{data.author} </span>
        </div>
        <div className="d-block py-1">
          <span className={styles.text}>{data.published} </span>
        </div>
        <div className="d-block py-1 pb-4">
          <span className={styles.text}>{data.field} </span>
        </div>

        <Card.Link as={Link} to={data.link} className={`${styles.link} pt-4`}>
          Read More
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SliderCard;
