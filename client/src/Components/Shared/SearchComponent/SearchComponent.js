import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchComponent.module.css";

const SearchComponent = ({ placeholder, research, thesis, action }) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    let check = await action(text);
    setLoading(true);
    if (check === true) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandeler}>
      <div className={`${styles.search__wrapper} pl-3`}>
        <AiOutlineSearch className="" />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
      <button
        type="submit"
        className={`${styles.btn} ${
          (research || thesis) && styles.btn__danger
        } btn btn-light`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

export default SearchComponent;
