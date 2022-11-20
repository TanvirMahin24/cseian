import React from "react";
import styles from "./Icons.module.css";

const Forum = ({ active }) => {
  return (
    <svg
      className={styles.image}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path
        id="Icon_material-forum"
        dataname="Icon material-forum"
        d="M15.967,5.467h-1.4v6.3h-9.1v1.4a.7.7,0,0,0,.7.7h7.7l2.8,2.8V6.167A.7.7,0,0,0,15.967,5.467Zm-2.8,4.2v-6.3a.7.7,0,0,0-.7-.7h-9.1a.7.7,0,0,0-.7.7v9.8l2.8-2.8h7a.7.7,0,0,0,.7-.7Z"
        transform="translate(-2.667 -2.667)"
        fill={active === true ? "#4797D9" : "#666"}
      />
    </svg>
  );
};

export default Forum;
