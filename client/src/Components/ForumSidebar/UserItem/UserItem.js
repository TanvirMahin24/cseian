import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import kFormatter from "../../../Utils/kFormatter";
import styles from "./UserItem.module.css";

const UserItem = ({ name, image, points }) => {
  return (
    <div className={`${styles.wrapper} py-2`}>
      <div className="">
        <img
          src={image}
          className={`${styles.image} bordered-circle`}
          alt={name}
        />
        <Link to={`/profile/${name}`} className={styles.name}>
          {name}
        </Link>
      </div>
      <div className="">
        <span className={styles.point}>{kFormatter(points)}</span>
        <span className={styles.arrow}>
          <AiOutlineArrowUp />
        </span>
      </div>
    </div>
  );
};

export default UserItem;
