import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getDashboardData } from "../../Actions/DashboardActions";
import ItemStat from "./ItemStat/ItemStat";
import StatCategoryList from "./StatCategoryList/StatCategoryList";
import styles from "./StatsDashboard.module.css";

const StatsDashboard = ({ data, getDashboardData }) => {
  useEffect(() => {
    if (!data) {
      getDashboardData();
    }
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <span className={`${styles.text} d-block h3 font-weight-bolder py-4`}>
            INTERNATIONAL ALUMNI NETWORK AT A GLANCE
          </span>
        </Col>
        {data ? (
          <>
            <Col md={4} xs={6}>
              <ItemStat title={"Total Member"} count={data?.totalMember} />
            </Col>
            <Col md={4} xs={6}>
              <ItemStat title={"Total Faculty"} count={data?.totalFaculty} />
            </Col>
            <Col md={4} xs={6}>
              <ItemStat title={"Total Alumni"} count={data?.totalAlumni} />
            </Col>
            <Col md={4} xs={6}>
              <ItemStat
                title={"Countries"}
                count={data?.totalCountriesWeSpread}
              />
            </Col>
            <Col md={4} xs={6}>
              <ItemStat title={"Total Posts"} count={data?.totalPostsInForum} />
            </Col>
            <Col md={4} xs={6}>
              <ItemStat title={"Total Jobs"} count={data?.totalJobWeOffered} />
            </Col>
          </>
        ) : (
          <>Loading...</>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  data: state.auth.dashboard,
});

export default connect(mapStateToProps, { getDashboardData })(StatsDashboard);
