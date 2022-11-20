import React from "react";
import styles from "./Icons.module.css";

const Thesis = ({ active }) => {
  return (
    <svg
      className={styles.image}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="14"
      viewBox="0 0 10 14"
    >
      <path
        id="Icon_awesome-file-archive"
        dataname="Icon awesome-file-archive"
        d="M9.818,2.871,7.268.191A.61.61,0,0,0,6.826,0H6.667V3.5H10V3.333A.671.671,0,0,0,9.818,2.871ZM3.344,9.188a.8.8,0,0,0-.844.738.8.8,0,0,0,.846.738.8.8,0,0,0,.844-.738A.8.8,0,0,0,3.344,9.188Zm2.49-5.469V0H4.177V.875H3.344V0H.625A.64.64,0,0,0,0,.656V13.344A.64.64,0,0,0,.625,14h8.75A.64.64,0,0,0,10,13.344V4.375H6.458A.643.643,0,0,1,5.833,3.719ZM2.5.875h.833V1.75H2.5Zm.841,10.5A1.416,1.416,0,0,1,2,9.655L2.51,7V6.125h.833V5.25H2.51V4.375h.833V3.5H2.51V2.625h.833V1.75h.833v.875H3.344V3.5h.833v.875H3.344V5.25h.833v.875H3.344V7h.576a.319.319,0,0,1,.307.265l.451,2.4a1.416,1.416,0,0,1-1.339,1.712Z"
        fill={active === true ? "#4797D9" : "#666"}
      />
    </svg>
  );
};

export default Thesis;
