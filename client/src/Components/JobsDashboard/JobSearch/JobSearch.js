import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./JobSearch.module.css";

const JobSearch = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [company, setCompany] = useState("all");

  const submitHandeler = (e) => {
    e.preventDefault();
    const data = { search, type, company };
    console.log(data);
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
          <option value="all">All Type</option>
          <option value="fulltime">Full Time</option>
          <option value="parttime">Part Time</option>
        </select>
        <select
          name="type"
          onChange={(e) => setCompany(e.target.value)}
          className={`form-control ${styles.type} mr-3`}
        >
          <option value="all">All Company</option>
          <option value="quebitech">Quebitech</option>
          <option value="robi">Robi</option>
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
