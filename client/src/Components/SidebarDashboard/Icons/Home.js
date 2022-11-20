import React from "react";
import styles from "./Icons.module.css";

const Home = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      viewBox="0 0 18 14"
      className={styles.image}
    >
      <path
        id="Icon_awesome-home"
        dataname="Icon awesome-home"
        d="M8.76,5.635,3,10.381V15.5a.5.5,0,0,0,.5.5L7,15.994a.5.5,0,0,0,.5-.5V12.5A.5.5,0,0,1,8,12h2a.5.5,0,0,1,.5.5v2.989a.5.5,0,0,0,.5.5l3.5.01a.5.5,0,0,0,.5-.5V10.377L9.238,5.635a.381.381,0,0,0-.478,0Zm9.1,3.226L15.248,6.707V2.378A.375.375,0,0,0,14.873,2h-1.75a.375.375,0,0,0-.375.375V4.647l-2.8-2.3a1.5,1.5,0,0,0-1.906,0L.135,8.861a.375.375,0,0,0-.05.528l.8.969a.375.375,0,0,0,.528.051L8.76,4.354a.381.381,0,0,1,.478,0l7.35,6.055a.375.375,0,0,0,.528-.05l.8-.969a.375.375,0,0,0-.053-.529Z"
        transform="translate(0.001 -2.003)"
        fill={active === true ? "#4797D9" : "#666"}
      />
    </svg>
  );
};

export default Home;
