import React from "react";
import { Login } from "../../Components/Login";
import Navbar from "../../Components/Navbar/Navbar";
import AuthRedirectHOC from "../../Utils/AuthRedirectHOC/AuthRedirectHOC";

const LoginPage = () => {
  return (
    <AuthRedirectHOC>
      <Navbar logo login />
      <Login />
    </AuthRedirectHOC>
  );
};

export default LoginPage;
