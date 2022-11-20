import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";

const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
    </Container>
  );
};

export default LandingPage;
