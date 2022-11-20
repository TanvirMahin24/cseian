import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ForumPostList } from "../../../Components/ForumPostList";
import { ForumSidebar } from "../../../Components/ForumSidebar";
import { ForumSidebarBtn } from "../../../Components/ForumSidebarBtn";
import { SearchComponent } from "../../../Components/Shared/SearchComponent";
import { DashboardPage } from "../../DashboardPage";

const Forum = () => {
  return (
    <DashboardPage>
      <Container>
        <Row>
          <Col xs={12} className="pt-4">
            <ForumSidebarBtn />
          </Col>
          <Col md={7} lg={8}>
            <SearchComponent placeholder="Search Forums" />
            <ForumPostList />
          </Col>
          <Col md={5} lg={4}>
            <ForumSidebar />
          </Col>
        </Row>
      </Container>
    </DashboardPage>
  );
};

export default Forum;
