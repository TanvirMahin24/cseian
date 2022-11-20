import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import styles from "./Navbar.module.css";
import logoImg from "../../Assets/Logo.svg";
import companyLogo from "../../Assets/SignUpForm/topLogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ logo, auth, login, landing, signup }) => {
  return (
    <BootstrapNavbar
      bg="none"
      expand="md"
      id="navbar"
      className={`${styles.nav} ${(login || signup) && styles.nav__top}`}
    >
      {!auth && (
        <BootstrapNavbar.Brand as={Link} to="/dashboard">
          <img
            src={logo ? companyLogo : logoImg}
            alt=""
            className={styles.nav__brand}
          />
        </BootstrapNavbar.Brand>
      )}
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-center text-md-left">
          {/*     
          <Nav.Link
            as={Link}
            to="/"
            className={` ${styles.nav__link} text-primary`}
          >
            HOME
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard"
            className={` ${styles.nav__link} text-primary`}
          >
            DASHBOARD
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/landing-page"
            className={` ${styles.nav__link} text-primary`}
          >
            LANDING PAGE
          </Nav.Link>
               
          <Nav.Link
            href="#link"
            className={`${styles.nav__link} text-primary `}
          >
            CATALOG
          </Nav.Link>  <Nav.Link
            href="#link"
            className={`${styles.nav__link} text-primary `}
          >
            COMMUNITY
          </Nav.Link> 
          <Nav.Link
            href="#link"
            className={`${styles.nav__link} text-primary `}
          >
            BLOG
          </Nav.Link>
          */}
        </Nav>
        <Nav className={`text-center text-md-left ${styles.right__nav}`}>
          {!auth && (
            <>
              <Nav.Link
                as={Link}
                to="/login"
                className={`${styles.nav__link} ${
                  signup ? styles.nav__login__red : styles.nav__login
                } ${login && styles.active} ml-md-auto mx-auto `}
              >
                LOG IN
              </Nav.Link>
              {!landing && (
                <Nav.Link
                  as={Link}
                  to="/signup"
                  className={`${styles.nav__link} ${styles.nav__login__red} ${
                    signup && styles.active
                  } ml-md-auto mx-auto `}
                >
                  SIGN UP
                </Nav.Link>
              )}
              {landing && (
                <Nav.Link
                  as={Link}
                  to="/signup"
                  className={`btn btn-danger mx-auto mx-md-right ${styles.nav__btn}`}
                >
                  SIGN UP
                </Nav.Link>
              )}
            </>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
