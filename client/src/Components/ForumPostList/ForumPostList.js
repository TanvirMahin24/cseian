import React from "react";
import data from "./ForumData/ForumData";
import ForumPost from "./ForumPost/ForumPost";

const ForumPostList = () => {
  return (
    <div className="pt-3">
      {data.map((post) => (
        <ForumPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ForumPostList;
