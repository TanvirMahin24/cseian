import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../../Actions/Forum.action";
import { ForumPostDetails } from "../../../Components/ForumPostDetails";
import { ForumPostList } from "../../../Components/ForumPostList";
import { ForumSidebar } from "../../../Components/ForumSidebar";
import { ForumSidebarBtn } from "../../../Components/ForumSidebarBtn";
import PostComment from "../../../Components/PostComment/PostComment";
import PostCommentList from "../../../Components/PostCommentList/PostCommentList";
import LoaderComponent from "../../../Components/Shared/LoaderComponent/LoaderComponent";
import { DashboardPage } from "../../DashboardPage";

const Forum = ({ getPostDetails, data }) => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getPostDetails(id);
    }
  }, [id]);
  return (
    <DashboardPage>
      <Container>
        <Row>
          <Col xs={12} className="pt-4">
            <ForumSidebarBtn />
          </Col>
          <Col md={7} lg={8}>
            {data === null ? (
              <LoaderComponent />
            ) : (
              <>
                <ForumPostDetails {...data} />
                <PostComment postId={id} />
                <PostCommentList id={id} />
              </>
            )}
          </Col>
          <Col md={5} lg={4}>
            <ForumSidebar />
          </Col>
        </Row>
      </Container>
    </DashboardPage>
  );
};
const mapStateToProps = (state) => ({
  data: state.forum.selected_post,
});

export default connect(mapStateToProps, { getPostDetails })(Forum);
