import React from "react";
import styles from "./Icons.module.css";

const News = ({ active }) => {
  return (
    <svg
      className={styles.image}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <g
        id="Iconly_Bold_Chart"
        dataname="Iconly/Bold/Chart"
        transform="translate(-2 -2)"
      >
        <g id="Chart" transform="translate(2 2)">
          <path
            id="Chart_2"
            d="M5.731,2h6.537A3.391,3.391,0,0,1,16,5.731v6.538A3.388,3.388,0,0,1,12.269,16H5.731A3.388,3.388,0,0,1,2,12.269V5.731A3.388,3.388,0,0,1,5.731,2Zm3.3,11.1a.579.579,0,0,0,.581-.525V5.444a.571.571,0,0,0-.265-.553.588.588,0,0,0-.9.553v7.133A.59.59,0,0,0,9.035,13.1Zm3.221,0a.59.59,0,0,0,.581-.525v-2.3a.587.587,0,0,0-.9-.553.564.564,0,0,0-.266.553v2.3A.579.579,0,0,0,12.255,13.1Zm-5.9-.525a.584.584,0,0,1-1.161,0V7.74a.589.589,0,0,1,.273-.553.576.576,0,0,1,.616,0,.589.589,0,0,1,.272.553Z"
            transform="translate(-2 -2)"
            fill={active === true ? "#4797D9" : "#666"}
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
};

export default News;
