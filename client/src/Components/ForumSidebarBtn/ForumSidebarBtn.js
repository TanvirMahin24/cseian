import React, { useState } from "react";
import { PostInForum } from "../PostInForum";
import styles from "./ForumSidebarBtn.module.css";

const ForumSidebarBtn = () => {
  const [createPost, setCreatePost] = useState(false);
  return (
    <div className={styles.wrapper}>
      {createPost && <PostInForum show={createPost} setShow={setCreatePost} />}
      <button
        className={`${styles.post__btn} btn btn-block btn-dark mb-2`}
        onClick={() => setCreatePost(true)}
      >
        Post In forum
      </button>
    </div>
  );
};

export default ForumSidebarBtn;
