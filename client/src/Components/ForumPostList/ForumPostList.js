import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../Actions/Forum.action";
import LoaderComponent from "../Shared/LoaderComponent/LoaderComponent";
import ForumPost from "./ForumPost/ForumPost";

const ForumPostList = ({ getPosts, data }) => {
  useEffect(() => {
    getPosts("", 0);
  }, []);
  return (
    <div className="pt-3">
      {data ? (
        data.map((post) => <ForumPost key={post.id} {...post} />)
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.forum.post,
});

export default connect(mapStateToProps, { getPosts })(ForumPostList);
