import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./JobSearch.module.css";

const JobSearch = ({ search, setSearch, searchJob }) => {
  const [type, setType] = useState("");
  const [placement, setPlacement] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    searchJob(search, 0, type, placement, true);
  };

  return (
    <div className={styles.search__section}>
      <form className={styles.form} onSubmit={(e) => submitHandeler(e)}>
        <div className={`${styles.search__wrapper} pl-3`}>
          <AiOutlineSearch className="" />
          <input
            type="text"
            placeholder={`Search for Jobs`}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
          />
        </div>
        <select
          name="type"
          onChange={(e) => setType(e.target.value)}
          className={`form-control mr-3 ${styles.type} ${styles.type__fix}`}
        >
          <option value="">All Job Type</option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
        </select>
        <select
          name="type"
          onChange={(e) => setPlacement(e.target.value)}
          className={`form-control ${styles.type} mr-3`}
        >
          <option value="">All Placement Type</option>
          <option value="Office">Office</option>
          <option value="Remote">Remote</option>
        </select>

        <button
          type="submit"
          className={`${styles.btn} ${styles.btn__danger} btn btn-light`}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default JobSearch;
