import React from "react";
import styles from "./Icons.module.css";

const Logout = ({ active }) => {
  return (
    <svg
      className={styles.image}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path
        id="Icon_open-account-logout"
        dataname="Icon open-account-logout"
        d="M5.25,0V2h7V12h-7v2H14V0ZM3.5,4,0,7l3.5,3V8h7V6h-7Z"
        fill={active === true ? "#4797D9" : "#666"}
      />
    </svg>
  );
};

export default Logout;
