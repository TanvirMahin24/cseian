import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../../../Actions/Directory.action";
import { commentDelete } from "../../../Actions/Forum.action";
import styles from "./PostComment.module.css";

const PostComment = ({
  commentWonerPicture,
  commentDescription,
  commentWonerName,
  commentWonerId,
  commentId,
  userId,
  commentDelete,
  getProfile,
}) => {
  return (
    <Row className={`py-3`}>
      <Col xs={10} xl={11} className={styles.post}>
        <Row>
          <Col md={12} xl={1}>
            <img
              src={commentWonerPicture}
              alt={commentWonerName}
              className="rounded-circle img-fluid p-2"
              style={{ maxWidth: "50px" }}
            />
          </Col>
          <Col md={12} xl={11}>
            <div
              className={`d-flex justify-content-between align-items-center ${styles.content__wrapper}`}
            >
              <span className={`${styles.author}`}>
                <span
                  onClick={() => getProfile(commentWonerId)}
                  className={styles.text_primary}
                >
                  {commentWonerName}
                </span>
              </span>

              <div className="d-flex align-items-center">
                <span className={`btn btn-danger px-3 ${styles.btn}`}>
                  Comment
                </span>
              </div>
            </div>
            <span className={`d-block ${styles.text} py-3`}>
              <MDEditor.Markdown source={commentDescription} />
            </span>
            {commentWonerId === userId ? (
              <Button
                variant="danger"
                size="sm"
                onClick={() => commentDelete(commentId)}
              >
                Delete
              </Button>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default connect(null, { commentDelete, getProfile })(PostComment);
