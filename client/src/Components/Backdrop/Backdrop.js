import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ setShowBackdrop }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={() => setShowBackdrop(false)}
    ></div>
  );
};

export default Backdrop;
