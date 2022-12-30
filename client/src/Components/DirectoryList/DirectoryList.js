import React from "react";
import { Container, Row } from "react-bootstrap";
import { Directory } from "./Directory";

const DirectoryList = ({ data }) => {
  return (
    <Container>
      <Row className="py-5">
        {data.map((item, i) => (
          <Directory key={i} data={item} />
        ))}
      </Row>
    </Container>
  );
};

export default DirectoryList;
