import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dashboardSubCatSelect } from "../../../Actions/DashboardActions";
import {
  Directory,
  Home,
  Forum,
  Job,
  Mentoring,
  Research,
  Thesis,
  News,
  Profile,
  Logout,
} from "../Icons";
import blankImg from "../../../Assets/SignUpForm/defaultImg.png";
import styles from "./SidebarLinks.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../../Actions/AuthActions";
import { useHistory } from "react-router-dom";

const SidebarLinks = ({ dashboardSubCatSelect, selected, logout }) => {
  const historyObj = useHistory();
  useEffect(() => {
    const activeClass = () => {
      let path = window.location.href;
      path = path.split("/");
      if (path[path.length - 1] === "dashboard") {
        dashboardSubCatSelect("Home");
      } else if (
        path[path.length - 1] === "forum" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("Forum");
      } else if (
        path[path.length - 1] === "directory" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("Directory");
      } else if (
        path[path.length - 1] === "job" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("Job");
      } else if (
        path[path.length - 1] === "mentoring" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("Mentoring");
      } else if (
        path[path.length - 1] === "research" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("Research");
      } else if (
        path[path.length - 1] === "thesis" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("Thesis");
      } else if (
        path[path.length - 1] === "news" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("News");
      } else if (
        path[path.length - 1] === "profile" &&
        path[path.length - 2] === "dashboard"
      ) {
        dashboardSubCatSelect("Profile");
      }
    };
    activeClass();
  }, [dashboardSubCatSelect]);
  return (
    <div>
      <div className="text-center pb-3 d-block d-md-none">
        <img
          src={blankImg}
          alt=""
          className={`w-25 rounded-circle ${styles.img}`}
        />
        <span className="text-center d-block lead">Tanvir Mahin</span>
      </div>
      <div className={styles.wrapper}>
        {/* HOME LINK */}
        <Link
          to="/dashboard"
          className={`${styles.link} ${
            selected === "Home" ? styles.active : ""
          } pt-3`}
        >
          <Home active={selected === "Home" ? true : false} />
          HOME
        </Link>

        {/* FORUM LINK */}
        {/* <Link
          to="/dashboard/forum"
          className={`${styles.link} ${
            selected === "Forum" ? styles.active : ""
          } pt-3`}
        >
          <Forum active={selected === "Forum" ? true : false} />
          FORUM
        </Link> */}

        {/* DIRECTORY LINK */}
        <Link
          to="/dashboard/directory"
          className={`${styles.link} ${
            selected === "Directory" ? styles.active : ""
          } pt-3`}
        >
          <Directory active={selected === "Directory" ? true : false} />
          DIRECTORY
        </Link>

        {/* JOB LINK */}
        <Link
          to="/dashboard/jobs"
          className={`${styles.link} ${
            selected === "Job" ? styles.active : ""
          } pt-3`}
        >
          <Job active={selected === "Job" ? true : false} />
          JOB PORTAL
        </Link>
        {/* <Link
          to="/dashboard/job"
          className={`${styles.link} ${
            selected === "Job" ? styles.active : ""
          } pt-3`}
        >
          <Job active={selected === "Job" ? true : false} />
          JOB PORTAL
        </Link> */}

        {/* MENTORING LINK */}
        {/* <Link
          to="/dashboard/mentoring"
          className={`${styles.link} ${
            selected === "Mentoring" ? styles.active : ""
          } pt-3`}
        >
          <Mentoring active={selected === "Mentoring" ? true : false} />
          MENTORING
        </Link> */}

        {/* RESEARCH ARCHIVE LINK */}
        <Link
          to="/dashboard/research"
          className={`${styles.link} ${
            selected === "Research" ? styles.active : ""
          } pt-3`}
        >
          <Research active={selected === "Research" ? true : false} />
          RESEARCH ARCHIVE
        </Link>

        {/*THESIS ARCHIVE LINK */}
        {/* <Link
          to="/dashboard/thesis"
          className={`${styles.link} ${
            selected === "Thesis" ? styles.active : ""
          } pt-3`}
        >
          <Thesis active={selected === "Thesis" ? true : false} />
          THESIS ARCHIVE
        </Link> */}

        {/* NEWS LINK */}
        <Link
          to="/dashboard/news"
          className={`${styles.link} ${
            selected === "News" ? styles.active : ""
          } pt-3`}
        >
          <News active={selected === "News" ? true : false} />
          NEWS
        </Link>
      </div>
      <div className={`${styles.line} my-4`}></div>
      <div className={styles.wrapper}>
        {/* MY PROFILE LINK */}
        <Link
          to="/dashboard/profile"
          className={`${styles.link} ${
            selected === "Profile" ? styles.active : ""
          } pt-3`}
        >
          <Profile active={selected === "Profile" ? true : false} />
          MY PROFILE
        </Link>

        {/* LOGOUT LINK */}
        <span
          className={`${styles.link}  pt-3`}
          onClick={() => {
            logout();
            historyObj.push("/");
          }}
        >
          <Logout />
          LOGOUT
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  selected: state.pages.dashboard_category,
});

export default connect(mapStateToProps, { dashboardSubCatSelect, logout })(
  SidebarLinks
);
