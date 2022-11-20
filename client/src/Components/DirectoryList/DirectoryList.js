import React from "react";
import { Container, Row } from "react-bootstrap";
import { Directory } from "./Directory";
import data from "./DirectoryData/DirectoryData";

const DirectoryList = () => {
  return (
    <Container>
      <Row className="py-5">
        {data.map((item) => (
          <Directory key={item.id} {...item} />
        ))}
      </Row>
    </Container>
  );
};

export default DirectoryList;
