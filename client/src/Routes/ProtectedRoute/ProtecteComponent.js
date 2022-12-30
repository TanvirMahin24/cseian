import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ProtecteComponent = ({ auth, children }) => {
  useEffect(() => {
    if (auth !== true) {
      <Redirect from="*" to="/404" />;
    }
  }, [auth]);
  return <>{auth ? children : <Redirect to="/login" />}</>;
};
const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(ProtecteComponent);
