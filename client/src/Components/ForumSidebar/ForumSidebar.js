import React, { useState } from "react";
import { PostInForum } from "../PostInForum";
import styles from "./ForumSidebar.module.css";
import data from "./UserData/UserData";
import UserItem from "./UserItem/UserItem";

const ForumSidebar = () => {
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
          <span className={`${styles.title} d-block`}>Top Users</span>
          <div className="py-2">
            {data.top_user.map((user) => (
              <UserItem key={user.id} {...user} />
            ))}
          </div>
          <div className="pt-2">
            <div className="border-top mb-2"></div>
            <UserItem name="You" {...data.current_user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumSidebar;
