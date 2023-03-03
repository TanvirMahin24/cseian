import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./TopbarDashboard.module.css";

import logo from "../../Assets/logo.png";
//import notificationIcon from "../../Assets/Navbar/NotificationIcon.svg";
//import blankImg from "../../Assets/SignUpForm/defaultImg.png";
import { Link } from "react-router-dom";

const TopbarDashboard = () => {
  return (
    <div className=" ">
      <Navbar bg="white" expand="md" className={`${styles.navbar}`}>
        <Navbar.Brand as={Link} to="/" className="pl-0">
          <img
            src={logo}
            className={`${styles.img}`}
            alt="RUET International Alumni Network"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll" className="d-none d-md-block">
          <Nav className="ml-auto my-lg-0 pr-4">
            {/*<Nav.Link href="#action2" className="mt-1">
              <img
                src={notificationIcon}
                alt="notification"
                style={{ height: "25px" }}
              />
            </Nav.Link>
             <NavDropdown
              alignRight
              title={
                <img
                  src={blankImg}
                  style={{ height: "35px" }}
                  className="rounded-circle"
                  alt=""
                />
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopbarDashboard;
