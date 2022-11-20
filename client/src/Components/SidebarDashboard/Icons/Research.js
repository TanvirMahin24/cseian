import React from "react";
import styles from "./Icons.module.css";

const Research = ({ active }) => {
  return (
    <svg
      className={styles.image}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path
        id="Icon_material-archive"
        dataname="Icon material-archive"
        d="M17.642,5.734,16.561,4.428A1.129,1.129,0,0,0,15.667,4H6.333a1.156,1.156,0,0,0-.9.428L4.358,5.734A1.523,1.523,0,0,0,4,6.722v9.722A1.56,1.56,0,0,0,5.556,18H16.444A1.56,1.56,0,0,0,18,16.444V6.722a1.523,1.523,0,0,0-.358-.988ZM11,15.278,6.722,11H9.444V9.444h3.111V11h2.722ZM5.649,5.556l.63-.778h9.333l.731.778Z"
        transform="translate(-4 -4)"
        fill={active === true ? "#4797D9" : "#666"}
      />
    </svg>
  );
};

export default Research;
