import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Verify from "../../Components/Verify/Verify";
import AuthRedirectHOC from "../../Utils/AuthRedirectHOC/AuthRedirectHOC";

const VerifyPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <AuthRedirectHOC>
      <Navbar logo login />
      <Verify id={id} />
    </AuthRedirectHOC>
  );
};

export default VerifyPage;
