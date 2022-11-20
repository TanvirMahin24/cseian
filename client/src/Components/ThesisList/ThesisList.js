import React, { useState } from "react";
import ListGroupItem from "../Shared/ListGroupItem/ListGroupItem";
import { PublishThesis } from "./PublishThesis";
import { AiOutlinePlus } from "react-icons/ai";
import data from "./ThesisData/ThesisData";
import styles from "./ThesisList.module.css";

const ThesisList = () => {
  const [create, setCreate] = useState(false);
  return (
    <div className="container-fluid pb-5">
      {create && <PublishThesis show={create} setShow={setCreate} />}
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-start py-4">
          <div className={`${styles.line} order__1`}></div>
          <span className={`${styles.heading} order__2 d-block`}>
            Recent Thesis Published
          </span>
        </div>
        <button
          className={`${styles.btn} btn btn-dark`}
          onClick={() => setCreate(true)}
        >
          Publish a Journal
        </button>
      </div>
      {data.map((item) => (
        <ListGroupItem key={item.id} {...item} />
      ))}
      <div className={styles.more}>
        <span>
          <AiOutlinePlus /> SHOW MORE
        </span>
      </div>
    </div>
  );
};

export default ThesisList;
