import React from "react";
import { Modal } from "react-bootstrap";
import { PublishForm } from "./PublishForm";

const PublishResearch = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={setShow} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>New Topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PublishForm />
      </Modal.Body>
    </Modal>
  );
};

export default PublishResearch;
