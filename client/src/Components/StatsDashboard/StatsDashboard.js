import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemStat from "./ItemStat/ItemStat";
import StatCategoryList from "./StatCategoryList/StatCategoryList";
import styles from "./StatsDashboard.module.css";

const StatsDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <span className={`${styles.text} d-block h3 font-weight-bolder py-4`}>
            INTERNATIONAL ALUMNI NETWORK AT A GLANCE
          </span>
        </Col>
        {StatCategoryList.map((item) => (
          <Col md={4} xs={6} key={item.id}>
            <ItemStat title={item.title} count={item.count} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StatsDashboard;
