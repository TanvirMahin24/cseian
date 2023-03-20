import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAlumni } from "../../Actions/DashboardActions";
import { PostInForum } from "../PostInForum";
import styles from "./ForumSidebar.module.css";
import data from "./UserData/UserData";
import UserItem from "./UserItem/UserItem";

const ForumSidebar = ({ getAlumni, data }) => {
  useEffect(() => {
    if (!data) {
      getAlumni();
    }
  }, []);
  const [createPost, setCreatePost] = useState(false);
  return (
    <>
      {createPost && <PostInForum show={createPost} setShow={setCreatePost} />}
      <div className={`pt-4 ${styles.section}`}>
        <button
          className={`${styles.post__btn} btn btn-block btn-dark mb-5`}
          onClick={() => setCreatePost(true)}
        >
          Post In forum
        </button>
        <div className={styles.wrapper}>
          <span className={`${styles.title} d-block`}>Alumni</span>
          <div className="py-2">
            {data ? (
              data.map((user) => (
                <UserItem
                  key={user.id}
                  image={user.memberPicture}
                  name={user.memberName}
                  id={user.memberId}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.auth.alumni,
});
export default connect(mapStateToProps, { getAlumni })(ForumSidebar);
