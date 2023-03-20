import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./DashboardPage.module.css";
import { SidebarDashboard } from "../../Components/SidebarDashboard";
import { TopbarDashboard } from "../../Components/TopbarDashboard";
import { Footer } from "../../Components/Footer";
import ProfileModal from "../../Components/Shared/ProfileModal/ProfileModal";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getProfileAuthUser } from "../../Actions/AuthActions";

const DashboardPage = ({
  children,
  user,
  getProfileAuthUser,
  isAuthenticated,
}) => {
  useEffect(() => {
    if (!user) {
      getProfileAuthUser();
    }
  }, []);
  return (
    <div className="bg-light">
      <Row className={styles.md__fix}>
        <Col md={12} className="px-0">
          <TopbarDashboard />
        </Col>
        <Col lg={3} md={4} className="pl-5 pr-4">
          <SidebarDashboard />
        </Col>
        <Col lg={8} md={7} className={styles.wrapper}>
          {children}
        </Col>
      </Row>
      <ProfileModal />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(DashboardPage);
