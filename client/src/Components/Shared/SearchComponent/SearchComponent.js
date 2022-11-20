import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchComponent.module.css";

const SearchComponent = ({ placeholder, research, thesis }) => {
  return (
    <form className={styles.form}>
      <div className={`${styles.search__wrapper} pl-3`}>
        <AiOutlineSearch className="" />
        <input type="text" placeholder={placeholder} className={styles.input} />
      </div>
      <button
        type="submit"
        className={`${styles.btn} ${
          (research || thesis) && styles.btn__danger
        } btn btn-light`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
