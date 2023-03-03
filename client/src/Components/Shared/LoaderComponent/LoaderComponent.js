import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: 500 }}
    >
      <Spinner animation="grow" />
    </div>
  );
};

export default LoaderComponent;
