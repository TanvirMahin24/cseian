import React from "react";
import styles from "./NewsList.module.css";
import data from "./NewsData/NewsData";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsList = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-start py-4">
          <div className={`${styles.line} order__1`}></div>
          <span className={`${styles.heading} order__2 d-block`}>
            Latest News
          </span>
        </div>
      </div>
      <Row>
        {data.map((news) => (
          <Col key={news.id} md={4} className={`py-3`}>
            <Card className={styles.card} bg="white">
              <Card.Img
                variant="top"
                src={news.img}
                className={styles.crd__img}
              />
              <Card.Body>
                <Card.Title className={styles.crd__title}>
                  {news.title}
                </Card.Title>
                <Card.Link
                  as={Link}
                  to={`/news/${news.id}`}
                  className={styles.crd__link}
                >
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className={styles.more}>
        <span>
          <AiOutlinePlus /> SHOW MORE
        </span>
      </div>
    </div>
  );
};

export default NewsList;
