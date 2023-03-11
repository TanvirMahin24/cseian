import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getComments } from "../../Actions/Forum.action";
import PostComment from "./PostComment/PostComment";

const PostCommentList = ({ getComments, data, id, user }) => {
  useEffect(() => {
    getComments(id);
  }, []);
  return (
    <div className="pt-3">
      {data ? (
        data.map((post, i) => (
          <PostComment key={i} {...post} userId={user?.memberStudentId} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.forum.comment,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getComments })(PostCommentList);
