import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Login } from "../../Components/Login";
import { loginToken } from "../../Actions/AuthActions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const LoginPage = ({ isAuthenticated, loginToken }) => {
  useEffect(() => {
    const loginAdmin = () => {
      //console.log("USE EFFECT");
      if (localStorage.getItem("token") && !isAuthenticated) {
        //console.log("TIKEN IN");
        loginToken(localStorage.getItem("token"));
      }
    };
    loginAdmin();
  }, []);
  if (isAuthenticated) {
    return <Redirect to="dashboard" />;
  }
  return (
    <div>
      <Navbar logo login />
      <Login />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginToken })(LoginPage);
