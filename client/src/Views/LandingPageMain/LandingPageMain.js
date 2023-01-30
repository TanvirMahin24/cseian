import React from "react";
import styles from "./LandingPageMain.module.css";
import { Container } from "react-bootstrap";
import { CardsSection } from "../../Components/CardsSection";
import { CustomersSection } from "../../Components/CustomersSection";
import { Footer } from "../../Components/Footer";
import { Hero } from "../../Components/Hero";
import { Navbar } from "../../Components/Navbar";
import AuthRedirectHOC from "../../Utils/AuthRedirectHOC/AuthRedirectHOC";

const LandingPageMain = () => {
  return (
    <AuthRedirectHOC>
      <div className={styles.wrapper}>
        <div className={styles.slider__bg}></div>
      </div>
      <Container>
        <Navbar logo landing />
        <Hero />
        <CustomersSection />
        <CardsSection />
      </Container>
      <Footer />
    </AuthRedirectHOC>
  );
};

export default LandingPageMain;
