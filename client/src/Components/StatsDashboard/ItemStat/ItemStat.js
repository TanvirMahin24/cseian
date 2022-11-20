import React from "react";
import styles from "./ItemStat.module.css";

const ItemStat = ({ title, count }) => {
  return (
    <div className={`p-2 ${styles.wrapper}`}>
      <span className={`${styles.count} d-block`}>{count}</span>
      <span className={`${styles.text} d-block`}>{title}</span>
    </div>
  );
};

export default ItemStat;
