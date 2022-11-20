import React from "react";
import styles from "./Icons.module.css";

const Directory = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="14"
      viewBox="0 0 11 14"
      className={styles.image}
    >
      <g
        id="Iconly_Bold_Paper"
        dataname="Iconly/Bold/Paper"
        transform="translate(-3.5 -2)"
      >
        <g id="Paper" transform="translate(3.5 2)">
          <path
            id="Paper_2"
            d="M7.011,12.073H10.5a.508.508,0,0,0,.481-.525.5.5,0,0,0-.481-.518H7.011a.5.5,0,0,0-.48.518A.508.508,0,0,0,7.011,12.073ZM9.176,7.53H7.011a.508.508,0,0,0-.48.525.5.5,0,0,0,.48.518H9.176a.5.5,0,0,0,.481-.518A.508.508,0,0,0,9.176,7.53Zm4.572-.612c.151,0,.315,0,.464,0a.3.3,0,0,1,.288.315v5.628A3.018,3.018,0,0,1,11.624,16h-5.1A3.173,3.173,0,0,1,3.5,12.7V5.157A3.037,3.037,0,0,1,6.389,2H9.81a.309.309,0,0,1,.295.322V4.576a2.263,2.263,0,0,0,2.14,2.338c.274,0,.515,0,.727,0l.439,0ZM13.925,5.9c-.527,0-1.147,0-1.594,0a1.363,1.363,0,0,1-1.292-1.412V2.634a.3.3,0,0,1,.527-.234l1.3,1.474,1.282,1.456A.338.338,0,0,1,13.925,5.9Z"
            transform="translate(-3.5 -2)"
            fill={active === true ? "#4797D9" : "#666"}
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
};

export default Directory;
