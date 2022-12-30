import React from "react";
import { Modal } from "react-bootstrap";
import JobPostForm from "./JobPostForm/JobPostForm";

const PublishJob = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={setShow} backdrop="static" centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>New Topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <JobPostForm />
      </Modal.Body>
    </Modal>
  );
};

export default PublishJob;
