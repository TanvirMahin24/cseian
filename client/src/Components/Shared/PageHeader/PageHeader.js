import React from "react";
import styles from "./PageHeader.module.css";

const PageHeader = ({ title, description, bg }) => {
  return (
    <div className={`${styles.section} p-3`} style={{ background: `${bg} ` }}>
      <span className={`${styles.title} d-block`}>{title}</span>
      <span className={`${styles.description} d-block`}>{description}</span>
    </div>
  );
};

export default PageHeader;
