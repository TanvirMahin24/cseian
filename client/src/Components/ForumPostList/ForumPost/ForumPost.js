import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import CharLimit from "../../../Utils/CharLimit";
import styles from "./ForumPost.module.css";

const ForumPost = ({
  postWonerPicture,
  postDate,
  postDescription,
  postWonerName,
  postWonerId,
  postId,
  postTitle,
}) => {
  // let voteActive = "";
  // upvote_users.filter((vote) => (vote.id === 1 ? (voteActive = "UP") : null));
  // downvote_users.filter((vote) =>
  //   vote.id === 1 ? (voteActive = "DOWN") : null
  // );
  return (
    <Row className={`py-3`}>
      {/* <Col xs={2} xl={1} className="d-flex flex-column align-items-center">
        <span
          className={`d-block ${styles.arrow} ${
            voteActive === "UP" ? styles.active : ""
          }`}
        >
          <AiOutlineArrowUp />
        </span>
        <span
          className={`d-block ${styles.vote__text} ${
            voteActive !== "" ? styles.active : ""
          }`}
        >
          {vote}
        </span>
        <span
          className={`d-block ${styles.arrow} ${
            voteActive === "DOWN" ? styles.active : ""
          }`}
        >
          <AiOutlineArrowDown />
        </span>
      </Col> */}
      <Col xs={10} xl={11} className={styles.post}>
        <Row>
          <Col md={12} xl={1}>
            <img
              src={postWonerPicture}
              alt={postWonerName}
              className="rounded-circle img-fluid p-2"
              style={{ maxWidth: "50px" }}
            />
          </Col>
          <Col md={12} xl={11}>
            <div
              className={`d-flex justify-content-between align-items-center ${styles.content__wrapper}`}
            >
              <div className="d-flex align-items-center">
                <Link to={`/post/${postId}`} className={`${styles.title} pr-2`}>
                  {postTitle}
                </Link>
                <span className={`btn btn-danger px-3 ${styles.btn}`}>
                  Question
                </span>
              </div>
              <div className="">
                <span className={styles.time}>
                  <Moment fromNow>{postDate}</Moment>
                </span>
              </div>
            </div>
            <span className={`d-block ${styles.text} py-3`}>
              {CharLimit(postDescription, 450)}
            </span>
            <div className="d-flex justify-content-between align-items-center">
              <span className={`${styles.author}`}>
                Posted By{" "}
                <Link
                  to={`/profile/${postWonerId}`}
                  className={styles.text_primary}
                >
                  {postWonerName}
                </Link>
              </span>
              <Link to={`/post/${postId}`} className={styles.link}>
                <BsArrowReturnRight />
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ForumPost;
