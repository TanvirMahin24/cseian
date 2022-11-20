import React from "react";
import { Modal } from "react-bootstrap";
import { PostInForumForm } from "./PostInForumForm";

const PostInForum = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={setShow} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>New Topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostInForumForm />
      </Modal.Body>
    </Modal>
  );
};

export default PostInForum;
