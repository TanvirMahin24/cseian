import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { connect } from "react-redux";
import { getProfile } from "../../../Actions/Directory.action";
import styles from "./UserItem.module.css";

const UserItem = ({ name, image, id, getProfile }) => {
  return (
    <div className={`${styles.wrapper} py-2`}>
      <div className="">
        <img
          src={image}
          className={`${styles.image} bordered-circle`}
          alt={name}
        />
        <span onClick={() => getProfile(id)} className={styles.name}>
          {name}
        </span>
      </div>
      <div className="">
        <span className={styles.arrow} onClick={() => getProfile(id)}>
          <AiOutlineArrowUp />
        </span>
      </div>
    </div>
  );
};

export default connect(null, { getProfile })(UserItem);
