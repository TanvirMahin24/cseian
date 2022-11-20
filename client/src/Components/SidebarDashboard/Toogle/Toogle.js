import React from "react";
import styles from "./Toogle.module.css";

const Toogle = ({ active, setActive }) => {
  return (
    <div
      className={`${styles.nav__icon} ${active ? styles.open : ""}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Toogle;
