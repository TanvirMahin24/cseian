import React, { useState } from "react";
import { PageHeader } from "../Shared/PageHeader";
import jobsBg from "../../Assets/PageBg/jobsBg.png";
import styles from "./JobsDashboard.module.css";
import { PublishJob } from "./PublishJob/";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { JobItem } from "./JobItem";
import JobSearch from "./JobSearch/JobSearch";
import data from "./JobsData/JobsData";

const JobsDashboard = () => {
  const [create, setCreate] = useState(false);

  return (
    <>
      {create && <PublishJob show={create} setShow={setCreate} />}
      <JobSearch />
      <PageHeader
        title="Jobs"
        bg={`url(${jobsBg})`}
        description={`From brain science to biomedical engineering to the arts and humanities, Brown researchers fuel discovery, solve global problems and confront complex 21st century challenges with a relentless focus on the greater good`}
      />
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-start py-4">
          <div className={`${styles.line} order__1`}></div>
          <span className={`${styles.heading} order__2 d-block`}>
            Recently Posted Jobs
          </span>
        </div>
        <div className="">
          <button
            className={`${styles.btn} btn btn-dark`}
            onClick={() => setCreate(true)}
          >
            Post a job
          </button>
          <button
            className={`${styles.btn__edit} btn btn-outline-dark`}
            onClick={() => setCreate(true)}
          >
            <BiEdit />
          </button>
        </div>
      </div>
      {data.map((item) => (
        <JobItem key={item.id} {...item} />
      ))}
      <div className={styles.more}>
        <span>
          <AiOutlinePlus /> SHOW MORE
        </span>
      </div>
    </>
  );
};

export default JobsDashboard;
