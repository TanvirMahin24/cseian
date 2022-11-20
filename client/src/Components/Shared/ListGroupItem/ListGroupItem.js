import React from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import styles from "./ListGroupItem.module.css";

const ListGroupItem = ({
  id,
  title,
  author,
  image,
  tags,
  date,
  publication,
}) => {
  return (
    <div className={styles.wrapper}>
      <Row className={styles.card}>
        <Col md={9} className="p-4  order__1">
          <span className={`${styles.title} d-block`}>{title}</span>
          <span className={`${styles.author} d-block`}>{author}</span>
          <div>
            <span className={`${styles.date} pr-2`}>
              <Moment format="MMM DD, YYYY">{date}</Moment>{" "}
            </span>
            <span className={styles.publication}>{publication}</span>
          </div>
          <div>
            {tags.map((tag, i) => (
              <span key={i} className={styles.tag}>
                #{tag.name}
              </span>
            ))}
          </div>
          <Link to={`/research/${id}`} className={styles.link}>
            Read More <BsFillCaretRightFill />
          </Link>
        </Col>
        <Col md={3} className="text-right order__2">
          <img
            src={image}
            className={`p-4 img-fluid ${styles.image} `}
            alt={title}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ListGroupItem;
