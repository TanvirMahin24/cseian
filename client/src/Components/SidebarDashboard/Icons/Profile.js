import React from "react";
import styles from "./Icons.module.css";

const Profile = ({ active }) => {
  return (
    <svg
      className={styles.image}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      viewBox="0 0 14 18"
    >
      <g
        id="Iconly_Bold_Profile"
        dataname="Iconly/Bold/Profile"
        transform="translate(-4 -2)"
      >
        <g id="Profile" transform="translate(4 2)">
          <path
            id="Profile_2"
            d="M15.632,6.762a4.634,4.634,0,1,1-9.264,0,4.634,4.634,0,1,1,9.264,0ZM11,20c-3.8,0-7-.635-7-3.082s3.225-3.061,7-3.061c3.8,0,7,.634,7,3.083S14.775,20,11,20Z"
            transform="translate(-4 -2)"
            fill={active === true ? "#4797D9" : "#666"}
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
};

export default Profile;
