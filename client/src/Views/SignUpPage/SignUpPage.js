import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SignUp from "../../Components/SignUp/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <Navbar signup logo />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
