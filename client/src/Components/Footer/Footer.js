import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.pt}>
      <div className={styles.wrapper}>
        <div className="">
          <span className="d-block pt-3 text-center h2">CSEIAN</span>

          <span className="d-block pb-4 pt-3 text-center fs-5 w-75 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptatibus eligendi dolorum, nulla qui quod deserunt voluptatum
            alias commodi temporibus.
          </span>

          <hr className="w-50 mx-auto" />
          <span className="d-block text-center fw-bold">
            Helpline: 0123456789
          </span>
          <span className="fs-5 text-center d-block pt-3">
            &copy;{new Date().getFullYear()} by Dept. of Computer Science and
            Engineering. RUET
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
