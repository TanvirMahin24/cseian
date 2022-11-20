import React, { useState } from "react";
import styles from "./SidebarDashboard.module.css";
import SidebarLinks from "./SidebarLinks/SidebarLinks";
import { Toogle } from "./Toogle";

const SidebarDashboard = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={styles.toogle__icon}>
        <Toogle active={active} setActive={setActive} />
      </div>
      <div className={`${styles.section} ${!active && styles.active}`}>
        <div className={`${styles.wrapper} py-4 px-3`}>
          <SidebarLinks />
        </div>
      </div>
    </>
  );
};

export default SidebarDashboard;
