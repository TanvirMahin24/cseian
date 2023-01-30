import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

const AuthRedirectHOC = ({ isAuthenticated, children }) => {
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, []);
  return <>{children}</>;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(AuthRedirectHOC);
